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
            Optional compositional step structure using the exported StepperStep
            component. Each StepperStep uses a stepId from the steps array; nest
            StepperStep elements to represent sub-steps. If omitted, Stepper
            renders the steps array automatically.
          </Description>
          <PropertyValue type="node">
            <Example>
              {`<Stepper
  steps={[
    { id: 'account', title: 'Account', children: [
      { id: 'email', title: 'Email' },
    ] },
    { id: 'review', title: 'Review' },
  ]}
  currentStep="email"
>
  <StepperStep stepId="account">
    <StepperStep stepId="email" />
  </StepperStep>
  <StepperStep stepId="review" />
</Stepper>`}
            </Example>
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

        <Property name="errorAnnouncement">
          <Description>
            Controls how error messages are announced to assistive technologies.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"assertive"</Example>
            <Example>"polite"</Example>
          </PropertyValue>
          <PropertyValue type="boolean">
            <Description>
              Set to false to disable error announcements.
            </Description>
            <Example>false</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="stepper.container">
          <Description>
            Box-part styling for the Stepper list. Supports background, border,
            elevation, height, margin, pad, round, and width, plus a row/column
            gap for spacing steps.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  background: 'background-back',
  gap: { row: 'medium', column: 'small' },
  pad: 'small',
  round: 'small',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.button">
          <Description>
            Box-part styling for each step's interactive area. Supports the
            Box-part properties background, border, elevation, height, margin,
            pad, round, and width, plus gap.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ gap: 'small', pad: 'xsmall' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.indicator">
          <Description>
            Box-part styling for the step indicator. Supports background,
            border, elevation, height, margin, pad, round, and width. Additional
            indicator settings include icon, iconSize, size, color, align, and
            justify. The default iconSize is "medium"; sub-step and status
            settings can override it.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  background: 'background-front',
  border: { size: 'small' },
  size: 'medium',
  iconSize: 'medium',
  round: 'full',
  align: 'center',
  justify: 'center',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.label">
          <Description>
            Text styling for the step title. Supports color, size, and weight;
            state and sub-step label settings can override these values.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ color: 'text', size: 'medium', weight: 600 }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.description">
          <Description>
            Text styling for a step description. Supports color, size, and
            weight.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ color: 'text-weak', size: 'small' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.errorText">
          <Description>
            Text styling for a step's error message. Supports color, size, and
            weight. The error status may also override this with
            stepper.error.errorText.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{ color: 'status-critical', size: 'xsmall', weight: 600 }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.disabledReason">
          <Description>
            Text styling for a disabled step's reason. Supports color, size, and
            weight. A disabled-state override can be provided with
            stepper.disabled.disabledReason.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ color: 'text-weak', size: 'xsmall' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.connector">
          <Description>
            Styling for the line connecting steps. Supports color, thickness,
            and gap. The gap is the distance from the connector to the indicator
            and defaults to 4px.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{ color: 'border', thickness: 'small', gap: '4px' }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.children">
          <Description>
            Box-part styling for the list of nested sub-steps. Supports
            background, border, elevation, height, margin, pad, round, and
            width, plus gap.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ gap: 'small', pad: { left: 'medium' } }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.subStep">
          <Description>
            Step-part overrides for sub-steps. Supports the same indicator,
            button, label, description, errorText, disabledReason, connector,
            and hover settings as stepper, but does not support children.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{ indicator: { size: 'small', iconSize: 'small' }, label: { size: 'small' } }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.vertical">
          <Description>
            Step-part overrides used when the Stepper is vertical. Supports the
            same indicator, button, label, description, errorText,
            disabledReason, connector, and hover settings.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ button: { gap: 'small' }, connector: { gap: '4px' } }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.[status]">
          <Description>
            State-specific step-part styles. Supported statuses are pending,
            current, currentCompleted, completed, error, currentError, and
            disabled. A current step uses currentCompleted when completed,
            currentError when in error, and current otherwise; disabled takes
            precedence. A parent of the current sub-step is also treated as
            current. Theme settings are merged in order: base, vertical,
            subStep, then the effective status, with later settings taking
            precedence. Each status supports indicator, button, label,
            description, errorText, disabledReason, connector, and hover parts.
            Hover styles apply to the indicator and label of clickable steps.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  indicator: { background: 'brand', border: { color: 'brand' } },
  label: { color: 'brand' },
  hover: { indicator: { background: 'background-hover' } },
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.hover">
          <Description>
            Default hover overrides for step parts. State-specific hover
            settings such as stepper.current.hover take precedence for that
            status.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{ indicator: { background: 'background-hover' }, label: { color: 'brand' } }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.connector.thickness">
          <Description>The thickness of the line connecting steps.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
            <Example>"2px"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.connector.gap">
          <Description>
            The distance between a connector and the step indicator. Use a
            spacing token or CSS size string; the default is 4px.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
            <Example>"small"</Example>
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

        <Property name="stepper.errorText.color">
          <Description>The color of a step's error message.</Description>
          <GenericColor />
        </Property>

        <Property name="stepper.errorText.size">
          <Description>The text size of a step's error message.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"xsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.disabledReason.color">
          <Description>The color of a disabled step's reason text.</Description>
          <GenericColor />
        </Property>

        <Property name="stepper.disabledReason.size">
          <Description>
            The text size of a disabled step's reason text.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"xsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.subStep.indicator.size">
          <Description>The size of a sub-step's indicator.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.subStep.indicator.iconSize">
          <Description>
            The icon size within a sub-step's indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="stepper.indicator.border.size">
          <Description>The border size of the step indicator.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
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

        <Property name="stepper.subStep.label.size">
          <Description>The text size of a sub-step's title.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
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
      <Box width="100%" pad="small" align="center" justify="center">
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
