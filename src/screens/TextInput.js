import React from 'react';

import { Box, Heading, TextInput, Paragraph, Anchor } from 'grommet';
import { doc, themeDoc } from 'grommet/components/TextInput/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(TextInput).toJSON();

export default () => (
  <Page>
    <Doc
      name="TextInput"
      desc={desc}
      code={`function Example() {
  const [value, setValue] = React.useState('');
  return (
    <TextInput
      placeholder="type here"
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
}`}
      themeDoc={themeDoc}
    >
      <Box
        direction="column"
        border={{ side: 'bottom' }}
        pad={{ bottom: 'large' }}
        margin={{ bottom: 'medium' }}
      >
        <Heading level={2} margin={{ bottom: 'none' }}>
          <strong>React/DOM Properties</strong>
        </Heading>

        <Box width="100%">
          <Paragraph fill="true">
            At its core, the TextInput component is a regular input tag. Thus,
            the attributes and event handlers that come with the input tag are
            accessible when using TextInput. To read more on the input
            attributes, you can check out the MDN Web Docs{' '}
            <Anchor
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
              label="here"
              target="_blank"
            />
            . For custom events that are inherited from React, you can read more{' '}
            <Anchor
              href="https://reactjs.org/docs/forms.html"
              label="here"
              target="_blank"
            />
            .
          </Paragraph>
        </Box>
      </Box>

      <Box basis="large" pad={{ horizontal: 'large', bottom: 'xlarge' }}>
        <Heading level={2} margin={{ top: 'none' }}>
          <strong>Examples</strong>
        </Heading>
        <Box margin="small">
          <TextInput placeholder="search" type="search" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="password" type="password" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="email" type="email" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="tel" type="tel" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="url" type="url" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="number" type="number" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="date" type="date" />
        </Box>
        <Box margin="small">
          <TextInput placeholder="time" type="time" />
        </Box>
      </Box>
    </Doc>
  </Page>
);

export const TextInputItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'xlarge' }}>
    <TextInput placeholder="Placeholder" disabled />
  </Item>
);

TextInputItem.propTypes = Item.propTypes;
