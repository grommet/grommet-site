import React from 'react';

import { Select } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Select/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Select).toJSON();

export default () => (
  <Page>
    <Doc
      name="Select"
      desc={desc}
      code={`<Select
  options={['small', 'medium', 'large']}
  value={'medium'}
  onChange={({ option }) => {}}
/>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const SelectItem = props => (
  <Item {...props} center pad={{ horizontal: 'large' }}>
    <Select options={[]} placeholder="Choices" tabIndex="-1" />
  </Item>
);
