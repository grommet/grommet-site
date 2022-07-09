import React from 'react';
import { Box, Text, ResponsiveContext, Button } from 'grommet';
import { Grommet as GrommetIcon, Hpe as HpeIcon } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';
import Search from './Search';

const Nav = () => {
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
          </Box>
        )}
        <Search open={searchOpen} setOpen={(value) => setSearchOpen(value)} />
        <Button
          tip={
            window.location.href.indexOf('hpe') > -1
              ? 'Switch to Grommet theme'
              : 'Switch to HPE theme'
          }
          alignSelf="start"
          href={
            window.location.href.indexOf('hpe') > -1
              ? `${window.location.pathname}`
              : `${window.location.pathname}?theme=hpe`
          }
          plain
        >
          {({ hover }) => (
            <Box
              pad={{ vertical: 'small', horizontal: 'small' }}
              round="xlarge"
              background={hover ? 'active' : undefined}
            >
              {window.location.href.indexOf('hpe') > -1 ? (
                <GrommetIcon size="medium" color="#7D4CDB" />
              ) : (
                <HpeIcon size="medium" color="#01A982" />
              )}
            </Box>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Nav;
