import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paragraph, Anchor, Heading } from 'grommet';
import { Link as LinkIcon } from 'grommet-icons';

export const DomProps = ({ name, intrinsicElement }) => {
  return (
    <Box
      id="dom-react"
      margin={{ vertical: 'large' }}
      border={{ side: 'top', size: 'medium', color: 'brand' }}
    >
      <Box
        direction="row"
        justify="between"
        align="center"
        margin={{ top: 'medium', bottom: 'xlarge' }}
      >
        <Heading level={2} margin="none">
          React/DOM Properties
        </Heading>
        <Anchor href="#dom-react" icon={<LinkIcon color="light-4" />} />
      </Box>
      <Paragraph>
        At its core, the {name} component is a regular {`<${intrinsicElement}>`}{' '}
        element. Thus, both DOM and React properties, methods, and events are
        accessible. To read up on all of the possible DOM attributes and types
        available for {intrinsicElement} elements, check out this{' '}
        <Anchor
          href={`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${intrinsicElement}`}
          label="MDN Web Documents page."
          target="_blank"
        />{' '}
        To learn more about DOM events and methods, you can read more on the{' '}
        <Anchor
          href="https://developer.mozilla.org/en-US/docs/Web/Events"
          label="MDN Web Events documentation page"
          target="_blank"
        />
        .
      </Paragraph>
      <ReactDocs />
    </Box>
  );
};

const ReactDocs = () => (
  <Paragraph>
    Also, feel free to read about the{' '}
    <Anchor
      href="https://reactjs.org/docs/handling-events.html"
      label="types of React events available"
      target="_blank"
    />
    , or see{' '}
    <Anchor
      href="https://reactjs.org/docs/dom-elements.html"
      label="how DOM attributes change in React."
      target="_blank"
    />{' '}
    Working in tandem with Styled Components, you also have access to the{' '}
    <Anchor
      href="https://styled-components.com/docs/api#as-polymorphic-prop"
      label="as property."
      target="_blank"
    />
  </Paragraph>
);

DomProps.propTypes = {
  name: PropTypes.string,
  intrinsicElement: PropTypes.string,
};

DomProps.defaultProps = {
  name: undefined,
  intrinsicElement: undefined,
};
