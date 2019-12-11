import React from 'react';
import Helmet from 'react-helmet';
import path from 'path';
import cheerio from 'cheerio';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/App';
import html from './html';

const publicPath = path.resolve(__dirname, '..', 'dist');

if (!fs.existsSync(publicPath)) {
  throw new Error(
    `No distribution folder detected. Run 'yarn build' first to create the site bundle.`,
  );
}

const manifest = require(`${publicPath}/webpack-manifest.json`); // eslint-disable-line import/no-dynamic-require
const linksToVisit = [];
const linksVisited = [];
let isDone = false;

const hasVisited = link => {
  const linkVisited = linksVisited.find(item => item === link);
  return typeof linkVisited === 'string';
};

const renderHtmlString = pagePath => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(<App initialPath={pagePath} />),
  );
  const helmet = Helmet.renderStatic();
  const styles = sheet.getStyleTags();
  const scripts = [manifest['main.js'], manifest['vendors~main.js']];
  const htmlString = html({ body, styles, scripts, helmet });
  return htmlString;
};

function crawlForLinks(pagePath, done) {
  linksVisited.push(pagePath);
  const renderHtml = renderHtmlString(pagePath);
  const $ = cheerio.load(renderHtml);
  const links = $('a');

  $(links).each((i, link) => {
    const linkHref = $(link).attr('href');
    if (
      linkHref &&
      typeof linkHref === 'string' &&
      linkHref.charAt(0) === '/' &&
      linkHref.charAt(1) !== '/'
    ) {
      if (!hasVisited(linkHref)) {
        linksToVisit.push(linkHref);
      }
    }
  });

  linksToVisit.forEach(link => {
    if (!hasVisited(link)) {
      console.log('queueing', link);
      crawlForLinks(link, done);
    }
  });
  if (!isDone) {
    done();
  }
}

crawlForLinks('/', () => {
  isDone = true;
  // dedupe just in case
  const siteLinks = [...new Set(linksVisited)];

  siteLinks.forEach(page => {
    const fileName = `${page.replace('/', '')}.html`;
    const filePath = path.resolve(
      __dirname,
      '..',
      'dist',
      fileName !== '.html' ? fileName : 'index.html',
    );
    const stream = fs.createWriteStream(filePath);
    const pageHtml = renderHtmlString(page);

    console.log('Creating page: ', filePath);
    stream.once('open', () => {
      stream.end(pageHtml);
    });
  });
});
