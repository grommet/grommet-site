import React from 'react';

import { Box, Tip } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Tip/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Tip).toJSON();

console.log(desc);
export default () => (
  <Page>
    <Doc
      name="Tip"
      desc={desc}
      code={`<Grommet theme={grommet}>
  <Box pad="medium">
    <Tip content="tooltip">
     <Button label="hover me" /> 
    </Tip>
  </Box>
</Grommet>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const TipItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box
      border={{ color: 'brand', size: 'medium' }}
      round="medium"
      margin="small"
      pad={{ horizontal: 'large', vertical: 'small' }}
    />
    <Box
      round="medium"
      elevation="large"
      pad={{ horizontal: 'large', vertical: 'small' }}
    />
  </Item>
);

TipItem.propTypes = Item.propTypes;
