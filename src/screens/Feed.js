import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph } from 'grommet';
import Nav from '../components/Nav';

export default class Feed extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange(['#FFFFFF', '#FFFFFF']);
  }

  render() {
    return (
      <Box>
        <Box pad='large'>
          <Nav />
          <Box direction='row'>
            <Box margin={{ vertical: 'large' }} basis='medium'>
              <Heading level={1}>
                <strong>More stuff to read, see, and hear</strong>
              </Heading>
              <Paragraph size='large'>
                These are the building blocks of the grommet libray, master them, and become a l33t.
              </Paragraph>
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

Feed.contextTypes = {
  onColorChange: PropTypes.func,
};
