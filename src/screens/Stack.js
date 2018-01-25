import React from 'react';

import { Box, Stack } from 'grommet';
import doc from 'grommet/components/Stack/doc';

import Doc from '../components/Doc';

const desc = doc(Stack).toJSON();

export default () => (
  <Doc
    name='Stack'
    desc={desc}
    examples={{
      anchor: (
        <Box>
          <Box margin='xsmall'>
            <Stack anchor='top-left'>
              <Box pad='small' border={true}><strong>AAA</strong></Box>
              <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>bb</Box>
            </Stack>
          </Box>
          <Box margin='xsmall'>
            <Stack anchor='left'>
              <Box pad='small' border={true}><strong>CCC</strong></Box>
              <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>dd</Box>
            </Stack>
          </Box>
          <Box margin='xsmall'>
            <Stack anchor='center'>
              <Box pad='small' border={true}><strong>EEE</strong></Box>
              <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>gg</Box>
            </Stack>
          </Box>
        </Box>
      ),
    }}
  />
);
