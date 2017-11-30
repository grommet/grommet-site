import React from 'react';

import { Box, Tab, Tabs } from 'grommet';
import { Add, Trash } from 'grommet-icons';
import doc from 'grommet/components/Tabs/doc';

import Doc from '../components/Doc';

const desc = doc(Tabs).toJSON();

export default () => (
  <Doc name='Tabs' desc={desc}>
    <Box pad='large'>
      <Tabs>
        <Tab title='Tab 1'>Contents inside tab 1</Tab>
        <Tab title='Tab 2'>Contents inside tab 2</Tab>
      </Tabs>
    </Box>

    <Box pad='large' background='dark-3'>
      <Tabs>
        <Tab title='Tab 1'>Contents inside tab 1</Tab>
        <Tab title='Tab 2'>Contents inside tab 2</Tab>
      </Tabs>
    </Box>

    <Box pad='large'>
      <Tabs justify='start'>
        <Tab
          title={
            <Box direction='row'>
              <Box margin={{ horizontal: 'xsmall' }}><Add color='brand' /></Box> Tab 1
            </Box>
          }
        >
          Contents inside tab 1
        </Tab>
        <Tab
          title={
            <Box direction='row'>
              <Box margin={{ horizontal: 'xsmall' }}><Trash color='brand' /></Box> Tab 2
            </Box>
          }
        >
          Contents inside tab 2
        </Tab>
      </Tabs>
    </Box>
  </Doc>
);
