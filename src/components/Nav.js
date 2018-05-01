import React, { Component } from 'react';

import { Box, Responsive, RoutedAnchor, Text } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';

const NavAnchor = ({ path, label }) => (
  <RoutedAnchor path={path}>
    <Text size='large'><strong>{label}</strong></Text>
  </RoutedAnchor>
);

export default class extends Component {
  state = {}

  render() {
    const { responsive } = this.state;
    return (
      <Responsive
        onChange={nextResponsive => this.setState({ responsive: nextResponsive })}
      >
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
              {responsive === 'wide' ?
                <Box margin={{ horizontal: 'small' }}>
                  <Text size='large'><strong>grommet</strong></Text>
                </Box>
                : null}
            </Box>
          </RoutedAnchor>
          <Box direction='row' align='center' gap='medium'>
            <NavAnchor path='/try' label='try' />
            <NavAnchor path='/use' label='use' />
            <NavAnchor path='/components' label='read' />
          </Box>
        </Box>
      </Responsive>
    );
  }
}
