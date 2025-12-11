import React from 'react';
import { Meter } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBoolFalse,
  GenericGridArea,
  GenericMargin,
} from '../utils/genericPropExamples';
import {
  GenericExtend,
  GenericColor,
  GlobalColors,
} from '../utils/genericThemeExamples';
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

const MeterPage = () => (
  <Page>
    <ComponentDoc
      name="Meter"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Visualizations-Meter',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/meter&module=%2Fsrc%2FMeter.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Meter',
          label: 'Github',
        },
      ]}
      description="A graphical meter"
      code={`<Meter
  values={[{
    value: 60,
    label: 'sixty',
    onClick: () => {}
  }]}
  aria-label="meter"
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

        <Property name="background">
          <Description>Background color.</Description>
          <PropertyValue type="string">
            <Example>"light-2"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ color: "light-2", opacity: "medium" }`}</Example>
            <PropOptions prop="opacity">
              <Example>"weak"</Example>
              <Example>"medium"</Example>
              <Example>"strong"</Example>
              <Example>number</Example>
              <Example>boolean</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="color">
          <Description>
            The color of the value region. This is only valid when used with
            'value'.
          </Description>
          <GenericColor />
        </Property>

        <Property name="max">
          <Description>The maximum value for the Meter.</Description>
          <PropertyValue type="number">
            <Example>25</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"25"</Example>
          </PropertyValue>
        </Property>

        <Property name="round">
          <Description>Whether to round the line ends.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="reverse">
          <Description>
            Whether the direction of the Meter should be reversed.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="size">
          <Description>The size of the Meter.</Description>
          <PropertyValue type="string">
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"full"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="thickness">
          <Description>The size of the Meter.</Description>
          <PropertyValue type="string">
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="type">
          <Description>The visual type of meter.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"bar"</Example>
            <Example>"circle"</Example>
            <Example>"pie"</Example>
            <Example>"semicircle"</Example>
          </PropertyValue>
        </Property>

        <Property name="direction">
          <Description>
            The direction of the Meter you want to display. Currently, direction
            works only when 'type' of Meter is 'bar'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"horizontal"</Example>
            <Example>"vertical"</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>
            The numeric value to represent. Ignored when 'values' is specified.
          </Description>
          <PropertyValue type="number">
            <Example>10</Example>
          </PropertyValue>
        </Property>

        <Property name="values">
          <Description>Array of value objects describing the data.</Description>
          <PropertyValue type="array">
            <Description>
              'value' is the actual numeric value. 'label' is a text string
              describing it. 'color' indicates the color name to use. If not
              specified a default one will be chosen. 'onClick' will be called
              when the user clicks on it. Set 'highlight' to call attention to
              it. 'onHover' will be called with a boolean argument indicating
              when the user hovers onto or away from it.
            </Description>
            <Example>
              {`
[
  {
    value: 45,
    color: "graph-0",
    highlight: boolean,
    label: "string",
    onClick: () => {},
    onHover: (true) => {}
  }
]
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.colors">
          <Description>Color options.</Description>
          <GlobalColors />
        </Property>

        <EdgeStyle
          description="The border-radius of the styled Meter. thickness, height and 
 width of the Bar Meter, height of the Circle Meter."
        />

        <Property name="global.opacity.medium">
          <Description>The opacity value used on the Meter color.</Description>
          <PropertyValue type="number">
            <Example defaultValue>0.4</Example>
          </PropertyValue>
        </Property>

        <Property name="global.size">
          <Description>The possible sizes for Circle Meter width.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
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

        <Property name="meter.background">
          <Description>
            The background color used for the unfilled portion of the Meter.
          </Description>
          <PropertyValue type="string">
            <Example>"background='light-2'"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ color: 'light-2', opacity: 'medium' }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="meter.color">
          <Description>The color used for the Meter.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"graph-0"</Example>
          </PropertyValue>
        </Property>

        <Property name="meter.extend">
          <Description>Any additional style for Meter.</Description>
          <GenericExtend />
        </Property>
        <Property name="meter.gap">
          <Description>
            The gap between segments on the Meter. This gap increases visible
            differentiation between the colored segments to help with
            accessibility.
          </Description>
          <PropertyValue type="string">
            <Example>"xsmall"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default MeterPage;

export const MeterItem = ({ name, path }) => (
  <Item name={name} path={path} center>
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
);

MeterItem.propTypes = Item.propTypes;
