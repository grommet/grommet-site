import React from 'react';
import { Box, Distribution } from 'grommet';
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
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';

const DistributionPage = () => (
  <Page>
    <ComponentDoc
      name="Distribution"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Visualizations-Distribution',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/distribution&module=%2Fsrc%2FDistribution.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Distribution',
          label: 'Github',
        },
      ]}
      description="Proportionally sized grid of boxes"
      intrinsicElement="div"
      code={`<Distribution
  values={[
    { value: 50, color: 'light-3' },
    { value: 30, color: 'brand' },
    { value: 20, color: 'graph-0' },
    { value: 10, color: 'light-3' },
    { value: 5, color: 'brand' },
  ]}
>
  {value => (
    <Box pad="small" background={value.color} fill>
      <Text size="large">{value.value}</Text>
    </Box>
  )}
</Distribution>`}
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

        <Property name="basis">
          <Description>
            A fixed or relative size along its container's main axis.
          </Description>
          <PropertyValue type="string">
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"xxlarge"</Example>
            <Example>"full"</Example>
            <Example>"1/2"</Example>
            <Example>"1/3"</Example>
            <Example>"2/3"</Example>
            <Example>"1/4"</Example>
            <Example>"2/4"</Example>
            <Example>"3/4"</Example>
            <Example>"auto"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="children">
          <Description>
            Function that will be called when each value is rendered.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ value: 60 }) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="fill">
          <Description>
            Whether the distribution expands to fill all of the available width
            and height.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="gap">
          <Description>
            The amount of spacing between child elements.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <Example>"xxsmall"</Example>
            <Example defaultValue>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="values">
          <Description>Array of objects containing a value.</Description>
          <PropertyValue type="array">
            <Description>
              The array should already be sorted from largest to smallest value.
              The caller can put other properties in the object. The children
              function will be called to render the contents of each value.
            </Description>
            <Example>{`[{ value: 60 }, { value: 40 }]`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DistributionPage;

export const DistributionItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="medium">
    <Box fill>
      <Distribution
        values={[
          { value: 70, opacity: 'medium' },
          { value: 50, opacity: 'medium' },
          { value: 30 },
          { value: 10, opacity: 'medium' },
        ]}
      >
        {({ opacity }) => (
          <Box
            pad="small"
            background={{ color: 'brand', opacity }}
            fill
            round="xsmall"
          />
        )}
      </Distribution>
    </Box>
  </Item>
);

DistributionItem.propTypes = Item.propTypes;
