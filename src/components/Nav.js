import React from 'react';
import { Box, Text, ResponsiveContext } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';
import Search from './Search';

export default () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      width="xlarge"
      alignSelf="center"
      gap="medium"
    >
      <RoutedAnchor
        path="/"
        icon={<GrommetIcon size="large" />}
        label={size !== 'small' && <Text size="xlarge">grommet</Text>}
      />
      <Search />
      <RoutedButton path="/components" plain>
        <Box
          pad={{ vertical: 'small', horizontal: 'medium' }}
          round="xlarge"
          background="accent-1"
        >
          <Text>components</Text>
        </Box>
      </RoutedButton>
    </Box>
  );
};
