import React from 'react';

import { Anchor } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Anchor/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Anchor).toJSON();

export default () => (
  <Page>
    <Doc
      name="Anchor"
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        color: 'control',
        href: '//my.com/path',
        icon: '<Add />',
        label: ['Add', '<Box>...</Box>'],
        onClick: '() => {}',
      }}
      code={`<Anchor href="#" primary label="For Example" />`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const AnchorItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Anchor as="span">Anchor</Anchor>
  </Item>
);

AnchorItem.propTypes = Item.propTypes;
