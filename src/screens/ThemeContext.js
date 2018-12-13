import React from 'react';

import { ThemeContext } from 'grommet/contexts';
import { Paint } from 'grommet-icons';
import { doc } from 'grommet/contexts/ThemeContext/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(ThemeContext.Extend).toJSON();

export default () => (
  <Page>
    <Doc name="ThemeContext .Extend" desc={desc} />
  </Page>
);

export const ThemeContextItem = props => (
  <Item {...props} center>
    <Paint color="brand" size="xlarge" />
  </Item>
);
