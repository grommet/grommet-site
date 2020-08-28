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
import { doc } from 'grommet/components/Form/doc';

import RoutedAnchor from '../components/RoutedAnchor';
import Page from '../components/Page';
import Doc from '../components/Doc';
import { Code } from '../components/Doc/Code';
import Item from './Components/Item';
import { genericSyntaxes } from '../utils/props';

const desc = doc(Form).toJSON();
delete desc.availableAt;
delete desc.description;

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
      <FormField name="name" htmlfor="text-input-id" label="Name">
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
      <FormField name="name" htmlfor="textinput-id" label="Name">
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

export default () => (
  <Page>
    <Doc
      name="Form"
      align="stretch"
      desc={desc}
      text=""
      examples={<Examples />}
      syntaxes={{
        ...genericSyntaxes,
        errors: [
          {
            name: 'string',
          },
          {
            name: 'node',
          },
        ],
        infos: [
          {
            name: 'string',
          },
          {
            name: 'node',
          },
        ],
        onChange: '(value) => {}',
        onReset: '() => {}',
        onSubmit: '({ value, touched }) => {}',
        value: [
          {
            name: 'value',
          },
        ],
      }}
    />
  </Page>
);

export const FormItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Form>
      <FormField name="name" label="Name" />
      <Button type="submit" primary label="Submit" />
    </Form>
  </Item>
);

FormItem.propTypes = Item.propTypes;
