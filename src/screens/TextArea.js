import React from 'react';

import { TextArea } from 'grommet';
import { doc } from 'grommet/components/TextArea/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(TextArea).toJSON();

export default () => (
  <Page>
    <Doc
      name='TextArea'
      desc={desc}
      examples={{
        focusIndicator: <TextArea value='A B C' plain focusIndicator />,
        placeholder: <TextArea placeholder='placeholder' />,
        plain: <TextArea plain valuer='A B C' />,
        value: <TextArea value='A B C' />,
      }}
    />
  </Page>
);
