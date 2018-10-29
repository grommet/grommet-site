import React, { Component } from 'react';
import { Box } from 'grommet';

export default class Hero extends Component {
  state = { build: true };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { build } = this.state;
      this.setState({ build: !build });
    }, 8000);
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
                { type: 'fadeIn', delay: 2000 },
                { type: 'slideLeft', size: 'large', delay: 2000 },
              ]
              : [
                { type: 'fadeOut', delay: 4000 },
              ]
            }
            background='light-4'
            pad='medium'
          />
          <Box
            animation={build
              ? [
                { type: 'fadeIn', delay: 3000 },
                { type: 'slideLeft', size: 'large', delay: 3000 },
              ]
              : [
                { type: 'fadeOut', delay: 3000 },
              ]
            }
            background='light-4'
            pad='medium'
          />
          <Box
            animation={build
              ? [
                { type: 'fadeIn', delay: 4000 },
                { type: 'slideLeft', size: 'large', delay: 4000 },
              ]
              : [
                { type: 'fadeOut', delay: 2000 },
              ]
            }
            background='light-4'
            pad='medium'
          />
        </Box>
        <Box
          animation={build
            ? [
              { type: 'fadeIn', delay: 1000 },
              { type: 'slideRight', size: 'large', delay: 1000 },
            ]
            : [
              { type: 'fadeOut', delay: 5000 },
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
                { type: 'fadeIn', delay: 5000 },
                { type: 'slideDown', size: 'large', delay: 5000 },
              ]
              : [
                { type: 'fadeOut', delay: 1000 },
              ]
            }
            background='light-4'
            pad='medium'
          />
          <Box
            animation={build
              ? [
                { type: 'fadeIn', delay: 6000 },
                { type: 'slideDown', size: 'large', delay: 6000 },
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
