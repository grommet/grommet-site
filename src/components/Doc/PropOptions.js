import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

export const PropOptions = ({ children, prop }) => {
  return (
    <Box margin={{ top: 'small' }}>
      <Text color="dark-3">{`where ${prop} could be:`}</Text>
      <Box margin={{ left: 'medium' }}>{children}</Box>
    </Box>
  );
};

PropOptions.displayName = 'PropOptions';

PropOptions.propTypes = {
  children: PropTypes.node,
  prop: PropTypes.string,
};

PropOptions.defaultProps = {
  children: undefined,
  prop: undefined,
};
