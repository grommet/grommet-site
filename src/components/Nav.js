import React, { useContext } from 'react';
import { Anchor, Box, Button, Text, ResponsiveContext } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';
import Search from './Search';
import { RouterContext } from '../Router';

const Nav = () => {
  const size = useContext(ResponsiveContext);
  const { go } = React.useContext(RouterContext);
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
      <Anchor
        onClick={(e) => {
          e.preventDefault();
          go('/');
        }}
        icon={<GrommetIcon size="large" color="plain" />}
        label={size !== 'small' && <Text size="xlarge">grommet</Text>}
      />
      <Box direction="row" gap="small" align="center">
        {!searchOpen && (
          <Box direction="row" gap="small" align="center">
            <Button
              label="docs"
              onClick={(e) => {
                e.preventDefault();
                go('/docs');
              }}
            />
            <Button
              label="components"
              primary
              onClick={(e) => {
                e.preventDefault();
                go('/components');
              }}
            />
          </Box>
        )}
        <Search open={searchOpen} setOpen={(value) => setSearchOpen(value)} />
      </Box>
    </Box>
  );
};

export default Nav;
