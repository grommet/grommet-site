import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import RoutedButton from '../../components/RoutedButton';

const Item = ({ name, path, children, center, ...rest }) => (
  <RoutedButton path={path} fill>
    <Box fill pad={{ horizontal: 'small' }}>
      <Heading level={3} size="small" margin={{ top: 'none', bottom: 'small' }}>
        {name}
      </Heading>
      <Box
        flex
        background={
          center ? { color: 'neutral-2', opacity: 'weak' } : undefined
        }
        justify={center ? 'center' : undefined}
        align={center ? 'center' : undefined}
        pad={center ? 'small' : undefined}
        overflow="hidden"
        round="small"
        style={{ pointerEvents: 'none' }}
        {...rest}
      >
        {children}
      </Box>
    </Box>
  </RoutedButton>
);

Item.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

Item.defaultProps = {
  center: false,
};

export default Item;
