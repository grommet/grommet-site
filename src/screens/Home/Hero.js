import React, { Component } from 'react';
import { Box } from 'grommet';
import { Ad } from 'grommet-icons';

export default class Hero extends Component {
  state = { build: true };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { build } = this.state;
      this.setState({ build: !build });
    }, 5000);
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
              { type: 'fadeOut', delay: 3000 },
            ]
          }
          basis='1/3'
          background='brand'
          pad='large'
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
            background='accent-1'
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
            background='accent-2'
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
            background='accent-3'
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
          border={{ side: 'top', color: 'brand', size: 'large' }}
          pad='large'
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
            basis='xsmall'
            direction='row'
            justify='between'
            gap='medium'
          >
            <Box
              basis='xsmall'
              round='full'
              background='accent-1'
              align='center'
              justify='center'
            >
              <Ad size='large' />
            </Box>
            <Box flex background='accent-1' />
          </Box>
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
            background='accent-1'
            pad='medium'
          />
        </Box>
      </Box>
    );
  }
}
