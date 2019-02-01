import React from 'react';

import { CheckBox } from 'grommet';
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
      code={`<CheckBox
  checked={true}
  label="interested?"
  onChange={(event) => {/* event.target.checked */}}
/>`}
    />
  </Page>
);

export const CheckBoxItem = props => (
  <Item {...props} center>
    <CheckBox checked onChange={() => {}} />
  </Item>
);
