import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph } from 'grommet';

const Header = ({ label, level, summary }) => (
  <Box align='center' margin={{ horizontal: 'large' }}>
    <Heading level={level} size='xlarge' textAlign='center' margin='none'>
      {label}
    </Heading>
    {summary && (
      <Paragraph size='xxlarge' textAlign='center'>
        {summary}
      </Paragraph>
    )}
  </Box>
);

Header.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.number,
  summary: PropTypes.node,
};

Header.defaultProps = {
  level: 1,
  summary: undefined,
};

export default Header;
