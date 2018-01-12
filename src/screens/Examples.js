import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph } from 'grommet';
import Nav from '../components/Nav';

export default class Examples extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange(['#FFCCCC', '#FFF9ED']);
  }

  render() {
    return (
      <Box>
        <Box pad='large'>
          <Nav />
          <Box direction='row'>
            <Box margin={{ vertical: 'large' }} basis='medium'>
              <Heading level={1}>
                <strong>See examples of inspiration</strong>
              </Heading>
              <Paragraph size='large'>
                Examples of grommet in use. An expanding list of examples built by the community.
              </Paragraph>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

Examples.contextTypes = {
  onColorChange: PropTypes.func,
};
