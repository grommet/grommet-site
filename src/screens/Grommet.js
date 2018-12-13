import React from 'react';

import { Grommet } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';
import { doc } from 'grommet/components/Grommet/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Grommet).toJSON();

export default () => (
  <Page>
    <Doc name="Grommet" desc={desc} />
  </Page>
);

export const GrommetItem = props => (
  <Item {...props} center>
    <GrommetIcon color="brand" size="xlarge" />
  </Item>
);
