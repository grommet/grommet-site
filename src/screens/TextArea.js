import React from 'react';
import { TextArea } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericBool,
  GenericBoolTrue,
  SizesXsmallXlarge,
  GenericBoolFalse,
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
import {
  FocusStyle,
  InputStyle,
  DisabledStyle,
  PlaceholderStyle,
} from '../utils/themeDocUtils';

const TextAreaPage = () => (
  <Page>
    <ComponentDoc
      name="TextArea"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Input-TextArea',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/textarea&module=%2Fsrc%2FTextArea.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/TextArea',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/textarea"
      description="A control to input multiple lines of text"
      intrinsicElement="textarea"
      code={`function Example() {
  const [value, setValue] = React.useState('');
  return (
    <TextArea
      placeholder="type here"
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
}`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>
            Custom label to be used by screen readers. When provided, an
            aria-label will be added to the element.
          </Description>
          <GenericA11yTitle />
        </Property>

        <Property name="id">
          <Description>The id attribute of the textarea.</Description>
          <PropertyValue type="string">
            <Example>"id"</Example>
          </PropertyValue>
        </Property>

        <Property name="fill">
          <Description>
            Whether the width and height should fill the container.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="focusIndicator">
          <Description>
            Whether the plain TextArea should receive a focus outline.
          </Description>
          <GenericBool />
        </Property>

        <Property name="name">
          <Description>The name attribute of the textarea.</Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when the user types in the textarea.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="placeholder">
          <Description>
            Placeholder text to use when no value is provided.
          </Description>
          <PropertyValue type="string">
            <Example>"Enter text here..."</Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>
            Whether this is a plain textarea with no border or padding. Only use
            this when the containing context provides sufficient affordance.
          </Description>
          <GenericBool />
        </Property>

        <Property name="value">
          <Description>What text to put in the textarea.</Description>
          <PropertyValue type="string">
            <Example>"sample text"</Example>
          </PropertyValue>
        </Property>

        <Property name="resize">
          <Description>
            Whether user is allowed to resize the textarea.
          </Description>
          <GenericBoolTrue />
          <PropertyValue type="string">
            <Example>"vertical"</Example>
            <Example>"horizontal"</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>The size of the text.</Description>
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"xxlarge"</Example>
            <Example>"2xl"</Example>
            <Example>"3xl"</Example>
            <Example>"4xl"</Example>
            <Example>"5xl"</Example>
            <Example>"6xl"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.colors.border">
          <Description>The color of the border.</Description>
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

        <Property name="global.control.border.color">
          <Description>The border color.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"border"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.control.border.radius">
          <Description>The border radius.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.control.border.width">
          <Description>The border width.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"1px"</Example>
          </PropertyValue>
        </Property>

        <Property name="textArea.extend">
          <Description>Any additional style for Text.</Description>
          <GenericExtend />
        </Property>

        <Property name="textArea.disabled.opacity">
          <Description>The opacity when the textArea is disabled.</Description>
          <PropertyValue type="number">
            <Example defaultValue>0.3</Example>
          </PropertyValue>
        </Property>

        <FocusStyle />
        <PlaceholderStyle />
        <InputStyle />

        <Property name="global.input.extend">
          <Description>Any additional style for an input.</Description>
          <GenericExtend />
        </Property>

        <DisabledStyle />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default TextAreaPage;

export const TextAreaItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'xlarge' }}>
    <TextArea placeholder="Placeholder" disabled />
  </Item>
);

TextAreaItem.propTypes = Item.propTypes;
