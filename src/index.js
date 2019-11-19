import React from 'react';
import ReactDOM from 'react-dom';

// the following polyfills are included for IE11 compatibility
import 'core-js/features/string/starts-with'; // used by react-router
import 'core-js/features/string/ends-with'; // used by components/Doc/ThemeProps

import App from './App';

if (typeof window !== 'undefined') {
  const OfflinePluginRuntime = require('offline-plugin/runtime'); // eslint-disable-line global-require
  OfflinePluginRuntime.install();
}

const element = document.getElementById('content');
ReactDOM.render(<App />, element);

document.body.classList.remove('loading');
