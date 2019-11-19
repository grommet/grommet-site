import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import html from './html';

const app = Express();

app.get('/', (req, res) => {
  const body = renderToString(<App initialPath={req.path} />);
  const htmlString = html({ body });
  res.send(htmlString);
});

app.listen('3000', () => {
  console.log('🛸 Grommet Site SSR listening on port 3000 🛸');
});
