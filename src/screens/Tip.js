import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericBool } from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="Tip"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Controls-Tip&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/tip&module=%2Fsrc%2FTip.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="Tooltip or a hint when hovering over an element"
      code={`<Grommet theme={grommet}>
  <Box pad="medium">
    <Tip content="tooltip">
      <Button label="hover me" />
    </Tip>
  </Box>
</Grommet>`}
    >
      <Properties>
        <Property name="content">
          <Description>The tooltip content inside the drop.</Description>
          <PropertyValue type="node">
            <Example>"Additional info"</Example>
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dropProps">
          <Description>
            Any valid Drop prop to style the Tip drop container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ trapFocus: "false" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>
            Whether content should have default styling from tip.content.
          </Description>
          <GenericBool />
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="tip.content">
          <Description>
            Any valid Box property for the Tip container. Not applicable when
            using Tip plain prop.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ 
  background: "background-contrast", 
  elevation: "small", 
  margin: "xsmall", 
  pad: { vertical: "xsmall", horizontal: "small" }, 
  round: "small"
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tip.drop">
          <Description>Any valid Drop property for the Tip.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  align: { top: "bottom" }, 
  background: "none",
  elevation: "none",
  margin: "none"
}`}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const TipItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box
      border={{ color: 'brand', size: 'medium' }}
      round="medium"
      margin="small"
      pad={{ horizontal: 'large', vertical: 'small' }}
    />
    <Box
      round="medium"
      elevation="large"
      pad={{ horizontal: 'large', vertical: 'small' }}
    />
  </Item>
);

TipItem.propTypes = Item.propTypes;
