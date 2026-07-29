import React, { useState } from 'react';
import { Box, Stepper } from 'grommet';
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

const StepperPage = () => (
  <Page>
    <ComponentDoc
      name="Stepper"
      description="Guides users through the steps of a multi-step process, showing progress and the status of each step."
      stable
      code={`<Stepper
  steps={[
    { id: 'a', title: 'A', status: 'completed' },
    { id: 'b', title: 'B', status: 'pending' },
    { id: 'c', title: 'C', status: 'pending' }
  ]}
  currentStep="b"
/>`}
    >
      <Properties>
        <Property name="children">
          <Description>
            Custom content to render for the active step.
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
            The 'id' of the step that is currently active.
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
            The steps to display. 'id' uniquely identifies the step and is used
            to match against 'currentStep'. 'title' is the step label.
            'description' is optional supporting text shown when
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
        <Property name="stepper.completed.connector.color">
          <Description>
            The color of the line connecting to the next step.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.completed.indicator.background">
          <Description>The background of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.completed.indicator.border">
          <Description>The border color of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.completed.indicator.color">
          <Description>
            The icon or text color of the step indicator.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.completed.indicator.hover.background">
          <Description>
            The background of the step indicator when hovered.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.completed.indicator.icon">
          <Description>The icon shown in the step indicator.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormCheckmark />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.completed.indicator.iconSize">
          <Description>
            The size of the icon shown in the step indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.completed.indicator.substep.iconSize">
          <Description>
            The icon size used within a sub-step's indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.completed.label.color">
          <Description>The color of the step title.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text-weak"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
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

        <Property name="stepper.current.indicator.background">
          <Description>The background of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.current.indicator.border">
          <Description>The border color of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.current.indicator.color">
          <Description>
            The icon or text color of the step indicator.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.current.indicator.hover.color">
          <Description>
            The icon or text color of the step indicator when hovered.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.current.indicator.icon">
          <Description>The icon shown in the step indicator.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<StatusGoodSmall />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.current.indicator.iconSize">
          <Description>
            The size of the icon shown in the step indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.current.indicator.substep.iconSize">
          <Description>
            The icon size used within a sub-step's indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.current.label.color">
          <Description>
            The color of the step title. Can be an object to differentiate
            colors between dark and light modes.
          </Description>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "text-strong", light: "brand" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted.indicator.background">
          <Description>The background of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted.indicator.border">
          <Description>The border color of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted.indicator.color">
          <Description>
            The icon or text color of the step indicator.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted.indicator.hover.color">
          <Description>
            The icon or text color of the step indicator when hovered.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted.indicator.icon">
          <Description>The icon shown in the step indicator.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormCheckmark />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted.indicator.iconSize">
          <Description>
            The size of the icon shown in the step indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted.indicator.substep.iconSize">
          <Description>
            The icon size used within a sub-step's indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentCompleted.label.color">
          <Description>
            The color of the step title. Can be an object to differentiate
            colors between dark and light modes.
          </Description>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "text-strong", light: "brand" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentError.indicator.background">
          <Description>The background of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentError.indicator.border">
          <Description>The border color of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentError.indicator.color">
          <Description>
            The icon or text color of the step indicator.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentError.indicator.hover.color">
          <Description>
            The icon or text color of the step indicator when hovered.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentError.indicator.icon">
          <Description>The icon shown in the step indicator.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<StatusCriticalSmall />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentError.indicator.substep.iconSize">
          <Description>
            The icon size used within a sub-step's indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.currentError.label.color">
          <Description>The color of the step title.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
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

        <Property name="stepper.disabled.connector.color">
          <Description>
            The color of the line connecting to the next step.
          </Description>
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

        <Property name="stepper.disabled.indicator.background">
          <Description>The background of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"background-contrast"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.disabled.indicator.border">
          <Description>The border color of the step indicator.</Description>
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

        <Property name="stepper.disabled.indicator.color">
          <Description>
            The icon color of the step indicator.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text-weak"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.disabled.indicator.substep.iconSize">
          <Description>
            The icon size used within a sub-step's indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.disabled.label.color">
          <Description>The color of the step title.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text-weak"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.connector.color">
          <Description>
            The color of the line connecting to the next step.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.helperText.color">
          <Description>The color of the step's helper/error text.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.indicator.background">
          <Description>The background of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.indicator.border">
          <Description>The border color of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.indicator.color">
          <Description>
            The icon or text color of the step indicator.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.indicator.hover.background">
          <Description>
            The background of the step indicator when hovered.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.indicator.icon">
          <Description>The icon shown in the step indicator.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<StatusCriticalSmall />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.indicator.substep.iconSize">
          <Description>
            The icon size used within a sub-step's indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.error.label.color">
          <Description>The color of the step title.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
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

        <Property name="stepper.pending.connector.color">
          <Description>
            The color of the line connecting to the next step.
          </Description>
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

        <Property name="stepper.pending.indicator.background">
          <Description>The background of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.pending.indicator.border">
          <Description>The border color of the step indicator.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text-xweak"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.pending.indicator.color">
          <Description>
            The icon or text color of the step indicator.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text-strong"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.pending.indicator.hover.background">
          <Description>
            The background of the step indicator when hovered.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.pending.indicator.hover.border">
          <Description>
            The border color of the step indicator when hovered.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text-strong"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.pending.indicator.substep.iconSize">
          <Description>
            The icon size used within a sub-step's indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.pending.label.color">
          <Description>The color of the step title.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default StepperPage;

export const StepperItem = ({ name, path }) => {
  const [currentStep, setCurrentStep] = useState('profile');
  const steps = [
    { id: 'account', title: 'User', status: 'completed' },
    { id: 'info', title: 'Info', status: 'pending' },
    { id: 'done', title: 'Done', status: 'pending' },
  ];

  return (
    <Item name={name} path={path} center>
      <Box pad="small" align="center" justify="center">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          direction="horizontal"
          onStepClick={(id) => setCurrentStep(id)}
        />
      </Box>
    </Item>
  );
};

StepperItem.propTypes = Item.propTypes;
