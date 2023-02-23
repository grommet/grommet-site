import React from 'react';
import { Anchor, Markdown } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { EdgeStyle, FocusStyle } from '../utils/themeDocUtils';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericGridArea,
  GenericMargin,
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

const AnchorPage = () => (
  <Page>
    <ComponentDoc
      name="Anchor"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Controls-Anchor&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/anchor&module=%2Fsrc%2FAnchor.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Anchor',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/anchor"
      description="A text link"
      details="We have a separate component from the browser\nbase so we can style it. You can either set the icon and/or label properties\nor just use children."
      intrinsicElement="a"
      code={`<Anchor href="#" label="For Example" />`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>Custom title to be used by screen readers.</Description>
          <GenericA11yTitle />
        </Property>

        <Property name="alignSelf">
          <Description>
            How to align along the cross axis when contained in a Box or along
            the column axis when contained in a Grid.
          </Description>
          <GenericAlignSelf />
        </Property>

        <Property name="gap">
          <Description>
            The amount of spacing between icon and label in the anchor.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xxsmall"</Example>
            <Example>"string"</Example>
          </PropertyValue>
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

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <PropertyValue type="string">
            <Description>The name of a component.</Description>
            <Example>"div"</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
          <PropertyValue type="component">
            <Example>{`{Component}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="color">
          <Description>
            Label color and icon color, if not specified on the icon.
          </Description>
          <GenericColor />
        </Property>

        <Property name="disabled">
          <Description>Whether the anchor is disabled.</Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example defaultValue>false</Example>
          </PropertyValue>
        </Property>

        <Property name="href">
          <Description>Hyperlink reference to place in the anchor.</Description>
          <PropertyValue type="string">
            <Example>"//my.com/path"</Example>
          </PropertyValue>
        </Property>

        <Property name="icon">
          <Description>Icon element to place in the anchor.</Description>
          <PropertyValue type="element">
            <Example>{`<Add />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="label">
          <Description>Label text to place in the anchor.</Description>
          <PropertyValue type="string">
            <Example>"Add"</Example>
          </PropertyValue>
          <PropertyValue type="element">
            <Description>A component used to display the label.</Description>
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onClick">
          <Description>
            Click handler. It can be used, for example, to add analytics and
            track who clicked in the anchor.
          </Description>
          <PropertyValue type="function">
            <Example>{`( ) => { }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="reverse">
          <Description>
            Whether an icon and label should be reversed so that the icon is at
            the end of the anchor.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example defaultValue>false</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            The font size is typically driven by the components containing this
            component. But, it can be adjusted directly via this size property,
            typically when it is not contained in a 'Heading', 'Paragraph', or
            'Text'.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"xxlarge"</Example>
            <Example>"12px"</Example>
          </PropertyValue>
        </Property>

        <Property name="weight">
          <Description>Sets font-weight property for anchor.</Description>
          <PropertyValue type="string">
            <Description>Any browser font-weight definition.</Description>
            <Example>"normal"</Example>
            <Example>"bold"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="anchor.color">
          <Description>
            The color of the label text and icon strokes.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light mode.
            </Description>
            <Example defaultValue>
              <Markdown>{`{"dark": "black", "light": "brand"}`}</Markdown>
            </Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.fontWeight">
          <Description>The font weight of the label.</Description>
          <PropertyValue type="number">
            <Example defaultValue>600</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.gap">
          <Description>The gap between the label and icon.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <Example>"xsmall"</Example>
            <Example defaultValue>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"20 px"</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.textDecoration">
          <Description>
            The text decoration of the label. Refer to
            [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
            for possible values.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"none"</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.hover.fontWeight">
          <Description>The font weight of the label when hovering.</Description>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.hover.textDecoration">
          <Description>
            The text decoration of the label when hovering. Refer to
            [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
            for possible values.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"underline"</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.hover.extend">
          <Description>
            Any additional style for the Anchor when hovering.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="anchor.extend">
          <Description>Any additional style for the Anchor.</Description>
          <GenericExtend />
        </Property>

        <Property name="anchor.size.[size].color">
          <Description>
            The color of the label text and icon strokes on different Anchor
            sizes. [size] refers to the text size of the Anchor.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light mode.
            </Description>
            <Example defaultValue>
              <Markdown>{`{"dark": "black", "light": "brand"}`}</Markdown>
            </Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.size.[size].font-weight">
          <Description>
            The font weight of the label on different Anchor sizes. [size] refers to the
            text size of Anchor.
          </Description>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.size.[size].textDecoration">
          <Description>
            {' '}
            The text decoration of the label when hovering on Anchor [size]
            which is the text size of Anchor. Refer to
            [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
            for possible values.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"underline"</Example>
          </PropertyValue>
        </Property>

        <Property name="text.medium.size">
          <Description>The font size of the text label.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="text.medium.height">
          <Description>The line height of the text label.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>
        <FocusStyle />
        <EdgeStyle description="The possible sizes for margin." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default AnchorPage;

export const AnchorItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Anchor as="span">Anchor</Anchor>
  </Item>
);

AnchorItem.propTypes = Item.propTypes;
