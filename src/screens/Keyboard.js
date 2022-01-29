import React from 'react';
import { Box } from 'grommet';
import { Add } from 'grommet-icons';
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

const KeyboardPage = () => (
  <Page>
    <ComponentDoc
      name="Keyboard"
      description="A handler of keyboard key presses"
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Keyboard',
          label: 'Github',
        },
      ]}
      code={`<Keyboard onEsc={() => {}}>
  <Box pad="large" background="light-4" />
</Keyboard>`}
    >
      <Properties>
        <Property name="target">
          <Description>Where to listen for the keyboard presses.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"component"</Example>
            <Example>"document"</Example>
          </PropertyValue>
        </Property>

        <Property name="onBackspace">
          <Description>
            Function that will be called when the user presses the backspace
            key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onComma">
          <Description>
            Function that will be called when the user presses the comma key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onDown">
          <Description>
            Function that will be called when the user presses the down key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onEnter">
          <Description>
            Function that will be called when the user presses the enter key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onEsc">
          <Description>
            Function that will be called when the user presses the esc key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onKeyDown">
          <Description>
            Function that will be called when the user presses any key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onLeft">
          <Description>
            Function that will be called when the user presses the left key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onRight">
          <Description>
            Function that will be called when the user presses the right key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onShift">
          <Description>
            Function that will be called when the user presses the shift key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSpace">
          <Description>
            Function that will be called when the user presses the space key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onTab">
          <Description>
            Function that will be called when the user presses the tab key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onUp">
          <Description>
            Function that will be called when the user presses the up key.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default KeyboardPage;

export const KeyboardItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box direction="row" align="center" gap="small">
      <Key label=" &#8984; " />
      <Add color="brand" />
      <Key label="Z" />
    </Box>
  </Item>
);

KeyboardItem.propTypes = Item.propTypes;
