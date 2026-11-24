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
        <Property name="radioButton.control">
          <Description>
            Box-part styles for the circular radio control. Supports
            background, border, elevation, height, margin, pad, round, and
            width. Custom render-function children control their own appearance.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  background: 'background-front',
  border: { color: 'border', size: '2px' },
  elevation: 'small',
  height: '24px',
  margin: 'xsmall',
  pad: 'xxsmall',
  round: 'full',
  width: '24px',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.control.hover">
          <Description>
            Box state styles for the unselected control when hovered. Accepts
            background, border, elevation, pad, and round. Focus without a
            focus indicator uses these styles; disabled controls do not.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  background: 'background-hover',
  border: { color: 'border-strong' },
  elevation: 'small',
  pad: 'xsmall',
  round: 'full',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.control.selected">
          <Description>
            Box state styles for the selected control. Any omitted properties
            inherit from radioButton.control.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  background: 'background-selected',
  border: { color: 'brand' },
  elevation: 'small',
  pad: 'xsmall',
  round: 'full',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.control.selected.hover">
          <Description>
            Box state styles for the selected control when hovered. Accepts
            background, border, elevation, pad, and round. Focus without a
            focus indicator uses these styles; disabled controls do not.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  background: 'background-selected-hover',
  border: { color: 'brand-strong' },
  elevation: 'medium',
  pad: 'xsmall',
  round: 'full',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.container">
          <Description>
            Box-part styles for the outer label container. Supports background,
            border, elevation, height, margin, pad, round, and width.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  background: 'background-back',
  border: { color: 'border', size: '1px' },
  elevation: 'none',
  height: '40px',
  margin: { bottom: 'xsmall' },
  pad: 'small',
  round: 'xsmall',
  width: { min: '240px' },
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.container.hover">
          <Description>
            Box state styles for the outer label container when hovered.
            Accepts background, border, elevation, pad, and round. Hover styles
            also apply on focus without a focus indicator, but not when
            disabled.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  background: 'background-hover',
  border: { color: 'border-strong' },
  elevation: 'small',
  pad: 'medium',
  round: 'xsmall',
}`}
            </Example>
          </PropertyValue>
        </Property>

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
            The legacy border color of the RadioButton control. Prefer
            radioButton.control.border.color.
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
            The legacy border width of the RadioButton control. Prefer
            radioButton.control.border.size.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"2px"</Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.background.color">
          <Description>
            The legacy background color of the unselected control. Prefer
            radioButton.control.background.
          </Description>
          <GenericColor />
        </Property>

        <Property name="radioButton.check.background.color">
          <Description>
            The legacy background color of the selected control. Prefer
            radioButton.control.selected.background.
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
          <Description>
            The legacy radius setting for the RadioButton control. Prefer
            radioButton.control.round.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"100%"</Example>
          </PropertyValue>
        </Property>

        <Property name="radioButton.color">
          <Description>
            The legacy color of the selected RadioButton control border. Prefer
            radioButton.control.selected.border.color.
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
            The legacy background color of the label container on hover. Prefer
            radioButton.container.hover.background.
          </Description>
          <GenericColor />
        </Property>

        <Property name="radioButton.hover.border.color">
          <Description>
            The legacy border color on hover. Prefer
            radioButton.control.hover.border.color and
            radioButton.control.selected.hover.border.color.
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
