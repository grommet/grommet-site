import React from 'react';
import { Chart, Heading, Paragraph } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBool,
  GenericBoolFalse,
  GenericGridArea,
  GenericMargin,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { EdgeStyle } from '../utils/themeDocUtils';

export default () => (
  <Page>
    <ComponentDoc
      name="Chart"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Visualizations-Chart&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/chart&module=%2Fsrc%2FChart.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A graphical chart"
      code={`<Chart
  bounds={[[0, 7], [0, 100]]}
  values={[
    { value: [7, 100], label: 'one hundred' },
    { value: [6, 70], label: 'seventy' },
    { value: [5, 60], label: 'sixty' },
    { value: [4, 80], label: 'eighty' },
    { value: [3, 40], label: 'forty' },
    { value: [2, 0], label: 'zero' },
    { value: [1, 30], label: 'thirty' },
    { value: [0, 60], label: 'sixty' },
  ]}
  aria-label="chart"
/>`}
    >
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

        <Property name="animate">
          <Description>Whether to animate drawing.</Description>
          <GenericBool />
        </Property>

        <Property name="bounds">
          <Description>
            The limits for the values, specified as a two dimensional array.
          </Description>
          <PropertyValue type="array">
            <Description>
              The first array specifies the limits of the x-axis. The second
              array specifies the limits of the y-axis. For example: [[x-min,
              x-max], [y-min, y-max]]. If not specified, the bounds will
              automatically be set to fit the provided values.
            </Description>
            <Example>[[0, 10], [0, 100]]</Example>
          </PropertyValue>
        </Property>

        <Property name="color">
          <Description>
            A color identifier to use for the graphic color.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"accent-1"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              'opacity' is deprecated, use top level 'opacity'.
            </Description>
            <Example>{`{"color": "graph-0", "opacity": true}`}</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>
              If an array is specified, it is used to create a gradient mask.
              Array objects indicate what color to show at what value. In the
              simplest case, the values should map to the Y bounds values,
              resulting in a vertical gradient. Specifying more objects allows
              more fine grained control over where the gradient colors change.
            </Description>
            <Example>
              {`[{
 color: "string" |
 { dark: "string", light: "string" },
 value: number
}]
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>
            A unique identifier for the Chart. This is required if more than one
            Chart is shown and they use color gradients or if a pattern is
            specified.
          </Description>
          <PropertyValue type="string">
            <Example>"chart_1"</Example>
          </PropertyValue>
        </Property>

        <Property name="dash">
          <Description>
            Whether to use dashed lines for line or bar charts.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="gap">
          <Description>
            The amount of spacing between data points. This is only used when
            the size specifies width as 'auto'.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="onClick">
          <Description>
            Called when the user clicks on the visualization. Clicking on
            individual bars or points are handled via values[].onClick for those
            types of charts.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onHover">
          <Description>
            Called with a boolean argument indicating when the user hovers onto
            or away from it. This is only available when the type is line or
            area.
          </Description>
          <PropertyValue type="function">
            <Example>{`(true) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="opacity">
          <Description>
            What opacity to apply to the visuals. Supersedes 'color.opacity'
          </Description>
          <PropertyValue type="string">
            <Example>"weak"</Example>
            <Example>"medium"</Example>
            <Example>"strong"</Example>
          </PropertyValue>
          <GenericBool />
        </Property>

        <Property name="overflow">
          <Description>
            Whether the chart strokes should overflow the component. Set this to
            true for precise positioning when stacking charts or including
            precise axes. Set this to false to have the graphical elements align
            with the component boundaries.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="pad">
          <Description>
            Spacing around the outer edge of the drawing coordinate area.
            Related to 'overflow', this allows control over how much space is
            available for bars and points to overflow into.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example defaultValue>"none"</Example>
            <Example>"xxsmall"</Example>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object can be specified to distinguish horizontal padding,
              vertical padding, and padding on a particular side.
            </Description>
            <Example>
              {`
{
  bottom: "...",
  end: "...",
  horizontal: "...",
  left: "...",
  right: "...",
  start: "...",
  top: "...",
  vertical: "..."
}
        `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pattern">
          <Description>
            When using an 'area' type, what pattern to fill the area with.
          </Description>
          <PropertyValue type="string">
            <Example>"squares"</Example>
            <Example>"circles"</Example>
            <Example>"stripesHorizontal"</Example>
            <Example>"stripesVertical"</Example>
            <Example>"stripesDiagonalDown"</Example>
            <Example>"stripesDiagonalUp"</Example>
          </PropertyValue>
        </Property>

        <Property name="point">
          <Description>
            When using a 'point' type, what shape the points should use. If this
            property is not specified, points will be drawn as a square or a
            circle, based on how 'round' is specified.
          </Description>
          <PropertyValue type="string">
            <Example>"circle"</Example>
            <Example>"diamond"</Example>
            <Example>"square"</Example>
            <Example>"star"</Example>
            <Example>"triangle"</Example>
            <Example>"triangleDown"</Example>
          </PropertyValue>
        </Property>

        <Property name="round">
          <Description>Whether to round the line ends.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="size">
          <Description>
            The size of the Chart. 'full' is deprecated as 'fill' is more
            consistent with how that term is used elsewhere.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"fill"</Example>
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{"height": "...", "width": "..."}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="thickness">
          <Description>The width of the stroke.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <Example>"hair"</Example>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>5</Example>
          </PropertyValue>
        </Property>

        <Property name="type">
          <Description>The visual type of chart.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"bar"</Example>
            <Example>"line"</Example>
            <Example>"area"</Example>
            <Example>"point"</Example>
          </PropertyValue>
        </Property>

        <Property name="values">
          <Description>Array of value objects describing the data.</Description>
          <PropertyValue type="array">
            <Description>
              'value' is a tuple indicating the coordinate of the value or a
              triple indicating the x coordinate and a range of two y
              coordinates. 'label' is a text string describing it. 'onHover' and
              'onClick' only work when type='bar'. 'color', 'opacity', and
              'thickness' allow bar and point charts to have color variation
              per-value.
            </Description>
            <Example>[ 10, 20 ]</Example>
            <Example>[ [10, 20], [20, 30] ]</Example>
            <Example>
              {`
[
  {
    color: "string" | { dark: "string", light: "string" },
    label: "string",
    onClick: function,
    onHover: function,
    opacity: "string" | number | boolean,
    thickness: "string",
    value: "..."
  },
]
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="chart.color">
          <Description>Color of the Chart.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"accent-1"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="chart.extend">
          <Description>Any additional style for the Chart.</Description>
          <GenericExtend />
        </Property>

        <Property name="global.colors">
          <Description>Color options.</Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  "icon": { "dark": "#f8f8f8", "light": "#666666" },
  "active": "rgba(221, 221, 221, 0.5)",
  "background-back": { "dark": "#33333308", "light": "#EDEDED" },
  "background-front": { "dark": "#444444", "light": "#FFFFFF" },
  "background-contrast": { "light": "#33333310", "dark": "#FFFFFF18" },
  "active-background": "background-contrast",
  "active-text": "text-strong",
  "black": "#000000",
  "border": { "dark": "rgba(255, 255, 255, 0.33)", "light": "rgba(0, 0, 0, 0.33)" },
  "brand": "#7D4CDB",
  "control": { "dark": "accent-1", "light": "brand" },
  "focus": "#6FFFB0",
  "graph-0": "accent-1",
  "graph-1": "neutral-1",
  "graph-2": "neutral-2",
  "graph-3": "neutral-3",
  "graph-4": "neutral-4",
  "placeholder": "#AAAAAA",
  "selected": "brand",
  "text": { "dark": "#f8f8f8", "light": "#444444" },
  "text-strong": { "dark": "#FFFFFF", "light": "#000000" },
  "text-weak": { "dark": "#CCCCCC", "light": "#555555" },
  "text-xweak": { "dark": "#BBBBBB", "light": "#666666" },
  "selected-background": "brand",
  "selected-text": "text-strong",
  "white": "#FFFFFF",
  "accent-1": "#6FFFB0",
  "accent-2": "#FD6FFF",
  "accent-3": "#81FCED",
  "accent-4": "#FFCA58",
  "dark-1": "#333333",
  "dark-2": "#555555",
  "dark-3": "#777777",
  "dark-4": "#999999",
  "dark-5": "#999999",
  "dark-6": "#999999",
  "light-1": "#F8F8F8",
  "light-2": "#F2F2F2",
  "light-3": "#EDEDED",
  "light-4": "#DADADA",
  "light-5": "#DADADA",
  "light-6": "#DADADA",
  "neutral-1": "#00873D",
  "neutral-2": "#3D138D",
  "neutral-3": "#00739D",
  "neutral-4": "#A2423D",
  "status-critical": "#FF4040",
  "status-error": "#FF4040",
  "status-warning": "#FFAA15",
  "status-ok": "#00C781",
  "status-unknown": "#CCCCCC",
  "status-disabled": "#CCCCCC",
  "background": { "light": "#ffffff", "dark": "#000000" }
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <EdgeStyle description="The possible sizes for the thickness in the Chart" />

        <Property name="global.opacity">
          <Description>The opacity of the Chart stroke.</Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  strong: 0.8,
  medium: 0.4,
  weak: 0.1,
}
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.size">
          <Description>
            The possible sizes for Chart width and height.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  xxsmall: '48px',
  xsmall: '96px',
  small: '192px',
  medium: '384px',
  large: '768px',
  xlarge: '1152px',
  xxlarge: '1536px',
  full: '100%',
}
`}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>

    <ComponentDoc
      name="calcs()"
      description="a function to help calculate values for bounds and axis"
      pageTitle="Chart"
    >
      <code>
        {`const { axis, bounds, pad, thickness } = calcs(values, { coarseness, steps })`}
      </code>
      <Paragraph>
        <code>calcs()</code> takes an array of values and provides
        recommendations on how to set Chart properties and construct axes.
      </Paragraph>
      <Heading level={2}>options</Heading>

      <Property name="coarseness" first>
        <Description>
          Affects the precision of the bounds and axes. For example, if the
          values are [27.35, 9.47], higher coarseness would bound it from 0-50,
          lower coarseness would bound it from 9-28.
        </Description>
        <PropertyValue type="number">
          <Example defaultValue>5</Example>
        </PropertyValue>
      </Property>

      <Property name="steps">
        <Description>Affects the stepping of the axis values.</Description>
        <PropertyValue type="array">
          <Example>[1, 1]</Example>
        </PropertyValue>
      </Property>

      <Heading level={2}>returns</Heading>

      <Property name="bounds" first>
        <Description>
          An array of arrays suitable for use with the Chart bounds property.
        </Description>
        <PropertyValue type="array">
          <Example>[[0, 2], [0, 100]]</Example>
        </PropertyValue>
      </Property>

      <Property name="thickness">
        <Description>
          A string suitable for use with the Chart thickness property.
        </Description>
        <PropertyValue type="string">
          <Example>"medium"</Example>
        </PropertyValue>
      </Property>

      <Property name="pad">
        <Description>
          A string suitable for use with the Chart pad property.
        </Description>
        <PropertyValue type="string">
          <Example>"medium"</Example>
        </PropertyValue>
      </Property>

      <Property name="axes">
        <Description>
          An array of arrays. The first array is for X axis values. The second
          array is for Y axis values.
        </Description>
        <PropertyValue type="array">
          <Example>[[0, 1, 2], [0, 50, 100]]</Example>
        </PropertyValue>
        <PropertyValue>
          <Description>
            The X axis values could be rendered however you like, perhaps with
            something like:
          </Description>
          <Example>{`<Box direction="row" justify="between" gap="small">
    {axis[0].map(a => <Text color="text-xweak" />)}
  </Box>`}</Example>
        </PropertyValue>
      </Property>
    </ComponentDoc>
  </Page>
);

const CHART_VALUES = [
  { value: [4, 5], label: '4' },
  { value: [3, 2], label: '3' },
  { value: [2, 10], label: '2' },
  { value: [1, 7], label: '1' },
  { value: [0, 3], label: '0' },
];

export const ChartItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Chart
      aria-label="Chart example"
      bounds={[
        [0, 4],
        [0, 10],
      ]}
      size={{ width: 'small', height: 'xsmall' }}
      round
      color="brand"
      values={CHART_VALUES}
    />
  </Item>
);

ChartItem.propTypes = Item.propTypes;
