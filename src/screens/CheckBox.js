import React from 'react';
import { CheckBox } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericBool,
  GenericBoolFalse,
  SizesXsmallXlarge,
  GenericPad,
} from '../utils/genericPropExamples';
import { GenericColor, GenericExtend } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const CheckBoxPage = () => (
  <Page>
    <ComponentDoc
      name="CheckBox"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Input-CheckBox&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/checkbox&module=%2Fsrc%2FCheckBox.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/CheckBox',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/checkbox"
      description="A checkbox toggle control"
      intrinsicElement="input"
      code={`function Example() {
  const [checked, setChecked] = React.useState(true);
  return (
    <CheckBox
      checked={checked}
      label="interested?"
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
          <GenericBoolFalse />
        </Property>

        <Property name="children">
          <Description>
            Function that will be called to render the visual representation. It
            will be passed an object indicating whether the button is checked.
            It should return a react element.
          </Description>
          <PropertyValue type="function">
            <Description>
              'checked' and 'indeterminate' can be passed as arguments that
              would then return a react element.
            </Description>
            <Example>{`({ checked, indeterminate }) => <Box ...>{...}</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description disableMarkdown>
            {`Same as React <input disabled={} />. Also adds a hidden input
            element with the same name so form submissions work.`}
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="fill">
          <Description>
            Whether the checkbox and label expand to fill all of the available
            width and/or height of their container.
          </Description>
          <GenericBool />
        </Property>

        <Property name="id">
          <Description disableMarkdown>
            {`The DOM id attribute value to use for the underlying <input />
            element.`}
          </Description>
          <PropertyValue type="string">
            <Example>"a-dom-id"</Example>
          </PropertyValue>
        </Property>

        <Property name="label">
          <Description>
            Label text to place next to the control. Can be used instead of
            a11yTitle to meet accessibility requirements
          </Description>
          <PropertyValue type="string">
            <Example>"enabled"</Example>
          </PropertyValue>
          <PropertyValue type="element">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description disableMarkdown>
            {`The DOM name attribute value to use for the underlying <input /> element.`}
          </Description>
          <PropertyValue type="string">
            <Example>"a-dom-name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description disableMarkdown>
            {`Function that will be called when the user clicks the check box. It
            will be passed a React event object. The current state can be
            accessed via event.target.checked. Same as React
            <input onChange={} />.`}
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pad">
          <Description>
            The amount of padding on the container surrounding the checkbox and
            its label.
          </Description>
          <GenericPad />
        </Property>

        <Property name="reverse">
          <Description>
            Whether to show the label in front of the checkbox.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="toggle">
          <Description>Whether to visualize it as a toggle switch.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="indeterminate">
          <Description>
            Whether state is indeterminate. NOTE: This can only be used with
            non-toggle components
          </Description>
          <GenericBoolFalse />
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="checkBox.border.color">
          <Description>The border color when unchecked.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"black"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: 'rgba(255, 255, 255, 0.5)', light: 'rgba(0, 0, 0, 0.15)' }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.border.width">
          <Description>The border width when unchecked.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"2px"</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.check.extend">
          <Description>Any additional style for checked CheckBox.</Description>
          <GenericExtend />
        </Property>

        <Property name="checkBox.check.radius">
          <Description>The radius of the checked icon.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.check.thickness">
          <Description>The stroke width of the checked icon.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.color">
          <Description>
            The stroke color for the CheckBox icon, and the border when checked.
          </Description>
          <GenericColor />
        </Property>

        <Property name="checkBox.extend">
          <Description>Any additional style for CheckBox.</Description>
          <GenericExtend />
        </Property>

        <Property name="checkBox.gap">
          <Description>
            The right margin of the CheckBox to its label.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <SizesXsmallXlarge />
            <Example>"any CSS size"</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.hover.border.color">
          <Description>The border color on hover.</Description>
          <GenericColor />
        </Property>

        <Property name="checkBox.hover.background.color">
          <Description>
            The background color of the Box surrounding the RadioButton when
            hovered over.
          </Description>
          <GenericColor />
        </Property>

        <Property name="checkBox.icon.size">
          <Description>The size of the checked icon.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.icon.extend">
          <Description>Any additional style for CheckBox icon.</Description>
          <GenericExtend />
        </Property>

        <Property name="checkBox.icons.checked">
          <Description>The icon to use when checked.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormCheckmark />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.icons.indeterminate">
          <Description>The icon to use when indeterminate.</Description>
          <PropertyValue type="element">
            <Example>{`<FormCheckmark />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.label.align">
          <Description>How to align the checkbox and label.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"center"</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.pad">
          <Description>The pad around the CheckBox and its label.</Description>
          <GenericPad />
        </Property>

        <Property name="checkBox.size">
          <Description>
            The height and width used for the CheckBox icon.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.toggle.background">
          <Description>The background color of the toggle.</Description>
          <GenericColor />
        </Property>

        <Property name="checkBox.toggle.color">
          <Description>The color of the toggle knob.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"#d9d9d9"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "#d9d9d9", light: "#d9d9d9" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.toggle.extend">
          <Description>Any additional style for CheckBox toggle.</Description>
          <GenericExtend />
        </Property>

        <Property name="checkBox.toggle.knob.extend">
          <Description>
            Any additional style for the CheckBox toggle knob.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="checkBox.toggle.radius">
          <Description>
            The border radius used for the toggle and the knob.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="checkBox.toggle.size">
          <Description>The width size of the toggle.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"48px"</Example>
          </PropertyValue>
        </Property>

        <Property name="formField.checkBox.pad">
          <Description>The CheckBox pad when wrapped in FormField.</Description>
          <GenericPad />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default CheckBoxPage;

export const CheckBoxItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <CheckBox checked onChange={() => {}} />
  </Item>
);

CheckBoxItem.propTypes = Item.propTypes;
