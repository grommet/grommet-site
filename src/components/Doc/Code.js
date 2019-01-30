import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LZString from 'lz-string';
/* eslint-disable import/no-duplicates */
import { Box, Button, Text } from 'grommet';
import { Code as CodeIcon, Refresh } from 'grommet-icons';
import { LiveError, LiveProvider, LivePreview } from 'react-live';
import MonacoEditor from 'react-monaco-editor';
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import * as Themes from 'grommet/themes';
/* eslint-enable import/no-duplicates */

const scope = {
  ...Grommet,
  Icons,
  Themes,
  styled,
  css,
};

const options = {
  fontSize: 16,
  minimap: {
    enabled: false,
  },
};

const editorDidMount = editor => {
  editor.focus();
  window.addEventListener('resize', () => editor.layout());
};

export class Code extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.code !== prevState.propsCode) {
      return { code: nextProps.code, propsCode: nextProps.code };
    }
    return null;
  }

  state = {};

  componentDidMount() {
    const { name } = this.props;
    const { propsCode } = this.state;
    const params = {};
    document.location.search
      .slice(1)
      .split('&')
      .forEach(p => {
        const [k, v] = p.split('=');
        params[k] = v;
      });
    const encodedCode = params.c || window.localStorage.getItem(`code-${name}`);
    if (encodedCode) {
      const code = LZString.decompressFromEncodedURIComponent(encodedCode);
      this.setState({ code, editing: code !== propsCode });
    }
  }

  onChange = code => {
    const { name } = this.props;
    const { propsCode } = this.state;
    this.setState({ code });
    if (propsCode !== code) {
      const encodedCode = LZString.compressToEncodedURIComponent(code);
      window.localStorage.setItem(`code-${name}`, encodedCode);
      window.history.replaceState(null, '', `?c=${encodedCode}`);
    } else {
      window.localStorage.removeItem(`code-${name}`);
      window.history.replaceState(null, '', `?`);
    }
  };

  render() {
    const { code, editing, propsCode } = this.state;
    const lines = code.split('\n').length;
    let editorHeight;
    if (lines <= 4) editorHeight = 'xsmall';
    else if (lines <= 8) editorHeight = 'small';
    else if (lines <= 16) editorHeight = 'medium';
    else editorHeight = 'large';

    return (
      <LiveProvider code={code} scope={scope}>
        <Box direction="row" margin={{ bottom: 'large' }}>
          <Box pad="medium" />
          <Box width="large" elevation="large">
            <Box pad="medium">
              <LivePreview />
            </Box>
            {editing && (
              <Fragment>
                <Box flex={false} height={editorHeight} width="large">
                  <MonacoEditor
                    theme="vs-dark"
                    language="javascript"
                    value={code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={editorDidMount}
                  />
                </Box>
                <Box pad={{ horizontal: 'medium' }}>
                  <Text color="status-critical">
                    <LiveError />
                  </Text>
                </Box>
              </Fragment>
            )}
          </Box>
          <Box justify="between">
            <Button
              icon={<CodeIcon />}
              onClick={() => this.setState({ editing: !editing })}
            />
            {editing && code !== propsCode && (
              <Button
                icon={<Refresh />}
                onClick={() => this.onChange(propsCode)}
              />
            )}
          </Box>
        </Box>
      </LiveProvider>
    );
  }
}

Code.propTypes = {
  code: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  name: PropTypes.string.isRequired,
};
