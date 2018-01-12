import React, { Component } from 'react';
import { Box, Stack } from 'grommet';

export default class Gradient extends Component {
  constructor(props) {
    super(props);
    this.state = { priorColors: props.colors };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.colors[0] !== this.props.colors[0] ||
      nextProps.colors[1] !== this.props.colors[1]) {
      this.setState({ nextColors: nextProps.colors });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setState({ priorColors: nextProps.colors, nextColors: undefined });
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { nextColors, priorColors } = this.state;

    return (
      <Stack guidingChild={1} {...this.props}>
        <Box
          style={{
            height: '100%',
            backgroundImage:
              `linear-gradient(to bottom, ${(nextColors || priorColors)[0]}, ${(nextColors || priorColors)[1]})`,
            opacity: (nextColors ? 1 : 0),
            transition: 'opacity 2s',
          }}
        />
        <Box
          style={{
            height: '100%',
            backgroundImage:
              `linear-gradient(to bottom, ${priorColors[0]}, ${priorColors[1]})`,
            opacity: (nextColors ? 0 : 1),
            transition: 'opacity 2s',
          }}
        />
      </Stack>
    );
  }
}
