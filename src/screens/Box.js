import React from 'react';
import { Box, Text } from 'grommet';
import doc from 'grommet/components/Box/doc';
import Doc from '../components/Doc';

const desc = doc(Box).toJSON();

export default () => (
  <Doc
    name='Box'
    desc={desc}
    examples={{
      align: (
        <Box direction='row' align='end' border={true}>
          <Box basis='xsmall' pad='xsmall' background='light-2'>
            <Text>A B C</Text>
          </Box>
          <Box basis='xsmall' pad='xsmall' background='light-3'>
            <Text>D</Text>
          </Box>
        </Box>
      ),
      background: (
        <Box background='brand' pad='medium' />
      ),
      border: (
        <Box align='end'>
          <Box border={true} pad='medium' margin='xsmall' />
          <Box border={{ side: 'all', size: 'small' }} pad='medium' margin='xsmall' />
          <Box border={{ side: 'all', size: 'medium' }} pad='medium' margin='xsmall' />
          <Box border={{ side: 'all', size: 'large' }} pad='medium' margin='xsmall' />
        </Box>
      ),
      justify: (
        <Box direction='row' justify='end' border={true}>
          <Box basis='xsmall' pad='xsmall' margin={{ left: 'small' }} background='light-2'>
            <Text>A B C</Text>
          </Box>
          <Box basis='xsmall' pad='xsmall' background='light-3'>
            <Text>D</Text>
          </Box>
        </Box>
      ),
      margin: (
        <Box align='start' border={true} background='light-2'>
          <Box margin='xsmall' background='light-3'><Text>A</Text></Box>
          <Box margin='small' background='light-3'><Text>B</Text></Box>
          <Box margin='medium' background='light-3'><Text>C</Text></Box>
          <Box margin='large' background='light-3'><Text>D</Text></Box>
        </Box>
      ),
      pad: (
        <Box align='start' border={true}>
          <Box pad='xsmall' background='light-2'><Text>A</Text></Box>
          <Box pad='small' background='light-3'><Text>B</Text></Box>
          <Box pad='medium' background='light-2'><Text>C</Text></Box>
          <Box pad='large' background='light-3'><Text>D</Text></Box>
        </Box>
      ),
      round: (
        <Box align='start'>
          <Box round='xsmall' pad='small' background='light-2'><Text>A</Text></Box>
          <Box round='small' pad='small' background='light-3'><Text>B</Text></Box>
          <Box round='medium' pad='small' background='light-2'><Text>C</Text></Box>
          <Box round='large' pad='small' background='light-3'><Text>D</Text></Box>
        </Box>
      ),
    }}
  />
);
