import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'grommet';

// eslint-disable-next-line react/prefer-stateless-function
class PlaygroundError extends Component {
  static contextTypes = {
    live: PropTypes.shape({}),
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
