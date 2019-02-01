import React from 'react';

import { FormField, TextInput } from 'grommet';
import { doc } from 'grommet/components/FormField/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(FormField).toJSON();

export default () => (
  <Page>
    <Doc
      name="FormField"
      desc={desc}
      code={`<FormField label="Field label">
  <TextInput placeholder="type here" />
</FormField>`}
    />
  </Page>
);

export const FormFieldItem = props => (
  <Item {...props} center>
    <FormField label="Label">
      <TextInput placeholder="value" />
    </FormField>
  </Item>
);
