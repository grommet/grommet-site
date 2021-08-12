import React from 'react';
import { CheckBoxGroup } from 'grommet';
import Page from '../components/Page';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';
import Item from './Components/Item';
import { GenericBool } from '../utils/genericPropExamples';

export default () => (
  <Page>
    <ComponentDoc
      name="CheckBoxGroup"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Input-CheckBoxGroup&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
      ]}
      description="A group of CheckBoxes"
      intrinsicElement="div"
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          gap: 'small',
        },
      }}
      code={`<Grommet theme={grommet}>
  <Box pad="medium">
    <CheckBoxGroup options={["Maui", "Kauai", "Oahu"]} />
  </Box>
</Grommet>`}
    >
      <Properties>
        <Property name="value">
          <Description>
            An array of the values for the checked options. If options is
            provided as an object, the value array will be the values that the
            valueKey maps to.
          </Description>
          <PropertyValue type="array">
            <Example>
              {`
[
  number
  "string"
]
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="children">
          <Description>
            Function that will be called to render the visual representation. It
            will be called for each option and passed the option, and an object
            indicating whether the option is checked. It should return a react
            element.
          </Description>
          <PropertyValue type="function">
            <Description>
              'option', 'checked' and 'indeterminate' can be passed as arguments
              that would then return a react element.
            </Description>
            <Example>{`(option, { checked, indeterminate }) => <Box ...>{...}</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>Disables all options.</Description>
          <GenericBool />
        </Property>

        <Property name="labelKey">
          <Description>
            When the options array contains objects, this property indicates how
            to determine the label of each option. If a string is provided, it
            is used as the key to retrieve each option's label.
          </Description>
          <PropertyValue type="string">
            <Example>"label"</Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>
            Required when used in the Context of Form and FormField.
          </Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when the user clicks on a CheckBox
            option.
          </Description>
          <PropertyValue type="function">
            <Description>
              The function will pass a React event object with the additional
              CheckBoxGroup properties of 'option' and 'value'.
            </Description>
            <Example>{`({ value, option }) => {...}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="options">
          <Description>The options to choose from.</Description>
          <PropertyValue type="array[string]">
            <Example>["Maui", "Kauai", "Oahu"]</Example>
          </PropertyValue>
          <PropertyValue type="array[object]">
            <Description>
              An array of objects of CheckBox props excluding the 'checked'
              property, use CheckBoxGroup 'value' prop instead of 'checked'.
            </Description>
            <Example>
              {`[
  { label: 'Maui' },
  { label: 'Jerusalem' },
  { label: 'Wuhan' },
]`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="valueKey">
          <Description>
            When the options array contains objects, this property indicates how
            to determine the value of each option. If a string is provided, it
            is used as the key to retrieve each option's value.
          </Description>
          <PropertyValue type="string">
            <Example>"value"</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export const CheckBoxGroupItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <CheckBoxGroup options={['First', 'Second', 'Third']} />
  </Item>
);

CheckBoxGroupItem.propTypes = Item.propTypes;
