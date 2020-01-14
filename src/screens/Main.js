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
      code={`<Main pad="large">
  <Heading>Something</Heading>
  <Paragraph>Something about something</Paragraph>
</Main>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          as: 'main',
          fill: 'vertical',
          flex: 'grow',
          overflow: 'auto',
        },
      }}
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
