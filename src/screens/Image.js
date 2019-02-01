import React from 'react';

import { Image } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Image/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Image).toJSON();

export default () => (
  <Page>
    <Doc
      name="Image"
      desc={desc}
      code={`<Box height="small" width="small">
  <Image
    fit="cover"
    src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
  />
</Box>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const ImageItem = props => (
  <Item {...props}>
    <Image src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" fit="cover" />
  </Item>
);
