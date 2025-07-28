import React from 'react';
import { FormField, TextInput } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericColor, GenericExtend } from '../utils/genericThemeExamples';
import {
  GenericA11yTitle,
  GenericBool,
  GenericBoolTrue,
  GenericMargin,
  GenericPad,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';

import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
  PropOptions,
} from '../components/Doc';

const FormFieldPage = () => (
  <Page>
    <ComponentDoc
      name="FormField"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Input-FormField',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/formfield&module=%2Fsrc%2FFormField.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/FormField',
          label: 'Github',
        },
      ]}
      description="A single field in a form"
      intrinsicElement="div"
      code={`<FormField label="Field label">
  <TextInput placeholder="type here" />
</FormField>`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>
            Custom label to be used by screen readers. Should only be provided
            if FormField has no children. When a11yTitle is provided an
            aria-label will be added to the element if it has no children.
          </Description>
          <GenericA11yTitle />
        </Property>

        <Property name="component">
          <Description disableMarkdown>
            {`The component to insert in the FormField. Grommet will update the
            form values when this field changes. Any additional properties (such
            as initial value) you pass to FormField will be forwarded to this
            component. The component may be custom as long it supports the
            properties of name, value, onChange (event => {}), while event has
            either event.value or event.target.value.`}
          </Description>
          <PropertyValue type="object">
            <Example>TextArea</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Example>{`props => <input {...props} />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="contentProps">
          <Description>Any valid Box property.</Description>
          <PropertyValue type="object">
            <Description>
              These properties are applied to the FormField contents container
              and will override properties from the theme.
            </Description>
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>Whether the field should look disabled.</Description>
          <GenericBool />
        </Property>

        <Property name="error">
          <Description>
            Any error text describing issues with the field's value.
          </Description>
          <PropertyValue type="string">
            <Example>
              "Text to call attention to an issue with this field"
            </Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`{<Box>...</Box>}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="help">
          <Description>
            Any help text describing how the field works.
          </Description>
          <PropertyValue type="string">
            <Example>"Text to help the user know what is possible"</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="htmlFor">
          <Description>
            The id of the input element contained in this field. If the input
            element is Select or SelectMultiple, Grommet will automatically
            append "__input" to the id of the input element.
          </Description>
          <PropertyValue type="string">
            <Example>"input-id"</Example>
            <Example>
              If input is Select or SelectMultiple: "input-id__input"
            </Example>
          </PropertyValue>
        </Property>

        <Property name="info">
          <Description>
            Any informational text regarding the field's value.
          </Description>
          <PropertyValue type="string">
            <Example>
              "Additional information to give the user better context of the
              FormField."
            </Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="label">
          <Description>A short label describing the field.</Description>
          <PropertyValue type="string">
            <Example>"label"</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>
            The name of the value data when in a Form and the name of the input
            field.
          </Description>
          <Description>
            **NOTE**: A name must be provided if using FormField's validate
            prop.
          </Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the component.</Description>
          <GenericMargin />
        </Property>

        <Property name="pad">
          <Description>
            Whether to add padding to align with the padding of TextInput.
          </Description>
          <GenericBool />
        </Property>

        <Property name="required">
          <Description>
            Whether the field is required. If `formField.requiredIndicator` =
            true in your theme, passing `indicator: false` will not display the
            required indicator for the given field.
          </Description>
          <GenericBool />
          <PropertyValue type="object">
            <Example>{`required={{ indicator: false }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="validate">
          <Description>
            Validation rule when used within a grommet Form. Provide an object
            with a regular expression, a function, or an array of these.
          </Description>
          <Description>
            **NOTE**: In order to use validate, a name must first be provided to
            the FormField.
          </Description>
          <PropertyValue type="object">
            <Description>
              {`An object with max and (optionally) threshold can be used to 
              implement a character counter.`}
            </Description>
            <Example>
              {`
{
  regexp: regular expression,
  message: "string" | node,
  status: "error" | "info"
}
            `}
            </Example>
            <Example>
              {`
{
  max: number,
  threshold: number,
}
            `}
            </Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Description>
              If a function is provided, it will be called with two arguments,
              the value for this field and the entire value object. This permits
              validation to encompass multiple fields. The function should
              return a string message describing the validation issue, if any,
              or an object with 'message' and 'status' properties.
            </Description>
            <Example>{`() => {}`}</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Example>
              {`
[
  {
    regexp: regular expression,
    message: "string" | node,
    status: "error" | "info"
  },
  function
]
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="validateOn">
          <Description>When to perform validation</Description>
          <PropertyValue type="string">
            <Example>"blur"</Example>
            <Example>"submit"</Example>
            <Example>"change"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="formField.border.color">
          <Description>The border color.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"border"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.border.error.color">
          <Description>
            The border color of the error. Deprecated, use error.border.color
            instead.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: 'white', light: 'status-critical' }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="formField.border.position">
          <Description>The border position.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"inner"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.border.side">
          <Description>The border side of the FormField.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"bottom"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.checkBox.pad">
          <Description>The CheckBox pad when wrapped in FormField.</Description>
          <GenericPad />
        </Property>
        <Property name="formField.content.margin">
          <Description>The margin of the FormField content.</Description>
          <GenericMargin />
        </Property>
        <Property name="formField.content.pad">
          <Description>The pad of the FormField content.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <Example>"xxsmall"</Example>
            <Example>"xsmall"</Example>
            <Example defaultValue>"small"</Example>
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
        </Property>
        <Property name="formField.disabled.background.color">
          <Description>
            The color of the FormField background when it is disabled.
          </Description>
          <GenericColor />
        </Property>
        <Property name="formField.disabled.background.opacity">
          <Description>
            The opacity of the FormField background when it is disabled.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>0.5</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.disabled.border.color">
          <Description>
            The color of the FormField border when it is disabled.
          </Description>
          <GenericColor />
        </Property>
        <Property name="formField.disabled.label.color">
          <Description>
            The color of the FormField label when it is disabled.
          </Description>
          <GenericColor />
        </Property>

        <Property name="formField.disabled.help">
          <Description>
            The color of the FormField help label when it is disabled.
          </Description>
          <GenericColor />
        </Property>

        <Property name="formField.disabled.info">
          <Description>
            The color of the FormField info label when it is disabled.
          </Description>
          <GenericColor />
        </Property>

        <Property name="formField.error.background.color">
          <Description>
            The color of the FormField background when there is an error.
          </Description>
          <GenericColor />
        </Property>
        <Property name="formField.error.background.opacity">
          <Description>
            The opacity of the FormField background when there is an error.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>0.5</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.border.color">
          <Description>The border color of the error.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "white", light: "status-critical" },`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.color">
          <Description>The color of the FormField error.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" },`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.container">
          <Description>
            Any valid Box props for the container surrounding the error message
            and icon.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.icon">
          <Description>
            An icon placed in a row with the error message.
          </Description>
          <PropertyValue type="element">
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.size">
          <Description>
            The size of the error message to be displayed.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.size.xsmall">
          <Description>The size of a 'xsmall' error message.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"12px"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.size.small">
          <Description>The size of a 'small' error message.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"14px"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.size.medium">
          <Description>The size of a 'medium' error message.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.size.large">
          <Description>The size of a 'large' error message.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"22px"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.size.xlarge">
          <Description>The size of a 'xlarge' error message.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"26px"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.info.container">
          <Description>
            Any valid Box props for the container surrounding the info message
            and icon.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.info.icon">
          <Description>
            An icon placed in a row with the info message.
          </Description>
          <PropertyValue type="element">
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.error.margin">
          <Description>The margin used for the FormField error.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ vertical: "xsmall", horizontal: "small" }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="formField.focus.background.color">
          <Description>
            The color of the FormField background when it is in focus.
          </Description>
          <GenericColor />
        </Property>
        <Property name="formField.focus.border.color">
          <Description>
            The color of the FormField border when it is in focus.
          </Description>
          <GenericColor />
        </Property>

        <Property name="formField.focus.containerFocus">
          <Description>
            Whether the focus should be on the FormField container or the Input.
            When true, the FormField container will receive focus; when false,
            the Input field will receive focus.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="formField.extend">
          <Description>Any additional style for FormField.</Description>
          <GenericExtend />
        </Property>

        <Property name="formField.[inputname].extend">
          <Description>
            Any additional style for FormField container to style differently
            based on the type of child element (e.g., TextInput, TextArea, etc.)
          </Description>
          <GenericExtend />
        </Property>

        <Property name="formField.help.color">
          <Description>The color of the FormField help.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"dark-3"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "dark-3", light: "dark-3" }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="formField.help.margin">
          <Description>The margin for the FormField help.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>{`{ start: "small" }`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.kind.label">
          <Description>
            Any props of Text that will be applied on the FormField `kind`
            label.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  size: 'large',
  color: 'black',
  margin: {
    vertical: "xsmall",
  }
}
            `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="formField.info.color">
          <Description>The color of the FormField info.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text-xweak"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" },`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.info.margin">
          <Description>The margin used for the FormField info.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ vertical: "xsmall", horizontal: "small" }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="formField.label">
          <Description>
            Any props of Text that will be applied on the FormField label.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  margin: {
    vertical: "xsmall",
    horizontal: "small"
  }
}
            `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="formField.label.margin">
          <Description>The margin for the FormField label.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ vertical: "xsmall", horizontal: "small" }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="formField.label.requiredIndicator">
          <Description>
            Whether an asterisk (*) indicating that an input is required should
            be displayed adjacent to the FormField's label.
          </Description>
          <PropertyValue type="boolean">
            <Description>
              If using "true", the a11yTitle is automatically applied.
            </Description>
            <Example>true</Example>
            <Example>false</Example>
          </PropertyValue>
          <PropertyValue type="element">
            <Description>
              If providing a custom element, for accessibility it is recommended
              that you include an a11yTitle of "required" to assist screen
              readers.
            </Description>
            <Example>{`<Box a11yTitle="required">...</Box>`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"required"</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.margin">
          <Description>The margin of FormField.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>{`{ bottom: "small" }`}</Example>
          </PropertyValue>
        </Property>
        <Property name="formField.round">
          <Description>The rounding of the FormField.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>
        <Property name="global.borderSize">
          <Description>The possible border sizes for FormField.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  xsmall: "1px",
  small: "2px",
  medium: "4px",
  large: "12px",
  xlarge: "24px",
}
`}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default FormFieldPage;

export const FormFieldItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <FormField htmlFor="label" name="label" label="Label">
      <TextInput id="label" name="label" placeholder="value" />
    </FormField>
  </Item>
);

FormFieldItem.propTypes = Item.propTypes;
