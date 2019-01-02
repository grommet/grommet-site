import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph } from 'grommet';

const Tile = ({ children, name, summary, ...rest }) => (
  <Box basis="medium" align="center" margin="large">
    <Box height="small" align="center" justify="center" {...rest}>
      {children}
    </Box>
    <Box width="medium" margin={{ top: 'large' }}>
      <Heading level={3} size="xlarge" textAlign="center" margin="none">
        {name}
      </Heading>
      <Paragraph size="xlarge" textAlign="center">
        {summary}
      </Paragraph>
    </Box>
  </Box>
);

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.node.isRequired,
};

export default Tile;
