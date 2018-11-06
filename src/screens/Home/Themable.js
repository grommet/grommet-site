import React, { Component } from 'react';
import { Button, Grommet } from 'grommet';
import Tile from './Tile';

export default class Themable extends Component {
  state = {
    build: true,
    phase: 1,
    theme1: undefined,
    theme2: undefined,
    theme3: undefined,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const {
        build, phase, theme1, theme2, theme3,
      } = this.state;
      const nextBuild = (build && phase < 6) || (!build && phase === 1);
      const nextPhase = (nextBuild ? phase + 1 : phase - 1);
      let nextTheme1 = theme1;
      let nextTheme2 = theme2;
      let nextTheme3 = theme3;

      if (phase >= 2) {
        nextTheme1 = {
          global: {
            font: {
              family: 'Helvetica, sans-serif',
            },
          },
          button: {
            border: {
              color: 'accent-1',
              width: '6px',
              radius: '8px',
            },
            // color: { dark: undefined, light: undefined }
            primary: {
              // color: { dark: undefined, light: undefined }
            },
            padding: {
              vertical: '6px',
              horizontal: '12px',
            },
          },
        };
      } else {
        nextTheme1 = undefined;
      }

      if (phase >= 3) {
        nextTheme2 = {
          global: {
            font: {
              family: 'Arial, sans-serif',
            },
          },
          button: {
            border: {
              color: 'dark-2',
              width: '1px',
              radius: '0px',
            },
            // color: { dark: undefined, light: undefined }
            primary: {
              // color: { dark: undefined, light: undefined }
            },
            padding: {
              vertical: '12px',
              horizontal: '36px',
            },
          },
        };
      } else {
        nextTheme2 = undefined;
      }

      if (phase >= 4) {
        nextTheme3 = {
          global: {
            font: {
              family: 'Courier, sans-serif',
            },
          },
          button: {
            border: {
              color: 'accent-3',
              width: '9px',
              radius: '24px',
            },
            // color: { dark: undefined, light: undefined }
            primary: {
              // color: { dark: undefined, light: undefined }
            },
            padding: {
              vertical: '6px',
              horizontal: '24px',
            },
          },
        };
      } else {
        nextTheme3 = undefined;
      }

      this.setState({
        build: nextBuild,
        phase: nextPhase,
        theme1: nextTheme1,
        theme2: nextTheme2,
        theme3: nextTheme3,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { theme1, theme2, theme3 } = this.state;
    return (
      <Tile
        name='powerful theming tools'
        summary={(
          <span>
            tailor the component library to align with your
            Color, Type, Layout needs. You can even control
            component interaction.
          </span>
        )}
        gap='medium'
      >
        <Grommet theme={theme1}>
          <Button label='Log in' />
        </Grommet>
        <Grommet theme={theme2}>
          <Button label='GET STARTED' />
        </Grommet>
        <Grommet theme={theme3}>
          <Button label='click me' />
        </Grommet>
      </Tile>
    );
  }
}
