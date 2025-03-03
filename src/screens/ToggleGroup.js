import React from 'react';
import { ToggleGroup } from 'grommet';
import { Bold, Italic, Underline } from 'grommet-icons';
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
import {
  GenericPad,
  GenericBoolFalse,
  GenericBool,
} from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';

const ToggleGroupPage = () => (
  <Page>
    <ComponentDoc
      name="ToggleGroup"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/controls-togglegroup-simple--simple',
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
  options={[
    {icon: <Icons.Bold />, value: 'bold'},
    {icon: <Icons.Italic />, value: 'italic'},
    {icon: <Icons.Underline />, value: 'underline'}
  ]}
/>`}
    >
      <Properties>
        <Property name="defaultValue">
          <Description>
            The default selected value. When `multiple` is true, value should be
            an array.
          </Description>
          <PropertyValue type="string">
            <Example>"option1"</Example>
          </PropertyValue>
          <PropertyValue type="array[string]">
            <Example>["option1", "option2"]</Example>
          </PropertyValue>
        </Property>
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
            option is rendered as a single Button within ToggleGroup. The
            options that can be passed in can be icon, label, value, tip
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
    value: "bold",
    tip: "bold"
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
          <PropertyValue type="array[string]">
            <Example>["option1", "option2"]</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="toggleGroup.button.pad">
          <Description>The amount of padding on the buttons.</Description>
          <>
            <PropertyValue type="string">
              <Description>
                T-shirt sizing based off the theme or a specific size in px, em,
                etc.
              </Description>
              <Example>"none"</Example>
              <Example>"xxsmall"</Example>
              <Example>"xsmall"</Example>
              <Example>"small"</Example>
              <Example>"medium"</Example>
              <Example>"large"</Example>
              <Example>"xlarge"</Example>
              <Example>"any CSS size"</Example>
            </PropertyValue>
            <PropertyValue type="object">
              <Description>
                An object can be specified to distinguish horizontal padding,
                vertical padding, and padding on a particular side.
              </Description>
              <Example defaultValue>
                {`
{
  vertical: "11px",
  horizontal: "11px",
}
        `}
              </Example>
              <Example>
                {`
{
  vertical: "...",
  horizontal: "...",
  top: "...",
  bottom: "...",
  left: "...",
  right: "...",
  start: "...",
  end: "..."
}
        `}
              </Example>
            </PropertyValue>
          </>
        </Property>
        <Property name="toggleGroup.button.iconOnly.pad">
          <Description>
            The amount of padding around the Button when icon only.
          </Description>
          <GenericPad />
        </Property>

        <Property name="toggleGroup.border.radius">
          <Description>The border radius used for buttons.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="toggleGroup.container">
          <Description>
            Any valid Box property for the ToggleGroup container.
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
        <Property name="toggleGroup.container.extend">
          <Description>Any additional style for the ToggleGroup.</Description>
          <GenericExtend />
        </Property>
        <Property name="toggleGroup.divider">
          <Description>
            Whether to have the divider between the buttons.
          </Description>
          <GenericBool />
        </Property>

        <Property name="toggleGroup.divider.color">
          <Description>
            The color of the divider between the buttons.
          </Description>
          <PropertyValue type="sting">
            <Example defaultValue>border</Example>
          </PropertyValue>
        </Property>

        <Property name="toggleGroup.kind">
          <Description>
            The button `kind` for buttons in a ToggleGroup. Any pre-defined kind
            from theme.button.kind.
          </Description>
          <PropertyValue type="sting">
            <Example>'toolbar'</Example>
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
      options={[
        { icon: <Bold />, value: 'bold' },
        { icon: <Italic />, value: 'italic' },
        { icon: <Underline />, value: 'underline' },
      ]}
      value="one"
      onChange={() => {}}
    />
  </Item>
);

ToggleGroupItem.propTypes = Item.propTypes;
