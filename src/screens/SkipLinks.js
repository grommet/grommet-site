import React from 'react';
import {
  Box,
  Button,
  SkipLinkTarget,
  SkipLink,
  SkipLinks,
  Heading,
} from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import Key from './Components/Key';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="SkipLinks"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Utilities-SkipLinks&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/skiplink&module=%2Fsrc%2FSkipLink.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="Describe a list of elements to skip to"
    >
      <Box pad={{ horizontal: 'large', bottom: 'medium' }} align="start">
        <Heading level={2} margin={{ top: 'none' }}>
          <strong>Examples</strong>
        </Heading>
        <SkipLinks>
          <SkipLink id="main" label="Main Content" />
          <SkipLink id="footer" label="Footer" />
        </SkipLinks>
        <Button onClick={() => {}} label="Test1" />
        <Box>
          <SkipLinkTarget id="main" />
          <Heading level={3}>Main Content</Heading>
          <Button onClick={() => {}} label="Test2" />
        </Box>
        <Box tag="footer">
          <SkipLinkTarget id="footer" />
          <Heading level={3}>Footer</Heading>
          <Button onClick={() => {}} label="Test3" />
        </Box>
      </Box>
      <Properties>
        <Property name="children">
          <Description>Array of SkipLink.</Description>
          <PropertyValue type="node">
            <Example>
              {`
<SkipLink id="main" label="Main Content" />
<SkipLink id="footer" label="Footer" />
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for SkipLinks. Used for accessibility by screen
            readers.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ skipTo: "string" }`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export const SkipLinksItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Key label="Tab" />
  </Item>
);

SkipLinksItem.propTypes = Item.propTypes;
