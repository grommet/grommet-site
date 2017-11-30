import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Anchor, Box, Button, Chart, CheckBox, Clock, Grid, Heading, Image, Markdown,
  Menu, Meter, Paragraph, RadioButton, RangeInput,
  RoutedAnchor, RoutedButton, Select, Stack, Tab, Tabs, Text, TextArea, TextInput, Video,
} from 'grommet';

import { Actions } from 'grommet-icons';

const CHART_VALUES = [
  { value: [7, 90], label: 'ninety' },
  { value: [6, 80], label: 'eighty' },
  { value: [5, 60], label: 'sixty' },
  { value: [4, 70], label: 'seventy' },
  { value: [3, 60], label: 'sixty' },
  { value: [2, 40], label: 'forty' },
  { value: [1, 30], label: 'thirty' },
  { value: [0, 0], label: 'zero' },
];

const Section = ({ children, align, basis, index, label }) => (
  <Box
    align={align || 'start'}
    pad='medium'
    basis={basis || 'medium'}
    animation={[
      { type: 'zoomIn', duration: 500, delay: 100 + (100 * index) },
      { type: 'fadeIn', duration: 500, delay: (100 * index) },
    ]}
  >
    <Heading level={2} margin={{ top: 'none' }}>
      <strong>{label.toUpperCase()}</strong>
    </Heading>
    {children}
  </Box>
);

const Item = ({ children, path }) => (
  <Box margin={{ vertical: 'small' }}>
    <RoutedButton path={path}>
      {children}
    </RoutedButton>
  </Box>
);

export default class Home extends Component {
  state = {}

  selectColor(color) {
    return (event) => {
      event.stopPropagation();
      this.setState({
        activeColor: (color === this.state.activeColor ? undefined : color),
      });
    };
  }

  render() {
    const { activeColor } = this.state;

    return (
      <Grid
        rows={['xsmall', 'flex']}
        columns={['full']}
        areas={[
          { name: 'header', start: [0, 0], end: [0, 0] },
          { name: 'main', start: [0, 1], end: [0, 1] },
        ]}
      >
        <Box
          gridArea='header'
          direction='row'
          justify='between'
          align='center'
          background='brand'
          pad={{ horizontal: 'medium' }}
          animation='fadeIn'
        >
          <Heading margin='none'>Grommet 2.0</Heading>
          <Anchor
            href='https://github.com/grommet/grommet/wiki/Why-Grommet-2.0%3F'
            label='Why?'
          />
        </Box>

        <Box gridArea='main' direction='row' wrap={true}>

          <Section align='stretch' label='Layout' index={0}>
            <Item path='/box'>
              <Box direction='row'>
                <Box border={{ color: 'light-3' }} basis='medium' pad='medium'>
                  Box
                </Box>
              </Box>
            </Item>

            <Item path='/grid'>
              <Box direction='column'>
                <Box pad='small' background='light-3' />
                <Box direction='row'>
                  <Box border={{ color: 'light-3' }} pad='medium' flex='grow'>
                    Grid
                  </Box>
                  <Box pad='medium' background='light-2' />
                </Box>
              </Box>
            </Item>

            <Item path='/stack'>
              <Stack>
                <Box pad='medium'>
                  <Heading level={3} margin='none' textAlign='center'>
                    Stack
                  </Heading>
                </Box>
                <Box
                  pad={{ top: 'medium', left: 'small', right: 'small' }}
                  border={{ color: 'light-3' }}
                >
                  <Heading level={2} margin='small' textAlign='center'>Stack</Heading>
                </Box>
              </Stack>
            </Item>

            <Item path='/layer'>
              <Box direction='row'>
                <Box
                  flex={true}
                  background='dark-5'
                  pad={{ horizontal: 'large', vertical: 'small' }}
                >
                  - - -
                </Box>
                <Box
                  border={{ color: 'light-3' }}
                  basis='small'
                  pad={{ horizontal: 'medium', vertical: 'small' }}
                >
                  Layer
                </Box>
              </Box>
            </Item>

            <Item path='/tabs'>
              <Tabs>
                <Tab title='One'>Tab</Tab>
              </Tabs>
            </Item>
          </Section>

          <Section label='Text' index={1}>
            <Item path='/heading'>
              <Heading level={2} margin='none'>Heading</Heading>
            </Item>
            <Item path='/paragraph'>
              <Paragraph>Paragraph of text.</Paragraph>
            </Item>
            <Item path='/text'>
              <Text>Text</Text>
            </Item>
            <Item path='/markdown'>
              <Markdown content='### Markdown' />
            </Item>
          </Section>

          <Section label='Controls' index={2}>
            <Box margin={{ vertical: 'small' }}>
              <RoutedButton path='/button' label='Button' />
            </Box>
            <Box margin={{ vertical: 'small' }}>
              <RoutedAnchor primary={true} path='/anchor' label='Anchor' />
            </Box>
            <Item path='/menu'>
              <Menu tabIndex='-1' label='Menu' items={[]} />
            </Item>
            <Item path='/select'>
              <Select options={[]} placeholder='Select' tabIndex='-1' />
            </Item>
            <Item path='/dropbutton'>
              <Box direction='row' align='center'>
                <Box margin={{ right: 'small' }}>Drop Button</Box>
                <Actions color='brand' />
              </Box>
            </Item>
            <Item path='/textinput'>
              <TextInput placeholder='TextInput' disabled={true} />
            </Item>
            <Item path='/textarea'>
              <TextArea placeholder='TextArea' disabled={true} />
            </Item>
            <Item path='/rangeinput'>
              <RangeInput />
            </Item>
            <Item path='/checkbox'>
              <CheckBox label='CheckBox' disabled={true} />
            </Item>
            <Item path='/radiobutton'>
              <RadioButton label='RadioButton' disabled={true} />
            </Item>
          </Section>

          <Section label='Accessibility' index={3}>
            <Box margin={{ vertical: 'small' }}>
              <RoutedAnchor path='/skiplinks' label='SkipLinks' />
            </Box>
          </Section>

          <Section align='stretch' label='Visualizations' index={4}>
            <Item path='/meter'>
              <Stack anchor='top-right'>
                <Meter
                  aria-label='Meter example'
                  values={[{ value: 60, label: 'sixty' }]}
                />
                <Text margin={{ horizontal: 'small' }}>Meter</Text>
              </Stack>
            </Item>

            <Item path='/chart'>
              <Stack anchor='top-left'>
                <Chart
                  aria-label='Chart example'
                  bounds={[[0, 7], [0, 100]]}
                  size={{ width: 'medium', height: 'xsmall' }}
                  values={CHART_VALUES}
                />
                <Text>Chart</Text>
              </Stack>
            </Item>

            <Item path='/clock'>
              <Box align='center'>
                <Clock />
                <Heading level={4}>Clock</Heading>
              </Box>
            </Item>
          </Section>

          <Section align='stretch' label='Media' index={5}>
            <Item path='/image'>
              <Box>
                <Text margin='none'>Image</Text>
                <Box basis='xsmall'>
                  <Image
                    fit='contain'
                    src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
                  />
                </Box>
              </Box>
            </Item>

            <Item path='/video'>
              <Box>
                <Text margin='none'>Video</Text>
                <Box basis='xsmall'>
                  <Video fit='contain'>
                    <source src='//v2.grommet.io/assets/small.mp4' type='video/mp4' />
                  </Video>
                </Box>
              </Box>
            </Item>
          </Section>

          <Section label='Inspiration' index={6}>
            <Box margin={{ vertical: 'small' }}>
              <RoutedAnchor path='/form' label='Form' />
            </Box>
            <Box margin={{ vertical: 'small' }}>
              <RoutedAnchor path='/selection' label='Selection' />
            </Box>
          </Section>

          <Section basis='full' align='stretch' label='Color' index={6}>
            <Box
              direction='row'
              align='start'
              basis='full'
              wrap={true}
            >
              {['brand', 'accent-1', 'accent-2',
                'neutral-1', 'neutral-2', 'neutral-3',
                'light-1', 'light-2', 'light-3', 'light-4', 'light-5',
                'dark-1', 'dark-2', 'dark-3', 'dark-4', 'dark-5',
                'status-ok', 'status-warning', 'status-critical',
                'status-disabled',
              ].map(color => (
                <Box key={color} flex='grow'>
                  <Button a11yTitle={`${color} color`} onClick={this.selectColor(color)}>
                    <Box background={color} pad='xsmall'>
                      {activeColor === color ? color : <span>&nbsp;</span>}
                    </Box>
                  </Button>
                </Box>
              ))}
            </Box>
          </Section>

          <Box margin='medium'>
            <RoutedAnchor primary={true} path='/theme' label='Theme' />
          </Box>
        </Box>
      </Grid>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.any,
};
