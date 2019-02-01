import React from 'react';

import { RadioButtonGroup } from 'grommet';
import { doc } from 'grommet/components/RadioButtonGroup/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(RadioButtonGroup).toJSON();

export default () => (
  <Page>
    <Doc
      name="RadioButtonGroup"
      desc={desc}
      code={`<RadioButtonGroup
  name="doc"
  options={['one', 'two']}
  value="one"
  onChange={() => {}}
/>`}
      syntaxes={{
        options: [
          ['string'],
          [{ disabled: false, id: 'ONE', name: 'one', value: '1' }],
        ],
      }}
    />
  </Page>
);

export const RadioButtonGroupItem = props => (
  <Item {...props} center>
    <RadioButtonGroup
      name="group"
      options={['one', 'two']}
      value="one"
      onChange={() => {}}
    />
  </Item>
);
