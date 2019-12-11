import React from 'react';

import { Main } from 'grommet';
import { doc } from 'grommet/components/Main/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Main).toJSON();

export default () => (
  <Page>
    <Doc
      name="Main"
      desc={desc}
      code={`  <>
    <Header background="light-4" pad="small">
        <Text size="xsmall">Header</Text>
    </Header>
    <Main pad="small">
        Main is a good place to place your content.
    </Main>
</>`}
    />
  </Page>
);

export const MainItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Main
      pad="small"
      background="brand"
      overflow="scroll"
      border={{ side: 'right', size: 'large', color: 'light-4' }}
    />
  </Item>
);

MainItem.propTypes = Item.propTypes;
