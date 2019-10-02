import React, { Component } from 'react';
import { Anchor, Box, Stack, Text } from 'grommet';
import Tile from './Tile';

export default class Accessible extends Component {
  state = { build: true };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { build } = this.state;
      this.setState({ build: !build });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { build } = this.state;
    return (
      <Tile
        name="accessible is being inclusive"
        summary={
          <span>
            keyboard navigation, screen reader tags, and more. grommet provides
            support for W3c’s
            <Anchor href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 spec</Anchor>
            out of the box.
          </span>
        }
      >
        <Stack anchor="center">
          <Box direction="row" gap="medium">
            <Box
              animation={
                build
                  ? [{ type: 'fadeIn', duration: 1000 }]
                  : [{ type: 'fadeOut', duration: 1000, delay: 2000 }]
              }
              background="accent-1"
              round="full"
              pad="large"
            />
            <Box
              animation={
                build
                  ? [{ type: 'fadeIn', duration: 1000, delay: 500 }]
                  : [{ type: 'fadeOut', duration: 1000, delay: 1500 }]
              }
              background="accent-4"
              round="full"
              pad="large"
            />
          </Box>
          <Box direction="row" justify="center">
            <Box
              animation={
                build
                  ? [{ type: 'fadeIn', duration: 4000 }]
                  : [{ type: 'fadeOut', duration: 4000 }]
              }
              background={{ color: 'neutral-2', opacity: 'strong' }}
              round="full"
              pad="large"
            >
              <Text size="xxlarge" weight="bold">
                Aa
              </Text>
            </Box>
          </Box>
        </Stack>
      </Tile>
    );
  }
}
