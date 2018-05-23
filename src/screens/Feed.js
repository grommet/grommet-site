import React, { Component } from 'react';
import { Box, Button, Heading, Markdown, Paragraph, Text } from 'grommet';
import { Twitter, Vimeo } from 'grommet-icons';
import { withContext } from '../Context';
import Nav from '../components/Nav';

const ITEMS = [
  {
    date: '2018-02-16',
    label: 'Grommet v2.0.0-alpha.9 is out',
    snippet: <Twitter size='large' />,
    summary: `Grommet v2.0.0-alpha.9 is out. We put a lot of effort
    this past few weeks to get ready for the upcoming beta. So this
    alpha release has a lot of new features and a few breaking changes.`,
    url: 'https://twitter.com/grommetux/status/964660168582561793',
  },
  {
    date: '2017-11-03',
    label: 'Published react-formify',
    snippet: <Twitter size='large' />,
    summary: `We just published react-formify: an uncontrolled #react
    Form component with validation capabilities #javascript #ui`,
    url: 'https://twitter.com/grommetux/status/926603305463308288',
  },
  {
    date: '2017-02-17',
    label: 'Drone with Grommet interface',
    snippet: <Vimeo size='large' />,
    summary: 'A demo of Drone CI with Grommet interface',
    url: 'https://vimeo.com/204580945',
  },
];

const Item = ({
  date, label, snippet, summary, url,
}) => (
  <Box basis='medium' margin={{ bottom: 'large' }}>
    <Button href={url}>
      <Box pad='medium' round='medium' background='neutral-1'>
        <Text margin={{ bottom: 'small' }}>
          {(new Date(date))
            .toLocaleDateString(
              'en-US',
              { month: 'long', day: 'numeric', year: 'numeric' }
            )
          }
        </Text>
        {snippet}
        <Heading level={2}>{label}</Heading>
        <Markdown>{summary}</Markdown>
      </Box>
    </Button>
  </Box>
);

class Feed extends Component {
  constructor(props) {
    super(props);
    props.context.setColor('#FFFFFF');
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
          {ITEMS.map(item => <Item {...item} />)}
        </Box>
      </Box>
    );
  }
}

export default withContext(Feed);
