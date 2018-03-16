import React from 'react';

import { Box, Button } from 'grommet';
import doc from 'grommet/components/Button/doc';

import { Close, Edit } from 'grommet-icons';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Button).toJSON();

export default () => (
  <Page>
    <Doc
      name='Button'
      desc={desc}
      example={(
        <Box flex={true} justify='center' align='center'>
          <Button icon={<Edit />} label='Edit' onClick={() => {}} />
        </Box>
      )}
      examples={{
        active: <Button active={true} label='Submit' onClick={() => {}} />,
        color: <Button color='status-critical' label='Submit' onClick={() => {}} />,
        icon: <Button icon={<Close />} onClick={() => {}} />,
        label: <Button label='Submit' onClick={() => {}} />,
        primary: <Button primary={true} label='Submit' onClick={() => {}} />,
        reverse: <Button reverse={true} icon={<Edit />} label='Edit' onClick={() => {}} />,
      }}
    />
  </Page>
);
