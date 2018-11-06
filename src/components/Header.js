import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph } from 'grommet';

const Header = ({ label, level, size, summary }) => (
  <Box align="center" margin={{ horizontal: 'large' }}>
    <Heading level={level} size={size} textAlign="center" margin="none">
      {label}
    </Heading>
    {summary && (
      <Paragraph size="xxlarge" textAlign="center">
        {summary}
      </Paragraph>
    )}
  </Box>
);

Header.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.number,
  size: PropTypes.oneOf(['xlarge', 'large']),
  summary: PropTypes.node,
};

Header.defaultProps = {
  level: 1,
  size: 'large',
  summary: undefined,
};

export default Header;
