import React from 'react';

import { Box, Image } from 'grommet';
import doc from 'grommet/components/Image/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Image).toJSON();

const SRC = '//v2.grommet.io/assets/Wilderpeople_Ricky.jpg';

export default () => (
  <Page>
    <Doc
      name='Image'
      desc={desc}
      examples={{
        fit: (
          <Box direction='row' justify='end' wrap={true}>
            {['contain', 'cover'].map(fit => (
              <Box
                key={fit}
                basis='small'
                margin='xsmall'
                background={{ color: 'accent-2', opacity: 'weak' }}
              >
                <Box basis='small'>
                  <Image fit={fit} src={SRC} />
                </Box>
              </Box>
            ))}
          </Box>
        ),
      }}
    />
  </Page>
);
