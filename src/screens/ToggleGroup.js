import React from 'react';
import { ToggleGroup } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { GenericPad, GenericBoolFalse } from '../utils/genericPropExamples';

const ToggleGroupPage = () => (
  <Page>
    <ComponentDoc
      name=""
      availableAt={[
        {
          url: '',
          badge:
            'https://storybook.grommet.io/?path=/story/controls-togglegroup-simple--simple',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/ToggleGroup',
          label: 'Github',
        },
      ]}
      description="A collection of toggle buttons capable of being switched between two states: on or off."
      code={`<ToggleGroup
  a11yTitle="Choose option"
  options={['Option 1', 'Option 2', 'Option 3']}
/>`}
    >
      <Properties>
        <Property name="multiple">
          <Description>
            Whether to allow multiple options to be selected. When multiple is
            true, 'value' should be an array of selected options.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="onToggle">
          <Description>
            Function that will be called when the user selects an option.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ value: nextValue }) => setValue(nextValue)`}</Example>
          </PropertyValue>
        </Property>

        <Property name="options">
          <Description>
            Options can be either an array of type string, or object. Each
            option is rendered as a single Button within ToggleGroup.
          </Description>
          <PropertyValue type="string">
            <Example>["option1", "option2"]</Example>
          </PropertyValue>
          <PropertyValue type="array[object]">
            <Example>
              {`
[
  {
    icon: <Bold />,
    label:  "Bold"
    value: "bold"
  }
]
            `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="value">
          <Description>
            The currently selected value. When `multiple` is true, value should
            be an array.
          </Description>
          <PropertyValue type="string">
            <Example>"option1"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="toggleGroup.button.pad">
          <Description>
            The amount of padding around the Box contents.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  horizontal: "11px",
  vertical: "11px",
}`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="toggleGroup.button.iconOnly.pad">
          <Description>
            The amount of padding around the Button when icon only.
          </Description>
          <GenericPad />
        </Property>

        <Property name="toggleGroup.container">
          <Description>
            Any valid Box property for the Tip container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  round: 'xsmall', 
  border: true,
}`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="toggleGroup.divider.color">
          <Description>
            The color of the divider between the Buttons.
          </Description>
          <PropertyValue type="sting">
            <Example defaultValue>border</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default ToggleGroupPage;

export const ToggleGroupItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <ToggleGroup
      alignSelf="center"
      name="group"
      options={['one', 'two', 'three']}
      value="one"
      onChange={() => {}}
    />
  </Item>
);

ToggleGroupItem.propTypes = Item.propTypes;
