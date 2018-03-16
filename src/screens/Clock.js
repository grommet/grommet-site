import React from 'react';

import { Box, Clock } from 'grommet';
import doc from 'grommet/components/Clock/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Clock).toJSON();

export default () => (
  <Page>
    <Doc
      name='Clock'
      desc={desc}
      examples={{
        precision: (
          <Box>
            {['hours', 'minutes', 'seconds'].map(precision => (
              <Box key={precision} margin={{ bottom: 'xsmall' }} gap='xsmall' align='end'>
                <Clock precision={precision} run={false} />
                <Clock precision={precision} run={false} type='digital' />
              </Box>
            ))}
          </Box>
        ),
        run: (
          <Box>
            {[false, 'backward', 'forward'].map(run => (
              <Box key={run} margin={{ bottom: 'xsmall' }} gap='xsmall' align='end'>
                <Clock run={run} type='analog' />
                <Clock run={run} type='digital' />
              </Box>
            ))}
          </Box>
        ),
        size: (
          <Box>
            {['small', 'medium', 'large', 'xlarge'].map(size => (
              <Box key={size} margin={{ bottom: 'xsmall' }} gap='xsmall' align='end'>
                <Clock size={size} run={false} />
                <Clock size={size} run={false} type='digital' />
              </Box>
            ))}
          </Box>
        ),
        type: (
          <Box>
            {['analog', 'digital'].map(type => (
              <Box key={type} margin={{ bottom: 'xsmall' }} align='end'>
                <Clock type={type} run={false} />
              </Box>
            ))}
          </Box>
        ),
      }}
    />
  </Page>
);
