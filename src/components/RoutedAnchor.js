import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from 'grommet';
import { Clicker } from '../Router';

const RoutedAnchor = ({ path, ...rest }) => (
  <Clicker path={path}>
    {onClick => <Anchor href={path} onClick={onClick} {...rest} />}
  </Clicker>
);

RoutedAnchor.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RoutedAnchor;
