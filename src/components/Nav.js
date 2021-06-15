import React from 'react';
import { Box, Button, Text, ResponsiveContext } from 'grommet';
import { Github, Grommet as GrommetIcon } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';
import Search from './Search';

export default () => {
  const size = React.useContext(ResponsiveContext);
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
      <Box align="center" direction="row" gap="small">
        <Button
          a11yTitle="Go to grommet on GitHub"
          target="_blank"
          href="https://github.com/grommet/grommet"
          icon={<Github color="brand" size="large" />}
        />
        {!searchOpen && (
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
        )}
        <Search open={searchOpen} setOpen={value => setSearchOpen(value)} />
      </Box>
    </Box>
  );
};
