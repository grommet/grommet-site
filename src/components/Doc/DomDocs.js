import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paragraph, Anchor, Heading } from 'grommet';

export const DomDocs = ({ name, intrinsicElement }) => {
  return (
    <Box>
      <Heading level={2} margin="none">
        React/DOM Properties
      </Heading>
      <Paragraph>
        At its core, the {name} component is a regular {intrinsicElement}{' '}
        element. Thus, both the DOM&apos;s and React&apos;s properties, methods,
        and events are accessible. To read up on all of the possible DOM
        attributes and types available for {intrinsicElement} elements, check
        out this{' '}
        <Anchor
          href={`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${intrinsicElement}`}
          label="MDN Web Documents page"
          target="_blank"
        />
        . To learn more about DOM events and methods, you can read more{' '}
        <Anchor
          href="https://developer.mozilla.org/en-US/docs/Web/Events"
          label="here"
          target="_blank"
        />
        .
      </Paragraph>

      <ReactDocs />
    </Box>
  );
};

const ReactDocs = () => {
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

DomDocs.propTypes = {
  name: PropTypes.string,
  intrinsicElement: PropTypes.string,
};

DomDocs.defaultProps = {
  name: undefined,
  intrinsicElement: undefined,
};
