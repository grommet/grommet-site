import React from 'react';
import { Anchor, Box, Button, Image, Paragraph, Text } from 'grommet';
import { Github, Slack, Twitter } from 'grommet-icons';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Section from './Section';
import Hero from './Hero';
import Composable from './Composable';
import Accessible from './Accessible';
import Themable from './Themable';
import Layouts from './Layouts';
import Start from './Start';
import Messages from './Messages';
import { Tools } from './Tools';

const HomePage = () => (
  <Box>
    <Section>
      <Nav />

      <Hero />

      <Header
        label="streamline the way you develop apps"
        summary="build responsive and accessible mobile-first projects for the
              web with an easy to use component library"
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
          href="https://slack-invite.grommet.io"
          icon={<Slack color="brand" size="large" />}
          label={<Text size="large">Chat with us on Slack</Text>}
        />
      </Box>
    </Section>

    <Section background="background-back" pad={{ top: 'xlarge' }} width="auto">
      <Header
        level={2}
        label="part design system, part framework, and all awesome"
        summary={
          <Paragraph size="xxlarge" textAlign="center">
            grommet is a{' '}
            <Anchor href="https://reactjs.org" a11yTitle="reactjs">
              react
            </Anchor>
            -based framework that provides accessibility, modularity,
            responsiveness, and theming in a tidy package
          </Paragraph>
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

    <Tools />

    <Section pad={{ top: 'xlarge', left: 'xlarge', right: 'xlarge' }}>
      <Header
        level={2}
        label="try grommet"
        summary="we want to make grommet the best ui framework on react.
              so, come for the code and stay for the peeps."
      />

      <Box direction="row" gap="medium" alignSelf="center">
        <Button primary label="components" as="a" href="/components" />
        <Button secondary label="docs" as="a" href="/docs" />
      </Box>

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
              href="https://slack-invite.grommet.io"
              icon={<Slack color="brand" size="large" />}
            />
          </Box>
          <Paragraph>
            Grommet is a&nbsp;
            <Anchor
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
            >
              PWA
            </Anchor>
            . Save it for offline reading.
          </Paragraph>
          <Paragraph>
            maintained by the core team with the help of our contributors. you
            can always kick it old school with&nbsp;
            <Anchor target="_blank" href="https://v1.grommet.io">
              Grommet v1
            </Anchor>
            .
          </Paragraph>
        </Box>

        <Image
          src="/img/stak-hurrah.svg"
          a11yTitle="gremlin"
          alt="Grommet gremlin with one arm above head and other hand holding a wrench"
        />
      </Box>
    </Section>
  </Box>
);

export default HomePage;
