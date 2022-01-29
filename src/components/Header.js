import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Markdown, Paragraph } from 'grommet';

const Header = ({ align = 'center', details, label, level, size, summary }) => {
  const textAlign = useMemo(
    () => (align === 'center' ? align : undefined),
    [align],
  );
  const paragraphComponent = useCallback(
    () => <Paragraph textAlign={textAlign} />,
    [textAlign],
  );
  return (
    <Box align={align}>
      <Heading level={level} size={size} textAlign={textAlign} margin="none">
        {label}
      </Heading>
      {summary &&
        ((typeof summary === 'string' && (
          <Paragraph size="xxlarge" textAlign={textAlign}>
            {summary.toLowerCase()}
          </Paragraph>
        )) ||
          summary)}
      {details && (
        <Markdown components={{ p: paragraphComponent }}>
          {details.replace('<', '&lt;').replace('>', '&gt;').trim()}
        </Markdown>
      )}
    </Box>
  );
};

Header.propTypes = {
  align: PropTypes.string,
  details: PropTypes.string,
  label: PropTypes.string.isRequired,
  level: PropTypes.number,
  size: PropTypes.oneOf(['xlarge', 'large']),
  summary: PropTypes.node,
};

Header.defaultProps = {
  align: undefined,
  details: undefined,
  level: 1,
  size: 'large',
  summary: undefined,
};

export default Header;
