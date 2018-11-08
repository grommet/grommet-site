import React from 'react';

import { Collapsible } from 'grommet';
import { doc } from 'grommet/components/Collapsible/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Collapsible).toJSON();

export default () => (
  <Page>
    <Doc name="Collapsible" desc={desc} />
  </Page>
);
