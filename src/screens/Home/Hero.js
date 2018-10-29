import React, { Component } from 'react';
import { Box } from 'grommet';

export default class Hero extends Component {
  state = { build: true };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { build } = this.state;
      this.setState({ build: !build });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { build } = this.state;
    return (
      <Box
        direction='row'
        pad='large'
        elevation='large'
        round='medium'
        margin='xlarge'
      >
        <Box
          animation={build
            ? [
              { type: 'fadeIn' },
              { type: 'slideLeft', size: 'large' },
            ]
            : [
              { type: 'fadeOut', delay: 6000 },
            ]
          }
          basis='1/3'
          background='light-2'
          pad='large'
          margin='small'
          gap='medium'
        >
          <Box
            animation={build
              ? [
                { type: 'fadeIn', delay: 1000 },
                { type: 'slideLeft', size: 'large', delay: 1000 },
              ]
              : [
                { type: 'fadeOut', delay: 2000 },
              ]
            }
            background='light-4'
            pad='medium'
          />
          <Box
            animation={build
              ? [
                { type: 'fadeIn', delay: 1500 },
                { type: 'slideLeft', size: 'large', delay: 1500 },
              ]
              : [
                { type: 'fadeOut', delay: 1500 },
              ]
            }
            background='light-4'
            pad='medium'
          />
          <Box
            animation={build
              ? [
                { type: 'fadeIn', delay: 2000 },
                { type: 'slideLeft', size: 'large', delay: 2000 },
              ]
              : [
                { type: 'fadeOut', delay: 1000 },
              ]
            }
            background='light-4'
            pad='medium'
          />
        </Box>
        <Box
          animation={build
            ? [
              { type: 'fadeIn', delay: 500 },
              { type: 'slideRight', size: 'large', delay: 500 },
            ]
            : [
              { type: 'fadeOut', delay: 2500 },
            ]
          }
          basis='2/3'
          background='light-2'
          pad='large'
          margin='small'
          gap='medium'
        >
          <Box
            animation={build
              ? [
                { type: 'fadeIn', delay: 2500 },
                { type: 'slideDown', size: 'large', delay: 2500 },
              ]
              : [
                { type: 'fadeOut', delay: 500 },
              ]
            }
            background='light-4'
            pad='medium'
          />
          <Box
            animation={build
              ? [
                { type: 'fadeIn', delay: 3000 },
                { type: 'slideDown', size: 'large', delay: 3000 },
              ]
              : [
                { type: 'fadeOut', delay: 0 },
              ]
            }
            flex
            background='light-4'
            pad='medium'
          />
        </Box>
      </Box>
    );
  }
}
