import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Anchor, Box, Heading, Markdown, Paragraph, Text } from 'grommet';
import Nav from '../components/Nav';

const Item = ({ label, snippet, description }) => (
  <Box border='bottom' margin={{ bottom: 'medium' }}>
    <Box direction='row' justify='between' align='center'>
      <Text size='large'><strong>{label}</strong></Text>
      <Text>{snippet}</Text>
    </Box>
    <Markdown>{description}</Markdown>
  </Box>
);

export default class Start extends Component {
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
                <strong>Use the grommet React.js library</strong>
              </Heading>
              <Paragraph size='large'>
                Grommet is delivered as an npm package.
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <Box pad={{ horizontal: 'large', bottom: 'large' }}>
          <Box pad='large' round='large' background='light-1'>

            <Heading level={2}>New Application</Heading>
            <Item
              label='grommet cli'
              snippet={(<code>npm install -g grommet-cli</code>)}
              description='Get grommet command line tools on your local environment.'
            />
            <Item
              label='new application'
              snippet={(<code>grommet new [app-name]</code>)}
              description='Generate a new application.'
            />

            <Heading level={2}>Existing Application</Heading>
            <Item
              label='grommet library'
              snippet={(<code>npm install grommet --save</code>)}
              description='Get grommet on your local environment.'
            />
            <Item
              label='grommet icons'
              snippet={(<code>npm install grommet-icons --save</code>)}
              description='SVG icon library built for React apps and most
                importantly grommet! Learn
                more, [grommet.io/grommet-icons](http://grommet.io/grommet-icons/).'
            />

            <Heading level={2}>Design Elements</Heading>
            <Item
              label='sketch resources'
              snippet={(
                <Anchor href='https://github.com/grommet/grommet-design'>
                  github
                </Anchor>
              )}
              description='Are you a designer? Use [Sketch](https://www.sketchapp.com)?
                Grab our library and templates to start designing with grommet.'
            />

          </Box>
        </Box>
      </Box>
    );
  }
}

Start.contextTypes = {
  onColorChange: PropTypes.func,
};
