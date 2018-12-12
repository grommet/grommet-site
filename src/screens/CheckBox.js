import React from 'react';

import { Box, CheckBox } from 'grommet';
import { doc } from 'grommet/components/CheckBox/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(CheckBox).toJSON();

export default () => (
  <Page>
    <Doc
      name="CheckBox"
      desc={desc}
      syntaxes={{
        id: 'a-dom-id',
        label: ['enabled', '<Box>...</Box>'],
        name: 'a-dom-name',
        onChange: '() => {}',
      }}
      examples={{
        checked: <CheckBox label="A" checked onChange={() => {}} />,
        disabled: <CheckBox label="A" disabled />,
        reverse: <CheckBox label="A" reverse onChange={() => {}} />,
        toggle: (
          <Box>
            <Box margin={{ bottom: 'xsmall' }}>
              <CheckBox label="A" toggle onChange={() => {}} />
            </Box>
            <CheckBox label="B" toggle checked onChange={() => {}} />
          </Box>
        ),
      }}
    />
  </Page>
);

export const CheckBoxItem = props => (
  <Item {...props} center>
    <CheckBox checked onChange={() => {}} />
  </Item>
);
