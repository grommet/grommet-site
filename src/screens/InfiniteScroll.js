import React from 'react';

import { InfiniteScroll } from 'grommet';
import { Descend } from 'grommet-icons';
import { doc } from 'grommet/components/InfiniteScroll/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(InfiniteScroll).toJSON();

export default () => (
  <Page>
    <Doc name="InfiniteScroll" desc={desc} />
  </Page>
);

export const InfiniteScrollItem = props => (
  <Item {...props} center>
    <Descend color="brand" size="xlarge" />
  </Item>
);
