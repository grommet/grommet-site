import React, { Component } from 'react';
import { Box, Text, ResponsiveContext } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';

export default class extends Component {
  state = {}

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            direction='row'
            justify='between'
            align='center'
            {...this.props}
          >
            <RoutedAnchor
              path='/'
              icon={<GrommetIcon size='large' />}
              label={size !== 'small' && <Text size='xlarge'>grommet</Text>}
            />
            <RoutedButton
              path='/components'
              plain
            >
              <Box
                pad={{ vertical: 'small', horizontal: 'medium' }}
                round='xlarge'
                background='accent-2'
              >
                <Text size='large'>components</Text>
              </Box>
            </RoutedButton>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
