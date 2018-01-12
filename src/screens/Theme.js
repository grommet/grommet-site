import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grommet, Heading, Image, Paragraph, Text, TextInput } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import Nav from '../components/Nav';

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

  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange(['#DDE6FF', '#D8FDE6']);
  }

  render() {
    const { theme } = this.state;
    return (
      <Box>
        <Box pad='large'>
          <Nav />
          <Box direction='row'>
            <Box margin={{ vertical: 'large' }} basis='medium'>
              <Heading level={1}>
                <strong>Try us without writing a single line of code</strong>
              </Heading>
              <Paragraph size='large'>
                Learn more about how you can theme using the grommet library.
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <Box direction='row'>
          <Box basis='medium'>
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

          <Box flex='grow' margin={{ bottom: 'large' }} align='center'>
            <Grommet theme={theme}>
              <Box
                direction='column'
                round='large'
                animation='fadeIn'
                style={{
                  boxShadow: '0px 5px 20px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box pad='medium' background='accent-1' direction='row' justify='between' align='center'>
                  <Button icon={<MenuIcon />} label='menu' onClick={() => {}} />
                  <Button primary={true} label='Subscribe' onClick={() => {}} />
                </Box>
                <Box direction='row' justify='center'>
                  <Box basis='large' pad='large' align='start'>
                    <Heading level={1} margin={{ top: 'none' }}>Bring it on!</Heading>
                    <Text>January</Text>
                    <Paragraph>
                      Biodiesel small batch blue bottle you probably have not
                      heard of them cornhole taiyaki thundercats celiac
                      messenger bag. Prism cred, poutine bespoke tumeric tofu
                      helvetica put a bird on it.
                    </Paragraph>
                    <Image src='https://myjourneytosixmillion.files.wordpress.com/2018/01/park-dasol-146056.jpg?w=300' />
                  </Box>
                </Box>
              </Box>
            </Grommet>
          </Box>
        </Box>
      </Box>
    );
  }
}

Theme.contextTypes = {
  onColorChange: PropTypes.func,
};
