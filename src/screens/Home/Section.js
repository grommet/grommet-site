import React from 'react';
import PropTypes from 'prop-types';
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

Section.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

Section.defaultProps = {
  width: 'xlarge',
};

export default Section;
