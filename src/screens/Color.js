import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'grommet';

import Page from '../components/Page';
import Doc from '../components/Doc';

const Cell = ({ name, value }) => (
  <Box basis='small' margin={{ bottom: 'medium' }}>
    <Box pad='medium' background={name} />
    <Text><strong>{name}</strong></Text>
    <Text>{value}</Text>
  </Box>
);

const Color = (props, { theme }) => (
  <Page>
    <Doc name='Color'>
      <Box gap='large'>
        <Box direction='row' wrap={true} gap='medium'>
          <Cell name='brand' value={theme.global.colors.brand} />
        </Box>
        <Box direction='row' wrap={true} gap='medium'>
          {theme.global.colors.accent.map((color, index) => (
            <Cell key={color} name={`accent-${index + 1}`} value={color} />
          ))}
        </Box>
        <Box direction='row' wrap={true} gap='medium'>
          {theme.global.colors.neutral.map((color, index) => (
            <Cell key={color} name={`neutral-${index + 1}`} value={color} />
          ))}
        </Box>
        <Box direction='row' wrap={true} gap='medium'>
          {Object.keys(theme.global.colors.status).map(name => (
            <Cell
              key={name}
              name={`status-${name}`}
              value={theme.global.colors.status[name]}
            />
          ))}
        </Box>
      </Box>
    </Doc>
  </Page>
);

Color.contextTypes = {
  theme: PropTypes.object,
};

export default Color;
