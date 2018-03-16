import React from 'react';

import { Tabs } from 'grommet';
import doc from 'grommet/components/Tabs/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Tabs).toJSON();

export default () => (
  <Page>
    <Doc name='Tabs' desc={desc} />
  </Page>
);
