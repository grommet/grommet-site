import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const ExampleGroup = ({ children }) => {
  return <Box margin={{ bottom: 'small' }}>{children}</Box>;
};
ExampleGroup.displayName = 'ExampleGroup';

ExampleGroup.propTypes = {
  children: PropTypes.node,
};

ExampleGroup.defaultProps = {
  children: undefined,
};
