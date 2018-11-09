import React from 'react';

import { Box, Carousel, Image } from 'grommet';
import { doc } from 'grommet/components/Carousel/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Carousel).toJSON();

export default () => (
  <Page>
    <Doc
      name="Carousel"
      desc={desc}
      example={
        <Box height="small" width="medium" overflow="hidden">
          <Carousel fill>
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
          </Carousel>
        </Box>
      }
    />
  </Page>
);
