import React from 'react';

import { Text } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Text/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Text).toJSON();

export default () => (
  <Page>
    <Doc
      name="Text"
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        color: 'status-critical',
      }}
      code={'<Text>simple text</Text>'}
      themeDoc={themeDoc}
    />
  </Page>
);

export const TextItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Text size="large">non-semantic text</Text>
  </Item>
);

TextItem.propTypes = Item.propTypes;
