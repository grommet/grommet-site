import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box, Heading } from 'grommet';
import { Gremlin } from '../Gremlin';

class PlaygroundPlaceholder extends Component {
  static contextTypes = {
    live: PropTypes.object,
  }

  render() {
    const { live: { error } } = this.context;
    if (!error) {
      return null;
    }
    return (
      <Box
        pad={{ top: 'xlarge' }}
        background='light-2'
        fill={true}
        align='center'
      >
        <Heading>Oh, no!</Heading>
        <Heading textAlign='center' level={3}>
          Something went wrong, check your code...
        </Heading>
        <Box
          pad={{ top: 'xlarge' }}
          border={{ side: 'bottom' }}
          width='medium'
          align='center'
        >
          <Gremlin />
        </Box>
      </Box>
    );
  }
}

export { PlaygroundPlaceholder };
