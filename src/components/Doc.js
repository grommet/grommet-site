import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import stringify from 'json-stringify-pretty-compact';
import {
  Box,
  Anchor,
  Heading,
  Keyboard,
  Markdown,
  Text,
  ThemeContext,
} from 'grommet';
import { Link as LinkIcon, Next, Previous } from 'grommet-icons';
import Header from './Header';
import RoutedButton from './RoutedButton';
import { Pusher } from '../Router';
import { genericSyntaxes } from '../utils/props';
import { nameToPath, nextComponent, previousComponent } from '../structure';

// parseFormat() parses the react-desc property format string into
// an object that makes it easier for us to style the content.
const parseFormat = format => {
  const lines = format.split(/\n/);
  const working = [{ values: [] }];
  lines.forEach(line => {
    if (line.indexOf('{') !== -1) {
      working.unshift({ type: 'object', values: [] });
    } else if (line.indexOf('}') !== -1) {
      while (working[0].type !== 'object') {
        const value = working.shift();
        working[0].values.push(value);
      }
      const value = working.shift();
      working[0].values.push(value);
    } else if (line.indexOf('[') !== -1 && line.indexOf(']') !== -1) {
      working[0].values.push({
        type: 'array',
        values: [line.slice(1, line.length - 1)],
      });
    } else if (line.indexOf('[') !== -1) {
      working.unshift({ type: 'array', values: [] });
    } else if (line.indexOf(']') !== -1) {
      while (working[0].type !== 'array') {
        const value = working.shift();
        working[0].values.push(value);
      }
      const value = working.shift();
      working[0].values.push(value);
    } else if (line.indexOf(':') !== -1 && line.indexOf(',') !== -1) {
      const parts = line.split(':');
      working[0].values.push({
        type: 'property',
        name: `${parts[0]}:`,
        values: [parts[1]],
      });
    } else if (line.indexOf(':') !== -1) {
      working.unshift({ type: 'property', name: line, values: [] });
    } else if (line.indexOf(',') !== -1) {
      working[0].values.push(line);
      const value = working.shift();
      working[0].values.push(value);
    } else {
      working[0].values.push(line);
    }
  });
  return working.shift();
};

const Values = ({ name, values, defaultValue }) => {
  let content = (
    <Box>
      {values
        .filter(v => !v.type)
        .map((value, index) => {
          if (value === 'boolean') {
            return [true, false].map(v => {
              if (v === defaultValue) {
                return (
                  <span key={v}>
                    <strong>{stringify(v)}</strong>
                  </span>
                );
              }
              return <span key={v}>{stringify(v)}</span>;
            });
          }
          let valueContent = value.trim();
          let isDefault =
            valueContent === defaultValue ||
            (defaultValue === true && valueContent === 'true') ||
            (defaultValue === false && valueContent === 'false');
          if (
            values.length === 1 &&
            valueContent === 'string' &&
            defaultValue
          ) {
            valueContent = defaultValue;
            isDefault = true;
          }
          if (value !== 'true' && value !== 'false') {
            valueContent = `"${valueContent}"`;
          }
          if (isDefault) {
            valueContent = <strong>{valueContent}</strong>;
          }
          return <span key={`${index + 0}`}>{valueContent}</span>;
        })}
    </Box>
  );
  if (name) {
    content = (
      <Box direction="row" gap="small">
        {name}
        {content}
      </Box>
    );
  }
  content = (
    <Box>
      {content}
      {values
        .filter(v => v.type)
        .map((value, index) => (
          <Value key={`${index + 0}`} value={value} />
        ))}
    </Box>
  );
  return content;
};

const Value = ({ value: { name, type, values }, defaultValue }) => {
  let content = (
    <Values name={name} values={values} defaultValue={defaultValue} />
  );
  if (type === 'object' || type === 'array') {
    content = (
      <Box>
        {type === 'array' ? '[' : '{'}
        <Box pad={{ left: 'medium' }}>{content}</Box>
        {type === 'array' ? ']' : '}'}
      </Box>
    );
  }
  return content;
};

const Syntax = ({ syntax, format, defaultValue, leaf }) => {
  if (!leaf && Array.isArray(syntax)) {
    return (
      <Fragment>
        {syntax.map((s, i) => (
          <Syntax
            key={`${i + 0}`}
            syntax={s}
            leaf
            defaultValue={defaultValue}
          />
        ))}
      </Fragment>
    );
  }
  let content = syntax;
  if (typeof syntax === 'object' && syntax.VALUES) {
    return Object.keys(syntax.VALUES).map(key => {
      const values = syntax.VALUES[key];
      return (
        <Box key={key} margin={{ top: 'small' }}>
          <Text color="dark-3">{`where ${key} could be:`}</Text>
          {Array.isArray(values) ? (
            values.map(v => (
              <Text key={v} margin={{ left: 'medium' }}>
                {stringify(v)}
              </Text>
            ))
          ) : (
            <Text>{values}</Text>
          )}
        </Box>
      );
    });
  }
  if (
    format !== 'function' &&
    syntax[0] !== '(' &&
    syntax[0] !== '<' &&
    syntax[0] !== '['
  ) {
    content = stringify(syntax, { maxLength: 40 });
    content = <code className="language-json">{content}</code>;
  }
  if (defaultValue !== undefined && syntax === defaultValue) {
    content = <strong>{content}</strong>;
  }
  return <pre style={{ margin: 0, whiteSpace: 'pre-line' }}>{content}</pre>;
};

Syntax.propTypes = {
  syntax: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  format: PropTypes.string,
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  leaf: PropTypes.bool,
};

Syntax.defaultProps = {
  defaultValue: undefined,
  format: undefined,
  leaf: false,
};

class Prop extends Component {
  state = {};

  render() {
    const { property, syntax, first } = this.props;
    const { over } = this.state;
    return (
      <Box
        id={property.name}
        border="bottom"
        gap="small"
        pad={{ top: !first ? 'medium' : undefined, bottom: 'medium' }}
        onMouseOver={() => this.setState({ over: true })}
        onMouseOut={() => this.setState({ over: false })}
        onFocus={() => this.setState({ over: true })}
        onBlur={() => this.setState({ over: false })}
      >
        <Box direction="row" justify="between" align="center">
          <Heading level={3} margin="none">
            {property.name}
          </Heading>
          <Anchor
            href={`#${property.name}`}
            icon={<LinkIcon color={over ? 'light-4' : 'white'} />}
          />
        </Box>
        <Box direction="row-responsive" justify="between" align="start">
          <Box basis="1/2" margin={{ right: 'large', bottom: 'medium' }}>
            <Markdown>
              {property.description.replace('<', '&lt;').replace('>', '&gt;')}
            </Markdown>
          </Box>
          <Box flex align="start">
            <Text color="neutral-1">
              {(syntax && (
                <Syntax
                  syntax={syntax}
                  format={property.format}
                  defaultValue={property.defaultValue}
                />
              )) ||
                property.type || (
                  <Value
                    value={parseFormat(property.format)}
                    defaultValue={property.defaultValue}
                  />
                )}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

Prop.propTypes = {
  property: PropTypes.shape({}).isRequired,
  syntax: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  first: PropTypes.bool.isRequired,
};

Prop.defaultProps = {
  syntax: undefined,
};

const themeValue = (theme, path) => {
  const parts = path.split('.');
  let node = theme;
  while (node && parts.length) {
    node = node[parts.shift()];
  }
  return node;
};

// eslint-disable-next-line react/no-multi-comp
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
      desc,
      name,
      example,
      examples,
      syntaxes,
      text,
      themeDoc,
      title,
    } = this.props;

    const nextName = nextComponent(name);
    const nextLink = nextName ? (
      <RoutedButton path={nameToPath(nextName)}>
        <Box pad={{ vertical: 'medium' }}>
          <Next />
        </Box>
      </RoutedButton>
    ) : (
      <Box width="xxsmall" />
    );

    const previousName = previousComponent(name);
    const previousLink = previousName ? (
      <RoutedButton path={nameToPath(previousName)}>
        <Box pad={{ vertical: 'medium' }}>
          <Previous />
        </Box>
      </RoutedButton>
    ) : (
      <Box width="xxsmall" />
    );

    const [summary, ...details] = ((desc && desc.description) || text).split(
      '.',
    );

    return (
      <Box margin={{ bottom: 'large' }} width="xlarge" alignSelf="center">
        <Pusher>
          {push => (
            <Keyboard
              target="document"
              onLeft={previousName && (() => push(nameToPath(previousName)))}
              onRight={nextName && (() => push(nameToPath(nextName)))}
            >
              <Box direction="row" justify="between">
                {previousLink}
                <Box align="center">
                  {example && (
                    <Box
                      alignSelf="center"
                      align="center"
                      pad="medium"
                      elevation="large"
                      margin={{ bottom: 'large' }}
                    >
                      {example}
                    </Box>
                  )}

                  <Header
                    label={title || name}
                    summary={summary}
                    details={details.join('.')}
                  />

                  {desc && desc.availableAt && (
                    <Box margin={{ vertical: 'medium' }}>
                      {Array.isArray(desc.availableAt) ? (
                        <Box
                          alignSelf="center"
                          direction="row-responsive"
                          gap="large"
                        >
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
                          label={
                            <Text size="large">{desc.availableAt.label}</Text>
                          }
                        />
                      )}
                    </Box>
                  )}
                </Box>
                {nextLink}
              </Box>
            </Keyboard>
          )}
        </Pusher>

        {desc && (
          <Box
            id="props"
            margin={{ vertical: 'large' }}
            border={{ side: 'top', size: 'medium', color: 'brand' }}
          >
            <Box
              direction="row"
              justify="between"
              align="center"
              margin={{ top: 'medium', bottom: 'xlarge' }}
            >
              <Heading level={2} margin="none">
                Props
              </Heading>
              <Anchor href="#props" icon={<LinkIcon color="light-4" />} />
            </Box>
            {desc.properties ? (
              desc.properties
                .sort((a, b) => {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  return 0;
                })
                .map((property, index) => (
                  <Prop
                    key={property.name}
                    property={property}
                    first={!index}
                    syntax={(syntaxes || genericSyntaxes)[property.name]}
                    example={examples[property.name]}
                  />
                ))
            ) : (
              <Text color="light-5">No properties</Text>
            )}
          </Box>
        )}

        {themeDoc && (
          <Box
            id="theme"
            margin={{ vertical: 'large' }}
            border={{ side: 'top', size: 'medium', color: 'brand' }}
          >
            <Box
              direction="row"
              justify="between"
              align="center"
              margin={{ top: 'medium', bottom: 'xlarge' }}
            >
              <Heading level={2} margin="none">
                Theme
              </Heading>
              <Anchor href="#theme" icon={<LinkIcon color="light-4" />} />
            </Box>
            <ThemeContext.Consumer>
              {theme =>
                Object.keys(themeDoc).map((key, index) => {
                  const themeProp = themeDoc[key];
                  return (
                    <Prop
                      key={key}
                      property={{ name: key, ...themeProp }}
                      first={!index}
                      syntax={
                        (syntaxes || {})[key] ||
                        themeValue(theme, key) ||
                        (key.endsWith('.extend') && [
                          'any CSS',
                          '(props) => {}',
                        ])
                      }
                      example={examples[key]}
                    />
                  );
                })
              }
            </ThemeContext.Consumer>
          </Box>
        )}

        {children}
      </Box>
    );
  }
}

Doc.propTypes = {
  // code: PropTypes.string,
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
  // code: undefined,
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
