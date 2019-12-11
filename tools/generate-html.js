const Crawler = require('crawler');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:3000';
const pages = [];
const linksVisited = [];

const crawler = new Crawler({
  maxConnections: 100,
  // This will be called for each crawled page
  callback: (error, res, done) => {
    if (error) {
      console.log(error);
    } else {
      const { $ } = res;
      // $ is Cheerio by default
      // a lean implementation of core jQuery designed specifically for the server
      const links = $('a');
      const linksToVisit = [];
      linksVisited.push(res.options.uri);

      $(links).each((i, link) => {
        const linkHref = $(link).attr('href');
        if (
          linkHref &&
          typeof linkHref === 'string' &&
          linkHref.charAt(0) === '/' &&
          linkHref.charAt(1) !== '/'
        ) {
          const pageUrl = `${baseUrl}${linkHref}`;
          const hasVisited = linksVisited.find(item => item === pageUrl);

          // type cast hasVisited string to boolean.
          if (!hasVisited === true) {
            linksToVisit.push(pageUrl);
          }
        }
      });
      crawler.queue(linksToVisit);
    }
    done();
  },
});

const htmlCreator = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: (error, res, done) => {
    if (error) {
      console.log(error);
    } else {
      const { $ } = res;
      // $ is Cheerio by default
      // a lean implementation of core jQuery designed specifically for the server
      const webPath = res.options.uri.replace(baseUrl, '');
      const fileName = `${webPath.replace('/', '')}.html`;
      pages.push({
        title: $('title').text(),
        path: webPath,
        html: res.body,
        fileName: fileName !== '.html' ? fileName : 'index.html',
      });
    }
    done();
  },
});

crawler.queue(`${baseUrl}/`);
crawler.on('drain', () => {
  // Crawls runes in parallel, we have to dedupe the crawl data
  // before making html pages.
  const siteLinks = [...new Set(linksVisited)];
  console.log('im done', siteLinks);
  htmlCreator.queue(siteLinks);
});

htmlCreator.on('drain', () => {
  console.log(pages);
  pages.forEach(page => {
    const fileName = path.resolve(__dirname, '..', 'dist', page.fileName);
    const stream = fs.createWriteStream(fileName);

    stream.once('open', () => {
      const { html } = page;

      stream.end(html);
    });
  });
});
