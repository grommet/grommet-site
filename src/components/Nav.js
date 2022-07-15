import React from 'react';
import { Box, Text, ResponsiveContext, Button } from 'grommet';
import { Grommet as GrommetIcon, Hpe as HpeIcon } from 'grommet-icons';
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
      <Box
        direction="column"
        justify="between"
        align="start"
        alignSelf="center"
        width="medium"
      >
        <RoutedAnchor
          path="/"
          icon={<GrommetIcon size="large" />}
          label={size !== 'small' && <Text size="xlarge">grommet</Text>}
        />
        {themeName === 'grommet' && <Text size="small">for open source</Text>}
        {themeName === 'hpe' && <Text size="small">for HPE</Text>}
      </Box>

      <Box direction="row" gap="small">
        {!searchOpen && (
          <Box direction="row" gap="small">
            <Button
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
                  direction="row"
                  gap="xsmall"
                >
                  <Text>
                    {themeName === 'hpe'
                      ? 'use for open source'
                      : 'use for HPE'}
                  </Text>
                  {themeName === 'grommet' && (
                    <HpeIcon color="#01A982" size="medium" />
                  )}
                </Box>
              )}
            </Button>
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
          </Box>
        )}
        <Search open={searchOpen} setOpen={(value) => setSearchOpen(value)} />
      </Box>
    </Box>
  );
};

export default Nav;
