import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Anchor, Box, Heading, Markdown, Paragraph, Text } from 'grommet';
import Page from '../components/Page';

const Item = ({ label, snippet, description }) => (
  <Box border='bottom' margin={{ bottom: 'medium' }} pad={{ bottom: 'small' }}>
    <Box direction='row' responsive={true} justify='between'>
      <Text size='large' margin={{ bottom: 'small' }}><strong>{label}</strong></Text>
      <Text>{snippet}</Text>
    </Box>
    <Markdown>{description}</Markdown>
  </Box>
);

export default class Start extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange('#D8FDE6');
  }

  render() {
    return (
      <Page background={{ image: 'url("img/shapes.svg")' }}>
        <Box direction='row-responsive' margin={{ bottom: 'large' }}>
          <Box basis='1/2'>
            <Heading level={1} margin={{ top: 'none', bottom: 'small' }}>
              <strong>Use the grommet React.js library</strong>
            </Heading>
            <Paragraph size='large'>
              Grommet is delivered as an npm package.
            </Paragraph>
          </Box>
        </Box>

        <Box pad={{ bottom: 'large' }}>
          <Box pad='large' round='large' background='white'>

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
      </Page>
    );
  }
}

Start.contextTypes = {
  onColorChange: PropTypes.func,
};
