import React from 'react';
import { Image } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBool,
  GenericGridArea,
  GenericMargin,
  GenericFill,
} from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';

export default () => (
  <Page>
    <ComponentDoc
      name="Image"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Media-Image&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/image&module=%2Fsrc%2FImage.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="An image"
      intrinsicElement="img"
      code={`<Box height="small" width="small">
  <Image
    fit="cover"
    src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
  />
</Box>`}
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

        <Property name="fill">
          <Description>
            Whether the width and/or height should fill the container.
          </Description>
          <GenericFill />
        </Property>

        <Property name="fit">
          <Description>How the image fills its container.</Description>
          <PropertyValue type="string">
            <Example>"cover"</Example>
            <Example>"contain"</Example>
          </PropertyValue>
        </Property>

        <Property name="fallback">
          <Description>
            Specifies the URL of the fallback image used when src is failing to
            load
          </Description>
          <PropertyValue type="string">
            <Example>"https://image-url"</Example>
          </PropertyValue>
        </Property>

        <Property name="opacity">
          <Description>Transparency of the image.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"weak"</Example>
            <Example>"medium"</Example>
            <Example>"strong"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.opacity.medium">
          <Description>The value used when opacity is set to true.</Description>
          <PropertyValue type="number">
            <Example defaultValue>0.4</Example>
          </PropertyValue>
        </Property>

        <Property name="image.extend">
          <Description>Any additional style for the Image.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const ImageItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Image
      src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
      fit="cover"
      alt="Ricky from Wilderpeople looking out from behind brow leaves in a forests"
    />
  </Item>
);

ImageItem.propTypes = Item.propTypes;
