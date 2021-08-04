import React from 'react';
import { Box, Heading, TextInput } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericBool,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import { GenericExtend, GenericOpacity } from '../utils/genericThemeExamples';
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
  DisabledStyle,
  InputStyle,
  PlaceholderStyle,
} from '../utils/themeDocUtils';

export default () => (
  <Page>
    <ComponentDoc
      name="TextInput"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Input-TextInput&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/textinput&module=%2Fsrc%2FTextInput.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A control to input a single line of text, with optional suggestions"
      intrinsicElement="input"
      code={`function Example() {
  const [value, setValue] = React.useState('');
  return (
    <TextInput
      placeholder="type here"
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
}`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>Custom title to be used by screen readers.</Description>
          <GenericA11yTitle />
        </Property>

        <Property name="defaultSuggestion">
          <Description>
            Default suggestion to highlight, as an index into the suggestions
            array.
          </Description>
          <PropertyValue type="number">
            <Description>
              If set, the suggestion at the specified index in the suggestions
              array will be highlighted by default when the suggestions drop
              opens.
            </Description>
            <Example>0</Example>
          </PropertyValue>
        </Property>

        <Property name="dropAlign">
          <Description>How to align the drop.</Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  top: "top" | "bottom",
  bottom: "top" | "bottom",
  right: "left" | "right",
  left: "left" | "right"
}
            `}
            </Example>
            <Example defaultValue>{`{ top: "bottom", left: "left" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dropHeight">
          <Description>The height of the drop container.</Description>
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="dropTarget">
          <Description>
            Target where any suggestions drop will be aligned to.
          </Description>
          <PropertyValue type="object">
            <Description>
              This should be a React reference. Typically, this is not required
              as the drop will be aligned to the TextInput itself by default.
            </Description>
            <Example>ref.current</Example>
          </PropertyValue>
        </Property>

        <Property name="dropProps">
          <Description>Any valid Drop prop.</Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="icon">
          <Description>
            An optional icon to show. This could be used to provide an
            indication of what kind of input is expected, like an email icon, or
            what the input will be used for, like a search icon.
          </Description>
          <PropertyValue type="element">
            <Example>{`<Search />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>The id attribute of the input.</Description>
          <PropertyValue type="string">
            <Example>"id"</Example>
          </PropertyValue>
        </Property>

        <Property name="focusIndicator">
          <Description>
            Whether the plain TextInput should receive a focus outline.
          </Description>
          <GenericBool />
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for TextInput. Used for accessibility by screen
            readers.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  enterSelect: "(Press Enter to Select)", 
  suggestionsCount: "suggestions available", 
  suggestionsExist: "This input has suggestions use arrow keys to navigate", 
  suggestionIsOpen: "Suggestions drop is open, continue to use arrow keys to navigate"
}
  `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>
            The name of the attribute when in a Form or FormField.
          </Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when the user types in the input.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSelect">
          <Description>
            Note: This function is deprecated, use onSuggestionSelect instead.
            Function that will be called when the user selects a suggestion. The
            suggestion contains the object chosen from the supplied suggestions.
            When used in conjunction with onSuggestionSelect this will default
            to React's onSelect.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSuggestionSelect">
          <Description>
            Function that will be called when the user selects a suggestion. The
            suggestion contains the object chosen from the supplied suggestions.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSuggestionsOpen">
          <Description>
            Function that will be called when the suggestions drop is opened.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSuggestionsClose">
          <Description>
            Function that will be called when the suggestions drop is closed.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="placeholder">
          <Description>
            Placeholder to use when no value is provided.
          </Description>
          <PropertyValue type="node">
            <Example>"placeholder"</Example>
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>
            Whether this is a plain input with no border or outline.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Description>
              Use "full" to remove padding in addition to removing border and
              outline. Only use this when the containing context provides
              sufficient affordance.
            </Description>
            <Example>"full"</Example>
          </PropertyValue>
        </Property>

        <Property name="reverse">
          <Description>
            Whether an icon should be reversed so that the icon is at the end of
            the input.
          </Description>
          <GenericBool />
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

        <Property name="suggestions">
          <Description>
            Suggestions to show. It is recommended to avoid showing too many
            suggestions and instead rely on the user to type more.
          </Description>
          <PropertyValue type="array[string]">
            <Example>["suggestion1", "suggestion2"]</Example>
          </PropertyValue>
          <PropertyValue type="array[object]">
            <Example>
              {`
[
  {
    label: node,
    value: any
  },
]
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="textAlign">
          <Description>How to align the text inside the input.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>What text to put in the input.</Description>
          <PropertyValue type="string">
            <Example>"text"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>0</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.colors.border">
          <Description>The color of the border.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"rgba(0, 0, 0, 0.33)"</Example>
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

        <Property name="select.step">
          <Description>How many suggestions to render at a time.</Description>
          <PropertyValue type="number">
            <Example defaultValue> 20 </Example>
          </PropertyValue>
        </Property>

        <Property name="text">
          <Description>
            The possible sizes of the text in terms of its font-size and
            line-height.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
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

        <Property name="textInput.extend">
          <Description>Any additional style for TextInput.</Description>
          <GenericExtend />
        </Property>

        <Property name="textInput.container.extend">
          <Description>
            Any additional style for TextInput container.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="textInput.placeholder.extend">
          <Description>
            Any additional style for non-string placeholder inside TextInput.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="textInput.suggestions.extend">
          <Description>
            Any additional style for TextInput suggestions.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="textInput.disabled.opacity">
          <Description>The opacity when the textInput is disabled.</Description>
          <GenericOpacity />
        </Property>

        <FocusStyle />
        <PlaceholderStyle />
        <DisabledStyle />
        <InputStyle />

        <Property name="global.input.extend">
          <Description>Any additional style for an input.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
    <Box margin={{ bottom: 'large' }} width="xlarge" alignSelf="center">
      <Box basis="large" pad={{ horizontal: 'large', bottom: 'xlarge' }}>
        <Heading level={2} margin={{ top: 'none' }}>
          <strong>Examples</strong>
        </Heading>
        <Box margin="small">
          <TextInput placeholder="search" type="search" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="password" type="password" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="email" type="email" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="tel" type="tel" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="url" type="url" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="number" type="number" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="date" type="date" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="time" type="time" />
        </Box>
      </Box>
    </Box>
  </Page>
);

export const TextInputItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'xlarge' }}>
    <TextInput placeholder="Placeholder" disabled />
  </Item>
);

TextInputItem.propTypes = Item.propTypes;
