import React from 'react';

import { RadioButton } from 'grommet';
import { doc } from 'grommet/components/RadioButton/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(RadioButton).toJSON();

export default () => (
  <Page>
    <Doc
      name="RadioButton"
      desc={desc}
      code={`<RadioButton
  checked
  name="choices"
  label="chosen"
  onChange={(event) => {/* event.target.value */}}
/>`}
    />
  </Page>
);

export const RadioButtonItem = props => (
  <Item {...props} center>
    <RadioButton name="radio" checked onChange={() => {}} />
  </Item>
);
