import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionPanel,
  Box,
  Button,
  Chart,
  CheckBox,
  Clock,
  Diagram,
  Distribution,
  FormField,
  Grid,
  Heading,
  Menu,
  Meter,
  Paragraph,
  RadioButton,
  RangeInput,
  RangeSelector,
  Select,
  Stack,
  Text,
  TextArea,
  TextInput,
  WorldMap,
} from 'grommet';
import { ThemeContext } from 'grommet/contexts';
import {
  Actions, Add, Announce, Descend, Grommet as GrommetIcon, Group, CirclePlay,
  Next, Paint, Previous, TreeOption,
} from 'grommet-icons';
import Page from '../components/Page';
import Header from '../components/Header';
import RoutedButton from '../components/RoutedButton';

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

const ACCENT_REGEXP = /^accent-/i;
const NEUTRAL_REGEXP = /^neutral-/i;
const STATUS_REGEXP = /^status-/i;

const Section = ({ children, index, name }) => (
  <Box
    flex={false}
    pad={{ vertical: 'medium' }}
    animation={[
      { type: 'zoomIn', duration: 500, delay: 100 + (100 * index) },
      { type: 'fadeIn', duration: 500, delay: (100 * index) },
    ]}
  >
    <Heading level={2} margin={{ top: 'none', horizontal: 'small' }}>
      {name}
    </Heading>
    {Grid.available ? (
      <Grid columns='medium' rows='small' gap={{ row: 'medium' }}>
        {children}
      </Grid>
    ) : (
      <Box direction='row' wrap gap='medium'>
        {React.Children.map(children, child => (
          <Box basis='small' margin={{ bottom: 'medium' }}>
            <Box basis='small'>
              {child}
            </Box>
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

const Item = ({
  name, path, children, center,
}) => (
  <RoutedButton path={path} fill>
    <Box fill pad={{ horizontal: 'small' }}>
      <Heading
        level={3}
        size='small'
        margin={{ top: 'none', bottom: 'small' }}
      >
        {name}
      </Heading>
      <Box
        flex
        background={center ? { color: 'neutral-2', opacity: 'weak' } : undefined}
        justify={center ? 'center' : undefined}
        align={center ? 'center' : undefined}
        pad={center ? 'small' : undefined}
        overflow='hidden'
        round='small'
      >
        {children}
      </Box>
    </Box>
  </RoutedButton>
);

Item.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

Item.defaultProps = {
  center: false,
};

const Key = ({ label }) => (
  <Box
    border={{ color: 'brand', size: 'medium' }}
    round='medium'
    pad='medium'
  >
    <Text size='large' color='brand'>{label}</Text>
  </Box>
);

Key.propTypes = {
  label: PropTypes.string.isRequired,
};

export default class Components extends Component {
  componentDidMount() {
    document.title = 'Components - Grommet';
  }

  render() {
    return (
      <Page>
        <Header
          label='Components'
          summary={(
            <span>
              These are the building blocks of the grommet library, master
              them, and become a l33t.
            </span>
          )}
        />

        <Section align='stretch' name='Layout' index={0}>
          <Item name='Box' path='/box'>
            <Box flex border={{ color: 'brand', size: 'xlarge' }} />
          </Item>

          <Item name='Grid' path='/grid'>
            <Box flex direction='row'>
              <Box basis='1/4' background='brand' margin={{ right: 'small' }} />
              <Box flex background='brand' />
              <Box basis='1/4' background='brand' margin={{ left: 'small' }} />
            </Box>
          </Item>

          <Item name='Layer' path='/layer'>
            <Box flex direction='row'>
              <Box basis='1/3' background={{ color: 'brand', opacity: 'weak' }} />
              <Box flex background='brand' />
            </Box>
          </Item>

          <Item name='Stack' path='/stack'>
            <Box flex border={{ color: 'brand', size: 'xlarge' }}>
              <Box flex background='brand' margin='medium' />
            </Box>
          </Item>
        </Section>

        <Section name='Type' index={1}>
          <Item name='Heading' path='/heading' center>
            <Heading level={2} margin='none'>Player 1</Heading>
          </Item>
          <Item name='Markdown' path='/markdown' center>
            <code>
# Grommet **heart**

Favorite thing,
[link](https://v2.grommet.io/)
            </code>
          </Item>
          <Item name='Paragraph' path='/paragraph' center>
            <Paragraph>
              OASIS was much more than a game or an entertainment
              platform.
              {" It's "}
              a new way of life.
            </Paragraph>
          </Item>
          <Item name='Text' path='/text' center>
            <Text size='large'>Hello there!</Text>
          </Item>
        </Section>

        <ThemeContext.Consumer>
          {theme => (
            <Section name='Color' index={2}>
              <Item name='Brand' path='/color'>
                <Box flex direction='row' background='brand' />
              </Item>
              <Item name='Accents' path='/color'>
                <Box flex direction='row'>
                  {Object.keys(theme.global.colors)
                    .filter(name => ACCENT_REGEXP.test(name))
                    .map(name => (
                      <Box key={name} flex background={name} />
                    ))}
                </Box>
              </Item>
              <Item name='Neutrals' path='/color'>
                <Box flex direction='row'>
                  {Object.keys(theme.global.colors)
                    .filter(name => NEUTRAL_REGEXP.test(name))
                    .map(name => (
                      <Box key={name} flex background={name} />
                    ))}
                </Box>
              </Item>
              <Item name='Status' path='/color'>
                <Box flex direction='row'>
                  {Object.keys(theme.global.colors)
                    .filter(name => STATUS_REGEXP.test(name))
                    .map(name => (
                      <Box key={name} flex background={name} />
                    ))}
                </Box>
              </Item>
            </Section>
          )}
        </ThemeContext.Consumer>

        <Section name='Controls' index={3}>
          <Item name='Accordion' path='/accordion'>
            <Box>
              <Accordion activeIndex={0}>
                <AccordionPanel
                  label={(
                    <Box pad='small'>
                      <Text><strong>Panel 1</strong></Text>
                    </Box>
                  )}
                >
                  <Box
                    pad='medium'
                    align='center'
                    justify='center'
                    background={{ color: 'brand', opacity: 'weak' }}
                  >
                    <Text color='text'>Panel 1 contents</Text>
                  </Box>
                </AccordionPanel>
                <AccordionPanel
                  label={(
                    <Box pad='small'>
                      <Text><strong>Panel 2</strong></Text>
                    </Box>
                  )}
                />
              </Accordion>
            </Box>
          </Item>
          <Item name='Anchor' path='/anchor' center>
            <Text color='brand' size='large'>Don&#39;t press me</Text>
          </Item>
          <Item name='Button' path='/button' center>
            <Button label='Panic' primary onClick={() => {}} />
          </Item>
          <Item name='Drop' path='/drop' center>
            <Box
              border={{ color: 'brand', size: 'large' }}
              round='medium'
              margin='small'
              pad='large'
            />
          </Item>
          <Item name='DropButton' path='/dropbutton' center>
            <Button
              label='Add'
              icon={<Add />}
              reverse
              onClick={() => {}}
            />
          </Item>
          <Item name='Menu' path='/menu' center>
            <Menu tabIndex='-1' size='large' label='Actions' items={[]} />
          </Item>
          <Item name='Tabs' path='/tabs'>
            <Box
              flex
              direction='row'
              background={{ color: 'neutral-2', opacity: 'weak' }}
            >
              <Box flex background='brand' margin={{ top: 'xlarge' }} />
              <Box flex background='brand' margin={{ top: 'large' }} />
              <Box flex background='brand' margin={{ top: 'xlarge' }} />
            </Box>
          </Item>
        </Section>

        <Section name='Input' index={4}>
          <Item name='CheckBox' path='/checkbox' center>
            <CheckBox checked onChange={() => {}} />
          </Item>
          <Item name='RadioButton' path='/radiobutton' center>
            <RadioButton name='radio' checked onChange={() => {}} />
          </Item>
          <Item name='RangeInput' path='/rangeinput' center>
            <RangeInput />
          </Item>
          <Item name='RangeSelector' path='/rangeselector' center>
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
          <Item name='Select' path='/select' center>
            <Select options={[]} placeholder='Choices' tabIndex='-1' />
          </Item>
          <Item name='TextArea' path='/textarea' center>
            <TextArea placeholder='Placeholder' disabled />
          </Item>
          <Item name='TextInput' path='/textinput' center>
            <TextInput placeholder='Placeholder' disabled />
          </Item>
          <Item name='FormField' path='/formfield' center>
            <FormField label='Label'>
              <TextInput placeholder='value' />
            </FormField>
          </Item>
        </Section>

        <Section name='Visualizations' index={5}>
          <Item name='Calendar' path='/calendar'>
            <Box flex gap='xsmall'>
              {[0, 1, 2, 3, 4].map(week => (
                <Box key={week * 100} flex direction='row' gap='xsmall'>
                  {[0, 1, 2, 3, 4, 5, 6].map(day => (
                    <Box
                      key={(week * 100) + (day * 10)}
                      flex
                      pad='small'
                      background={{
                        color: 'brand',
                        opacity:
                          (week === 0 && day < 3 && 'weak')
                          || (week === 1 && day === 5 && 'strong')
                          || (week === 4 && day > 4 && 'weak')
                          || 'medium',
                      }}
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </Item>

          <Item name='Chart' path='/chart' center>
            <Chart
              aria-label='Chart example'
              bounds={[[0, 4], [0, 10]]}
              size={{ width: 'small', height: 'small' }}
              round
              color='brand'
              values={CHART_VALUES}
            />
          </Item>

          <Item name='Clock' path='/clock' center>
            <Clock size='large' type='digital' />
          </Item>

          <Item name='DataTable' path='/datatable'>
            <Box flex border={{ color: 'brand', size: 'large' }}>
              <Box flex background='brand' />
              {[0, 1, 2].map(row => (
                <Box key={row} flex direction='row'>
                  {[0, 1, 2, 3].map(col => (
                    <Box key={col} flex border={{ color: 'brand' }} />
                  ))}
                </Box>
              ))}
            </Box>
          </Item>

          <Item name='Diagram' path='/diagram' center>
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
                  fill
                />
              )}
            </Distribution>
          </Item>

          <Item name='Meter' path='/meter' center>
            <Meter
              aria-label='Meter example'
              type='circle'
              size='full'
              thickness='large'
              round
              values={[{ value: 60, label: 'sixty', color: 'brand' }]}
            />
          </Item>

          <Item name='Table' path='/table'>
            <Box flex border={{ color: 'brand', size: 'large' }}>
              <Box flex background='brand' />
              {[0, 1, 2].map(row => (
                <Box key={row} flex direction='row'>
                  {[0, 1, 2, 3].map(col => (
                    <Box key={col} flex border={{ color: 'brand' }} />
                  ))}
                </Box>
              ))}
            </Box>
          </Item>

          <Item name='WorldMap' path='/worldmap' center>
            <WorldMap color='brand' style={{ width: '100%', height: '100%' }} />
          </Item>
        </Section>

        <Section name='Media' index={6}>
          <Item name='Carousel' path='/carousel' center>
            <Box fill direction='row' justify='between' align='center'>
              <Previous size='medium' color='brand' />
              <Group size='xlarge' color='brand' />
              <Next size='medium' color='brand' />
            </Box>
          </Item>
          <Item name='Image' path='/image' center>
            <Box direction='row' justify='center' align='end' fill>
              <Box alignSelf='start'>
                <Actions size='large' color='brand' />
              </Box>
              <TreeOption size='xlarge' color='brand' />
            </Box>
          </Item>

          <Item name='Video' path='/video' center>
            <CirclePlay size='xlarge' color='brand' />
          </Item>
        </Section>

        <Section name='Utilities' index={7}>
          <Item name='AnnounceContext' path='/announcecontext' center>
            <Announce color='brand' size='xlarge' />
          </Item>

          <Item name='Grommet' path='/grommet' center>
            <GrommetIcon color='brand' size='xlarge' />
          </Item>

          <Item name='InfiniteScroll' path='/infinitescroll' center>
            <Descend color='brand' size='xlarge' />
          </Item>

          <Item name='Keyboard' path='/keyboard' center>
            <Box direction='row' align='center' gap='small'>
              <Key label='&#8984;' />
              <Add color='brand' />
              <Key label='Z' />
            </Box>
          </Item>

          <Item name='ResponsiveContext' path='/responsivecontext' center>
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

          <Item name='SkipLinks' path='/skiplinks' center>
            <Key label='Tab' />
          </Item>

          <Item name='ThemeContext' path='/themecontext' center>
            <Paint color='brand' size='xlarge' />
          </Item>
        </Section>

      </Page>
    );
  }
}
