import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
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
  Image,
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
  ThemeContext,
  WorldMap,
} from 'grommet';
import {
  Add,
  CirclePlay,
  Descend,
  FormDown,
  Grommet as GrommetIcon,
  Next,
  Paint,
  Previous,
  Shift,
  Sign,
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
    pad={{ vertical: 'medium' }}
    animation={[
      { type: 'zoomIn', duration: 500, delay: 100 + 100 * index },
      { type: 'fadeIn', duration: 500, delay: 100 * index },
    ]}
  >
    <Heading level={2} margin={{ top: 'none', horizontal: 'small' }}>
      {name}
    </Heading>
    {Grid.available ? (
      <Grid
        columns={{ count: 'fit', size: 'medium' }}
        rows="small"
        gap={{ row: 'medium' }}
      >
        {children}
      </Grid>
    ) : (
      <Box direction="row" wrap>
        {React.Children.map(children, child => (
          <Box basis="medium" pad="small">
            <Box basis="small">{child}</Box>
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

const Item = ({ name, path, children, center, ...rest }) => (
  <RoutedButton path={path} fill>
    <Box fill pad={{ horizontal: 'small' }}>
      <Heading level={3} size="small" margin={{ top: 'none', bottom: 'small' }}>
        {name}
      </Heading>
      <Box
        flex
        background={
          center ? { color: 'neutral-2', opacity: 'weak' } : undefined
        }
        justify={center ? 'center' : undefined}
        align={center ? 'center' : undefined}
        pad={center ? 'small' : undefined}
        overflow="hidden"
        round="small"
        style={{ pointerEvents: 'none' }}
        {...rest}
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
  <Box border={{ color: 'brand', size: 'medium' }} round="medium" pad="medium">
    <Text size="large" color="brand">
      {label}
    </Text>
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
          label="Components"
          summary={
            <span>
              These are the building blocks of the grommet library, master them,
              and become a l33t.
            </span>
          }
        />

        <Section name="Layout" index={0}>
          <Item name="Box" path="/box">
            <Box flex border={{ color: 'brand', size: 'xlarge' }} />
          </Item>

          <Item name="Grid" path="/grid">
            <Box flex direction="row">
              <Box basis="1/4" background="brand" margin={{ right: 'small' }} />
              <Box flex background="brand" />
              <Box basis="1/4" background="brand" margin={{ left: 'small' }} />
            </Box>
          </Item>

          <Item name="Layer" path="/layer">
            <Box flex direction="row">
              <Box
                basis="1/3"
                background={{ color: 'brand', opacity: 'weak' }}
              />
              <Box flex background="brand" />
            </Box>
          </Item>

          <Item name="Stack" path="/stack">
            <Box flex border={{ color: 'brand', size: 'xlarge' }}>
              <Box flex background="brand" margin="medium" />
            </Box>
          </Item>
        </Section>

        <Section name="Type" index={1}>
          <Item name="Heading" path="/heading" center>
            <Heading level={2} margin="none">
              Chapter 1
            </Heading>
          </Item>
          <Item name="Markdown" path="/markdown" center>
            <code>grommet **heart**&#39;s markdown</code>
          </Item>
          <Item name="Paragraph" path="/paragraph" center>
            <Paragraph>
              OASIS was much more than a game or an entertainment platform.
              {" It's "}a new way of life.
            </Paragraph>
          </Item>
          <Item name="Text" path="/text" center>
            <Text size="large">non-sematic text</Text>
          </Item>
        </Section>

        <ThemeContext.Consumer>
          {theme => (
            <Section name="Color" index={2}>
              <Item name="Brand" path="/color">
                <Box flex direction="row" background="brand" />
              </Item>
              <Item name="Accents" path="/color">
                <Box flex direction="row">
                  {Object.keys(theme.global.colors)
                    .filter(name => ACCENT_REGEXP.test(name))
                    .map(name => (
                      <Box key={name} flex background={name} />
                    ))}
                </Box>
              </Item>
              <Item name="Neutrals" path="/color">
                <Box flex direction="row">
                  {Object.keys(theme.global.colors)
                    .filter(name => NEUTRAL_REGEXP.test(name))
                    .map(name => (
                      <Box key={name} flex background={name} />
                    ))}
                </Box>
              </Item>
              <Item name="Status" path="/color">
                <Box flex direction="row">
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

        <Section name="Controls" index={3}>
          <Item name="Accordion" path="/accordion" center>
            <Box width="small">
              <Box pad="small" background="brand" />
              <Box
                pad="small"
                background={{ color: 'brand', opacity: 'medium' }}
              />
              <Box pad="small" background="brand" />
              <Box
                pad="small"
                background={{ color: 'brand', opacity: 'medium' }}
              />
            </Box>
          </Item>
          <Item name="Anchor" path="/anchor" center>
            <Text color="brand" size="large">
              i&#39;m an anchor
            </Text>
          </Item>
          <Item name="Button" path="/button" center>
            <Button label="i'm a button" primary onClick={() => {}} />
          </Item>
          <Item name="Drop" path="/drop" center>
            <Box
              border={{ color: 'brand', size: 'large' }}
              round="medium"
              margin="small"
              pad={{ horizontal: 'large', vertical: 'medium' }}
            />
          </Item>
          <Item name="DropButton" path="/dropbutton" center>
            <Box flex={false}>
              <Button
                label="i'm a button"
                icon={<FormDown />}
                reverse
                onClick={() => {}}
              />
              <Box
                elevation="medium"
                pad={{ horizontal: 'xlarge', vertical: 'large' }}
              />
            </Box>
          </Item>
          <Item name="Menu" path="/menu" center>
            <Box flex={false}>
              <Menu tabIndex="-1" size="large" label="i'm a menu" items={[]} />
              <Box
                elevation="medium"
                pad={{ horizontal: 'xlarge', vertical: 'large' }}
              />
            </Box>
          </Item>
          <Item name="Tabs" path="/tabs" center justify="end" pad="none">
            <Box direction="row" align="end" alignSelf="stretch" gap="small">
              <Box
                flex
                background={{ color: 'brand', opacity: 'medium' }}
                pad={{ vertical: 'medium', horizontal: 'small' }}
                round={{ corner: 'top', size: 'small' }}
              />
              <Box
                flex
                align="center"
                background="brand"
                pad={{ vertical: 'small', horizontal: 'small' }}
                round={{ corner: 'top', size: 'small' }}
              >
                <Text>i&#39;m a tab</Text>
              </Box>
              <Box
                flex
                background={{ color: 'brand', opacity: 'medium' }}
                pad={{ vertical: 'medium', horizontal: 'small' }}
                round={{ corner: 'top', size: 'small' }}
              />
            </Box>
          </Item>
        </Section>

        <Section name="Input" index={4}>
          <Item name="CheckBox" path="/checkbox" center>
            <CheckBox checked onChange={() => {}} />
          </Item>
          <Item name="RadioButton" path="/radiobutton" center>
            <RadioButton name="radio" checked onChange={() => {}} />
          </Item>
          <Item name="RangeInput" path="/rangeinput" center pad="large">
            <RangeInput />
          </Item>
          <Item name="RangeSelector" path="/rangeselector" center>
            <Stack>
              <Box direction="row" gap="small">
                {[1, 2, 3, 4, 5].map(n => (
                  <Box
                    key={n * 100}
                    width="xxsmall"
                    height="xxsmall"
                    align="center"
                    justify="center"
                  >
                    <Text>{n}</Text>
                  </Box>
                ))}
              </Box>
              <RangeSelector
                direction="horizontal"
                min={1}
                max={5}
                size="full"
                round="small"
                values={[2, 4]}
              />
            </Stack>
          </Item>
          <Item
            name="Select"
            path="/select"
            center
            pad={{ horizontal: 'large' }}
          >
            <Select options={[]} placeholder="Choices" tabIndex="-1" />
          </Item>
          <Item
            name="TextArea"
            path="/textarea"
            center
            pad={{ horizontal: 'xlarge' }}
          >
            <TextArea placeholder="Placeholder" disabled />
          </Item>
          <Item
            name="TextInput"
            path="/textinput"
            center
            pad={{ horizontal: 'xlarge' }}
          >
            <TextInput placeholder="Placeholder" disabled />
          </Item>
          <Item name="FormField" path="/formfield" center>
            <FormField label="Label">
              <TextInput placeholder="value" />
            </FormField>
          </Item>
        </Section>

        <Section name="Visualizations" index={5}>
          <Item name="Calendar" path="/calendar" center>
            <Box flex={false} gap="xsmall">
              {[0, 1, 2, 3, 4].map(week => (
                <Box key={week * 100} flex direction="row" gap="xsmall">
                  {[0, 1, 2, 3, 4, 5, 6].map(day => (
                    <Box
                      key={week * 100 + day * 10}
                      flex={false}
                      pad="xsmall"
                      round
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

          <Item name="Chart" path="/chart" center>
            <Chart
              aria-label="Chart example"
              bounds={[[0, 4], [0, 10]]}
              size={{ width: 'small', height: 'xsmall' }}
              round
              color="brand"
              values={CHART_VALUES}
            />
          </Item>

          <Item name="Clock" path="/clock" center>
            <Clock size="large" type="digital" />
          </Item>

          <Item name="DataTable" path="/datatable" center>
            <Box gap="xsmall">
              <Box background="brand" />
              {[0, 1, 2, 3].map(row => (
                <Box key={row * 100} direction="row" gap="xsmall">
                  {[0, 1, 2].map(col => (
                    <Box
                      key={col * 100 + row * 10}
                      background={
                        (!row && 'brand') ||
                        (!col && { color: 'brand', opacity: 'medium' }) ||
                        undefined
                      }
                      border={col && row ? { color: 'brand' } : undefined}
                      width={col ? 'xsmall' : 'xxsmall'}
                      pad="small"
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </Item>

          <Item name="Diagram" path="/diagram" center>
            <Stack>
              <Box>
                <Box direction="row">
                  {[1, 2, 3].map(id => (
                    <Box
                      key={id}
                      id={id}
                      basis="xxsmall"
                      margin="small"
                      pad="medium"
                      round="full"
                      background={{ color: 'brand', opacity: 'medium' }}
                    />
                  ))}
                </Box>
                <Box direction="row">
                  {[4, 5, 6, 7].map(id => (
                    <Box
                      key={id}
                      id={id}
                      basis="xxsmall"
                      margin="small"
                      pad="medium"
                      round="full"
                      background={{ color: 'brand', opacity: 'medium' }}
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

          <Item name="Distribution" path="/distribution" center pad="medium">
            <Box fill>
              <Distribution
                values={[
                  { value: 70, opacity: 'medium' },
                  { value: 50, opacity: 'medium' },
                  { value: 30 },
                  { value: 10, opacity: 'medium' },
                ]}
              >
                {({ opacity }) => (
                  <Box
                    pad="small"
                    background={{ color: 'brand', opacity }}
                    fill
                    round="xsmall"
                  />
                )}
              </Distribution>
            </Box>
          </Item>

          <Item name="Meter" path="/meter" center pad="medium">
            <Meter
              aria-label="Meter example"
              type="circle"
              size="full"
              thickness="large"
              round
              background={{ color: 'brand', opacity: 'weak' }}
              values={[{ value: 60, label: 'sixty', color: 'brand' }]}
            />
          </Item>

          <Item name="Table" path="/table" center>
            <Box>
              {[0, 1, 2, 4].map(row => (
                <Box key={row} direction="row">
                  {[0, 1, 2].map(col => (
                    <Box
                      key={col}
                      border={{ color: 'brand' }}
                      width="xxsmall"
                      pad="small"
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </Item>

          <Item name="WorldMap" path="/worldmap" center pad="medium">
            <WorldMap color="brand" />
          </Item>
        </Section>

        <Section name="Media" index={6}>
          <Item name="Carousel" path="/carousel" center pad="none">
            <Box
              fill
              direction="row"
              justify="between"
              align="center"
              gap="small"
            >
              <Box
                height="xsmall"
                background="white"
                elevation="medium"
                justify="center"
                pad="small"
              >
                <Previous size="medium" color="brand" />
              </Box>
              <Box
                width="medium"
                height="xsmall"
                background="white"
                elevation="medium"
              />
              <Box
                height="xsmall"
                background="white"
                elevation="medium"
                justify="center"
                pad="small"
              >
                <Next size="medium" color="brand" />
              </Box>
            </Box>
          </Item>
          <Item name="Image" path="/image">
            <Image
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
              fit="cover"
            />
          </Item>

          <Item name="Video" path="/video" center>
            <CirclePlay color="brand" size="xlarge" />
          </Item>
        </Section>

        <Section name="Utilities" index={7}>
          <Item name="AnnounceContext" path="/announcecontext" center>
            <Sign color="brand" size="xlarge" />
          </Item>

          <Item name="Collapsible" path="/collapsible" center>
            <Shift color="brand" size="xlarge" />
          </Item>

          <Item name="Grommet" path="/grommet" center>
            <GrommetIcon color="brand" size="xlarge" />
          </Item>

          <Item name="InfiniteScroll" path="/infinitescroll" center>
            <Descend color="brand" size="xlarge" />
          </Item>

          <Item name="Keyboard" path="/keyboard" center>
            <Box direction="row" align="center" gap="small">
              <Key label=" &#8984; " />
              <Add color="brand" />
              <Key label="Z" />
            </Box>
          </Item>

          <Item name="ResponsiveContext" path="/responsivecontext" center>
            <Box direction="row" align="end" gap="xsmall">
              <Box align="center">
                <Box
                  border={{ color: 'brand', size: 'medium' }}
                  round="small"
                  pad={{ horizontal: 'xlarge', vertical: 'large' }}
                />
                <Box background="brand" pad="small" />
              </Box>
              <Box
                border={{ color: 'brand', size: 'medium' }}
                round="xsmall"
                pad={{ horizontal: 'small', vertical: 'medium' }}
              />
            </Box>
          </Item>

          <Item name="SkipLinks" path="/skiplinks" center>
            <Key label="Tab" />
          </Item>

          <Item name="ThemeContext" path="/themecontext" center>
            <Paint color="brand" size="xlarge" />
          </Item>
        </Section>
      </Page>
    );
  }
}
