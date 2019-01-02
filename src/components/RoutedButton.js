import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';
import { Clicker } from '../Router';

const RoutedButton = ({ path, ...rest }) => (
  <Clicker path={path}>
    {onClick => <Button href={path} onClick={onClick} {...rest} />}
  </Clicker>
);

RoutedButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RoutedButton;
