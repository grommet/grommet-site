import React from 'react';
import PropTypes from 'prop-types';
import { Box, Anchor, Heading, Text } from 'grommet';
import { Link as LinkIcon } from 'grommet-icons';
import { Property } from './Property';

export const Properties = ({ children }) => {
  const propsArray = [];
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i += 1) {
      propsArray.push(children[i]);
    }
  } else {
    propsArray.push(children);
  }
  return (
    <Box
      id="props"
      margin={{ vertical: 'large' }}
      border={{ side: 'top', size: 'medium', color: 'brand' }}
    >
      <Box
        direction="row"
        justify="between"
        align="center"
        margin={{ top: 'medium', bottom: 'xlarge' }}
      >
        <Heading level={2} margin="none">
          Props
        </Heading>
        <Anchor href="#props" icon={<LinkIcon />} />
      </Box>

      {propsArray ? (
        propsArray
          .sort((a, b) => {
            if (a.props.name < b.props.name) return -1;
            if (a.props.name > b.props.name) return 1;
            return 0;
          })
          .map((property, index) => (
            <Property
              name={property.props.name}
              first={!index}
              key={property.props.name}
              stable={property.props.stable}
            >
              {property.props.children}
            </Property>
          ))
      ) : (
        <Text>No properties</Text>
      )}
    </Box>
  );
};

Properties.propTypes = {
  children: PropTypes.node,
};

Properties.defaultProps = {
  children: undefined,
};

Properties.displayName = 'Properties';
