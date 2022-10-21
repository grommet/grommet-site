import React from 'react';
import { Box, Text } from 'grommet';
import { ThemeContext } from 'grommet/contexts';

import Page from '../components/Page';
import { ComponentDoc } from '../components/Doc';

const Background = () => (
  <Page>
    <ComponentDoc name="Background" description="Backgrounds">
      <ThemeContext.Consumer>
        {(theme) => (
          <Box gap="large" margin={{ vertical: 'large' }} direction="row" wrap>
            {Object.keys(theme.global.backgrounds || {}).map((name) => (
              <Box key={name}>
                <Box pad="xlarge" background={name} />
                <Text>{name}</Text>
              </Box>
            ))}
          </Box>
        )}
      </ThemeContext.Consumer>
    </ComponentDoc>
  </Page>
);

export default Background;
