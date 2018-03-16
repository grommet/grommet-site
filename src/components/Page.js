import React from 'react';
import { Box } from 'grommet';
import Nav from '../components/Nav';

export default ({ children, ...rest }) => (
  <Box
    direction='row'
    justify='center'
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    {...rest}
  >
    <Box basis='xlarge'>
      <Box margin={{ bottom: 'xlarge' }}>
        <Nav />
      </Box>
      {children}
    </Box>
  </Box>
);
