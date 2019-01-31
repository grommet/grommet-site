import React from 'react';

import { Box, Layer } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Layer/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Layer).toJSON();

export default () => (
  <Page>
    <Doc
      name="Layer"
      desc={desc}
      syntaxes={{
        margin: [
          'none',
          'xsmall',
          'small',
          'medium',
          'large',
          'any CSS size',
          {
            vertical: '...',
            horizontal: '...',
            top: '...',
            bottom: '...',
            left: '...',
            right: '...',
          },
        ],
        onClickOutside: '() => {}',
        onEsc: '() => {}',
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const LayerItem = props => (
  <Item {...props}>
    <Box flex direction="row">
      <Box basis="1/3" background={{ color: 'brand', opacity: 'weak' }} />
      <Box flex background="brand" />
    </Box>
  </Item>
);
