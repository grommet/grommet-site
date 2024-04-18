import React from 'react';
import { Box } from 'grommet';
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
import { GenericColor } from '../utils/genericThemeExamples';
import { GenericPad, GenericBoolFalse } from '../utils/genericPropExamples';

const ToggleGroup = () => (
  <Page>
    <ComponentDoc
      name=""
      availableAt={[
        {
          url: '',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: '',
          label: 'Github',
        },
      ]}
      description="A collection of binary buttons capable of being switched between two states: on or off."
      code={`<Grommet theme={grommet}>
  <Box pad="medium">
  </Box>
</Grommet>`}
    >
      <Properties>
        <Property name="multiple">
          <Description>
            This will allow more than one of the buttons within ToggleGroup to
            be selected.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="onToggle">
          <Description>
            Function that will be called when the user types or selects an
            option in toggleGroup.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
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
    icon: element,
    label:  "string" | element,
    value: "string"
  }
]
            `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="value">
          <Description>Currently selected option value.</Description>
          <PropertyValue type="string">
            <Example>"option1"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="toggleGroup.button.color">
          <Description>The color of the text label.</Description>
          <GenericColor />
        </Property>
        <Property name="toggleGroup.button.pad">
          <Description>
            The amount of padding around the Box contents.
          </Description>
          <GenericPad />
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
  align: { top: "bottom" }, 
  background: "none",
  elevation: "none",
  margin: "none"
}`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="toggleGroup.divider.color">
          <Description>
            The color of the divider between the Buttons.
          </Description>
          <Example>"neutral-1"</Example>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default ToggleGroup;

export const ToggleGroupItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box
      border={{ color: 'brand', size: 'medium' }}
      round="medium"
      margin="small"
    />
  </Item>
);

ToggleGroupItem.propTypes = Item.propTypes;
