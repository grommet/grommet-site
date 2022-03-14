import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

export const PropertyValue = ({ children, type }) => {
  const Descriptions = [];
  const Examples = [];

  React.Children.forEach(children, (child) => {
    if (child.type.displayName === 'Description') {
      Descriptions.push(child);
    } else {
      Examples.push(child);
    }
  });

  return (
    <Box direction="row-responsive" justify="between" align="start">
      <Box basis="1/2" margin={{ right: 'large', bottom: 'xsmall' }}>
        {type && (
          <Text margin={{ bottom: 'xsmall' }} weight="bold">
            <code>{type}</code>
          </Text>
        )}
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
  type: PropTypes.string,
};

PropertyValue.defaultProps = {
  children: undefined,
  type: undefined,
};
