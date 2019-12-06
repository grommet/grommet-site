import React from 'react';

import { Footer } from 'grommet';
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
    <Main background="light-4" pad="small">
        <Text size="xsmall">Header</Text>
    </Main>
    <Footer pad="small">
        Footer is a good place to place your content.
    </Footer>
</>`}
    />
  </Page>
);

export const FooterItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Footer pad="small">Footer content of a document.</Footer>
  </Item>
);

FooterItem.propTypes = Item.propTypes;
