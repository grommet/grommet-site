import React from 'react';

// React Monaco Editor has a SSR Babel bug
// link: https://github.com/react-monaco-editor/react-monaco-editor/issues/133
const isWindow = typeof window !== 'undefined';
const ReactMonacoEditor = isWindow
  ? require('react-monaco-editor').default
  : undefined;

const MonacoEditor = props =>
  ReactMonacoEditor ? <ReactMonacoEditor {...props} /> : undefined; // eslint-disable-line react/jsx-props-no-spreading

export default MonacoEditor;
