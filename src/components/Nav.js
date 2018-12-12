import React, { Component } from 'react';
import { Box, DropButton, Heading, Text, ResponsiveContext } from 'grommet';
import { Grommet as GrommetIcon, FormDown } from 'grommet-icons';
import RoutedAnchor from './RoutedAnchor';
import RoutedButton from './RoutedButton';
import { structure, nameToPath } from '../structure';

export default class extends Component {
  state = {};

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            direction="row"
            justify="between"
            align="center"
            width="xlarge"
            alignSelf="center"
            {...this.props}
          >
            <RoutedAnchor
              path="/"
              icon={<GrommetIcon size="large" />}
              label={size !== 'small' && <Text size="xlarge">grommet</Text>}
            />
            <Box direction="row">
              <RoutedButton path="/components" plain>
                <Box
                  pad={{ vertical: 'small', left: 'medium', right: 'small' }}
                  round={{ size: 'xlarge', corner: 'left' }}
                  background="accent-1"
                >
                  <Text>components</Text>
                </Box>
              </RoutedButton>
              <DropButton
                plain
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                  <Box
                    background="dark-2"
                    direction="row-responsive"
                    gap="small"
                    pad="large"
                    overflow="auto"
                    wrap
                  >
                    {structure.sections.map(section => (
                      <Box width="small">
                        <Heading level={3} margin={{ top: 'none' }}>
                          {section.components ? (
                            section.name
                          ) : (
                            <RoutedAnchor
                              path={nameToPath(section.name)}
                              label={section.name}
                            />
                          )}
                        </Heading>
                        {section.components
                          ? section.components.map(component => (
                              <RoutedAnchor
                                path={nameToPath(component)}
                                label={component}
                              />
                            ))
                          : null}
                      </Box>
                    ))}
                  </Box>
                }
              >
                <Box
                  fill="vertical"
                  pad={{ vertical: 'small', right: 'small', left: 'xsmall' }}
                  round={{ size: 'xlarge', corner: 'right' }}
                  border="left"
                  background="accent-1"
                >
                  <FormDown />
                </Box>
              </DropButton>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
