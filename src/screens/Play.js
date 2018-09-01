import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import MonacoEditor from 'react-monaco-editor';
/* eslint-disable import/no-duplicates */
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import * as Themes from 'grommet/themes';

import { Box, Select } from 'grommet';
import { Previous } from 'grommet-icons';
/* eslint-enable import/no-duplicates */

import {
  LiveProvider,
  LivePreview,
} from 'react-live';

import { withContext } from '../Context';
import RoutedButton from '../components/RoutedButton';
import { PlaygroundError, PlaygroundPlaceholder } from '../components/playground';
import * as PlaygroundExamples from '../components/playground/examples';

const StyledPreview = styled(Box)`
  .react-live-preview > * {
    max-width: 100%;
    max-height: 100%;
  }
`;

const scope = {
  ...Grommet, Icons, Themes, styled, css,
};

const allPlaygrounds = Object.keys(PlaygroundExamples).map(
  value => value.replace(/([A-Z])/g, ' $1').trim()
);

const options = {
  fontSize: 14,
  minimap: {
    enabled: false,
  },
};

const editorDidMount = (editor) => {
  editor.focus();

  window.addEventListener('resize', () => editor.layout());
};

class Play extends Component {
  state = {
    selectedPlayground: 'Hello World',
    code: PlaygroundExamples.HelloWorld,
  }

  componentDidMount() {
    document.title = 'Play - Grommet';
  }

  render() {
    const { code, selectedPlayground } = this.state;
    return (
      <LiveProvider
        code={code}
        scope={scope}
        noInline={true}
        style={{ height: '100vh' }}
      >
        <Box direction='row' fill={true}>
          <Box basis='1/2'>
            <Box
              direction='row'
              tag='header'
              background='dark-1'
              pad='small'
              justify='between'
              align='center'
              flex={false}
            >
              <RoutedButton icon={<Previous />} path='/' label='Back' plain={true} />
              <Select
                value={selectedPlayground}
                options={allPlaygrounds}
                onChange={
                  ({ option }) => this.setState({
                    selectedPlayground: option,
                    code: PlaygroundExamples[option.replace(/ /g, '')],
                  })
                }
              />
            </Box>
            <Box flex={true} overflow='hidden'>
              <MonacoEditor
                theme='vs-dark'
                language='javascript'
                value={code}
                options={options}
                onChange={newCode => this.setState({ code: newCode })}
                editorDidMount={editorDidMount}
              />
            </Box>
            <PlaygroundError />
          </Box>
          <StyledPreview basis='1/2' background='white'>
            <LivePreview />
            <PlaygroundPlaceholder />
          </StyledPreview>
        </Box>
      </LiveProvider>
    );
  }
}

export default withContext(Play);
