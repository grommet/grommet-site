import React from 'react';
import { RadioButtonGroup } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericBool, GenericBoolFalse } from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const RadioButtonGroupPage = () => (
  <Page>
    <ComponentDoc
      name="RadioButtonGroup"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Input-RadioButtonGroup',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/RadioButtonGroup',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/radiobuttongroup"
      description="A group of radio buttons"
      intrinsicElement="div"
      code={`function Example() {
  const [value, setValue] = React.useState('one');
  return (
    <RadioButtonGroup
      name="doc"
      options={['one', 'two']}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          gap: 'small',
        },
      }}
    >
      <Properties>
        <Property name="children">
          <Description>
            Function that will be called to render the visual representation.
          </Description>
          <PropertyValue type="function">
            <Description>
              The function will be passed an object indicating whether the
              button is checked. It should return a react element.
            </Description>
            <Example>{`(option, { checked, hover }) => <Box ...>{...}</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>Disables all options.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="name">
          <Description disableMarkdown>
            {`The DOM name attribute value to use for the underlying <input/> 
 elements.`}
          </Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when the user clicks on one of the
            radio buttons. It will be passed a React event object.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ target: { value } }) => {...}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="options">
          <Description>
            Options can be either an array of type string, boolean, number or
            object. Each option is rendered as a single RadioButton.
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
          <PropertyValue type="array[object]">
            <Example>
              {`
[
  {
    disabled: boolean,
    id: "string",
    label:  "string" | element,
    value: "string" | number | boolean
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
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
          <GenericBool />
          <PropertyValue type="object">
            <Example>
              {`{
  disabled: boolean,
  id: "string",
  label:  "string" | element,
  value: "string" | number | boolean
}
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="radioButtonGroup.container">
          <Description>
            Any valid Box props for the RadioButtonGroup container.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default RadioButtonGroupPage;

export const RadioButtonGroupItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <RadioButtonGroup
      name="group"
      options={['one', 'two']}
      value="one"
      onChange={() => {}}
    />
  </Item>
);

RadioButtonGroupItem.propTypes = Item.propTypes;
