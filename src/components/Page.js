import React from 'react';
import { Box } from 'grommet';
import Nav from './Nav';

// eslint-disable-next-line react/prop-types
export default ({ children, ...rest }) => (
  <Box pad={{ horizontal: 'large', vertical: 'large' }} {...rest}>
    <Box>
      <Nav />
      <Box margin={{ top: 'large' }}>{children}</Box>
    </Box>
  </Box>
);
