import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { LiveProvider, LivePreview } from 'react-live';
/* eslint-disable import/no-duplicates */
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import * as Themes from 'grommet/themes';
import { hpe } from 'grommet-theme-hpe';
import { Anchor, Box, Heading, Text } from 'grommet';
import { Next } from 'grommet-icons';
/* eslint-enable import/no-duplicates */
import MonacoEditor from '../../components/Doc/MonacoEditor';
import Header from '../../components/Header';
import Section from './Section';

const scope = {
  ...Grommet,
  Icons,
  Themes,
  hpe,
  styled,
  css,
};

const options = {
  fontSize: 16,
  minimap: {
    enabled: false,
  },
  scrollBeyondLastLine: false,
};

const Dot = ({ color }) => (
  <svg viewBox="0 0 12 12" width={12} height={12}>
    <circle cx={6} cy={6} r={6} fill={color} />
  </svg>
);

Dot.propTypes = {
  color: PropTypes.string.isRequired,
};

const Start = () => {
  const [code, setCode] = React.useState(`const App = props => (
  <Grommet>
    <Box align="center" background="graph-2" pad="medium">
      <Button
        label="hello world"
        primary 
        onClick={() => alert('hello, world')}
      />
    </Box>
  </Grommet>
);

render(<App />);
`);

  return (
    <LiveProvider code={code} scope={scope} noInline style={{ height: '100%' }}>
      <Section pad={{ top: 'xlarge' }}>
        <Header
          level={2}
          label="start coding"
          summary="
            already working on a project, starting fresh, or just want to
            poke around and see how all this junk works?"
        />

        <Box
          direction="row-responsive"
          justify="center"
          gap="large"
          margin="large"
        >
          <Anchor
            href="https://github.com/grommet/grommet-starter-new-app"
            label={<Text size="large">Start New App</Text>}
            icon={<Next />}
            reverse
            target="_blank"
          />
          <Anchor
            href="https://github.com/grommet/grommet-starter-existing-app"
            label={<Text size="large">I have an Existing Codebase</Text>}
            icon={<Next />}
            reverse
            target="_blank"
          />
        </Box>

        <Box
          alignSelf="center"
          width="large"
          height="medium"
          margin={{ top: 'medium' }}
          round={{ corner: 'top' }}
          border={[{ side: 'top' }, { side: 'vertical' }]}
          pad={{ top: 'medium' }}
        >
          <MonacoEditor
            theme="vs-light"
            language="javascript"
            value={code}
            options={options}
            onChange={(newCode) => setCode(newCode)}
            editorDidMount={(editor) => {
              editor.focus();
              window.addEventListener('resize', () => editor.layout());
            }}
          />
        </Box>
      </Section>

      <Section background={{ color: 'brand', opacity: 'weak' }} pad="none">
        <Box
          alignSelf="center"
          background="graph-2"
          width="large"
          round={{ corner: 'bottom' }}
          margin={{ bottom: 'xlarge' }}
          overflow="hidden"
        >
          <LivePreview />
        </Box>

        <Header
          level={2}
          label="and start designing"
          summary="sticker sheets, design patterns, app templates, and icons
            galore."
        />

        <Box
          direction="row-responsive"
          justify="center"
          gap="large"
          margin="medium"
        >
          <Anchor
            href="//designer.grommet.io"
            label={<Text size="large">Grommet Designer</Text>}
            icon={<Next />}
            reverse
            target="_blank"
          />
          <Anchor
            href="//icons.grommet.io"
            label={<Text size="large">Grommet Icons</Text>}
            icon={<Next />}
            reverse
            target="_blank"
          />
        </Box>

        <Box
          alignSelf="center"
          width="large"
          height="small"
          round={{ corner: 'top' }}
          background="graph-2"
          margin={{ top: 'xlarge' }}
        >
          <Box alignSelf="start" direction="row" margin="medium" gap="small">
            <Dot color="#ff0000" />
            <Dot color="#ffff00" />
            <Dot color="#00ff00" />
          </Box>
          <Heading level={1} margin="large">
            Hello World!
          </Heading>
        </Box>
      </Section>
    </LiveProvider>
  );
};

export default Start;
