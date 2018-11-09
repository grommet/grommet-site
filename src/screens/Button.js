import React from 'react';

import { Box, Button } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Button/doc';

import { Close, Edit } from 'grommet-icons';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';

const desc = doc(Button).toJSON();

export default () => (
  <Page>
    <Doc
      name="Button"
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
          <Button icon={<Edit />} label="Edit" onClick={() => {}} />
        </Box>
      }
      examples={{
        active: <Button active label="Submit" onClick={() => {}} />,
        color: (
          <Button color="status-critical" label="Submit" onClick={() => {}} />
        ),
        icon: <Button icon={<Close />} onClick={() => {}} />,
        label: <Button label="Submit" onClick={() => {}} />,
        primary: <Button primary label="Submit" onClick={() => {}} />,
        reverse: (
          <Button reverse icon={<Edit />} label="Edit" onClick={() => {}} />
        ),
      }}
      themeDoc={themeDoc}
    />
  </Page>
);
