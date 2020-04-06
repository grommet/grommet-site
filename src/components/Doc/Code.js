import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LZString from 'lz-string';
/* eslint-disable import/no-duplicates */
import { Box, Button, Text } from 'grommet';
import { Refresh } from 'grommet-icons';
import { LiveError, LiveProvider, LivePreview } from 'react-live';
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import * as Themes from 'grommet/themes';
import MonacoEditor from './MonacoEditor';
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
  // editor.focus();
  window.addEventListener('resize', () => editor.layout());
};

export const Code = ({ basis = ['1/2', '1/2'], code: propsCode, name }) => {
  const [editing] = React.useState(true);
  const [code, setCode] = React.useState(propsCode);

  React.useEffect(() => {
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
      const nextCode = LZString.decompressFromEncodedURIComponent(encodedCode);
      setCode(nextCode);
    }
  }, []);

  const onChange = nextCode => {
    setCode(nextCode);
    if (propsCode !== nextCode) {
      const encodedCode = LZString.compressToEncodedURIComponent(nextCode);
      window.localStorage.setItem(`code-${name}`, encodedCode);
      window.history.replaceState(null, '', `?c=${encodedCode}`);
    } else {
      window.localStorage.removeItem(`code-${name}`);
      window.history.replaceState(null, '', `?`);
    }
  };

  const lines = code.split('\n').length;
  let editorHeight;
  if (lines <= 4) editorHeight = 'xsmall';
  else if (lines <= 8) editorHeight = 'small';
  else editorHeight = 'medium';

  return (
    <Box
      alignSelf="stretch"
      margin={{ top: 'large' }}
      border={{ color: 'brand' }}
      round
    >
      <LiveProvider code={code} scope={scope}>
        <Box direction="row-responsive">
          <Box flex basis={basis[0]} pad="medium" align="center">
            <LivePreview />
          </Box>
          {editing && (
            <Box
              flex
              basis={basis[1]}
              border={{ side: 'left', color: 'brand' }}
              pad={{ vertical: 'small', right: 'small' }}
            >
              <Box height={editorHeight}>
                <MonacoEditor
                  theme="vs-light"
                  language="javascript"
                  value={code}
                  options={options}
                  onChange={onChange}
                  editorDidMount={editorDidMount}
                />
              </Box>
              <Box pad={{ horizontal: 'medium' }}>
                <Text color="status-critical">
                  <LiveError />
                </Text>
              </Box>
              {editing && code !== propsCode && (
                <Button
                  icon={<Refresh />}
                  onClick={() => onChange(propsCode)}
                />
              )}
            </Box>
          )}
        </Box>
      </LiveProvider>
    </Box>
  );
};

Code.propTypes = {
  basis: PropTypes.arrayOf(PropTypes.string),
  code: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  name: PropTypes.string.isRequired,
};

Code.defaultProps = {
  basis: undefined,
};
