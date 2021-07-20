import React from 'react';
import PropTypes from 'prop-types';
import { Markdown, Paragraph } from 'grommet';

export const Description = ({ children, disableMarkdown }) => {
  return (
    <Paragraph margin={{ bottom: 'small', top: 'none' }}>
      {disableMarkdown ? children : <Markdown>{children}</Markdown>}
    </Paragraph>
  );
};
Description.displayName = 'Description';

Description.propTypes = {
  children: PropTypes.node,
  disableMarkdown: PropTypes.bool,
};

Description.defaultProps = {
  children: undefined,
  disableMarkdown: false,
};
