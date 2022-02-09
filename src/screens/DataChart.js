import React from 'react';
import { Anchor, Box, DataChart, Heading, Paragraph } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { Code } from '../components/Doc/Code';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBool,
  GenericGridArea,
  GenericMargin,
  SizesXsmallXlarge,
  GenericPad,
} from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  PropOptions,
} from '../components/Doc';

const Examples = () => (
  <Box>
    <Box
      alignSelf="start"
      margin={{ top: 'medium' }}
      pad="medium"
      round
      background="light-3"
    >
      <Paragraph margin="none">
        DataChart is in beta mode. We anticipate making API surface changes
        without changing the grommet major version number. This is to allow
        broader usage and feedback gathering. In version 2.15.0, the API surface
        changed, see{' '}
        <Anchor href="https://github.com/grommet/grommet/pull/4226#issue-439480100">
          notes
        </Anchor>
        .
      </Paragraph>
    </Box>
    <Paragraph size="xlarge">
      DataChart takes an array of objects in <code>data</code> and provides
      various visualization capabilities on that data. It attempts to default as
      much as it possibly can to make it easy to get started and then customize
      later. What follows is some guidance on how to get started and then delve
      into what DataChart can do.
    </Paragraph>

    <Heading level={2}>series</Heading>
    <Paragraph size="large">
      To begin with, give your DataChart some data and set the{' '}
      <code>series</code> property to indicate which properties in the data
      objects should be used.
    </Paragraph>
    <Code
      basis={['1/3', '2/3']}
      code={`() => {
  const data = [{ date: '2020-08-20', amount: 2 }, { date: '2020-08-21', amount: 47 }, { date: '2020-08-22', amount: 33 }];
  return (
    <DataChart data={data} series={['date', 'amount']} />
  );
}`}
      name="series"
    />
    <Paragraph>
      Note that the X and Y axis are defaulted and the dates are automatically
      formatted based on the granularity given.
    </Paragraph>

    <Heading level={2}>chart</Heading>
    <Paragraph size="large">
      Next, we can customize the kind of chart we are looking at.
    </Paragraph>
    <Code
      basis={['1/3', '2/3']}
      code={`() => {
  const data = [{ date: '2020-08-20', amount: 2 }, { date: '2020-08-21', amount: 47 }, { date: '2020-08-22', amount: 33 }];
  return (
    <DataChart
      data={data}
      series={['date', 'amount']}
      chart={[
        { property: 'amount', type: 'line', opacity: 'medium', thickness: 'xsmall', round },
        { property: 'amount', type: 'point', point: 'star', thickness: 'medium' }
      ]}
    />
  );
}`}
      name="series"
    />

    <Heading level={2}>axis and guide</Heading>
    <Paragraph size="large">
      Next, we can customize the axis and add guide lines.
    </Paragraph>
    <Code
      basis={['1/3', '2/3']}
      code={`() => {
  const data = [{ date: '2020-08-20', amount: 2 }, { date: '2020-08-21', amount: 47 }, { date: '2020-08-22', amount: 33 }];
  return (
    <DataChart
      data={data}
      series={['date', { property: 'amount', prefix: '$' }]}
      chart={[
        { property: 'amount', type: 'line', opacity: 'medium', thickness: 'xsmall', round },
        { property: 'amount', type: 'point', point: 'star', thickness: 'medium' }
      ]}
      guide={{ x: { granularity: 'fine' } }}
    />
  );
}`}
      name="series"
    />
  </Box>
);

const DataChartPage = () => (
  <Page>
    <ComponentDoc
      name="DataChart"
      intrinsicElement="div"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Visualizations-DataChart&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/datachart&module=%2Fsrc%2FDataChart.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataChart',
          label: 'Github',
        },
      ]}
    >
      <Examples />
      <Properties>
        <Property name="a11yTitle">
          <Description>
            Custom label to be used by screen readers. When provided, an
            aria-label will be added to the element.
          </Description>
          <GenericA11yTitle />
        </Property>

        <Property name="alignSelf">
          <Description>
            How to align along the cross axis when contained in a Box or along
            the column axis when contained in a Grid.
          </Description>
          <GenericAlignSelf />
        </Property>

        <Property name="gridArea">
          <Description>
            The name of the area to place this inside a parent Grid.
          </Description>
          <GenericGridArea />
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the component.</Description>
          <GenericMargin />
        </Property>

        <Property name="axis">
          <Description>
            Whether to show an axis and how it should look.
          </Description>
          <PropertyValue type="boolean">
            <Description>
              If axis is true, DataChart will look for a property called 'date'
              or 'time' and automatically use that for the x-axis. DataChart
              will use the first property in 'series' for the y-axis.
            </Description>
            <Example defaultValue>true</Example>
            <Example>false</Example>
          </PropertyValue>

          <PropertyValue type="string">
            <Description>The name of a property.</Description>
            <Example>"date"</Example>
          </PropertyValue>

          <PropertyValue type="object">
            <Description>
              If 'x' or 'y' is a string, it indicates the property to use to
              determine the values to show. If 'x' is true, DataChart will look
              for a property called 'date' or 'time' and automatically use that
              for the x-axis. 'granularity' indicates how many values to show.
              If DataChart can't find a property to use, it will use the data
              index for the x-axis. If axis or 'y' is true, DataChart will use
              the first property in 'series'. 'coarse' granularity shows two
              values, one at each end. 'fine' granularity shows all x-axis
              values and 5 y-axis values. 'medium' granularity picks something
              in between.
            </Description>
            <Example>
              {`
{
  x: boolean | string |
    {
      granularity: "...",
      property: "date"
    },
  y: boolean | string |
    {
      granularity: "...",
      "property": "amount"
    }
  ]
}
            `}
            </Example>
            <PropOptions prop="granularity">
              <Example>"course"</Example>
              <Example>"medium"</Example>
              <Example>"fine"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="bounds">
          <Description>
            When set to 'align', indicates that the bounds of all series should
            be aligned. When not set, the bounds of each series property are
            based solely on the data found for that property.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"align"</Example>
          </PropertyValue>
        </Property>

        <Property name="chart">
          <Description>How to visualize the data.</Description>
          <PropertyValue type="string">
            <Description>
              If only a string is specified, that is the property to use and all
              other aspects are defaulted.
            </Description>
            <Example>"property"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              'property' indicates which property of the data objects to use.
              When 'type' is 'bars' or 'areas', 'property' is an array of
              strings or objects. If 'property' is an object, it specifies a map
              of properties to graphic aspects: x, y, color, thickness. If
              'transform' is specified, it will be used to transform the data
              value before using it. For example, to convert a data value to a
              hex color string for the color.
            </Description>
            <Example>
              {`
{
  property: "...",
  color: "...",
  dash: boolean,
  opacity: "...",
  pattern: "...",
  point: "...",
  round: boolean,
  thickness: "...",
  type: "..."
}
              `}
            </Example>
            <PropOptions prop="property">
              <Example>"string"</Example>
              <Example>array["property1", "property2"]</Example>
              <Example>{`array[{ property: "...", color: "..." }]`}</Example>
              <Example>{`{ color: "string" | { property: "...", transform: function }, thickness: "...", x: "string", y: "string" }`}</Example>
            </PropOptions>
            <PropOptions prop="color">
              <Example>"string"</Example>
              <Example>{`{ dark: "string", light: "string" }`}</Example>
            </PropOptions>
            <PropOptions prop="opacity">
              <Example>"weak"</Example>
              <Example>"medium"</Example>
              <Example>"strong"</Example>
              <Example>number</Example>
              <Example>boolean</Example>
            </PropOptions>
            <PropOptions prop="pattern">
              <Example>"squares"</Example>
              <Example>"circles"</Example>
              <Example>"stripesHorizontal"</Example>
              <Example>"stripesVertical"</Example>
              <Example>"stripesDiagonalDown"</Example>
              <Example>"stripesDiagonalUp"</Example>
            </PropOptions>
            <PropOptions prop="point">
              <Example>"circle"</Example>
              <Example>"diamond"</Example>
              <Example>"square"</Example>
              <Example>"star"</Example>
              <Example>"triangle"</Example>
              <Example>"triangleDown"</Example>
            </PropOptions>
            <PropOptions prop="thickness">
              <Example>"hair"</Example>
              <SizesXsmallXlarge />
              <Example>"none"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="type">
              <Example>"bar"</Example>
              <Example>"bars"</Example>
              <Example>"line"</Example>
              <Example>"area"</Example>
              <Example>"areas"</Example>
              <Example>"point"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="data">
          <Description>The data set.</Description>
          <PropertyValue type="array">
            <Example>
              {`
[
  {
    "date": "2020-05-28",
    "amount": 88,
    "percent": 20
  },
  {
    "date": "2020-05-27",
    "amount": 77,
    "percent": 15
  }
]
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="detail">
          <Description>
            Whether to add the ability to interact with the chart via mouse or
            keyboard to show details on specific values in the chart. It shows
            all properties specified in 'series', using any 'render' functions
            therein.
          </Description>
          <GenericBool />
        </Property>

        <Property name="gap">
          <Description>
            The spacing between the axes and the Charts.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <SizesXsmallXlarge />
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="guide">
          <Description>
            Whether to put guidelines underneath the chart graphics. See the
            description of 'granularity' under 'axis'.
          </Description>
          <GenericBool />
          <PropertyValue type="object">
            <Example>
              {`
{
  x: boolean |
    {
      granularity:
        "coarse"
        "medium"
        "fine"
    }
  y: boolean |
    {
      granularity:
        "coarse"
        "medium"
        "fine"
    }
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="legend">
          <Description>Whether to include a legend</Description>
          <GenericBool />
        </Property>

        <Property name="pad">
          <Description>
            Spacing around the outer edge of the drawing coordinate area for the
            graphic elements to overflow into.
          </Description>
          <GenericPad />
        </Property>

        <Property name="series">
          <Description disableMarkdown>
            Describes which parts of the 'data' are of interest and how to
            handle them.
          </Description>
          <PropertyValue type="string">
            <Example>"property"</Example>
          </PropertyValue>
          <PropertyValue type="array[string]">
            <Example>["property1", "property2"]</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              {`'property' indicates which property of the 'data'
 objects this series refers to. 'label' indicates how to label the series
 in a legend or hover details. 'prefix' and 'suffix' are applied to the
 data values shown in an axis, legend, or details. 'render' allows custom
 rendering of the data value. 'render' is called with:
 (value, datum, property) => { return < />; }`}
            </Description>
            <Example>
              {`
{
  label: "string",
  prefix: "$",
  property: "string",
  render: (value, datam, dataIndex) => element,
  suffix: "%"
}
            `}
            </Example>
          </PropertyValue>
          <PropertyValue type="array[object]">
            <Example>
              {`
[
  {
    label: "string",
    prefix: "$",
    property: "string",
    render: (value, datam, dataIndex) => element,
    suffix: "%"
  },
]
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            The size of the Charts. This does not include the axes and any gap.
            It is passed through to the underlying Chart.
          </Description>
          <PropertyValue type="string">
            <Example>"fill"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ height: "...", width: "..." }`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DataChartPage;

const DATA_CHART_DATA = [
  { date: '2020-01-15', amount: 33 },
  { date: '2020-02-15', amount: 11 },
  { date: '2020-03-15', amount: 22 },
  { date: '2020-04-15', amount: 66 },
  { date: '2020-05-15', amount: 88 },
];

export const DataChartItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <DataChart
      aria-label="DataChart example"
      size={{ width: 'small', height: 'xsmall' }}
      data={DATA_CHART_DATA}
      series={['date', 'amount']}
      chart={[
        {
          property: 'amount',
          type: 'line',
          color: 'brand',
          opacity: 'medium',
          thickness: 'xsmall',
        },
        {
          property: 'amount',
          type: 'point',
          point: 'diamond',
          color: 'brand',
          thickness: 'medium',
        },
      ]}
      guide={{ x: true }}
      pad="xsmall"
      axis={{
        x: { granularity: 'medium' },
        y: { granularity: 'coarse' },
      }}
    />
  </Item>
);

DataChartItem.propTypes = Item.propTypes;
