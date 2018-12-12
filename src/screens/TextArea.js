import React from 'react';

import { TextArea } from 'grommet';
import { doc, themeDoc } from 'grommet/components/TextArea/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(TextArea).toJSON();

export default () => (
  <Page>
    <Doc
      name="TextArea"
      desc={desc}
      examples={{
        focusIndicator: <TextArea value="A B C" plain focusIndicator />,
        placeholder: <TextArea placeholder="placeholder" />,
        plain: <TextArea plain valuer="A B C" />,
        value: <TextArea value="A B C" />,
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const TextAreaItem = props => (
  <Item {...props} center pad={{ horizontal: 'xlarge' }}>
    <TextArea placeholder="Placeholder" disabled />
  </Item>
);
