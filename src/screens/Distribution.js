import React from 'react';

import { Box, Distribution, Text } from 'grommet';
import { doc } from 'grommet/components/Distribution/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Distribution).toJSON();

export default () => (
  <Page>
    <Doc
      name='Distribution'
      desc={desc}
      example={(
        <Distribution
          basis='medium'
          values={[
            { value: 50, color: 'light-3' },
            { value: 30, color: 'brand' },
            { value: 20, color: 'accent-1' },
            { value: 10, color: 'light-3' },
            { value: 5, color: 'brand' },
          ]}
        >
          {value => (
            <Box pad='xsmall' background={value.color} fill={true}>
              <Text size='large'>{value.value}</Text>
            </Box>
          )}
        </Distribution>
      )}
    />
  </Page>
);
