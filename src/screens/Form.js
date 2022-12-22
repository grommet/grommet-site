import React from 'react';
import {
  Anchor,
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Paragraph,
} from 'grommet';
import RoutedAnchor from '../components/RoutedAnchor';
import Page from '../components/Page';
import { Code } from '../components/Doc/Code';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';

const Examples = () => (
  <Box>
    <Paragraph size="xlarge">
      Form manages the collective state of its{' '}
      <RoutedAnchor path="/formfield" label="FormFields" />. There are two
      primary ways of managing Form state, each of which is outline below.
    </Paragraph>
    <Heading level={2}>controlled</Heading>
    <Paragraph size="large">
      A controlled Form is similar to a controlled input element in React. The
      value state is held by the caller and connected to the Form via{' '}
      <code>value</code> and <code>onChange</code>.
    </Paragraph>
    <Anchor href="https://storybook.grommet.io/?path=/story/form--controlled">
      storybook
    </Anchor>
    <Code
      basis={['1/3', '2/3']}
      code={`() => {
  const [value, setValue] = React.useState({});
  return (
    <Form
      value={value}
      onChange={nextValue => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => {}}
    >
      <FormField name="name" htmlFor="text-input-id" label="Name">
        <TextInput id="text-input-id" name="name" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
}`}
      name="Form controlled"
    />

    <Heading level={2}>uncontrolled</Heading>
    <Paragraph size="large">
      An uncontrolled Form is similar to an uncontrolled input element in React.
      The value state is held by the Form.
    </Paragraph>
    <Anchor href="https://storybook.grommet.io/?path=/story/form--uncontrolled">
      storybook
    </Anchor>
    <Code
      basis={['1/3', '2/3']}
      code={`() => {
  return (
    <Form onSubmit={({ value }) => {}}>
      <FormField name="name" htmlFor="textinput-id" label="Name">
        <TextInput id="textinput-id" name="name" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
}`}
      name="Form uncontrolled"
    />
  </Box>
);

const FormPage = () => (
  <Page>
    <ComponentDoc
      name="Form"
      intrinsicElement="form"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Input-Form&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/from&module=%2Fsrc%2FForm.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Form',
          label: 'Github',
        },
      ]}
    >
      <Examples />
      <Properties>
        <Property name="errors">
          <Description>
            An object representing any errors in the data.
          </Description>
          <PropertyValue type="object">
            <Description>
              Their keys should match the keys in the value object.
            </Description>
            <Example>{`{ name: "string" }`}</Example>
            <Example>{`{ name: "node" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="infos">
          <Description>
            An object representing any information details in the data.
          </Description>
          <PropertyValue type="object">
            <Description>
              Their keys should match the keys in the value object.
            </Description>
            <Example>{`{ name: "string" }`}</Example>
            <Example>{`{ name: "node" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="kind">
          <Description>
            A string that can be passsed to Form to indicate if a user wants
            seperate styling for formfield label in which `formField.kind.label`
            can be used.
          </Description>
          <PropertyValue type="string">
            <Example>"survey"</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>Custom validation messages.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ invalid: "invalid", required: "required" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when any fields are updated.
          </Description>
          <PropertyValue type="function">
            <Description>
              The fields must have a non-null 'name' property assigned.
            </Description>
            <Example>{`(value) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSubmit">
          <Description>
            Function that will be called when the form is submitted.
          </Description>
          <PropertyValue type="function">
            <Description>
              The single argument is an event containing the latest value object
              via 'event.value' and an object indicating which fields were
              touched via 'event.touched'.
            </Description>
            <Example>{`({ value, touched }) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onReset">
          <Description>
            Function that will be called when the form is reset.
          </Description>
          <PropertyValue type="function">
            <Description>
              The single argument is the event provided by react.
            </Description>
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onValidate">
          <Description>
            Function that will be called when the form is validated.
          </Description>
          <PropertyValue type="function">
            <Description>
              The single argument is an event containing the latest error object
              via 'validationResults.errors', info object via
              'validationResults.infos' and form's validity via 'valid'.
            </Description>
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="validate">
          <Description>When to perform validation</Description>
          <PropertyValue type="string">
            <Example>"blur"</Example>
            <Example defaultValue>"submit"</Example>
            <Example>"change"</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>
            An object representing all of the data in the form.
          </Description>
          <PropertyValue type="object">
            <Example> {`{ name: "value" }`} </Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default FormPage;

export const FormItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Form>
      <FormField name="name" label="Name" />
      <Button type="submit" primary label="Submit" />
    </Form>
  </Item>
);

FormItem.propTypes = Item.propTypes;
