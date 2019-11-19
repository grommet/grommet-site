import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/App';
import html from './html';

const app = Express();
const sheet = new ServerStyleSheet();

app.get('/', (req, res) => {
  const body = renderToString(
    sheet.collectStyles(<App initialPath={req.path} />),
  );
  const styles = sheet.getStyleTags();
  const htmlString = html({ body, styles });
  res.send(htmlString);
});

app.listen('3000', () => {
  console.log('🛸 Grommet Site SSR listening on port 3000 🛸');
});
