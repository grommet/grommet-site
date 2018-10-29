import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { LiveProvider, LivePreview } from 'react-live';
import MonacoEditor from 'react-monaco-editor';
/* eslint-disable import/no-duplicates */
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import * as Themes from 'grommet/themes';
import {
  Anchor, Box, Heading, Button,
  Text,
} from 'grommet';
import { Next, Share } from 'grommet-icons';
/* eslint-enable import/no-duplicates */
import Header from '../../components/Header';
import RoutedAnchor from '../../components/RoutedAnchor';
import Section from './Section';

const scope = {
  ...Grommet, Icons, Themes, styled, css,
};

const options = {
  fontSize: 16,
  minimap: {
    enabled: false,
  },
};

const editorDidMount = (editor) => {
  editor.focus();

  window.addEventListener('resize', () => editor.layout());
};

const Dot = ({ color }) => (
  <svg viewBox='0 0 12 12' width={12} height={12}>
    <circle cx={6} cy={6} r={6} fill={color} />
  </svg>
);

Dot.propTypes = {
  color: PropTypes.string.isRequired,
};

export default class Home extends Component {
  state = {
    code: `const App = props => (
  <Grommet theme={grommet}>
    <Box align="center" background="brand">
      <Button
        label="hello world" 
        onClick={() => alert('hello, world')}
      />
    </Box>
  </Grommet>
);

render(<App />);
`,
  }

  render() {
    const { code } = this.state;
    return (
      <LiveProvider
        code={code}
        scope={scope}
        noInline
        style={{ height: '100%' }}
      >
        <Section pad={{ top: 'xlarge' }}>
          <Header
            level={2}
            label='start coding'
            summary={(
              <span>
                already working on a project, starting fresh, or just want to
                poke around and see how all this junk works?
              </span>
            )}
          />

          <Box
            direction='row-responsive'
            justify='center'
            gap='large'
            margin='large'
          >
            <RoutedAnchor
              path='/start'
              label={<Text size='large'>Start New App</Text>}
              icon={<Next />}
              reverse
            />
            <RoutedAnchor
              path='/start'
              label={<Text size='large'>I have an Exisiting Codebase</Text>}
              icon={<Next />}
              reverse
            />
          </Box>

          <Box alignSelf='center' width='large' margin={{ top: 'medium' }}>
            <Box
              border
              round={{ corner: 'top' }}
              direction='row'
              justify='between'
              align='center'
              pad={{ left: 'medium', vertical: 'small', right: 'small' }}
            >
              <RoutedAnchor
                path='/play'
                color='brand'
                label='grommet playground'
              />
              <Button icon={<Share />} />
            </Box>
            <Box border={{ side: 'vertical' }} height='medium'>
              <MonacoEditor
                theme='vs-light'
                language='javascript'
                value={code}
                options={options}
                onChange={newCode => this.setState({ code: newCode })}
                editorDidMount={editorDidMount}
              />
            </Box>
          </Box>
        </Section>

        <Section background='neutral-1' pad='none'>
          <Box
            alignSelf='center'
            background='brand'
            width='large'
            elevation='small'
            pad='medium'
            round={{ corner: 'bottom' }}
            margin={{ bottom: 'xlarge' }}
          >
            <LivePreview />
          </Box>

          <Header
            level={2}
            label='and start designing'
            summary={(
              <span>
                sticker sheets, design patterns, app templates,
                and icons galore.
              </span>
            )}
          />

          <Box
            direction='row-responsive'
            justify='center'
            gap='large'
            margin='medium'
          >
            <Anchor
              href='//github.com/grommet/grommet-design'
              label={<Text size='large'>Grommet Design Kit</Text>}
              icon={<Next />}
              color='accent-2'
              reverse
            />
            <Anchor
              href='//grommet.io/grommet-icons'
              label={<Text size='large'>Grommet Icons</Text>}
              icon={<Next />}
              color='accent-2'
              reverse
            />
          </Box>

          <Box
            alignSelf='center'
            width='large'
            height='small'
            round={{ corner: 'top' }}
            background={{ color: '#2C176D' }}
            margin={{ top: 'xlarge' }}
          >
            <Box
              alignSelf='start'
              direction='row'
              margin='medium'
              gap='small'
            >
              <Dot color='#ff0000' />
              <Dot color='#ffff00' />
              <Dot color='#00ff00' />
            </Box>
            <Heading level={1} color='neutral-1' margin='large'>
              Hello World!
            </Heading>
          </Box>
        </Section>
      </LiveProvider>
    );
  }
}
