import React, { Component } from 'react';
import { Box, Text } from 'grommet';
import { ResponsiveContext } from 'grommet/contexts';
import { Grommet as GrommetIcon } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';

const NavAnchor = ({ path, label }) => (
  <RoutedAnchor path={path}>
    <Text size='large'><strong>{label}</strong></Text>
  </RoutedAnchor>
);

export default class extends Component {
  state = {}

  render() {
    return (
      <ResponsiveContext.Consumer>
        {responsive => (
          <Box
            direction='row'
            justify='between'
            align='center'
            margin={{ bottom: 'xlarge' }}
            {...this.props}
          >
            <RoutedAnchor path='/'>
              <Box direction='row' align='center' margin={{ right: 'small' }}>
                <GrommetIcon size='large' color='brand' />
                {responsive === 'wide'
                  ? (
                    <Box margin={{ horizontal: 'small' }}>
                      <Text size='large'><strong>grommet</strong></Text>
                    </Box>
                  ) : null}
              </Box>
            </RoutedAnchor>
            <Box direction='row' align='center' gap='medium'>
              <NavAnchor path='/play' label='play' />
              <NavAnchor path='/start' label='start' />
              <NavAnchor path='/components' label='components' />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
