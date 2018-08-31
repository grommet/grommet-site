import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'grommet';

class PlaygroundError extends Component {
  static contextTypes = {
    live: PropTypes.object,
  }

  render() {
    const { live: { error } } = this.context;
    if (!error) {
      return null;
    }
    return (
      <Box pad='small' background='status-critical'>
        <Text size='small' color='white'>{error}</Text>
      </Box>
    );
  }
}

export { PlaygroundError };
