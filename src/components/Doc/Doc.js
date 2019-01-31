import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Anchor, Text } from 'grommet';
import Header from '../Header';
import { Code } from './Code';
import { Example } from './Example';
import { Props } from './Props';
import { ThemeProps } from './ThemeProps';

class Doc extends Component {
  state = {};

  componentDidMount() {
    const { name } = this.props;
    document.title = `${name} - Grommet`;
    window.scrollTo(0, 0);
  }

  render() {
    const {
      children,
      code,
      desc,
      name,
      example,
      examples,
      syntaxes,
      text,
      themeDoc,
      title,
    } = this.props;

    const [summary, ...details] = ((desc && desc.description) || text).split(
      '.',
    );

    return (
      <Box margin={{ bottom: 'large' }} width="xlarge" alignSelf="center">
        <Box align="center">
          <Header
            label={title || name}
            summary={summary}
            details={details.join('.')}
          />

          {example && !code && <Example example={example} />}
          {code && <Code code={code} name={name} />}

          {desc && desc.availableAt && (
            <Box margin={{ vertical: 'medium' }}>
              {Array.isArray(desc.availableAt) ? (
                <Box alignSelf="center" direction="row-responsive" gap="large">
                  {desc.availableAt.map(at => (
                    <Anchor
                      key={at.url}
                      href={at.url}
                      target="_blank"
                      label={<Text size="large">{at.label}</Text>}
                    />
                  ))}
                </Box>
              ) : (
                <Anchor
                  alignSelf="center"
                  href={desc.availableAt.url}
                  target="_blank"
                  label={<Text size="large">{desc.availableAt.label}</Text>}
                />
              )}
            </Box>
          )}
        </Box>

        {desc && <Props desc={desc} examples={examples} syntaxes={syntaxes} />}

        {themeDoc && (
          <ThemeProps
            examples={examples}
            syntaxes={syntaxes}
            themeDoc={themeDoc}
          />
        )}

        {children}
      </Box>
    );
  }
}

Doc.propTypes = {
  code: PropTypes.string,
  children: PropTypes.node,
  desc: PropTypes.shape({}),
  example: PropTypes.node,
  examples: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  props: PropTypes.shape({}),
  syntaxes: PropTypes.shape({}),
  text: PropTypes.string,
  themeDoc: PropTypes.shape({}),
  title: PropTypes.string,
};

Doc.defaultProps = {
  code: undefined,
  children: undefined,
  desc: undefined,
  example: null,
  examples: {},
  props: {},
  syntaxes: undefined,
  text: undefined,
  themeDoc: undefined,
  title: undefined,
};

export default Doc;
