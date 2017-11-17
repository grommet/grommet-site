import React, { Component } from 'react';

import { Box, Button, Grommet, Heading, Image, RoutedButton, Text, TextInput } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

const Field = ({ children, error, label, help }) => {
  let header;
  if (label || help || error) {
    header = (
      <Box
        direction='row'
        justify='between'
        pad={{ horizontal: 'small', top: 'xsmall' }}
      >
        <Text>{label}</Text>
        <Text color={error ? 'status-critical' : 'dark-5'}>{error || help}</Text>
      </Box>
    );
  }
  return (
    <Box
      direction='column'
      border={{ color: 'light-2', side: 'bottom', size: 'small' }}
      margin={{ vertical: 'xsmall' }}
    >
      {header}
      {children}
    </Box>
  );
};

export default class Theme extends Component {
  constructor() {
    super();
    this.state = { theme: {
      global: {
        colors: {
          brand: '#336699',
        },
        font: {
          family: 'Inconsolata, Arial, sans-serif',
          face: `
            @font-face {
              font-family: "Inconsolata";
              src: url("https://themes.googleusercontent.com/fonts/font?kit=J_eeEGgHN8Gk3Eud0dz8jw");
            }
          `,
        },
      },
    } };
  }

  render() {
    const { theme } = this.state;
    return (
      <Box direction='row' full='grow'>
        <Box basis='medium' background='light-1'>
          <Box
            direction='row'
            justify='between'
            align='center'
            pad={{ horizontal: 'small' }}
          >
            <RoutedButton path='/' icon={<LinkPrevious size='large' />} />
            <Box margin={{ horizontal: 'small' }}>
              <Heading margin='none'>
                Theme
              </Heading>
            </Box>
          </Box>

          <Box pad='medium'>
            <Field label='Brand Color'>
              <TextInput
                plain={true}
                type='color'
                value={theme.global.color}
                onChange={(event) => {
                  const color = event.target.value;
                  this.setState({ theme:
                    {
                      ...theme,
                      global:
                      {
                        ...theme.global,
                        colors:
                        {
                          ...theme.global.colors,
                          brand: color,
                        },
                      },
                    },
                  });
                }}
              />
            </Field>
            <Field label='Font'>
              <TextInput plain={true} focusIndicator={true} value={theme.global.font.family} />
            </Field>
          </Box>
        </Box>

        <Box flex='grow'>
          <Grommet theme={theme}>
            <Box
              full='vertical'
              direction='column'
              justify='center'
              align='center'
              background='dark-3'
              animation='fadeIn'
            >
              <Box pad='large' background='light-1'>
                <Image />
                <Heading level={1} margin={{ top: 'none' }}>Name</Heading>
                <Button label='Greet' primary={true} onClick={() => alert('hello')} />
              </Box>
            </Box>
          </Grommet>
        </Box>
      </Box>
    );
  }
}
