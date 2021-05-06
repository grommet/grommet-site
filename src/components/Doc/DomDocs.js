import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Anchor } from 'grommet';

export const DomDocs = ({ name, intrinsicElement }) => {
  return (
    <Paragraph>
      At its core, the {name} component is a regular {intrinsicElement} element.
      Thus, both the DOM&apos;s and React&apos;s properties, methods, and events
      are accessible. To read up on all of the possible DOM attributes and types
      available for {intrinsicElement} elements, check out this{' '}
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
