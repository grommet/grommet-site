import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Anchor, Heading, Keyboard, Text, ThemeContext } from 'grommet';
import { Link as LinkIcon, Next, Previous } from 'grommet-icons';
import Header from '../Header';
import RoutedButton from '../RoutedButton';
import { Pusher } from '../../Router';
import { genericSyntaxes } from '../../utils/props';
import { nameToPath, nextComponent, previousComponent } from '../../structure';
import { Prop } from './Prop';

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
