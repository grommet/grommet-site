import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const PropertyValue = ({ children }) => {
  const Descriptions = [];
  const Examples = [];

  React.Children.forEach(children, child => {
    if (child.type.displayName === 'Description') {
      Descriptions.push(child);
    } else {
      Examples.push(child);
    }
  });

  return (
    <Box direction="row-responsive" justify="between" align="start">
      <Box basis="1/2" margin={{ right: 'large' }}>
        {Descriptions}
      </Box>
      <Box flex align="start" margin={{ bottom: 'small' }}>
        {Examples}
      </Box>
    </Box>
  );
};

PropertyValue.propTypes = {
  children: PropTypes.node,
};

PropertyValue.defaultProps = {
  children: undefined,
};
