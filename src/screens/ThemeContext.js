import React from 'react';

import { ThemeContext } from 'grommet/contexts';
import { doc } from 'grommet/contexts/ThemeContext/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(ThemeContext.Extend).toJSON();

export default () => (
  <Page>
    <Doc name="ThemeContext .Extend" desc={desc} />
  </Page>
);
