import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { Twitter, Vimeo } from 'grommet-icons';
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
                A growing list of resources for grommet design and development,
                contributed by you.
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <Box
          direction='row'
          wrap={true}
          pad={{ horizontal: 'large', bottom: 'large' }}
          gap='large'
        >
          <Button href='https://vimeo.com/grommetux'>
            <Box pad='medium' round='medium' background='neutral-1'>
              <Vimeo size='large' />
              <Paragraph>
                Learn more about grommet from our screencasts.
              </Paragraph>
            </Box>
          </Button>

          <Button href='https://twitter.com/grommetux'>
            <Box pad='medium' round='medium' background='neutral-2'>
              <Twitter size='large' />
              <Paragraph>
                Keep up with the latest grommet news.
              </Paragraph>
            </Box>
          </Button>
        </Box>
      </Box>
    );
  }
}

Feed.contextTypes = {
  onColorChange: PropTypes.func,
};
