import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Anchor, Box, Layer, Paragraph, Text } from 'grommet';
import { Next, Previous } from 'grommet-icons';
import { nameToPath, nextComponent, previousComponent } from '../../structure';
import Header from '../Header';
import RoutedAnchor from '../RoutedAnchor';
import RoutedButton from '../RoutedButton';
import { Code } from './Code';
import { Props } from './Props';
import { ThemeProps } from './ThemeProps';

const Doc = ({
  align = 'center',
  children,
  code,
  desc,
  name,
  nav,
  examples,
  isA,
  syntaxes,
  text,
  themeDoc,
  title,
}) => {
  const [summary, ...details] = ((desc && desc.description) || text).split('.');

  return (
    <Box margin={{ bottom: 'large' }} width="xlarge" alignSelf="center">
      <Helmet>
        <title>{title || name}</title>
        <meta name="description" content={summary} />
      </Helmet>
      <Box align={align}>
        {nav && false && (
          <Layer modal={false} position="top">
            <Box direction="row" gap="medium">
              <RoutedButton
                path={nameToPath(previousComponent(name))}
                icon={<Previous />}
              />
              <RoutedButton
                path={nameToPath(nextComponent(name))}
                icon={<Next />}
              />
            </Box>
          </Layer>
        )}
        <Header
          align={align}
          label={title || name}
          summary={summary}
          details={desc && (desc.details || details.join('.'))}
        />

        {code && <Code code={code} name={name} />}
        {examples}

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

      {isA && (
        <Box
          margin={{ top: 'large' }}
          border={{ side: 'top', size: 'medium', color: 'brand' }}
          pad={{ top: 'medium' }}
        >
          <Paragraph size="large">
            {name} is a <RoutedAnchor path={isA.path} label={isA.base} /> with
            the following properties preset. You can customize it using the
            properties available in {isA.base}.
          </Paragraph>
          <Box as="ul" alignSelf="start">
            {Object.keys(isA.defaultProps).map(key => (
              <Box
                key={key}
                as="li"
                direction="row"
                align="center"
                justify="between"
                gap="large"
              >
                <RoutedAnchor path={`${isA.path}#${key}`} label={key} />
                <Text>{JSON.stringify(isA.defaultProps[key])}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {desc && desc.properties && <Props desc={desc} syntaxes={syntaxes} />}

      {themeDoc && <ThemeProps syntaxes={syntaxes} themeDoc={themeDoc} />}

      {children}
    </Box>
  );
};

Doc.propTypes = {
  align: PropTypes.string,
  code: PropTypes.string,
  children: PropTypes.node,
  desc: PropTypes.shape({
    availableAt: PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      }),
      PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    ]),
    details: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
    description: PropTypes.string,
    properties: PropTypes.arrayOf(PropTypes.object),
  }),
  examples: PropTypes.node,
  isA: PropTypes.shape({
    base: PropTypes.string,
    defaultProps: PropTypes.shape({}),
    path: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  nav: PropTypes.bool,
  syntaxes: PropTypes.shape({}),
  text: PropTypes.string,
  themeDoc: PropTypes.shape({}),
  title: PropTypes.string,
};

Doc.defaultProps = {
  align: undefined,
  code: undefined,
  children: undefined,
  desc: undefined,
  examples: undefined,
  isA: undefined,
  nav: true,
  syntaxes: undefined,
  text: undefined,
  themeDoc: undefined,
  title: undefined,
};

export default Doc;
