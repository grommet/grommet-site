import React from 'react';
import { Select } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBoolTrue,
  GenericBool,
  GenericBoolFalse,
  GenericGridArea,
  GenericMargin,
  SizesXsmallXlarge,
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

const SelectPage = () => (
  <Page>
    <ComponentDoc
      name="Select"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Input-Select',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/select&module=%2Fsrc%2FSelect.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Select',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/select"
      description="A control to select a value, with optional search"
      code={`function Example() {
  const [value, setValue] = React.useState('medium');
  return (
    <Select
      options={['small', 'medium', 'large']}
      value={value}
      onChange={({ option }) => setValue(option)}
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

        <Property name="children">
          <Description>
            Function that will be called when each option is rendered.
          </Description>
          <PropertyValue type="function">
            <Description>
              The function will be passed (option, index, options, state) where
              option is the option to render, index is the index of that option
              in the options array, and state is an object with (active,
              disabled, selected) keys indicating the current state of the
              option.
            </Description>
            <Example>{`(option, index, options, { active, disabled, selected }) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="clear">
          <Description>
            Whether to provide a button option to clear selections.
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="object">
            <Example>
              {`
{
  position: "top" | "bottom",
  label: "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="closeOnChange">
          <Description>
            Whether to close the drop when a selection is made.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="defaultValue">
          <Description>
            Initially selected value. This can be an array when multiple.
          </Description>
          <PropertyValue type="string">
            <Example>"value1"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>An array of strings, objects, or numbers.</Description>
            <Example>["string", ...]</Example>
            <Example>{`[{...}, {...}]`}</Example>
            <Example>[1, 2]</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>
            Whether the entire select or individual options should be disabled.
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="array">
            <Description>
              An array of strings, objects, or numbers. An array of numbers
              indicates the indexes into 'options' of the disabled options. An
              array of strings or objects work the same way as the 'value' to
              indicate which options are disabled.
            </Description>
            <Example>["string", ...]</Example>
            <Example>{`[{...}, {...}]`}</Example>
            <Example>[1, 2]</Example>
          </PropertyValue>
        </Property>

        <Property name="disabledKey">
          <Description>
            When the options array contains objects, this property indicates how
            to determine which options should be disabled.
          </Description>
          <PropertyValue type="string">
            <Description>
              If a string is provided, it is used as the key for each item
              object and if that key returns truthy, the option is disabled.
            </Description>
            <Example>"key"</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Description>
              If a function is provided, it is called with the option and the
              return value determines if the option is disabled.
            </Description>
            <Example>{`() => {}`}</Example>
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
            Target where the options drop will be aligned to. This should be a
            React reference. Typically, this is not required as the drop will be
            aligned to the Select itself by default.
          </Description>
          <PropertyValue type="object">
            <Example>ref.current</Example>
          </PropertyValue>
        </Property>

        <Property name="dropProps">
          <Description>Any valid Drop prop.</Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="focusIndicator">
          <Description>
            Whether when 'plain' it should receive a focus outline.
          </Description>
          <GenericBool />
        </Property>

        <Property name="icon">
          <Description>
            A custom icon to be used when rendering the select. You can use
            false to not render an icon at all.
          </Description>
          <GenericBool />
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="labelKey">
          <Description>
            When the options array contains objects, this property indicates how
            to retrieve the label for each option. The label is what is
            displayed to the user in the options list drop down and for the
            selected option itself.
          </Description>
          <PropertyValue type="string">
            <Description>
              If a string is provided, it is used as the key to retrieve a
              property of an option object, which should be a string.
            </Description>
            <Example>"key"</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Description>
              If a function is provided, it is called with the option and should
              return a string or a React node.
            </Description>
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>Custom messages.</Description>
          <PropertyValue type="object">
            <Example>{`{ multiple: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="multiple">
          <Description>
            Whether to allow multiple options to be selected. When multiple is
            true, 'value' should be an array of selected options and 'options'
            should be an array of possible options.
          </Description>
          <GenericBool />
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
            Function that will be called when the user selects an option.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ value, option }) => {...}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onClose">
          <Description>
            Function that will be called when the Select drop closes.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onOpen">
          <Description>
            Function that will be called when the Select drop opens.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSearch">
          <Description>
            Function that will be called when the user types in the search
            input. If this property is not provided, no search field will be
            rendered.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onMore">
          <Description>
            Use this to indicate that 'options' doesn't contain all that it
            could.
          </Description>
          <PropertyValue type="function">
            <Description>
              The function will be called when the entire list of items has been
              rendered. This might be used when the total number of items that
              could be retrieved is more than you'd want to load into the
              browser. 'onMore' allows you to lazily fetch more from the server
              only when needed.
            </Description>
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="options">
          <Description>The options to choose from.</Description>
          <Description>
            There are a number of ways to set and change the options based on
            the 'onChange', 'onSelect', and 'onSearch' functions. As a general
            rule of guidance when using 'onSearch', define an original list of
            options that is separate from the currently stored options. Use this
            definition to reset options in functions.
          </Description>
          <Description>
            For examples of defining, setting, and changing options, [see our
            Storybook examples with
            Select](https://storybook.grommet.io/?path=/story/input-select-search--search).
          </Description>
          <PropertyValue type="array[string]">
            <Example>["option1", "option2"]</Example>
          </PropertyValue>
          <PropertyValue type="array[number]">
            <Example>[1, 2]</Example>
          </PropertyValue>
          <PropertyValue type="array[boolean]">
            <Example>[true, false]</Example>
          </PropertyValue>
          <PropertyValue type="array[element]">
            <Example>{`[<Element />, <Element />]`}</Example>
          </PropertyValue>
          <PropertyValue type="array[object]">
            <Description>
              If an object is used, use children callback in order to render
              anything based on the current item.
            </Description>
            <Example>{`[{}, {}]`}</Example>
          </PropertyValue>
        </Property>

        <Property name="open">
          <Description>
            The control for the open and close state of the component.
          </Description>
          <GenericBool />
        </Property>

        <Property name="placeholder">
          <Description>
            Placeholder to use when no value is provided.
          </Description>
          <PropertyValue type="string">
            <Example>"placeholder"</Example>
          </PropertyValue>
          <PropertyValue type="element">
            <Example>{`<Element />`}</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>
            Whether this is a plain Select input with no border or padding.
          </Description>
          <GenericBool />
        </Property>

        <Property name="replace">
          <Description>
            Whether to replace previously rendered items with a generic spacing
            element when they have scrolled out of view. This is more performant
            but means that in-page searching will not find elements that have
            been replaced.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="searchPlaceholder">
          <Description>
            Placeholder text to use in the search box when the search input is
            empty.
          </Description>
          <PropertyValue type="string">
            <Example>"search..."</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Text>Enter search term</Text>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="selected">
          <Description>
            Index of the currently selected option. When multiple, the set of
            options selected. NOTE: This is deprecated in favor of indicating
            the selected values via the 'value' property.
          </Description>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
          <PropertyValue type="array[number]">
            <Example>[1, 2]</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>The size of the text and icon.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>
            The currently selected value. When 'valueKey' sets 'reduce', the
            value(s) here should match what the 'valueKey' would return for the
            corresponding selected option object. Otherwise, the value should be
            one (or multiple, when multiple = true) of the options from the
            options array.
          </Description>
          <PropertyValue type="string">
            <Example>"option1"</Example>
          </PropertyValue>
          <PropertyValue type="element">
            <Description>
              Passing an element allows the caller to control how the value is
              rendered. Passing an element is deprecated. Instead, use the
              'valueLabel' property.
            </Description>
            <Example>{`<Element />`}</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
          <PropertyValue type="array[string]">
            <Example>["option1", "option2"]</Example>
          </PropertyValue>
          <PropertyValue type="array[number]">
            <Example>[1, 2]</Example>
          </PropertyValue>
          <PropertyValue type="array[object]">
            <Example>{`[{}, {}]`}</Example>
          </PropertyValue>
        </Property>

        <Property name="valueLabel">
          <Description>
            Provides custom rendering of the value. If not provided, Select will
            render the value automatically.
          </Description>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Description>
              A function that returns either a string or a React node.
            </Description>
            <Example>{`{(option) => {}}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="valueKey">
          <Description>
            When the options array contains objects, this property indicates how
            to retrieve the value of each option.
          </Description>
          <PropertyValue type="string">
            <Description>
              If a string is provided, it is used as the key to retrieve a
              property of an option object.
            </Description>
            <Example>"key"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              If reduce is true, this value will be used for the 'value'
              delivered via 'onChange'.
            </Description>
            <Example>{`
{
  key: "string",
  reduce: boolean
}
            `}</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Description>
              If a function is provided, it is called with the option and should
              return the value.
            </Description>
            <Example>{`(option) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="emptySearchMessage">
          <Description>
            Empty option message to display when no matching results were found
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"No matches found"</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Text> No results found. <Text/>`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.hover.background">
          <Description>The background style when hovering.</Description>
          <PropertyValue type="string">
            <Example>"active"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ color: "active", opacity: "medium" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.hover.color">
          <Description>The text color when hovering.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"black"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "white", light: "black" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="select.background">
          <Description>The background color used for Select.</Description>
          <PropertyValue type="string">
            <Example>"white"</Example>
          </PropertyValue>
        </Property>

        <Property name="select.options.container">
          <Description>
            Any valid Box prop for the options container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ align: "start", pad: "small" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.options.text">
          <Description>
            Any valid Text prop for text used inside the options container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ margin: "none" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.container.extend">
          <Description>
            Any additional style for the container of the Select component.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="select.clear.container">
          <Description>
            Any valid Box prop for the clear button container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ pad: "small", background: "light-2" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="select.clear.container.hover">
          <Description>
            Any valid Box prop to adjust the button container style when the
            clear button is hovered.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue> {`{}`} </Example>
          </PropertyValue>
        </Property>

        <Property name="select.clear.text">
          <Description>
            Any valid Text prop for text used inside the clear button container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ color: "dark-3" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.control.open">
          <Description>
            Any additional style for the Select DropButton when using the
            controlled open state.
          </Description>
          <PropertyValue type="string">
            <Example>"CSS"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.control.extend">
          <Description>
            Any additional style for the control of the Select component.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="select.emptySearchMessage.container">
          <Description>
            Any valid Box props for the emptySearchMessage container.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ pad: "small"}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.emptySearchMessage.text">
          <Description>
            Any valid Text props for the emptySearchMessage text.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ color: "text" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.icons.margin">
          <Description>The margin used for Select icons.</Description>
          <GenericMargin />
        </Property>

        <Property name="select.icons.color">
          <Description>The color used for Select icons.</Description>
          <GenericColor />
        </Property>

        <Property name="select.icons.down">
          <Description>
            The down icon to use for opening the Select.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormDown />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.icons.up">
          <Description>The up icon to use for closing the Select.</Description>
          <PropertyValue type="element">
            <Example>{`<FormUp />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.searchInput">
          <Description>
            Component for the Select search input field.
          </Description>
          <PropertyValue type="React.Component">
            <Example>{`<Component />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select.step">
          <Description>How many items to render at a time.</Description>
          <PropertyValue type="number">
            <Example defaultValue> 20 </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default SelectPage;

export const SelectItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'large' }}>
    <Select options={[]} placeholder="Choices" tabIndex="-1" />
  </Item>
);

SelectItem.propTypes = Item.propTypes;
