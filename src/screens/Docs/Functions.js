import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading, Paragraph } from 'grommet';
import Page from '../../components/Page';
import Header from '../../components/Header';
import { Code } from '../../components/Doc/Code';

const Intro = ({ code, name }) => (
  <Box margin={{ bottom: 'large' }} width="xlarge" alignSelf="center">
    <Box align="center">
      <Header label={name} summary="Grommet util functions" />

      {code && <Code code={code} name={name} />}
    </Box>
  </Box>
);

Intro.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
};

Intro.defaultProps = {
  code: undefined,
  name: undefined,
};

const FunctionTile = ({ name, desc }) => (
  <Box border="top" direction="row" gap="xlarge">
    <Heading>{name}</Heading>
    <Paragraph>{desc}</Paragraph>
  </Box>
);

FunctionTile.propTypes = {
  desc: PropTypes.string,
  name: PropTypes.string,
};

FunctionTile.defaultProps = {
  desc: undefined,
  name: undefined,
};

export default () => (
  <Page>
    <Box width="xlarge" alignSelf="center">
      <Intro
        name="Functions"
        code={`<ThemeContext.Extend
  value={deepMerge(grommet, { global: { colors: { doc: "#ff99cc" } } })}>
    <Box pad="large" background="doc" />
    <Text>
        grommet theme and a custom theme are generating a new theme using deepMerge.
    </Text>
</ThemeContext.Extend>`}
      />
      <FunctionTile
        name="deepMerge"
        desc="A function that recieves two themes and returns a theme that includes
          both theme values. deepMerge examples could be found on Custom stories in storybook."
      />
      <FunctionTile
        name="deepFreeze"
        desc="A function that recieves two themes and returns a theme that includes
          both theme values."
      />
    </Box>
  </Page>
);
