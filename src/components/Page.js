import React from 'react';
import { Box } from 'grommet';
import Nav from '../components/Nav';

export default ({ children, ...rest }) => (
  <Box
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    direction='row'
    justify='center'
    {...rest}
  >
    <Box basis='xlarge'>
      <Nav gridArea='header' />
      <Box gridArea='content'>{children}</Box>
    </Box>
  </Box>
);
