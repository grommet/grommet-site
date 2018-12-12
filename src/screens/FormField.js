import React from 'react';

import { Box, FormField, TextInput } from 'grommet';
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
      example={
        <FormField label="Field label">
          <TextInput placeholder="type here" />
        </FormField>
      }
      examples={{
        border: (
          <Box gap="small">
            <FormField
              label="Name"
              border={{ position: 'inner', size: 'small', color: 'brand' }}
            >
              <TextInput placeholder="inner small brand" />
            </FormField>
            <FormField
              label="Name"
              border={{ position: 'outer', side: 'all', size: 'small' }}
            >
              <TextInput placeholder="outer all small" />
            </FormField>
          </Box>
        ),
        error: (
          <FormField error="error">
            <TextInput />
          </FormField>
        ),
        help: (
          <FormField help="help">
            <TextInput />
          </FormField>
        ),
        label: (
          <FormField label="label">
            <TextInput />
          </FormField>
        ),
      }}
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
