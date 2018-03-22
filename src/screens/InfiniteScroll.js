import React from 'react';

import { InfiniteScroll } from 'grommet';
import doc from 'grommet/components/InfiniteScroll/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(InfiniteScroll).toJSON();

export default () => (
  <Page>
    <Doc name='InfiniteScroll' desc={desc} />
  </Page>
);
