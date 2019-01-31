import React from 'react';

import { Box, Stack } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Stack/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Stack).toJSON();

export default () => (
  <Page>
    <Doc
      name="Stack"
      desc={desc}
      code={`<Stack anchor="top-right">
  <Icons.Notification size="large" />
  <Box background="brand" pad={{ horizontal: 'xsmall' }} round>8</Box>
</Stack>`}
      example={
        <Stack anchor="center">
          <Box
            pad="large"
            round="medium"
            background={{ color: 'brand', opacity: 'weak' }}
          />
          <Box
            background={{ color: 'brand', opacity: 'weak' }}
            pad="medium"
            round="medium"
            margin={{ left: 'large' }}
          />
          <Box
            background={{ color: 'brand', opacity: 'medium' }}
            pad="medium"
            round="medium"
            margin={{ left: 'medium' }}
          />
          <Box
            background={{ color: 'brand', opacity: 'strong' }}
            pad="medium"
            round="medium"
          />
        </Stack>
      }
      examples={{
        anchor: (
          <Box direction="row" justify="end" wrap>
            {['top-left', 'left', 'center'].map(anchor => (
              <Box key={anchor} margin="xsmall">
                <Stack anchor={anchor}>
                  <Box
                    pad="medium"
                    background={{ color: 'accent-2', opacity: 'medium' }}
                  />
                  <Box
                    pad="small"
                    background={{ color: 'accent-2', opacity: 'strong' }}
                  />
                </Stack>
              </Box>
            ))}
          </Box>
        ),
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const StackItem = props => (
  <Item {...props}>
    <Box flex border={{ color: 'brand', size: 'xlarge' }}>
      <Box flex background="brand" margin="medium" />
    </Box>
  </Item>
);
