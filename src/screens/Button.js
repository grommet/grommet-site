import React from 'react';

import { Button } from 'grommet';
import doc from 'grommet/components/Button/doc';

import { Close, Edit } from 'grommet-icons';

import Doc from '../components/Doc';

const desc = doc(Button).toJSON();

export default () => (
  <Doc
    name='Button'
    desc={desc}
    examples={{
      active: <Button active={true} label='Submit' onClick={() => {}} />,
      color: <Button color='status-critical' label='Submit' onClick={() => {}} />,
      icon: <Button icon={<Close />} onClick={() => {}} />,
      label: <Button label='Submit' onClick={() => {}} />,
      primary: <Button primary={true} label='Submit' onClick={() => {}} />,
      reverse: <Button reverse={true} icon={<Edit />} label='Edit' onClick={() => {}} />,
    }}
  />
);
