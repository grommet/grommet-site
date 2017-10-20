import React, { Component } from 'react';

import { Box, DropButton } from 'grommet';
import doc from 'grommet/components/DropButton/doc';

import Doc from '../components/Doc';
import AirlineMultiSelect from './drop-button/AirlineMultiSelect';
import LabelMultiSelect from './drop-button/LabelMultiSelect';

const desc = doc(DropButton).toJSON();

export default class DropButtonDoc extends Component {
  render() {
    return (
      <Doc name='DropButton' desc={desc}>
        <Box pad='large'>
          <Box direction='row'>
            <AirlineMultiSelect />
          </Box>
          <Box direction='row' margin={{ vertical: 'small' }}>
            <LabelMultiSelect />
          </Box>
        </Box>
      </Doc>
    );
  }
}
