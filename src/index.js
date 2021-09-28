import React from 'react';
import ReactDOM from 'react-dom';

// the following polyfills are included for IE11 compatibility
import 'core-js/features/string/starts-with'; // used by react-router
import 'core-js/features/string/ends-with'; // used by components/Doc/ThemeProps

import App from './App';

/* global navigator */

const { NODE_ENV: env } = process.env;

if (env === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

const element = document.getElementById('content');

// ReactDOM's hydrate method is used when html is already present on the page.
// https://reactjs.org/docs/react-dom.html#hydrate
if (env === 'production') {
  ReactDOM.hydrate(<App />, element);
} else {
  ReactDOM.render(<App />, element);
}

document.body.classList.remove('loading');
