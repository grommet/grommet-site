import React from 'react';
import { Box, Button } from 'grommet';
import { FormDown } from 'grommet-icons';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericGridArea,
  GenericMargin,
  GenericBoolFalse,
} from '../utils/genericPropExamples';

export default () => (
  <Page>
    <ComponentDoc
      name="DropButton"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Controls-DropButton&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/dropbutton&module=%2Fsrc%2FDropButton.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A Button that controls a Drop"
      intrinsicElement="button"
      code={`<DropButton
  label="Fancy Selector"
  dropAlign={{ top: 'bottom', right: 'right' }}
  dropContent={
    <Box pad="large" background="light-2" />
  }
/>`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>
            Custom label to be used by screen readers. When provided, an
            aria-label will be added to the element.
          </Description>
          <GenericA11yTitle />
        </Property>

        <Property name="alignSelf">
          <Description>
            How to align along the cross axis when contained in a Box or along
            the column axis when contained in a Grid.
          </Description>
          <GenericAlignSelf />
        </Property>

        <Property name="gridArea">
          <Description>
            The name of the area to place this inside a parent Grid.
          </Description>
          <GenericGridArea />
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the component.</Description>
          <GenericMargin />
        </Property>

        <Property name="disabled">
          <Description>Whether the button should be disabled.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="dropAlign">
          <Description>
            How to align the drop with respect to the button.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  top: "top" | "bottom",
  bottom: "top" | "bottom",
  right: "left" | "right",
  left: "left" | "right"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dropContent">
          <Description>Content to put inside the Drop.</Description>
          <PropertyValue type="element">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dropTarget">
          <Description>
            Target where the drop will be aligned to. This should be a React
            reference. Typically, this is not required as the drop will be
            aligned to the DropButton itself by default.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dropProps">
          <Description>Any valid Drop prop.</Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onClose">
          <Description>Callback for when the drop is closed</Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onOpen">
          <Description>Callback for when the drop is opened</Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="open">
          <Description>
            Whether the drop should be open or not. Setting this property does
            not influence user interaction after it has been rendered.
          </Description>
          <GenericBoolFalse />
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export const DropButtonItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box flex={false}>
      <Button
        label="i'm a button"
        icon={<FormDown />}
        reverse
        onClick={() => {}}
      />
      <Box
        elevation="medium"
        pad={{ horizontal: 'xlarge', vertical: 'large' }}
      />
    </Box>
  </Item>
);

DropButtonItem.propTypes = Item.propTypes;
