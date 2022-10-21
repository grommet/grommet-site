import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';

export const Example = ({ children, defaultValue }) => (
  <Text color="control" weight={defaultValue === true ? 'bold' : 'normal'}>
    <pre style={{ margin: 0, font: 'inherit', whiteSpace: 'pre-wrap' }}>
      {children}
    </pre>
  </Text>
);
Example.displayName = 'Example';

Example.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.bool,
};

Example.defaultProps = {
  children: undefined,
  defaultValue: false,
};
