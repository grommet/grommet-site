import React from 'react';
import { Text } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericAs,
  GenericBoolFalse,
  GenericGridArea,
} from '../utils/genericPropExamples';
import { GenericExtend, GenericColor } from '../utils/genericThemeExamples';
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

const TextPage = () => (
  <Page>
    <ComponentDoc
      name="Text"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Type-Text&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/text&module=%2Fsrc%2FText.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Text',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/foundation/typography#text"
      description="Arbitrary text"
      intrinsicElement="span"
      code="<Text>simple text</Text>"
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
          <PropertyValue type="string">
            <Example>"none"</Example>
            <Example>"xxsmall"</Example>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object can be specified to distinguish horizontal margin,
              vertical margin, and margin on a particular side. For vertical
              margin to be applied, Text needs to be contained within a layout
              component (such as Box or a generic div) or behave as a div (by
              applying as="div" or a display style of inline-block).
            </Description>
            <Example>
              {`
{
    vertical: "...",
    horizontal: "...",
    top: "...",
    bottom: "...",
    left: "...",
    right: "..."
}
        `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="color">
          <Description>
            A color identifier to use for the text color.
          </Description>
          <GenericColor />
        </Property>

        <Property name="size">
          <Description>
            The font size and line space height of the text.
          </Description>
          <PropertyValue type="string">
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"xxlarge"</Example>
            <Example>"2xl"</Example>
            <Example>"3xl"</Example>
            <Example>"4xl"</Example>
            <Example>"5xl"</Example>
            <Example>"6xl"</Example>
            <Example>"string"</Example>
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

        <Property name="textAlign">
          <Description>How to align the text inside the component.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"justify"</Example>
          </PropertyValue>
        </Property>

        <Property name="tip">
          <Description>
            Tooltip or a hint when hovering over the text.
          </Description>
          <PropertyValue type="string">
            <Description>
              If the value is a string and no a11yTitle value is provided, tip
              value will be used for the a11yTitle default value.
            </Description>
            <Example>"tooltip"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  content: node | string,
  dropProps: {},
  plain: boolean
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="truncate">
          <Description>
            Restrict the text to a single line and truncate with ellipsis if it
            is too long to all fit. For truncate to be applied, Text needs to be
            contained within a layout component (such as Box or a generic div).
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="string">
            <Description>
              If truncate = tip, the full text content will be placed in a Tip
              that will appear on hover.
            </Description>
            <Example>"tip"</Example>
          </PropertyValue>
        </Property>

        <Property name="weight">
          <Description>Font weight</Description>
          <PropertyValue type="string">
            <Example>"normal"</Example>
            <Example>"bold"</Example>
            <Example>"lighter"</Example>
            <Example>"bolder"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>

        <Property name="wordBreak">
          <Description>
            Whether words should break when reaching the end of a line.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"normal"</Example>
            <Example>"break-all"</Example>
            <Example>"keep-all"</Example>
            <Example>"break-word"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.colors.text">
          <Description>
            The text color used for Text. In order for this to take effect,
            global.colors.background needs to be defined.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"#444444"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "#f8f8f8", light: "#444444" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="text.font.family">
          <Description>The font family to use for Text.</Description>
          <PropertyValue type="string">
            <Example>"Segoe UI"</Example>
          </PropertyValue>
        </Property>

        <Property name="text">
          <Description>
            The possible sizes of the text in terms of its font-size and
            line-height.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  xsmall: {
    size: '12px',
    height: '18px',
  },
  small: {
    size: '14px',
    height: '20px',
  },
  medium: {
    size: '18px',
    height: '24px',
  },
  large: {
    size: '22px',
    height: '28px',
  },
  xlarge: {
    size: '26px',
    height: '32px',
  },
  xxlarge: {
    size: '34px',
    height: '40px',
  },
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="text.extend">
          <Description>Any additional style for Text.</Description>
          <GenericExtend />
        </Property>

        <EdgeStyle description="The possible sizes for margin." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default TextPage;

export const TextItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Text size="large">non-semantic text</Text>
  </Item>
);

TextItem.propTypes = Item.propTypes;
