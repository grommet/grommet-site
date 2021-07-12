import React from 'react';
import PropTypes from 'prop-types';
import { Box, Anchor, Heading } from 'grommet';
import { Link as LinkIcon } from 'grommet-icons';
import { PropertyValue } from './PropertyValue';

export const Property = ({ name, first, children }) => {
  const [over, setOver] = React.useState();
  const Description = [];
  const PropertyValues = [];
  React.Children.forEach(children, child => {
    if (child.type.displayName === 'Description') {
      Description.push(child);
    } else {
      PropertyValues.push(child);
    }
  });
  return (
    <Box
      id={name}
      border="bottom"
      gap="small"
      pad={{ top: !first ? 'medium' : undefined, bottom: 'medium' }}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      onFocus={() => setOver(true)}
      onBlur={() => setOver(false)}
    >
      <Box direction="row" justify="between" align="center">
        <Heading level={3} margin="none">
          {name}
        </Heading>
        <Anchor
          href={`#${name}`}
          icon={<LinkIcon color={over ? 'light-4' : 'white'} />}
        />
      </Box>
      {Description}
      {Description.length !== 0 && PropertyValue.length !== 0 && (
        <Box pad="small" />
      )}
      {PropertyValues}
    </Box>
  );
};

Property.propTypes = {
  children: PropTypes.node,
  first: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

Property.defaultProps = {
  children: undefined,
  first: undefined,
};
