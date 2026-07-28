import React from 'react';
import { Box, Text } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericColor } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  PropOptions,
  ThemeDoc,
} from '../components/Doc';

// TODO: Stepper is not yet available in the grommet package. Once it is
// released, import it from 'grommet', add a live `code` example to
// <ComponentDoc>, and replace the placeholder preview in StepperItem below.

const StepperPage = () => (
  <Page>
    <ComponentDoc
      name="Stepper"
      description="Guides users through the steps of a multi-step process, showing progress and the status of each step."
      stable
    >
      <Properties>
        <Property name="children">
          <Description>
            Custom content to render for the active step, typically the content
            or form associated with 'currentStep'.
          </Description>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="clickableSteps">
          <Description>
            Whether steps can be clicked to navigate between them.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example defaultValue>false</Example>
          </PropertyValue>
        </Property>

        <Property name="currentStep">
          <Description>
            Required. The 'id' of the step that is currently active.
          </Description>
          <PropertyValue type="string">
            <Example>"a step id"</Example>
          </PropertyValue>
        </Property>

        <Property name="direction">
          <Description>The orientation of the Stepper.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"horizontal"</Example>
            <Example>"vertical"</Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>
            The DOM id attribute value to use for the underlying element.
          </Description>
          <PropertyValue type="string">
            <Example>"stepper-id"</Example>
          </PropertyValue>
        </Property>

        <Property name="onStepClick">
          <Description>
            Function that will be called with the clicked step's 'id' when
            'clickableSteps' is true and a step is clicked.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="showDescription">
          <Description>
            Whether to show each step's 'description' beneath its title.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example defaultValue>false</Example>
          </PropertyValue>
        </Property>

        <Property name="steps">
          <Description>
            Required. The steps to display. 'id' uniquely identifies the step
            and is used to match against 'currentStep'. 'title' is the step
            label. 'description' is optional supporting text shown when
            'showDescription' is true. 'status' indicates the state of the step.
            'disabledReason' is shown when the step's status is "disabled".
            'errorMessage' is shown when the step's status is "error".
            'children' allows for an array of sub-steps nested under a step,
            following the same shape.
          </Description>
          <PropertyValue type="array">
            <Example>
              {`
[
  {
    id: "string",
    title: "string",
    description: "string",
    status: "...",
    disabledReason: "string",
    errorMessage: "string",
    children: [
      {
        id: "string",
        title: "string",
        description: "string",
        status: "...",
        disabledReason: "string",
        errorMessage: "string",
      }
    ],
  }
]
            `}
            </Example>
            <PropOptions prop="status">
              <Example>"pending"</Example>
              <Example>"completed"</Example>
              <Example>"error"</Example>
              <Example>"disabled"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="stepper.completed">
          <Description>
            Theme styling applied to a step with a "completed" status.
            'indicator.icon' and 'indicator.iconSize' set the icon shown in the
            indicator. 'indicator.background', 'indicator.color', and
            'indicator.border' style the indicator's fill, icon/text color, and
            border color. 'indicator.substep.iconSize' controls the icon size
            used within a sub-step's indicator. 'indicator.hover' styles the
            indicator when hovered. 'label.color' styles the step title and
            'connector.color' styles the line connecting to the next step.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  indicator: {
    icon: <FormCheckmark />,
    iconSize: "medium",
    background: "background-front",
    color: "brand",
    border: "brand",
    substep: {
      iconSize: "small",
    },
    hover: {
      background: "background-front",
    },
  },
  label: { color: "text-weak" },
  connector: { color: "brand" },
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.connector.stroke.width">
          <Description>
            The stroke width of the line connecting steps.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"2px"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.current">
          <Description>
            Theme styling applied to the active step. 'indicator.icon' and
            'indicator.iconSize' set the icon shown in the indicator.
            'indicator.background', 'indicator.color', and 'indicator.border'
            style the indicator's fill, icon/text color, and border color.
            'indicator.substep.iconSize' controls the icon size used within a
            sub-step's indicator. 'indicator.hover' styles the indicator when
            hovered. 'label.color' styles the step title, which can be an object
            to differentiate colors between dark and light modes.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  indicator: {
    icon: <StatusGoodSmall />,
    iconSize: "medium",
    background: "brand",
    color: "white",
    border: "brand",
    substep: {
      iconSize: "small",
    },
    hover: {
      color: "white",
    },
  },
  label: {
    color: { dark: "text-strong", light: "brand" },
  },
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted">
          <Description>
            Theme styling applied to the active step when it has also been
            completed. 'indicator.icon' and 'indicator.iconSize' set the icon
            shown in the indicator. 'indicator.background', 'indicator.color',
            and 'indicator.border' style the indicator's fill, icon/text color,
            and border color. 'indicator.substep.iconSize' controls the icon
            size used within a sub-step's indicator. 'indicator.hover' styles
            the indicator when hovered. 'label.color' styles the step title,
            which can be an object to differentiate colors between dark and
            light modes.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  indicator: {
    icon: <FormCheckmark />,
    iconSize: "medium",
    background: "brand",
    color: "white",
    border: "brand",
    substep: {
      iconSize: "small",
    },
    hover: {
      color: "white",
    },
  },
  label: {
    color: { dark: "text-strong", light: "brand" },
  },
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentError">
          <Description>
            Theme styling applied to the active step when it also has an "error"
            status. 'indicator.icon' sets the icon shown in the indicator.
            'indicator.background', 'indicator.color', and 'indicator.border'
            style the indicator's fill, icon/text color, and border color.
            'indicator.substep.iconSize' controls the icon size used within a
            sub-step's indicator. 'indicator.hover' styles the indicator when
            hovered. 'label.color' styles the step title.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  indicator: {
    icon: <StatusCriticalSmall />,
    background: "status-critical",
    color: "white",
    border: "status-critical",
    substep: {
      iconSize: "small",
    },
    hover: {
      color: "white",
    },
  },
  label: {
    color: "status-critical",
  },
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.description.color">
          <Description>The color of a step's description.</Description>
          <GenericColor />
        </Property>

        <Property name="stepper.description.size">
          <Description>The text size of a step's description.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.disabled">
          <Description>
            Theme styling applied to a step with a "disabled" status.
            'indicator.background', 'indicator.color', and 'indicator.border'
            style the indicator's fill, icon/text color, and border color.
            'indicator.substep.iconSize' controls the icon size used within a
            sub-step's indicator. 'label.color' styles the step title and
            'connector.color' styles the line connecting to the next step.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  indicator: {
    background: "background-contrast",
    color: "text-weak",
    border: "border",
    substep: {
      iconSize: "small",
    },
  },
  label: { color: "text-weak" },
  connector: { color: "border" },
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error">
          <Description>
            Theme styling applied to a step with an "error" status.
            'indicator.icon' sets the icon shown in the indicator.
            'indicator.background', 'indicator.color', and 'indicator.border'
            style the indicator's fill, icon/text color, and border color.
            'indicator.substep.iconSize' controls the icon size used within a
            sub-step's indicator. 'indicator.hover' styles the indicator when
            hovered. 'label.color' styles the step title, 'connector.color'
            styles the line connecting to the next step, and 'helperText.color'
            styles the step's helper/error text.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  indicator: {
    icon: <StatusCriticalSmall />,
    background: "background-front",
    color: "status-critical",
    border: "status-critical",
    substep: {
      iconSize: "small",
    },
    hover: {
      background: "background-front",
    },
  },
  label: { color: "text" },
  connector: { color: "status-critical" },
  helperText: { color: "status-critical" },
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.helperText.color">
          <Description>The color of a step's helper text.</Description>
          <GenericColor />
        </Property>

        <Property name="stepper.helperText.size">
          <Description>
            The text size of a step's helper text, shown for a step in the
            "error" status.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"xsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.indicator.border.width">
          <Description>The border width of the step indicator.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"2px"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.indicator.size">
          <Description>The size of the step indicator.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.label.size">
          <Description>The text size of a step's title.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.label.substep.size">
          <Description>The text size of a sub-step's title.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.pending">
          <Description>
            Theme styling applied to a step with a "pending" status.
            'indicator.background', 'indicator.color', and 'indicator.border'
            style the step indicator's fill, icon/text color, and border color.
            'indicator.substep.iconSize' controls the icon size used within a
            sub-step's indicator. 'indicator.hover' styles the indicator when
            hovered. 'label.color' styles the step title and 'connector.color'
            styles the line connecting to the next step.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  indicator: {
    background: "background-front",
    color: "text-strong",
    border: "text-xweak",
    substep: {
      iconSize: "small",
    },
    hover: {
      background: "background-front",
      border: "text-strong",
    },
  },
  label: { color: "text" },
  connector: { color: "border" },
}
              `}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default StepperPage;

export const StepperItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box pad="small" align="center" justify="center">
      <Text>Stepper</Text>
    </Box>
  </Item>
);

StepperItem.propTypes = Item.propTypes;
