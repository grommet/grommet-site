import React from 'react';

import { CheckBoxGroup } from 'grommet';
import { doc } from 'grommet/components/CheckBoxGroup/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';
import { genericSyntaxes } from '../utils/props';

const desc = doc(CheckBoxGroup).toJSON();

export default () => (
  <Page>
    <Doc
      name="CheckBoxGroup"
      desc={desc}
      code={`<Grommet theme={grommet}>
  <Box pad="medium">
    <CheckBoxGroup options={["Maui", "Kauai", "Oahu"]} />
  </Box>
</Grommet>`}
      syntaxes={{
        ...genericSyntaxes,
        onChange: ['({ value, option }) => {...}'],
      }}
    />
  </Page>
);

export const CheckBoxGroupItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <CheckBoxGroup options={['First', 'Second', 'Third']} />
  </Item>
);

CheckBoxGroupItem.propTypes = Item.propTypes;
