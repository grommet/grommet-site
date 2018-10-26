import React from 'react';
import { Box } from 'grommet';
import Nav from './Nav';

export default ({ children, ...rest }) => (
  <Box
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    align='center'
    {...rest}
  >
    <Box width='xlarge'>
      <Nav />
      <Box margin={{ top: 'large' }}>
        {children}
      </Box>
    </Box>
  </Box>
);
