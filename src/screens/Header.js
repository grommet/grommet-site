import React from 'react';

import { Header, Box } from 'grommet';
import { doc } from 'grommet/components/Header/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Header).toJSON();

export default () => (
  <Page>
    <Doc
      name="Header"
      desc={desc}
      code={`<Header background="red" pad="large"><Box>Hi</Box><Box>Shimi</Box></Header>`}
    />
  </Page>
);

export const HeaderItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Header background="red" pad="large">
      <Box>Hi</Box>
      <Box>Shimi</Box>
    </Header>
  </Item>
);

HeaderItem.propTypes = Item.propTypes;
