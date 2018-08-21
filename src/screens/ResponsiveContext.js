import React from 'react';

import { ResponsiveContext } from 'grommet';
import doc from 'grommet/contexts/ResponsiveContext/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(ResponsiveContext.Consumer).toJSON();

export default () => (
  <Page>
    <Doc name='ResponsiveContext.Consumer' desc={desc} />
  </Page>
);
