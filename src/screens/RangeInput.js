import React, { Component } from 'react';

import { Box, RangeInput, Text } from 'grommet';
import doc from 'grommet/components/RangeInput/doc';

import Doc from '../components/Doc';

const desc = doc(RangeInput).toJSON();

class RangeInputDoc extends Component {
  state = {
    value: 0,
  }
  render() {
    const { value } = this.state;
    return (
      <Doc name='RangeInput' desc={desc}>
        <Box pad='large' align='start'>
          <Box direction='row'>
            <Box justify='center' basis='medium' flex={false} pad='small'>
              <Box direction='row'>
                <RangeInput
                  value={value}
                  onChange={event => this.setState({ value: event.target.value })}
                />
                <Box style={{ width: '44px' }} margin={{ left: 'xsmall' }}>
                  <Text size='large'><strong>{value}</strong></Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box direction='row' margin={{ vertical: 'small' }}>
            <Box justify='center' basis='medium' flex={false} background='dark-2' pad='small'>
              <Box direction='row'>
                <RangeInput
                  value={value}
                  onChange={event => this.setState({ value: event.target.value })}
                />
                <Box style={{ width: '44px' }} margin={{ left: 'xsmall' }}>
                  <Text size='large'><strong>{value}</strong></Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Doc>
    );
  }
}

export default RangeInputDoc;
