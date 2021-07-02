import React from 'react';
import PropTypes from 'prop-types';
import { Box, Anchor, Heading } from 'grommet';
import { Link as LinkIcon } from 'grommet-icons';

export const ThemeDoc = ({ children }) => {
  const propsArray = [];
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i += 1) {
      propsArray.push(children[i]);
    }
  }
  return (
    <Box
      id="theme"
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
          Theme
        </Heading>
        <Anchor href="#theme" icon={<LinkIcon color="light-4" />} />
      </Box>
      {children}
    </Box>
  );
};

ThemeDoc.propTypes = {
  children: PropTypes.node,
};

ThemeDoc.defaultProps = {
  children: undefined,
};

ThemeDoc.displayName = 'ThemeDoc';
