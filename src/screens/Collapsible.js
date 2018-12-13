import React from 'react';

import { Collapsible } from 'grommet';
import { Shift } from 'grommet-icons';
import { doc } from 'grommet/components/Collapsible/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Collapsible).toJSON();

export default () => (
  <Page>
    <Doc name="Collapsible" desc={desc} />
  </Page>
);

export const CollapsibleItem = props => (
  <Item {...props} center>
    <Shift color="brand" size="xlarge" />
  </Item>
);
