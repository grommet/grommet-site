import React, { Component } from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { withContext } from '../Context';
import Nav from '../components/Nav';

class License extends Component {
  constructor(props) {
    super(props);
    props.context.setColor(['#E1FBE4', '#FFD2D2']);
  }

  render() {
    return (
      <Box>
        <Box pad='large'>
          <Nav />
          <Box direction='row'>
            <Box margin={{ vertical: 'large' }} basis='medium'>
              <Heading level={1}>
                <strong>License</strong>
              </Heading>
              <Paragraph size='large'>
                <strong>TBD</strong>
              </Paragraph>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withContext(License);
