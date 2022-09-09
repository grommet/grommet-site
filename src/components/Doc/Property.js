import React from 'react';
import PropTypes from 'prop-types';
import { Box, Anchor, Heading, Text } from 'grommet';
import { Link as LinkIcon, CircleInformation } from 'grommet-icons';
import { PropertyValue } from './PropertyValue';

export const Property = ({ stable, name, first, children }) => {
  const [over, setOver] = React.useState();
  const Description = [];
  const PropertyValues = [];
  React.Children.forEach(children, (child) => {
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
        <Box direction="row" gap="small">
          <Heading level={3} margin="none">
            {name}
          </Heading>
          {stable && (
            <Box
              direction="row"
              gap="xsmall"
              background="light-2"
              round="medium"
              pad={{ vertical: 'xsmall', horizontal: 'small' }}
            >
              <CircleInformation />
              <Text alignSelf="center" size="small">
                New! Available on{' '}
                <Anchor href="/stablebranch" target="_blank">
                  stable branch
                </Anchor>
              </Text>
            </Box>
          )}
        </Box>
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
  stable: PropTypes.bool,
};

Property.defaultProps = {
  children: undefined,
  first: undefined,
  stable: false,
};
