import React, { Component } from 'react';
import { Anchor, Box, Image, Paragraph, Text } from 'grommet';
import { Github, Slack, Twitter } from 'grommet-icons';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import RoutedButton from '../../components/RoutedButton';
import Section from './Section';
import Hero from './Hero';
import Composable from './Composable';
import Accessible from './Accessible';
import Themable from './Themable';
import Layouts from './Layouts';
import Start from './Start';
import Messages from './Messages';

export default class Home extends Component {
  componentDidMount() {
    document.title = 'Grommet';
  }

  render() {
    return (
      <Box>
        <Section>
          <Nav />

          <Hero />

          <Header
            label="streamline the way you develop apps"
            summary={
              <span>
                build responsive and accessible mobile-first projects for the
                web with an easy to use component library
              </span>
            }
          />

          <Box
            direction="row-responsive"
            gap="large"
            justify="center"
            margin={{ vertical: 'xlarge' }}
          >
            <Anchor
              target="_blank"
              a11yTitle="Follow us on Twitter"
              href="https://twitter.com/grommet_io"
              icon={<Twitter color="brand" size="large" />}
              label={<Text size="large">Follow us on Twitter</Text>}
            />
            <Anchor
              target="_blank"
              a11yTitle="Share feedback on Github"
              href="https://github.com/grommet/grommet"
              icon={<Github color="brand" size="large" />}
              label={<Text size="large">Share feedback on GitHub</Text>}
            />
            <Anchor
              target="_blank"
              a11yTitle="Chat with us on Slack"
              href="https://slackin.grommet.io/"
              icon={<Slack color="brand" size="large" />}
              label={<Text size="large">Chat with us on Slack</Text>}
            />
          </Box>
        </Section>

        <Section background="light-1" pad={{ top: 'xlarge' }} width="auto">
          <Header
            level={2}
            label="part design system, part framework, and all awesome"
            summary={
              <span>
                grommet is a <Anchor href="https://reactjs.org">react</Anchor>
                -based framework that provides accessibility, modularity,
                responsiveness, and theming in a tidy package
              </span>
            }
          />

          <Box direction="row" wrap justify="center">
            <Box direction="row-responsive" justify="center">
              <Composable />
              <Accessible />
            </Box>

            <Box direction="row-responsive" justify="center">
              <Themable />
              <Layouts />
            </Box>
          </Box>
        </Section>

        <Start />

        <Messages />

        <Section pad={{ top: 'xlarge', left: 'xlarge', right: 'xlarge' }}>
          <Header
            level={2}
            label="try grommet"
            summary={
              <span>
                we want to make grommet the best ui framework on react. so, come
                for the code and stay for the peeps.
              </span>
            }
          />

          <RoutedButton alignSelf="center" path="/components" plain>
            <Box
              pad={{ vertical: 'small', horizontal: 'medium' }}
              round="xlarge"
              background="accent-2"
            >
              <Text size="large">components</Text>
            </Box>
          </RoutedButton>

          <Box direction="row-responsive" justify="between" align="end">
            <Box margin={{ vertical: 'xlarge' }}>
              <Box direction="row" gap="small">
                <Anchor
                  target="_blank"
                  a11yTitle="Follow us on Twitter"
                  href="https://twitter.com/grommet_io"
                  icon={<Twitter color="brand" size="large" />}
                />
                <Anchor
                  target="_blank"
                  a11yTitle="Share feedback on Github"
                  href="https://github.com/grommet/grommet"
                  icon={<Github color="brand" size="large" />}
                />
                <Anchor
                  target="_blank"
                  a11yTitle="Chat with us on Slack"
                  href="https://slackin.grommet.io/"
                  icon={<Slack color="brand" size="large" />}
                />
              </Box>
              <Paragraph>
                Maintained by the core team and the help of our contributors.
                you can always kick it old school with{' '}
                <Anchor target="_blank" href="https://v1.grommet.io">
                  Grommet v1
                </Anchor>
                .
              </Paragraph>
            </Box>

            <Image src="/img/stak-hurrah.svg" />
          </Box>
        </Section>
      </Box>
    );
  }
}
