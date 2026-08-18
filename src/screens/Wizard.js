import React from 'react';
import { Box } from 'grommet';
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

const WizardPage = () => (
  <Page>
    <ComponentDoc
      name="Wizard"
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Wizard',
          label: 'GitHub',
        },
      ]}
      description="a multi-step form component"
      beta
      code={`<Wizard
  aria-label="Onboarding"
  title="Set up your account"
  steps={[
    {
      id: 'account',
      title: 'Account',
      description: 'Tell us about your account.',
      render: (step, api) => (
        <Box gap="small">
          <Paragraph>Enter an email to continue.</Paragraph>
          <TextInput
            placeholder="you@example.com"
            value={api.formValue.email || ''}
            onChange={(event) =>
              api.setFormValue({ ...api.formValue, email: event.target.value })
            }
          />
        </Box>
      ),
    },
    {
      id: 'profile',
      title: 'Profile',
      description: 'Fill in your profile details.',
      render: () => (
        <Paragraph>Placeholder profile form for the second step.</Paragraph>
      ),
    },
    {
      id: 'review',
      title: 'Review',
      description: 'Review and finish.',
      render: (step, api) => (
        <Paragraph>
          Ready to submit for {api.formValue.email || 'unknown user'}.
        </Paragraph>
      ),
    },
  ]}
/>`}
    >
      <Properties>
        <Property name="aria-label">
          <Description>
            Accessibility label for the wizard component.
          </Description>
          <PropertyValue type="string">
            <Example>"Onboarding"</Example>
          </PropertyValue>
        </Property>

        <Property name="children">
          <Description>
            Additional content to render inside the wizard.
          </Description>
          <PropertyValue type="node | element">
            <Example>{`<Text>Additional wizard content</Text>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="currentStep">
          <Description>The id of the currently active step.</Description>
          <PropertyValue type="string">
            <Example>"profile"</Example>
          </PropertyValue>
        </Property>

        <Property name="defaultStep">
          <Description>
            The id of the initial step to display when the wizard loads.
          </Description>
          <PropertyValue type="string">
            <Example>"account"</Example>
          </PropertyValue>
        </Property>

        <Property name="defaultValue">
          <Description>
            Initial form values for all steps in the wizard. This is of type
            TValue which defaults to Record&lt;string, any&gt;.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ email: '', name: '' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="footer">
          <Description>
            Custom footer content to display below the step content.
          </Description>
          <PropertyValue type="node | element">
            <Example>{`<Box gap="small" direction="row"><Button label="Back" /><Button label="Next" /></Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>Unique identifier for the wizard instance.</Description>
          <PropertyValue type="string">
            <Example>"signup-wizard"</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for wizard labels and buttons.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
  previous: "Previous",
  next: "Next",
  skip: "Skip",
  cancel: "Cancel",
  close: "Close",
  complete: "Complete",
  stepHeader: {
    counter: "Step {step} of {total}"
  },
  progress: "Wizard progress",
  validationError: "Please complete required fields."
}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onCancel">
          <Description>
            Callback function triggered when the wizard is cancelled. Receives
            an event object containing the current form value and the reason for
            cancellation.
          </Description>
          <PropertyValue type="function">
            <Example>{`(event: { value: { name: "Alice", active: true }, reason: 'user' }) => handleCancel(event.value)`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Callback function triggered when form values change in any step.
            Receives an event object containing the updated form value.
          </Description>
          <PropertyValue type="function">
            <Example>{`(event: { value: { name: "Alice", active: true } }) => setFormData(event.value)`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onComplete">
          <Description>
            Callback function triggered when the wizard is completed
            successfully. Receives an event object containing the final form
            value and an array of completed step IDs.
          </Description>
          <PropertyValue type="function">
            <Example>{`(event: { value: { name: "Alice", active: true }, completedSteps: string[] }) => submitForm(event.value)`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onStepChange">
          <Description>
            Callback function triggered when the active step changes. Receives a
            StepChangeEvent object with step change details.
          </Description>
          <PropertyValue type="function">
            <Example>{`(event: StepChangeEvent) => console.log('Step changed:', event.stepId)`}</Example>
          </PropertyValue>
        </Property>

        <Property name="renderStep">
          <Description>
            Custom function to render step content instead of using the step's
            render property. Receives the current step and the wizard context
            API.
          </Description>
          <PropertyValue type="function">
            <Example>{`(step: WizardStep, api: WizardContextValue) => <Box>{step.title}</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="scrollToTop">
          <Description>
            Whether to scroll to the top of the page when the step changes.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example>false</Example>
          </PropertyValue>
        </Property>

        <Property name="showProgress">
          <Description>
            Display style for the progress indicator showing the wizard steps.
          </Description>
          <PropertyValue type="string">
            <Example>'horizontal'</Example>
            <Example>'vertical'</Example>
          </PropertyValue>
        </Property>

        <Property name="steps">
          <Description>
            Array of WizardStep objects defining each step in the wizard. Each
            step includes id, title, description, and render function.
          </Description>
          <PropertyValue type="array">
            <Example>{`[{ id: 'account', title: 'Account', description: 'Account info', render: () => null }]`}</Example>
          </PropertyValue>
        </Property>

        <Property name="title">
          <Description>
            The main title displayed at the top of the wizard.
          </Description>
          <PropertyValue type="string">
            <Example>"Set up your account"</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>
            Current form values for the wizard. Use this to control the wizard's
            form state.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ email: 'user@example.com', name: 'John Doe' }`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="wizard.container.gap">
          <Description>The gap between wizard container sections.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"none"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.container.background">
          <Description>
            The background color of the wizard container.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"background-back"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.body.pad">
          <Description>The padding for the wizard body area.</Description>
          <PropertyValue type="string">
            <Example>"large"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "large", vertical: "large" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.body.gap">
          <Description>
            The gap between elements in the wizard body.
          </Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ row: "none", column: "medium" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.header.pad">
          <Description>The padding for the wizard header.</Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "large", vertical: "small" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.header.background">
          <Description>The background color of the wizard header.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.header.title.size">
          <Description>The font size of the wizard title.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.header.close.icon">
          <Description>The icon to use for the close button.</Description>
          <PropertyValue type="element">
            <Example>FormClose</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.progress.horizontal.pad">
          <Description>
            The padding for the horizontal progress indicator.
          </Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "none", vertical: "none" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.progress.vertical.width">
          <Description>
            The width of the vertical progress indicator.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.progress.vertical.pad">
          <Description>
            The padding for the vertical progress indicator.
          </Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>undefined</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.pad">
          <Description>The padding for the step header.</Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "none", vertical: "none" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.gap">
          <Description>The gap between step header elements.</Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.counter.size">
          <Description>The font size of the step counter.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.counter.color">
          <Description>The color of the step counter text.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"text"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.title.size">
          <Description>The font size of the step title.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"large"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.title.margin">
          <Description>The margin for the step title.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"none"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ top: "small", bottom: "small" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.description.size">
          <Description>The font size of the step description.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.description.color">
          <Description>The color of the step description text.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"text-weak"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.stepHeader.description.margin">
          <Description>The margin for the step description.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ top: "xsmall", bottom: "none" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.content.pad">
          <Description>The padding for the step content area.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ vertical: "large", horizontal: "large" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.content.gap">
          <Description>
            The gap between elements in the step content.
          </Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.content.background">
          <Description>
            The background color of the step content area.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.content.round">
          <Description>The border radius for the step content.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.content.margin">
          <Description>The margin for the step content area.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>{`{ top: "medium" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.background">
          <Description>The background color of the wizard footer.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.border">
          <Description>The border style for the wizard footer.</Description>
          <PropertyValue type="string">
            <Example>"top"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`{
  side: "top" | "bottom" | "left" | "right",
  color: "...",
  size: "..."
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.gap">
          <Description>The gap between footer elements.</Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ row: "xsmall", column: "small" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.pad">
          <Description>The padding for the wizard footer.</Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "large", vertical: "small" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.justify">
          <Description>How to justify footer button content.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"end"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.button.next.icon">
          <Description>The icon for the next button.</Description>
          <PropertyValue type="element">
            <Example defaultValue>"FormNext"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.button.previous.icon">
          <Description>The icon for the previous button.</Description>
          <PropertyValue type="element">
            <Example defaultValue>"FormPrevious"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.button.complete.icon">
          <Description>The icon for the complete button.</Description>
          <PropertyValue type="element">
            <Example defaultValue>undefined</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.button.skip.icon">
          <Description>The icon for the skip button.</Description>
          <PropertyValue type="element">
            <Example defaultValue>"FormNext"</Example>
          </PropertyValue>
        </Property>

        <Property name="wizard.footer.button.cancel.icon">
          <Description>The icon for the cancel button.</Description>
          <PropertyValue type="element">
            <Example defaultValue>undefined</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default WizardPage;

export const WizardItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box width="100%" gap="medium">
      <Box direction="row" gap="small" align="center" justify="center">
        <Box
          width="20px"
          height="20px"
          background="brand"
          round="full"
          flex={false}
        />
        <Box flex height="2px" background="border" />
        <Box
          width="20px"
          height="20px"
          background="light-3"
          round="full"
          flex={false}
        />
        <Box flex height="2px" background="border" />
        <Box
          width="20px"
          height="20px"
          background="light-3"
          round="full"
          flex={false}
        />
      </Box>
      <Box pad="medium" background="background-front" round="small">
        <Box height="12px" background="light-3" round="small" />
        <Box
          height="12px"
          background="light-3"
          round="small"
          margin={{ top: 'small' }}
          width="80%"
        />
      </Box>
    </Box>
  </Item>
);

WizardItem.propTypes = Item.propTypes;
