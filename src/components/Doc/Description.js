import React from 'react';
import PropTypes from 'prop-types';
import { Markdown, Paragraph } from 'grommet';

export const Description = ({ children }) => {
  return (
    <Paragraph margin={{ bottom: 'small', top: 'none' }}>
      <Markdown>{children}</Markdown>
    </Paragraph>
  );
};
Description.displayName = 'Description';

Description.propTypes = {
  children: PropTypes.node,
};

Description.defaultProps = {
  children: undefined,
};
