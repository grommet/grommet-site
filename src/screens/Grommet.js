import React from 'react';

import { Grommet } from 'grommet';
import { doc } from 'grommet/components/Grommet/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Grommet).toJSON();

export default () => (
  <Page>
    <Doc name='Grommet' desc={desc} />
  </Page>
);
