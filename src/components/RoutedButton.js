import React from 'react';
import { Button } from 'grommet';
import { Clicker } from '../Router';

export default ({ path, ...rest }) => (
  <Clicker path={path}>
    {onClick => (
      <Button href={path} onClick={onClick} {...rest} />
    )}
  </Clicker>
);
