import React from 'react';

import { Button } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Button/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Button).toJSON();

export default () => (
  <Page>
    <Doc
      name="Button"
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        color: 'control',
        href: '//my.com/path',
        icon: '<Add />',
        label: ['Add', '<Box>...</Box>'],
        onClick: '() => {}',
      }}
      code={`<Button
  icon={<Icons.Edit />}
  label="Edit"
  onClick={() => {}}
/>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const ButtonItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Button label="i'm a button" primary onClick={() => {}} />
  </Item>
);

ButtonItem.propTypes = Item.propTypes;
