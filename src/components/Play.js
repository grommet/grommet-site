import React, { Component } from 'react';
import { Box, Layer, TextArea } from 'grommet';

export default class Play extends Component {
  static getDerivedStateFromProps(nextProps) {
    return { code: nextProps.code };
  }

  state = { code: '' }

  render() {
    const { onClose } = this.props;
    const { code } = this.state;
    return (
      <Layer onClickOutside={onClose}>
        <Box basis='large'>
          <TextArea
            value={code}
            onChange={event => this.setState({ code: event.target.value })}
          />
        </Box>
      </Layer>
    );
  }
}
