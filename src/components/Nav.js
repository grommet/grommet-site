import React from 'react';
import { Box, Text, ResponsiveContext, CheckBox } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';
import Search from './Search';
import { ThemeSwitchContext } from './ThemeSwitchContext';

const Nav = () => {
  const size = React.useContext(ResponsiveContext);
  const { themeName, setThemeName } = React.useContext(ThemeSwitchContext);
  const [checked, setChecked] = React.useState(themeName === 'hpe');
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
            <CheckBox
              checked={checked}
              label={themeName === 'hpe' ? 'Use for Grommet' : 'Use for HPE'}
              onChange={(event) => {
                if (themeName === 'hpe') {
                  setThemeName('grommet');
                } else {
                  setThemeName('hpe');
                }
                setChecked(event.target.checked);
              }}
              toggle="true"
            />
          </Box>
        )}
        <Search open={searchOpen} setOpen={(value) => setSearchOpen(value)} />
      </Box>
    </Box>
  );
};

export default Nav;
