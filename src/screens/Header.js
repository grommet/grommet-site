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
      code={`<Header background="light-4" pad="small" gap="large">
  <Box direction="row" gap="xsmall">
    <Icons.Gremlin color="brand"/>
    <Box>Header</Box>
  </Box>
  <Box>Nav-options</Box>
</Header>`}
    />
  </Page>
);

export const HeaderItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Header background="brand" pad="medium" />
    <Box flex background={{ color: 'brand', opacity: 'weak' }} />
  </Item>
);

HeaderItem.propTypes = Item.propTypes;
