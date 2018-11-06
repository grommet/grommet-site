import React from 'react';
import { Box } from 'grommet';

const Section = ({ children, ...rest }) => (
  <Box
    align='center'
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    {...rest}
  >
    <Box width='xlarge'>
      {children}
    </Box>
  </Box>
);

export default Section;
