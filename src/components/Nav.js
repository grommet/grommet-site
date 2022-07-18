import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box, Text, ResponsiveContext, Button, Menu } from 'grommet';
import {
  Grommet as GrommetIcon,
  Hpe as HpeIcon,
  More as MoreIcon,
} from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';
import Search from './Search';
import { ThemeSwitchContext } from './ThemeSwitchContext';

const Nav = () => {
  // themename vs theme - make sure to pick
  const { themeName, setThemeName } = React.useContext(ThemeSwitchContext);
  const size = useContext(ResponsiveContext);
  const theme = useContext(ThemeContext);
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <Box
      direction="row"
      justify="between"
      align={['xsmall', 'small'].includes(size) ? 'center' : 'start'}
      width="xlarge"
      alignSelf="center"
      gap="medium"
    >
      <Box justify="between" align="start" alignSelf="center">
        <RoutedAnchor
          path="/"
          icon={<GrommetIcon size="large" color="plain" />}
          label={
            !['xsmall', 'small'].includes(size) && (
              <Text size="xlarge">grommet</Text>
            )
          }
        />
        {!['xsmall', 'small'].includes(size) && (
          <Text>for {themeName === 'hpe' ? 'HPE' : 'open source'}</Text>
        )}
      </Box>
      <Box direction="row" gap="small">
        {!searchOpen && (
          <Box direction="row" gap="small">
            {!['xsmall', 'small'].includes(size) && (
              <Button
                plain
                onClick={() => {
                  setThemeName(`${themeName === 'hpe' ? 'grommet' : 'hpe'}`);
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
                      use for {themeName === 'hpe' ? 'open source' : 'HPE'}
                    </Text>
                    {themeName === 'grommet' && (
                      <HpeIcon color="#01A982" size="medium" />
                    )}
                  </Box>
                )}
              </Button>
            )}
            {['xsmall', 'small'].includes(size) && (
              <Menu
                icon={<MoreIcon size="medium" />}
                items={[
                  {
                    label: `use for ${
                      themeName === 'hpe' ? 'open source' : 'HPE'
                    }`,
                    onClick: () => {
                      setThemeName(
                        `${themeName === 'hpe' ? 'grommet' : 'hpe'}`,
                      );
                    },
                  },
                ]}
              />
            )}
            <RoutedButton path="/docs" plain>
              {({ hover }) => (
                <Box
                  pad={{ vertical: 'small', horizontal: 'medium' }}
                  round="xlarge"
                  background={
                    hover
                      ? 'active'
                      : theme.global.colors['accent-4'] ||
                        theme.global.colors['yellow!']
                  }
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
