import Express from 'express';
import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/App';
import html from './html';

const app = Express();
const manifest = require('../dist/webpack-manifest.json');

app.use(Express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(<App initialPath={req.path} />),
  );
  const styles = sheet.getStyleTags();
  const scripts = [manifest['main.js'], manifest['vendors~main.js']];
  const htmlString = html({ body, styles, scripts });
  res.send(htmlString);
});

app.listen('3000', () => {
  console.log('🛸 Grommet Site SSR listening on port 3000 🛸');
});
