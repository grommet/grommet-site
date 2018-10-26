import React from 'react';

import { Box, Video } from 'grommet';
import { doc } from 'grommet/components/Video/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Video).toJSON();

const CONTENT = [
  <source key='video' src='/assets/small.mp4' type='video/mp4' />,
  <track
    key='cc'
    label='English'
    kind='subtitles'
    srcLang='en'
    src='/assets/small-en.vtt'
    default
  />,
];

const CONTENT2 = [...CONTENT,
  <track
    key='cc2'
    label='French'
    kind='subtitles'
    srcLang='fr'
    src='/assets/small-fr.vtt'
  />,
];

export default () => (
  <Page>
    <Doc
      name='Video'
      desc={desc}
      example={(
        <Box>
          <Video controls='over' fit='cover'>
            {CONTENT2}
          </Video>
        </Box>
      )}
      examples={{
        controls: (
          <Box direction='row' justify='end' wrap>
            {[false, 'over', 'below'].map(controls => (
              <Box key={controls} basis='small' margin='xsmall'>
                <Video controls={controls} fit='cover'>
                  {CONTENT2}
                </Video>
              </Box>
            ))}
          </Box>
        ),
        fit: (
          <Box direction='row' justify='end' wrap>
            {['contain', 'cover'].map(fit => (
              <Box
                key={fit}
                basis='small'
                margin='xsmall'
                background={{ color: 'accent-2', opacity: 'weak' }}
              >
                <Box basis='small'>
                  <Video controls='over' fit={fit}>
                    {CONTENT}
                  </Video>
                </Box>
              </Box>
            ))}
          </Box>
        ),
      }}
    />
  </Page>
);
