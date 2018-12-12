import React from 'react';

import { Anchor, Box } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Anchor/doc';

import { Edit } from 'grommet-icons';

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
        color: 'accent-1',
        href: '//my.com/path',
        icon: '<Add />',
        label: ['Add', '<Box>...</Box>'],
        onClick: '() => {}',
      }}
      example={
        <Box flex justify="center" align="center">
          <Anchor href="#" primary label="For Example" />
        </Box>
      }
      examples={{
        icon: <Anchor href="#" icon={<Edit />} />,
        label: <Anchor href="#" label="Edit" />,
        primary: <Anchor href="#" primary label="Edit" />,
        reverse: <Anchor href="#" icon={<Edit />} label="Edit" reverse />,
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const AnchorItem = props => (
  <Item {...props} center>
    <Box width="small">
      <Box pad="small" background="brand" />
      <Box pad="small" background={{ color: 'brand', opacity: 'medium' }} />
      <Box pad="small" background="brand" />
      <Box pad="small" background={{ color: 'brand', opacity: 'medium' }} />
    </Box>
  </Item>
);
