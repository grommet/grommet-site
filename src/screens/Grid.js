import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericGridArea,
  GenericMargin,
  GenericAlign,
  GenericFill,
  GenericBoolTrue,
  GenericAs,
  GenericBool,
  GenericPad,
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
  PropOptions,
} from '../components/Doc';
import { EdgeStyle } from '../utils/themeDocUtils';

const code = `<Grid
  rows={['xxsmall', 'xsmall']}
  columns={['xsmall', 'small']}
  gap="small"
  areas={[
    { name: 'header', start: [0, 0], end: [1, 0] },
    { name: 'nav', start: [0, 1], end: [0, 1] },
    { name: 'main', start: [1, 1], end: [1, 1] },
  ]}
>
  <Box gridArea="header" background="brand" />
  <Box gridArea="nav" background="light-5" />
  <Box gridArea="main" background="light-2" />
</Grid>`;

export default () => (
  <Page>
    <ComponentDoc
      name="Grid"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Layout-Grid&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/grid&module=%2Fsrc%2FGrid.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A grid system for laying out content"
      intrinsicElement="div"
      code={code}
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

        <Property name="align">
          <Description>
            How to align the contents along the cross axis. Any 'align-items'
            valid CSS value is accepted, including composed ones such 'first
            baseline' and 'unsafe start'.
          </Description>
          <GenericAlign />
        </Property>

        <Property name="alignContent">
          <Description>
            How to align the contents when there is extra space in the cross
            axis. Any 'align-content' valid CSS value is accepted, including
            composed ones such 'first baseline' and 'unsafe start'.
          </Description>
          <PropertyValue type="string">
            <Example>"around"</Example>
            <Example>"baseline"</Example>
            <Example>"between"</Example>
            <Example>"center"</Example>
            <Example>"evenly"</Example>
            <Example>"end"</Example>
            <Example>"start"</Example>
            <Example>"stretch"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="areas">
          <Description>Grid areas.</Description>
          <PropertyValue type="array[object]">
            <Description>Area names and column,row coordinates.</Description>
            <Example>
              {`
[{
  name: "header",
  start: [0, 0],
  end: [0, 2]
 }]
            `}
            </Example>
          </PropertyValue>
          <PropertyValue type="array[array[string]]">
            <Description>
              An array of string arrays that specify named grid areas.
            </Description>
            <Example>
              {`
[
  ["header"],
]
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="border">
          <Description>Include a border.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"top"</Example>
            <Example>"left"</Example>
            <Example>"bottom"</Example>
            <Example>"right"</Example>
            <Example>"start"</Example>
            <Example>"end"</Example>
            <Example>"horizontal"</Example>
            <Example>"vertical"</Example>
            <Example>"all"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: string | { dark: string, light: string },
  size: "medium",
  style: "solid",
  side: "all"
}              
              `}
            </Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>
              An array of objects defining the border for different sides.
            </Description>
            <Example>
              {`
[
  {
    color: "black",
    size: "small",
    style: "solid",
    side: "top"
  },
  {
    color: "black",
    size: "medium",
    style: "dotted",
    side: "bottom"
  }
]
              `}
            </Example>
            <PropOptions prop="size">
              <SizesXsmallXlarge />
              <Example>"any CSS size"</Example>
            </PropOptions>
            <PropOptions prop="style">
              <Example>"solid"</Example>
              <Example>"dashed"</Example>
              <Example>"dotted"</Example>
              <Example>"double"</Example>
              <Example>"groove"</Example>
              <Example>"ridge"</Example>
              <Example>"inset"</Example>
              <Example>"outset"</Example>
              <Example>"hidden"</Example>
            </PropOptions>
            <PropOptions prop="side">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"horizontal"</Example>
              <Example>"vertical"</Example>
              <Example>"all"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="columns">
          <Description>Column sizes.</Description>
          <PropertyValue type="string">
            <Description>
              Specifying a single string will repeat multiple columns of that
              size, as long as there is room for more.
            </Description>
            <SizesXsmallXlarge />
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>
              If an array value is an array, the inner array indicates the
              minimum and maximum sizes for the column.
            </Description>
            <Example>["small", "..."]</Example>
            <Example>[["small", "medium"], "..."]</Example>
            <PropOptions prop="array values">
              <SizesXsmallXlarge />
              <Example>"full"</Example>
              <Example>"flex"</Example>
              <Example>"auto"</Example>
              <Example>"1/2"</Example>
              <Example>"1/3"</Example>
              <Example>"2/3"</Example>
              <Example>"1/4"</Example>
              <Example>"2/4"</Example>
              <Example>"3/4"</Example>
            </PropOptions>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              Specifying an object allows indicating how the columns stretch to
              fit the available space.
            </Description>
            <Example>{`{ count: "fit", size: "..." }`}</Example>
            <PropOptions prop="count">
              <Example>"fit"</Example>
              <Example>"fill"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="fill">
          <Description>
            Whether the width and/or height should fill the container.
          </Description>
          <GenericFill />
        </Property>

        <Property name="gap">
          <Description>Gap sizes between rows and/or columns.</Description>
          <PropertyValue type="string">
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"none"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  row: "small",
  column: "medium"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="height">
          <Description>A fixed height.</Description>
          <PropertyValue type="string">
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"xxlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  height: "..."
  min: "..."
  max: "..."
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="justify">
          <Description>
            How to align the individual items inside the grid when there is
            extra space in the row axis.
          </Description>
          <PropertyValue type="string">
            <Example>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example defaultValue>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="justifyContent">
          <Description>
            How to align the contents along the row axis.
          </Description>
          <PropertyValue type="string">
            <Example>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"between"</Example>
            <Example>"around"</Example>
            <Example defaultValue>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="pad">
          <Description>
            The amount of padding around the box contents. An object can be
            specified to distinguish horizontal padding, vertical padding, and
            padding on a particular side of the box
          </Description>
          <GenericPad />
        </Property>

        <Property name="responsive">
          <Description>
            Whether margin and pad sizes should be scaled for mobile
            environments.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="rows">
          <Description>Row sizes.</Description>
          <PropertyValue type="string">
            <Description>
              Specifying a single string will cause automatically added rows to
              be the specified size.
            </Description>
            <SizesXsmallXlarge />
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>
              If an array value is an array, the inner array indicates the
              minimum and maximum sizes for the row.
            </Description>
            <Example>["small", "..."]</Example>
            <Example>[["small", "medium"], "..."]</Example>
            <PropOptions prop="array values">
              <SizesXsmallXlarge />
              <Example>"full"</Example>
              <Example>"flex"</Example>
              <Example>"auto"</Example>
              <Example>"1/2"</Example>
              <Example>"1/3"</Example>
              <Example>"2/3"</Example>
              <Example>"1/4"</Example>
              <Example>"2/4"</Example>
              <Example>"3/4"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="tag">
          <Description>
            The DOM tag to use for the element. NOTE: This is deprecated in
            favor of indicating the DOM tag via the 'as' property.
          </Description>
          <GenericAs />
        </Property>

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <GenericAs />
        </Property>

        <Property name="width">
          <Description>A fixed width.</Description>
          <PropertyValue type="string">
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"xxlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  width: "..."
  min: "..."
  max: "..."
}
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.size">
          <Description>The possible sizes for row and column.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  xxsmall: "48px",
  xsmall: "96px",
  small: "192px",
  medium: "384px",
  large: "768px",
  xlarge: "1152px",
  xxlarge: "1536px",
  full: "100%",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="grid.extend">
          <Description>Any additional style for the Grid.</Description>
          <GenericExtend />
        </Property>

        <EdgeStyle description="The possible sizes for the grid margin and gap." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const GridItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box flex direction="row">
      <Box basis="1/4" background="brand" margin={{ right: 'small' }} />
      <Box flex background="brand" />
      <Box basis="1/4" background="brand" margin={{ left: 'small' }} />
    </Box>
  </Item>
);

GridItem.propTypes = Item.propTypes;
