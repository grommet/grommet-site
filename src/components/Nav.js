import React, { useContext } from 'react';
import { Box, Text, ResponsiveContext } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';
import Search from './Search';

const Nav = () => {
  const size = useContext(ResponsiveContext);
  const [searchOpen, setSearchOpen] = React.useState(false);

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
        icon={<GrommetIcon size="large" color="plain" />}
        label={size !== 'small' && <Text size="xlarge">grommet</Text>}
      />
      <Box direction="row" gap="small" align="center">
        {!searchOpen && (
          <Box direction="row" gap="small" align="center">
            <RoutedButton path="/docs" label="docs" hoverIndicator />
            <RoutedButton
              path="/components"
              label="components"
              primary
              hoverIndicator
            />
          </Box>
        )}
        <Search open={searchOpen} setOpen={(value) => setSearchOpen(value)} />
      </Box>
    </Box>
  );
};

export default Nav;
