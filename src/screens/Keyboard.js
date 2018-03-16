import React from 'react';

import { Keyboard } from 'grommet';
import doc from 'grommet/components/Keyboard/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Keyboard).toJSON();

export default () => (
  <Page>
    <Doc name='Keyboard' desc={desc} />
  </Page>
);
