import React from 'react';
import { Paragraph, Anchor } from 'grommet';

export const ReactDocs = () => {
  return (
    <Paragraph>
      Feel free to read on the{' '}
      <Anchor
        href="https://reactjs.org/docs/handling-events.html"
        label="types of React events available"
        target="_blank"
      />
      , or see how DOM attributes change in React{' '}
      <Anchor
        href="https://reactjs.org/docs/dom-elements.html"
        label="here"
        target="_blank"
      />
      .
    </Paragraph>
  );
};
