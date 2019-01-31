import React from 'react';

import { Box, Drop } from 'grommet';
import { doc } from 'grommet/components/Drop/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Drop).toJSON();

export default () => (
  <Page>
    <Doc
      name="Drop"
      desc={desc}
      syntaxes={{
        align: [
          { top: 'top', left: 'left' },
          { bottom: 'bottom', right: 'right' },
        ],
        onClickOutside: '() => {}',
        onEsc: '() => {}',
      }}
      example={<Box pad="large" />}
    />
  </Page>
);

export const DropItem = props => (
  <Item {...props} center>
    <Box
      border={{ color: 'brand', size: 'large' }}
      round="medium"
      margin="small"
      pad={{ horizontal: 'large', vertical: 'medium' }}
    />
  </Item>
);
