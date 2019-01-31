import React from 'react';

import { Box, Keyboard } from 'grommet';
import { Add } from 'grommet-icons';
import { doc } from 'grommet/components/Keyboard/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';
import Key from './Components/Key';

const desc = doc(Keyboard).toJSON();

export default () => (
  <Page>
    <Doc name="Keyboard" desc={desc} />
  </Page>
);

export const KeyboardItem = props => (
  <Item {...props} center>
    <Box direction="row" align="center" gap="small">
      <Key label=" &#8984; " />
      <Add color="brand" />
      <Key label="Z" />
    </Box>
  </Item>
);
