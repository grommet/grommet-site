import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph } from 'grommet';

const Message = ({
  image, name, summary, ...rest
}) => (
  <Box basis='medium' align='center'>
    <Box height='xsmall' align='center' justify='center' {...rest}>
      {image}
    </Box>
    <Box width='medium' pad='medium'>
      <Heading level={3} textAlign='center' margin='none'>
        {name}
      </Heading>
      <Paragraph size='large' textAlign='center'>
        {summary}
      </Paragraph>
    </Box>
  </Box>
);

Message.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.node.isRequired,
};

export default Message;
