import React from 'react';

import { AnnounceContext } from 'grommet';
import doc from 'grommet/contexts/AnnounceContext/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(AnnounceContext.Consumer).toJSON();

export default () => (
  <Page>
    <Doc name='AnnounceContext.Consumer' desc={desc} />
  </Page>
);
