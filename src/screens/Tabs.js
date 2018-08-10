import React from 'react';

import { Tabs, Tab } from 'grommet';
import doc, { docTab } from 'grommet/components/Tabs/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Tabs).toJSON();
const descTab = docTab(Tab).toJSON();

export default () => (
  <Page>
    <Doc name='Tabs' desc={desc} />

    <Doc name='Tab' desc={descTab} />
  </Page>
);
