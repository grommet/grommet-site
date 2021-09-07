import React from 'react';
import { Box, RangeSelector, Stack, Text } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericBool } from '../utils/genericPropExamples';
import { GenericColor } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="RangeSelector"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Input-RangeSelector&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/rangeselector&module=%2Fsrc%2FRangeSelector.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A control to input a range of values"
      intrinsicElement="div"
      code={`function Example() {
  const [values, setValues] = React.useState([3, 7]);
  return (
    <Stack>
      <Box direction="row" justify="between">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
          <Box key={value} pad="small" border={false}>
            <Text style={{ fontFamily: 'monospace' }}>
              {value}
            </Text>
          </Box>
        ))}
      </Box>
      <RangeSelector
        direction="horizontal"
        invert={false}
        min={0}
        max={9}
        size="full"
        round="small"
        values={values}
        onChange={values => setValues(values)}
      />
    </Stack>
  );
}`}
    >
      <Properties>
        <Property name="color">
          <Description>
            What color to use to indicate the selection.
          </Description>
          <GenericColor />
        </Property>

        <Property name="direction">
          <Description>The orientation to layout the values in.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"horizontal"</Example>
            <Example>"vertical"</Example>
          </PropertyValue>
        </Property>

        <Property name="invert">
          <Description>
            Whether to indicate what has not been selected.
          </Description>
          <GenericBool />
        </Property>

        <Property name="max">
          <Description>The maximum value permitted.</Description>
          <PropertyValue type="number">
            <Example defaultValue> 100 </Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages used by screen readers for accessibility.
          </Description>
          <PropertyValue type="string">
            <Example>
              {`
{
  lower: "string",
  upper: "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="min">
          <Description>The minimum value permitted.</Description>
          <PropertyValue type="number">
            <Example defaultValue> 0 </Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when the user changes one of the
            values. It will be passed an array of two numbers indicating the new
            values selected.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="opacity">
          <Description>Transparency of the selection indicator.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"weak"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"strong"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="round">
          <Description>How much to round the corners.</Description>
          <PropertyValue type="string">
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"full"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>How thick to make the selection indicator.</Description>
          <PropertyValue type="string">
            <Example>"xxsmall"</Example>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"full"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="step">
          <Description>The step interval between values.</Description>
          <PropertyValue type="number">
            <Example defaultValue> 1 </Example>
          </PropertyValue>
        </Property>

        <Property name="values">
          <Description>The current values.</Description>
          <PropertyValue type="array[number]">
            <Example>[1, 2]</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.borderSize">
          <Description>The size of the border.</Description>
          <PropertyValue type="string">
            <Example defaultValue>
              {`{
  xsmall: '1px',
  small: '2px',
  medium: '4px',
  large: '12px',
  xlarge: '24px,
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.colors.border">
          <Description>The color for the border.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "rgba(255, 255, 255, 0.33)", light: "rgba(0, 0, 0, 0.33)" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.colors.control">
          <Description>The color for the edge controls.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{dark: "accent-1", light: "brand" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.colors.focus">
          <Description>The color of the focus.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"accent-1"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.edgeSize.small">
          <Description>
            The possible sizes for the margin, padding and gap.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"6px"</Example>
          </PropertyValue>
        </Property>

        <Property name="rangeSelector.background.invert.color">
          <Description>The background color on an invert display.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"light-4"</Example>
          </PropertyValue>
        </Property>

        <Property name="rangeSelector.edge.type">
          <Description>The edge control type.</Description>
          <PropertyValue type="string">
            <Example>"bar"</Example>
            <Example>"disc"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.spacing">
          <Description>The size of the edge controls thumb.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const RangeSelectorItem = ({ name, path }) => (
  <Item name={name} path={path} center>
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
);

RangeSelectorItem.propTypes = Item.propTypes;
