import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Anchor, Box, Paragraph, Text } from 'grommet';
import Header from '../Header';
import RoutedAnchor from '../RoutedAnchor';
import { Code } from './Code';
import { DomProps } from './DomProps';

export const ComponentDoc = ({
  align = 'center',
  availableAt,
  children,
  code,
  description,
  intrinsicElement,
  isA, // used when component is a version of a html tag
  name,
}) => {
  const properties = [];
  const themeDoc = [];
  const additionalChildren = [];
  if (children && children.length) {
    for (let i = 0; i < children.length; i += 1) {
      if (children[i].type.displayName === 'Properties') {
        properties.push(children[i]);
      } else if (children[i].type.displayName === 'ThemeDoc') {
        themeDoc.push(children[i]);
      } else {
        additionalChildren.push(children[i]);
      }
    }
  } else if (children) {
    if (children.type.displayName === 'Properties') {
      properties.push(children);
    } else if (children.type.displayName === 'ThemeDoc') {
      themeDoc.push(children);
    } else {
      additionalChildren.push(children);
    }
  }

  return (
    <Box margin={{ bottom: 'large' }} width="xlarge" alignSelf="center">
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Box align={align}>
        <Header align={align} label={name} summary={description} details="" />

        {code && <Code code={code} name={name} />}

        {availableAt && (
          <Box margin={{ vertical: 'medium' }}>
            {Array.isArray(availableAt) ? (
              <Box alignSelf="center" direction="row-responsive" gap="large">
                {availableAt.map(at => (
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
                href={availableAt.url}
                target="_blank"
                label={<Text size="large">{availableAt.label}</Text>}
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
            {name} is a <RoutedAnchor path={isA.path} label={isA.base} />
            {isA.defaultProps && ' with the following properties preset'}. You
            can customize it using the properties available in {isA.base}.
          </Paragraph>
          <Box as="ul" alignSelf="start">
            {isA.defaultProps &&
              Object.keys(isA.defaultProps).map(key => (
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

      {additionalChildren}

      {properties}

      {intrinsicElement && (
        <DomProps name={name} intrinsicElement={intrinsicElement} />
      )}

      {themeDoc}
    </Box>
  );
};

ComponentDoc.propTypes = {
  align: PropTypes.string,
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
  children: PropTypes.node,
  code: PropTypes.string,
  description: PropTypes.string,
  intrinsicElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  isA: PropTypes.shape({
    base: PropTypes.string,
    defaultProps: PropTypes.shape({}),
    path: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
};

ComponentDoc.defaultProps = {
  align: undefined,
  availableAt: undefined,
  children: undefined,
  code: undefined,
  description: undefined,
  intrinsicElement: undefined,
  isA: undefined,
};
