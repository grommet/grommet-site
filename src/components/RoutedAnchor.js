import React from 'react';
import { Anchor } from 'grommet';
import { Clicker } from '../Router';

export default ({ path, ...rest }) => (
  <Clicker path={path}>
    {onClick => (
      <Anchor href={path} onClick={onClick} {...rest} />
    )}
  </Clicker>
);
