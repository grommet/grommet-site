import React, { Component } from 'react';

import {
  Box, Button, CheckBox, Heading, Select, Text, TextInput,
} from 'grommet';

import Doc from '../components/Doc';

const Field = ({ children, error, label, help }) => {
  let header;
  if (label || help || error) {
    header = (
      <Box
        direction='row'
        justify='between'
        pad={{ horizontal: 'small', top: 'xsmall' }}
      >
        <Text>{label}</Text>
        <Text color={error ? 'status-critical' : 'dark-5'}>{error || help}</Text>
      </Box>
    );
  }
  return (
    <Box
      direction='column'
      border={{ color: 'light-2', side: 'bottom', size: 'small' }}
      margin={{ vertical: 'xsmall' }}
    >
      {header}
      {children}
    </Box>
  );
};

export default class Form extends Component {
  state = {
    size: '',
  }
  render() {
    const { size } = this.state;
    return (
      <Doc
        name='Form'
        text={`Currently, Grommet 2.0 does not provide Form or FormField components.
          Instead, we have a reference on how to build a form
          using the basic Box, Text, and control components.`}
      >
        <Box direction='row' justify='center'>
          <Box basis='medium' margin='large'>
            <form onSubmit={() => {}}>
              <Box>
                <Heading level={2}>Add user</Heading>
                <Text margin={{ bottom: 'small' }}>
                  All fields are required and your email must be unique.
                </Text>
                <Field label='Name' help='Full name preferred'>
                  <TextInput plain={true} />
                </Field>
                <Field label='Email' error='not unique'>
                  <TextInput type='email' plain={true} />
                </Field>
                <Field label='T-shirt Size'>
                  <Select
                    a11yTitle='Open Size Select'
                    placeholder='Select Size'
                    options={['small', 'medium', 'large', 'xlarge', 'xxlarge']}
                    value={size}
                    onChange={({ option }) => this.setState({ size: option })}
                    plain={true}
                  />
                </Field>
                <Field>
                  <Box pad='small'>
                    <CheckBox label='I confirm I provided the truth nothing but the truth' />
                  </Box>
                </Field>
                <Box margin={{ top: 'large' }}>
                  <Button primary={true} type='submit' label='Submit' />
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Doc>
    );
  }
}
