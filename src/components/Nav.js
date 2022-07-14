import React from 'react';
import { Box, Text, ResponsiveContext, Button } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';
import Search from './Search';
import { ThemeSwitchContext } from './ThemeSwitchContext';

const Nav = () => {
  const size = React.useContext(ResponsiveContext);
  const { themeName, setThemeName } = React.useContext(ThemeSwitchContext);
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
        icon={<GrommetIcon size="large" />}
        label={size !== 'small' && <Text size="xlarge">grommet</Text>}
      />
      <Box direction="row" gap="small">
        {!searchOpen && (
          <Box direction="row" gap="small">
            <RoutedButton path="/docs" plain>
              {({ hover }) => (
                <Box
                  pad={{ vertical: 'small', horizontal: 'medium' }}
                  round="xlarge"
                  background={hover ? 'active' : 'accent-4'}
                >
                  <Text>docs</Text>
                </Box>
              )}
            </RoutedButton>
            <RoutedButton path="/components" plain>
              {({ hover }) => (
                <Box
                  pad={{ vertical: 'small', horizontal: 'medium' }}
                  round="xlarge"
                  background={hover ? 'active' : 'control'}
                >
                  <Text>components</Text>
                </Box>
              )}
            </RoutedButton>
            <Button
              alignSelf="start"
              plain
              onClick={() => {
                if (themeName === 'hpe') {
                  setThemeName('grommet');
                } else {
                  setThemeName('hpe');
                }
              }}
            >
              {({ hover }) => (
                <Box
                  pad={{ vertical: 'small', horizontal: 'small' }}
                  round="xlarge"
                  background={hover ? 'active' : undefined}
                >
                  {themeName === 'hpe' ? 'Use for Open Source' : 'Use for HPE'}
                </Box>
              )}
            </Button>
          </Box>
        )}
        <Search open={searchOpen} setOpen={(value) => setSearchOpen(value)} />
      </Box>
    </Box>
  );
};

export default Nav;
