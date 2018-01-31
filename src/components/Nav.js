import React from 'react';

import { Box, Text, RoutedAnchor } from 'grommet';
import { Radial as GrommetIcon } from 'grommet-icons';

const NavAnchor = ({ path, label }) => (
  <Box pad={{ horizontal: 'small' }}>
    <RoutedAnchor path={path} label={label} />
  </Box>
);

export default () => (
  <Box direction='row' justify='between' align='center'>
    <RoutedAnchor path='/'>
      <Box direction='row' align='center'>
        <GrommetIcon color='brand' />
        <Box margin={{ horizontal: 'small' }}>
          <Text>grommet</Text>
        </Box>
      </Box>
    </RoutedAnchor>
    <Box direction='row' align='center'>
      <NavAnchor path='/examples' label='see' />
      <NavAnchor path='/theme' label='try' />
      <NavAnchor path='/start' label='use' />
      <NavAnchor path='/components' label='read' />
      <NavAnchor path='/feed' label='more' />
    </Box>
  </Box>
);
