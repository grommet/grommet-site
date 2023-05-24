import React from 'react';
import { RadioButton } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericA11yTitle, GenericBool } from '../utils/genericPropExamples';
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

const RadioButtonPage = () => (
  <Page>
    <ComponentDoc
      name="RadioButton"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Input-RadioButton',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/radiobutton&module=%2Fsrc%2FRadioButton.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/RadioButton',
          label: 'Github',
        },
      ]}
      description="A radio button control"
      intrinsicElement="input"
      code={`function Example() {
  const [checked, setChecked] = React.useState(false);
  return (
    <RadioButton
      name="radio"
      checked={checked}
      label="chosen"
      onChange={(event) => setChecked(event.target.checked)}
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

        <Property name="checked">
          <Description disableMarkdown>
            {`Same as React <input checked={} />`}
          </Description>
          <GenericBool />
        </Property>

        <Property name="children">
          <Description disableMarkdown>
            Function that will be called to render the visual representation.
          </Description>
          <PropertyValue type="function">
            <Description>
              It will be passed an object indicating whether the button is
              checked. It should return a react element.
            </Description>
            <Example>{`({ checked }) => <Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description disableMarkdown>
            {`Same as React <input disabled={} />. Also adds a hidden input element
with the same name so form submissions work.`}
          </Description>
          <GenericBool />
        </Property>

        <Property name="id">
          <Description disableMarkdown>
            {`The DOM id attribute value to use for the underlying <input />
          element.`}
          </Description>
          <PropertyValue type="string">
            <Example>"inputId"</Example>
          </PropertyValue>
        </Property>

        <Property name="label">
          <Description>Label text to place next to the control.</Description>
          <PropertyValue type="node">
            <Example>"label"</Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description disableMarkdown>
            {`The DOM name attribute value to use for the underlying <input />
          element.`}
          </Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description disableMarkdown>
            {`Function that will be called when the user clicks the radio button. It
          will be passed a React event object. The current state can be accessed
          via event.target.checked. Same as React <input onChange={} />.`}
          </Description>
          <PropertyValue type="function">
            <Example>{`({ target: { checked } }) => {...}`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.colors.control">
          <Description>
            The default color of the border surrounding the checked icon in
            RadioButton checked state.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "graph-0", light: "brand" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.border.color">
          <Description>
            The color of the border of the Radio Button.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "rgba(255, 255, 255, 0.5)", light: "rgba(0, 0, 0, 0.15)" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.border.width">
          <Description>
            The width size of the border of the RadioButton.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"2px"</Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.check.background.color">
          <Description>
            The background color of the checked icon in the RadioButton.
          </Description>
          <GenericColor />
        </Property>

        <Property name="radioButton.check.color">
          <Description>
            The color of the checked icon in the RadioButton.
          </Description>
          <GenericColor />
        </Property>

        <Property name="radioButton.check.extend">
          <Description>
            Any additional style for the checked RadioButton.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="radioButton.check.radius">
          <Description>The border-radius of the RadioButton.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"100%"</Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.color">
          <Description>
            The color of the border surrounding the checked icon in RadioButton
            checked state.
          </Description>
          <GenericColor />
        </Property>

        <Property name="radioButton.container.extend">
          <Description>
            Any additional style for the container around the radio button and
            its label.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="radioButton.extend">
          <Description>
            Any additional style for the radio button itself.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="radioButton.font.weight">
          <Description>The font weight of the label.</Description>
          <PropertyValue type="string">
            <Example>"normal"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.gap">
          <Description>
            The gap between the label and the RadioButton itself.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.hover.background.color">
          <Description>
            The background color of the Box surrounding the RadioButton when
            hovered over.
          </Description>
          <GenericColor />
        </Property>

        <Property name="radioButton.hover.border.color">
          <Description>
            The color of the RadioButton border when hovered over.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
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

        <Property name="radioButton.icon.extend">
          <Description>
            Any additional style for the RadioButton icon.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="radioButton.icon.size">
          <Description>The size of the icon in the RadioButton.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.icons.circle">
          <Description>
            The icon to replace the inner checked circle.
          </Description>
          <PropertyValue type="element">
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.size">
          <Description>The size of the RadioButton.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default RadioButtonPage;

export const RadioButtonItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <RadioButton name="radio" checked onChange={() => {}} />
  </Item>
);

RadioButtonItem.propTypes = Item.propTypes;
