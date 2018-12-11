import React from 'react';

import { Box, Paragraph } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Paragraph/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';

const desc = doc(Paragraph).toJSON();

export default () => (
  <Page>
    <Doc
      name="Paragraph"
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        color: 'neutral-1',
      }}
      examples={{
        size: (
          <Box direction="row" justify="end" wrap>
            {['small', 'medium', 'large', 'xlarge'].map(size => (
              <Box key={size} margin="xsmall">
                <Paragraph size={size} margin="none">
                  Lorem ipsum ...
                </Paragraph>
              </Box>
            ))}
          </Box>
        ),
      }}
      themeDoc={themeDoc}
    />
  </Page>
);
