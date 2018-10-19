import React from 'react';

import { Box, Text } from 'grommet';
import { doc } from 'grommet/components/Text/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';

const desc = doc(Text).toJSON();

export default () => (
  <Page>
    <Doc
      name='Text'
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        color: 'status-critical',
      }}
      examples={{
        color: <Text color='status-critical'>status-critical</Text>,
        size: (
          <Box direction='row' justify='end' wrap={true}>
            {['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'].map(size => (
              <Box key={size} margin='xsmall'>
                <Text size={size}>A</Text>
              </Box>
            ))}
          </Box>
        ),
        truncate: (
          <Box direction='row' justify='end'>
            <Box basis='xsmall'>
              <Text truncate={true}>Lorem ipsum</Text>
            </Box>
          </Box>
        ),
      }}
    />
  </Page>
);
