import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src';
import Html from './Html';

const app = Express();

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen('3000', () => {
  console.log('🛸 Grommet Site SSR listening on port 3000 🛸');
});
