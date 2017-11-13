import React from 'react';

import { Box, Clock, Heading } from 'grommet';
import doc from 'grommet/components/Clock/doc';

import Doc from '../components/Doc';

const desc = doc(Clock).toJSON();

export default () => (
  <Doc name='Clock' desc={desc}>
    <Box align='start' justify='center' pad='large' direction='row'>
      <Box margin='medium' align='center' justify='start'>
        <Clock seconds={true} size='large' />
        <Heading level={3} textAlign='center'><strong>San Francisco</strong></Heading>
      </Box>
      <Box margin='medium' align='center'>
        <Clock timezone='America/Sao_Paulo' seconds={true} size='large' />
        <Heading level={3}><strong>São Paulo</strong></Heading>
      </Box>
      <Box margin='medium' align='center'>
        <Clock timezone='Asia/Tokyo' seconds={true} size='large' />
        <Heading level={3}><strong>Tokyo</strong></Heading>
      </Box>
    </Box>
  </Doc>
);
