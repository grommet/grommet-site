import React from 'react';

import { Box, Footer } from 'grommet';
import { doc } from 'grommet/components/Footer/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Footer).toJSON();

export default () => (
  <Page>
    <Doc
      name="Footer"
      desc={desc}
      code={`<Footer background="brand" pad="medium">
  <Text>Copyright</Text>
  <Anchor label="About" />
</Footer>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          align: 'center',
          as: 'footer',
          direction: 'row',
          flex: false,
          gap: 'medium',
          justify: 'between',
        },
      }}
    />
  </Page>
);

export const FooterItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box flex background={{ color: 'brand', opacity: 'weak' }} />
    <Footer background="brand" pad="medium" />
  </Item>
);

FooterItem.propTypes = Item.propTypes;
