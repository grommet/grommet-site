import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Heading } from 'grommet';

const Section = ({ children, index, name }) => (
  <Box
    pad={{ vertical: 'medium' }}
    animation={[
      { type: 'zoomIn', duration: 500, delay: 100 + 100 * index },
      { type: 'fadeIn', duration: 500, delay: 100 * index },
    ]}
  >
    <Heading level={2} margin={{ top: 'none', horizontal: 'small' }}>
      {name}
    </Heading>
    {Grid.available ? (
      <Grid
        columns={{ count: 'fit', size: 'medium' }}
        rows="small"
        gap={{ row: 'medium' }}
      >
        {children}
      </Grid>
    ) : (
      <Box direction="row" wrap>
        {React.Children.map(children, child => (
          <Box basis="medium" pad="small">
            <Box basis="small">{child}</Box>
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Section;
