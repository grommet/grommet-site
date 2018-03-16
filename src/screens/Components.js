import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Chart, CheckBox, Clock,
  Diagram, Distribution,
  FormField, Heading,
  Menu, Meter, Paragraph, RadioButton, RangeInput, RangeSelector,
  RoutedButton, Select, Stack,
  Text, TextArea, TextInput, WorldMap,
} from 'grommet';
import {
  Actions, Add, Grommet as GrommetIcon, Group, CirclePlay,
  Next, Previous, TreeOption,
} from 'grommet-icons';
import Page from '../components/Page';

const CHART_VALUES = [
  { value: [4, 5], label: '4' },
  { value: [3, 2], label: '3' },
  { value: [2, 10], label: '2' },
  { value: [1, 7], label: '1' },
  { value: [0, 3], label: '0' },
];

const connection = (a, b) => ({
  fromTarget: `${a}`,
  toTarget: `${b}`,
  color: 'brand',
  thickness: 'xsmall',
  round: true,
});

const Section = ({ children, index, name }) => (
  <Box
    pad={{ vertical: 'medium' }}
    animation={[
      { type: 'zoomIn', duration: 500, delay: 100 + (100 * index) },
      { type: 'fadeIn', duration: 500, delay: (100 * index) },
    ]}
  >
    <Heading level={2} margin={{ top: 'none' }}>
      {name}
    </Heading>
    <Box direction='row' wrap={true} align='center'>
      {children}
    </Box>
  </Box>
);

const Item = ({
  name, path, children, center,
}) => (
  <Box basis='medium' pad={{ right: 'medium', bottom: 'medium' }}>
    <RoutedButton path={path}>
      <Box>
        <Heading level={3} size='small' margin={{ top: 'none', bottom: 'xsmall' }}>
          <strong>{name}</strong>
        </Heading>
      </Box>
      <Box>
        <Box
          basis='small'
          border={center ? { color: 'brand', size: 'small' } : undefined}
          justify={center ? 'center' : undefined}
          align={center ? 'center' : undefined}
          pad={center ? 'medium' : undefined}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </Box>
      </Box>
    </RoutedButton>
  </Box>
);

const Key = ({ label }) => (
  <Box
    border={{ color: 'brand', size: 'medium' }}
    round='medium'
    pad='medium'
  >
    <Text size='large' color='brand'>{label}</Text>
  </Box>
);

export default class Components extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange('#FFF5CC');
  }

  render() {
    const { theme } = this.context;
    return (
      <Page>
        <Box direction='row'>
          <Box basis='medium' overflow='hidden'>
            <Heading level={1} margin={{ top: 'none', bottom: 'small' }}>
              <strong>Read our documentation</strong>
            </Heading>
            <Paragraph size='large'>
              These are the building blocks of the grommet libray, master
              them, and become a l33t.
            </Paragraph>
          </Box>
        </Box>

        <Box>
          <Section align='stretch' name='Layout' index={0}>
            <Item name='Box' path='/box'>
              <Box flex={true} border={{ color: 'brand', size: 'large' }} />
            </Item>

            <Item name='Grid' path='/grid'>
              <Box flex={true} direction='row'>
                <Box basis='1/4' background='brand' margin={{ right: 'xsmall' }} />
                <Box flex={true} background='brand' margin={{ right: 'xsmall' }} />
                <Box basis='1/4' background='brand' />
              </Box>
            </Item>

            <Item name='Layer' path='/layer'>
              <Box flex={true} direction='row'>
                <Box basis='1/3' background={{ color: 'brand', opacity: 'weak' }} />
                <Box flex={true} background='brand' />
              </Box>
            </Item>

            <Item name='Stack' path='/stack'>
              <Box flex={true} border={{ color: 'brand', size: 'large' }}>
                <Box flex={true} background='brand' margin='large' />
              </Box>
            </Item>
          </Section>

          <Section name='Type' index={1}>
            <Item name='Heading' path='/heading' center={true}>
              <Heading level={2} margin='none'>Player 1 has entered the game</Heading>
            </Item>
            <Item name='Markdown' path='/markdown' center={true}>
              <code>
  # Grommet **heart**s markdown.

  Favorite thing,
  [link](https://www.instagram.com/p/I6h5u/)
              </code>
            </Item>
            <Item name='Paragraph' path='/paragraph' center={true}>
              <Paragraph>
                OASIS was much more than a game or an entertainment
                platform. {"It's"} a new way of life. People stay connected to it
                for the majority of a day...
              </Paragraph>
            </Item>
            <Item name='Text' path='/text' center={true}>
              <Text size='large'>Hello there!</Text>
            </Item>
          </Section>

          <Section name='Color' index={2}>
            <Item name='Brand' path='/color'>
              <Box flex={true} background='brand' />
            </Item>
            <Item name='Accents' path='/color'>
              <Box flex={true} direction='row'>
                {theme.global.colors.accent.map((color, index) => (
                  <Box key={color} flex={true} background={`accent-${index + 1}`} />
                ))}
              </Box>
            </Item>
            <Item name='Neutrals' path='/color'>
              <Box flex={true} direction='row'>
                {theme.global.colors.neutral.map((color, index) => (
                  <Box key={color} flex={true} background={`neutral-${index + 1}`} />
                ))}
              </Box>
            </Item>
            <Item name='Status' path='/color'>
              <Box flex={true} direction='row'>
                {Object.keys(theme.global.colors.status).map(name => (
                  <Box key={name} flex={true} background={`status-${name}`} />
                ))}
              </Box>
            </Item>
          </Section>

          <Section name='Controls' index={3}>
            <Item name='Anchor' path='/anchor' center={true}>
              <Text color='brand' size='large'>Don&#39;t press me</Text>
            </Item>
            <Item name='Button' path='/button' center={true}>
              <Button label='Panic' primary={true} onClick={() => {}} />
            </Item>
            <Item name='Drop' path='/drop' center={true}>
              <Box
                border={{ color: 'brand', size: 'large' }}
                round='medium'
                margin='small'
                pad='large'
              />
            </Item>
            <Item name='DropButton' path='/dropbutton' center={true}>
              <Button
                label='Add'
                icon={<Add />}
                reverse={true}
                onClick={() => {}}
              />
            </Item>
            <Item name='Menu' path='/menu' center={true}>
              <Menu tabIndex='-1' size='large' label='Actions' items={[]} />
            </Item>
          </Section>

          <Section name='Input' index={4}>
            <Item name='CheckBox' path='/checkbox' center={true}>
              <CheckBox checked={true} onChange={() => {}} />
            </Item>
            <Item name='RadioButton' path='/radiobutton' center={true}>
              <RadioButton checked={true} onChange={() => {}} />
            </Item>
            <Item name='RangeInput' path='/rangeinput' center={true}>
              <RangeInput />
            </Item>
            <Item name='RangeSelector' path='/rangeselector' center={true}>
              <Stack>
                <Box
                  background={{ color: 'brand', opacity: 'weak' }}
                  round='small'
                  pad={{ horizontal: 'xlarge', vertical: 'small' }}
                />
                <RangeSelector
                  direction='horizontal'
                  min={0}
                  max={9}
                  size='full'
                  round='small'
                  values={[3, 7]}
                />
              </Stack>
            </Item>
            <Item name='Select' path='/select' center={true}>
              <Select options={[]} placeholder='Choices' tabIndex='-1' />
            </Item>
            <Item name='TextArea' path='/textarea' center={true}>
              <TextArea placeholder='Placeholder' disabled={true} />
            </Item>
            <Item name='TextInput' path='/textinput' center={true}>
              <TextInput placeholder='Placeholder' disabled={true} />
            </Item>
            <Item name='FormField' path='/formfield' center={true}>
              <FormField label='Label'>
                <TextInput placeholder='value' />
              </FormField>
            </Item>
          </Section>

          <Section name='Visualizations' index={3}>
            <Item name='Calendar' path='/calendar'>
              <Box flex={true} gap='xsmall'>
                {[0, 1, 2, 3, 4].map(week => (
                  <Box key={week * 100} flex={true} direction='row' gap='xsmall'>
                    {[0, 1, 2, 3, 4, 5, 6].map(day => (
                      <Box
                        key={(week * 100) + (day * 10)}
                        flex={true}
                        pad='small'
                        background={{
                          color: 'brand',
                          opacity:
                            (week === 0 && day < 3 && 'weak') ||
                            (week === 1 && day === 5 && 'strong') ||
                            (week === 4 && day > 4 && 'weak') ||
                            'medium',
                        }}
                      />
                    ))}
                  </Box>
                ))}
              </Box>
            </Item>

            <Item name='Chart' path='/chart' center={true}>
              <Chart
                aria-label='Chart example'
                bounds={[[0, 4], [0, 10]]}
                size={{ width: 'small', height: 'small' }}
                round={true}
                color='brand'
                values={CHART_VALUES}
              />
            </Item>

            <Item name='Clock' path='/clock' center={true}>
              <Clock size='large' type='digital' />
            </Item>

            <Item name='Meter' path='/meter' center={true}>
              <Meter
                aria-label='Meter example'
                type='circle'
                size='full'
                thickness='large'
                round={true}
                values={[{ value: 60, label: 'sixty', color: 'brand' }]}
              />
            </Item>

            <Item name='Diagram' path='/diagram' center={true}>
              <Stack>
                <Box>
                  <Box direction='row'>
                    {[1, 2, 3].map(id => (
                      <Box
                        key={id}
                        id={id}
                        basis='xxsmall'
                        margin='small'
                        pad='medium'
                        round='full'
                        background={{ color: 'brand', opacity: 'weak' }}
                      />
                    ))}
                  </Box>
                  <Box direction='row'>
                    {[4, 5, 6, 7].map(id => (
                      <Box
                        key={id}
                        id={id}
                        basis='xxsmall'
                        margin='small'
                        pad='medium'
                        round='full'
                        background={{ color: 'brand', opacity: 'weak' }}
                      />
                    ))}
                  </Box>
                </Box>
                <Diagram
                  connections={[
                    connection(2, 4),
                    connection(3, 5),
                    connection(2, 5),
                    connection(3, 6),
                    connection(6, 7),
                  ]}
                />
              </Stack>
            </Item>

            <Item name='Distribution' path='/distribution'>
              <Distribution
                values={[
                  { value: 70, opacity: 'weak' },
                  { value: 50, opacity: 'weak' },
                  { value: 30, opacity: false },
                  { value: 10, opacity: 'weak' },
                ]}
              >
                {({ opacity }) => (
                  <Box
                    pad='xsmall'
                    background={{ color: 'brand', opacity }}
                    fill={true}
                  />
                )}
              </Distribution>
            </Item>

            <Item name='WorldMap' path='/worldmap' center={true}>
              <WorldMap color='brand' />
            </Item>
          </Section>

          <Section name='Media' index={4}>
            <Item name='Image' path='/image' center={true}>
              <Box direction='row' justify='center' align='end' fill={true}>
                <Box alignSelf='start'>
                  <Actions size='large' color='brand' />
                </Box>
                <TreeOption size='xlarge' color='brand' />
              </Box>
            </Item>

            <Item name='Video' path='/video' center={true}>
              <CirclePlay size='xlarge' color='brand' />
            </Item>
          </Section>

          <Section name='Utilities' index={4}>
            <Item name='Grommet' path='/grommet' center={true}>
              <GrommetIcon color='brand' size='xlarge' />
            </Item>

            <Item name='Keyboard' path='/keyboard' center={true}>
              <Box direction='row' align='center' gap='small'>
                <Key label='&#8984;' />
                <Add color='brand' />
                <Key label='Z' />
              </Box>
            </Item>

            <Item name='Responsive' path='/responsive' center={true}>
              <Box direction='row' align='end' gap='xsmall'>
                <Box align='center'>
                  <Box
                    border={{ color: 'brand', size: 'medium' }}
                    round='small'
                    pad={{ horizontal: 'xlarge', vertical: 'large' }}
                  />
                  <Box background='brand' pad='small' />
                </Box>
                <Box
                  border={{ color: 'brand', size: 'medium' }}
                  round='xsmall'
                  pad={{ horizontal: 'small', vertical: 'medium' }}
                />
              </Box>
            </Item>

            <Item name='SkipLinks' path='/skiplinks' center={true}>
              <Key label='Tab' />
            </Item>
          </Section>

          <Section name='Old School' index={6}>
            <Item name='Carousel' path='/carousel' center={true}>
              <Box fill={true} direction='row' justify='between' align='center'>
                <Previous size='medium' color='brand' />
                <Group size='xlarge' color='brand' />
                <Next size='medium' color='brand' />
              </Box>
            </Item>

            <Item name='Table' path='/table'>
              <Box flex={true} border={{ color: 'brand', size: 'large' }}>
                <Box flex={true} background='brand' />
                {[0, 1, 2].map(row => (
                  <Box key={row} flex={true} direction='row'>
                    {[0, 1, 2, 3].map(col => (
                      <Box key={col} flex={true} border={{ color: 'brand' }} />
                    ))}
                  </Box>
                ))}
              </Box>
            </Item>

            <Item name='Tabs' path='/tabs'>
              <Box
                flex={true}
                direction='row'
                background={{ color: 'brand', opacity: 'weak' }}
              >
                <Box flex={true} background='brand' margin={{ top: 'xlarge' }} />
                <Box flex={true} background='brand' margin={{ top: 'large' }} />
                <Box flex={true} background='brand' margin={{ top: 'xlarge' }} />
              </Box>
            </Item>
          </Section>

        </Box>
      </Page>
    );
  }
}

Components.contextTypes = {
  onColorChange: PropTypes.func,
  theme: PropTypes.object,
};
