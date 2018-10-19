import React from 'react';

import { Tabs, Tab } from 'grommet';
import { doc as docTabs } from 'grommet/components/Tabs/doc';
import { doc as docTab } from 'grommet/components/Tab/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';

const desc = docTabs(Tabs).toJSON();
const descTab = docTab(Tab).toJSON();

export default () => (
  <Page>
    <Doc
      name='Tabs'
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        activeIndex: [0],
        messages: [{ tabContents: 'Tab Contents' }],
        onActive: '(1) => {}',
      }}
    />

    <Doc
      name='Tab'
      desc={descTab}
      syntaxes={{
        title: ['Tab Title', '<Box>...</Box>'],
      }}
    />
  </Page>
);
