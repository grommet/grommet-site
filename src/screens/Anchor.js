import React from 'react';

import { Anchor } from 'grommet';
import doc from 'grommet/components/Anchor/doc';

import { Edit } from 'grommet-icons';

import Doc from '../components/Doc';

const desc = doc(Anchor).toJSON();

export default () => (
  <Doc
    name='Anchor'
    desc={desc}
    examples={{
      icon: <Anchor href='#' icon={<Edit />} />,
      label: <Anchor href='#' label='Edit' />,
      primary: <Anchor href='#' primary={true} label='Edit' />,
      reverse: <Anchor href='#' icon={<Edit />} label='Edit' reverse={true} />,
    }}
  />
);
