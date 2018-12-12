import React, { Component } from 'react';
import {
  Box,
  Chart,
  Clock,
  Diagram,
  Distribution,
  Image,
  Meter,
  Stack,
  WorldMap,
} from 'grommet';
import {
  Add,
  CirclePlay,
  Descend,
  Grommet as GrommetIcon,
  Next,
  Paint,
  Previous,
  Shift,
  Sign,
} from 'grommet-icons';
import { structure, nameToPath } from '../../structure';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Key from './Key';
import Item from './Item';
import Section from './Section';
import Color from './Color';

import {
  AccordionItem,
  AnchorItem,
  BoxItem,
  ButtonItem,
  CalendarItem,
  ChartItem,
  CheckBoxItem,
  ClockItem,
  DropItem,
  DropButtonItem,
  FormFieldItem,
  GridItem,
  HeadingItem,
  LayerItem,
  MarkdownItem,
  MaskedInputItem,
  MenuItem,
  ParagraphItem,
  RadioButtonItem,
  RangeInputItem,
  RangeSelectorItem,
  SelectItem,
  StackItem,
  TabsItem,
  TextItem,
  TextAreaItem,
  TextInputItem,
} from './items';

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

const Items = {
  Accordion: AccordionItem,
  Anchor: AnchorItem,
  Box: BoxItem,
  Button: ButtonItem,
  Calendar: CalendarItem,
  Chart: ChartItem,
  CheckBox: CheckBoxItem,
  Clock: ClockItem,
  Drop: DropItem,
  DropButton: DropButtonItem,
  FormField: FormFieldItem,
  Grid: GridItem,
  Heading: HeadingItem,
  Layer: LayerItem,
  Markdown: MarkdownItem,
  MaskedInput: MaskedInputItem,
  Menu: MenuItem,
  Paragraph: ParagraphItem,
  RadioButton: RadioButtonItem,
  RangeInput: RangeInputItem,
  RangeSelector: RangeSelectorItem,
  Select: SelectItem,
  Stack: StackItem,
  Tabs: TabsItem,
  Text: TextItem,
  TextArea: TextAreaItem,
  TextInput: TextInputItem,
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

        {structure.sections.map(({ name, components }, index) => (
          <Section key={name} name={name} index={index}>
            {name === 'Color' ? (
              <Color index={index} />
            ) : (
              components.map(component => {
                const ItemX = Items[component] || Item;
                return (
                  <ItemX
                    key={component}
                    name={component}
                    path={nameToPath(component)}
                  />
                );
              })
            )}
          </Section>
        ))}

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
