import React from 'react';
import { Skeleton, Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBool,
  GenericGridArea,
  GenericMargin,
  GenericPad,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Property,
  PropertyValue,
  Example,
  Description,
  Properties,
  PropOptions,
  ThemeDoc,
} from '../components/Doc';

const SkeletonPage = () => (
  <Page>
    <ComponentDoc
      name="Skeleton"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Visualizations-Skeleton',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Skeleton',
          label: 'Github',
        },
      ]}
      description="A simple building block skeleton component to represent content that
      is still loading"
      code='<Skeleton width="medium" height="xxsmall" round="xsmall" />'
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

        <Property name="colors">
          <Description>
            The background colors to use for the Skeleton. The background for
            the Skeleton will be one of these colors, based on the depth of the
            Skeleton within other skeletonized parents. It will use the 'dark'
            set of colors when in a 'dark' theme and the 'light' set of colors
            when within a light theme.
          </Description>
          <PropertyValue type="object">
            <Example>{`colors={{
  dark: ['background', 'background-front'],
  light: ['background', 'background-back']
}}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="height">
          <Description>A fixed height.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"xxlarge"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ min: "...", max: "..." }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pad">
          <Description>
            The amount of padding around the Skeleton contents.
          </Description>
          <GenericPad />
        </Property>

        <Property name="round">
          <Description>How much to round the corners.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="width">
          <Description>A fixed width.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"xxlarge"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ min: "...", max: "..." }`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
      <ThemeDoc>
        <Property name="skeleton.extend">
          <Description>Any additional style for the Skeleton.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default SkeletonPage;

export const SkeletonItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box fill align="center" justify="center">
      <Skeleton background="brand" width="small" height="xxsmall" />
    </Box>
  </Item>
);

SkeletonItem.propTypes = Item.propTypes;
