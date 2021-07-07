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

export default () => (
  <Page>
    <ComponentDoc
      name="Anchor"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Controls-Anchor&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/anchor&module=%2Fsrc%2FAnchor.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A text link"
      details="We have a separate component from the browser\nbase so we can style it. You can either set the icon and/or label properties\nor just use children."
      intrinsicElement="a"
      code={`<Anchor href="#" label="For Example" />`}
    >
      <Properties>
        <Property name="a11yTitle">
          <PropertyValue>
            <Description>
              Custom title to be used by screen readers.
            </Description>
            <GenericA11yTitle />
          </PropertyValue>
        </Property>

        <Property name="alignSelf">
          <PropertyValue>
            <Description>
              How to align along the cross axis when contained in a Box or along
              the column axis when contained in a Grid.
            </Description>
            <GenericAlignSelf />
          </PropertyValue>
        </Property>

        <Property name="gridArea">
          <PropertyValue>
            <Description>
              The name of the area to place this inside a parent Grid.
            </Description>
            <GenericGridArea />
          </PropertyValue>
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the component.</Description>
          <GenericMargin />
        </Property>

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <PropertyValue>
            <Description>The name of a component</Description>
            <Example>string</Example>
          </PropertyValue>
          <PropertyValue>
            <Description>A component</Description>
            <Example>function</Example>
          </PropertyValue>
        </Property>

        <Property name="color">
          <Description>
            Label color and icon color, if not specified on the icon.
          </Description>
          <PropertyValue>
            <Description>A hex, name, or rgb value</Description>
            <Example>string</Example>
          </PropertyValue>
          <PropertyValue>
            <Description>
              An object with a color for dark and light modes
            </Description>
            <Example>
              <Markdown>{`{dark: string, light: string}`}</Markdown>
            </Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <PropertyValue>
            <Description>Whether the anchor is disabled</Description>
            <Example>true</Example>
            <Example defaultValue>false</Example>
          </PropertyValue>
        </Property>

        <Property name="href">
          <PropertyValue>
            <Description>
              Hyperlink reference to place in the anchor.
            </Description>
            <Example>"//my.com/path"</Example>
          </PropertyValue>
        </Property>

        <Property name="icon">
          <PropertyValue>
            <Description>Icon element to place in the anchor.</Description>
            <Example>{`<Add />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="label">
          <Description>Label text to place in the anchor.</Description>
          <PropertyValue>
            <Description>A string with label text</Description>
            <Example>"Add"</Example>
          </PropertyValue>
          <PropertyValue>
            <Description>A component used to display the label</Description>
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onClick">
          <PropertyValue>
            <Description>
              Click handler. It can be used, for example, to add analytics and
              track who clicked in the anchor.
            </Description>
            <Example>{`( ) => { }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="reverse">
          <PropertyValue>
            <Description>
              Whether an icon and label should be reversed so that the icon is
              at the end of the anchor.
            </Description>
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
          <PropertyValue>
            <Description>T-shirt sizing based off the theme</Description>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"xxlarge"</Example>
          </PropertyValue>
          <PropertyValue>
            <Description>A specific size in px, em, etc.</Description>
            <Example>string</Example>
          </PropertyValue>
        </Property>

        <Property name="weight">
          <Description>Sets font-weight property for anchor.</Description>
          <PropertyValue>
            <Description>Use browser definitions</Description>
            <Example>"normal"</Example>
            <Example>"bold"</Example>
          </PropertyValue>
          <PropertyValue>
            <Description>Set to a specific numeric value</Description>
            <Example>{`<number>`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="anchor.color">
          <Description>
            The color of the label text and icon strokes.
          </Description>
          <PropertyValue>
            <Description>A hex, name, or rgb value</Description>
            <Example>string</Example>
          </PropertyValue>
          <PropertyValue>
            <Description>
              An object with a color for dark and light mode
            </Description>
            <Example defaultValue>
              <Markdown>{`{"dark": "accent-1", "light": "brand"}`}</Markdown>
            </Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.fontWeight">
          <PropertyValue>
            <Description>The font weight of the label.</Description>
            <Example defaultValue>600</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.textDecoration">
          <PropertyValue>
            <Description>
              The text decoration of the label. Refer to
              [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
              for possible values.
            </Description>
            <Example defaultValue>"none"</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.hover.fontWeight">
          <PropertyValue>
            <Description>
              The font weight of the label when hovering.
            </Description>
            <Example>number</Example>
          </PropertyValue>
        </Property>

        <Property name="anchor.hover.textDecoration">
          <PropertyValue>
            <Description>
              The text decoration of the label when hovering. Refer to
              [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
              for possible values.
            </Description>
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

        <Property name="text.medium.size">
          <PropertyValue>
            <Description>The font size of the text label.</Description>
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="text.medium.height">
          <PropertyValue>
            <Description>The line height of the text label.</Description>
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>
        <FocusStyle />
        <EdgeStyle description="The possible sizes for margin." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const AnchorItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Anchor as="span">Anchor</Anchor>
  </Item>
);

AnchorItem.propTypes = Item.propTypes;
