import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph } from 'grommet';
import Nav from '../components/Nav';

export default class About extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange(['#E1FBE4', '#FFD2D2']);
  }

  render() {
    return (
      <Box>
        <Box pad='large'>
          <Nav />
          <Box direction='row'>
            <Box margin={{ vertical: 'large' }} basis='medium'>
              <Heading level={1}>
                <strong>About</strong>
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

About.contextTypes = {
  onColorChange: PropTypes.func,
};
