import React from 'react';
import { Box } from 'grommet';

const Section = ({ children, width, ...rest }) => (
  <Box
    align="center"
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    {...rest}
  >
    <Box width={width}>{children}</Box>
  </Box>
);

Section.defaultProps = {
  width: 'xlarge',
};

export default Section;
