import React from 'react';

import { List } from 'grommet';
import { doc, themeDoc } from 'grommet/components/List/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';
import { genericSyntaxes } from '../utils/props';

const desc = doc(List).toJSON();

export default () => (
  <Page>
    <Doc
      name="List"
      desc={desc}
      code={`<List
  primaryKey="name"
  secondaryKey="percent"
  data={[
    { name: 'Alan', percent: 20 },
    { name: 'Bryan', percent: 30 },
    { name: 'Chris', percent: 40 },
    { name: 'Eric', percent: 80 },
  ]}
/>`}
      syntaxes={{
        ...genericSyntaxes,
        background: ['light-2', ['white', 'light-2']],
        border: [
          true,
          'horizontal',
          { color: 'border', side: 'horizontal', size: 'small' },
        ],
        children: ['(datum, index, { active }) => {...}'],
        onClickItem: ['({ datum, index }) => {...}'],
        onMore: ['() => {...}'],
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const ListItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <List
      data={['One', 'Two', 'Three']}
      pad={{ horizontal: 'small', vertical: 'xsmall' }}
    />
  </Item>
);

ListItem.propTypes = Item.propTypes;
