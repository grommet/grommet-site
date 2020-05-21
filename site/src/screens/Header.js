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
      code={`<Header background="brand">
  <Button icon={<Icons.Home />} hoverIndicator />
  <Menu label="account" items={[{ label: 'logout' }]} />
</Header>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          align: 'center',
          as: 'header',
          direction: 'row',
          flex: false,
          gap: 'medium',
          justify: 'between',
        },
      }}
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
