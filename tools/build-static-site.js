import React from 'react';
import Helmet from 'react-helmet';
import path from 'path';
import cheerio from 'cheerio';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/App';
import html from './renderHtml';

const publicPath = path.resolve(__dirname, '..', 'dist');

// The production JS bundle must be created before
// the static HTML files.
if (!fs.existsSync(publicPath)) {
  throw new Error(
    `No distribution folder detected. Run 'yarn build' first to create the site bundle.`,
  );
}

// Grab Webpack's manifest to determine the latest JS bundle hash.
const manifest = require(`${publicPath}/webpack-manifest.json`); // eslint-disable-line import/no-dynamic-require

// Render a React output as string and dynamically inject
// to an HTML string which a browser can consume.
const renderHtmlString = pagePath => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(<App initialPath={pagePath} />),
  );
  const helmet = Helmet.renderStatic();
  const styles = `${sheet.getStyleTags()}<style>body { margin: 0; }</style>`;
  const scripts = [manifest['main.js'], manifest['vendors~main.js']];
  const htmlString = html({ body, styles, scripts, helmet });
  return htmlString;
};

const linksToVisit = [];
const linksVisited = [];
// Our page crawling queue uses a simple boolean to it's done
// TODO: refactor to more elegant queue.
let isDone = false;

// Check if the page crawler has already visited a page.
const hasVisited = link => {
  const linkVisited = linksVisited.find(item => item === link);
  return typeof linkVisited === 'string';
};

// Remove hash links from URLs i.e. `/box#overflow` => `/box`
const stripHash = link => {
  const hashIndex = link.indexOf('#');
  if (hashIndex === -1) {
    return link;
  }
  const linkWithoutHash = link.substring(0, hashIndex);

  return linkWithoutHash;
};

// Crawl a path in our React app to discover app pages
function crawlForLinks(pagePath, done) {
  linksVisited.push(pagePath);
  const renderHtml = renderHtmlString(pagePath);
  // Initiate our page in cheerio, a light-weight jQuery-like library.
  const $ = cheerio.load(renderHtml);
  // Use cheerio to find all of the links on the pagePath
  const links = $('a');

  $(links).each((i, link) => {
    const linkHref = $(link).attr('href');
    // If the crawled link points to our app add it
    // to the queue to be crawled.
    if (
      linkHref &&
      typeof linkHref === 'string' &&
      linkHref.charAt(0) === '/' &&
      linkHref.charAt(1) !== '/'
    ) {
      // Avoid queue duplicates and performance bottlenecks.
      const linkHrefWithoutHash = stripHash(linkHref);
      if (!hasVisited(linkHrefWithoutHash)) {
        linksToVisit.push(linkHrefWithoutHash);
      }
    }
  });

  linksToVisit.forEach(link => {
    if (!hasVisited(link)) {
      console.log('queueing', link);
      // Use recursion to dig deeper into the app.
      crawlForLinks(link, done);
    }
  });
  if (!isDone) {
    done();
  }
}

const generateHtmlPages = () => {
  // TODO: Improve page link queueing
  isDone = true;
  // Dedupe the array just in case.
  const siteLinks = [...new Set(linksVisited)];

  siteLinks.forEach(page => {
    const fileName = `${page.replace('/', '')}.html`;
    const filePath = path.resolve(
      publicPath,
      // handle the '.html' edge case for the index file.
      fileName !== '.html' ? fileName : 'index.html',
    );
    // Create the new file
    const stream = fs.createWriteStream(filePath);
    // TODO: improve perf by only rendering to string
    // a single time.
    const pageHtml = renderHtmlString(page);

    console.log('Creating page: ', filePath);
    stream.once('open', () => {
      // Add our HTML string to the file.
      stream.end(pageHtml);
    });
  });
};

// Use our '/' path as the base to start crawling from.
crawlForLinks('/', generateHtmlPages);
