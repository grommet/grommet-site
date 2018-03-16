import React from 'react';

import { Responsive } from 'grommet';
import doc from 'grommet/components/Responsive/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Responsive).toJSON();

export default () => (
  <Page>
    <Doc name='Responsive' desc={desc} />
  </Page>
);
