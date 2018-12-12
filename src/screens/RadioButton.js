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
      example={<RadioButton checked label="chosen" />}
      examples={{
        checked: <RadioButton label="A" checked onChange={() => {}} />,
        disabled: <RadioButton label="A" disabled onChange={() => {}} />,
        label: <RadioButton label="A" onChange={() => {}} />,
      }}
    />
  </Page>
);

export const RadioButtonItem = props => (
  <Item {...props} center>
    <RadioButton name="radio" checked onChange={() => {}} />
  </Item>
);
