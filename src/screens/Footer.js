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
      code={`  <>
    <Main pad="small">
        <Text size="xsmall">Main</Text>
    </Main>
    <Footer pad="small" background="light-4">
        Footer is a good place to place your content.
    </Footer>
</>`}
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
