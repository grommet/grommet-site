import React from 'react';

import { Box } from 'grommet';
import { Next, Previous } from 'grommet-icons';

import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBoolTrue,
  GenericGridArea,
  GenericMargin,
  GenericBool,
} from '../utils/genericPropExamples';
import { GenericColor } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { EdgeStyle } from '../utils/themeDocUtils';

export default () => (
  <Page>
    <ComponentDoc
      name="Carousel"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Media-Carousel&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/carousel&module=%2Fsrc%2FCarousel.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url:
            'https://github.com/grommet/grommet/tree/master/src/js/components/Carousel',
          label: 'Github',
        },
      ]}
      description="A carousel that cycles through children"
      intrinsicElement="div"
      code={`<Box height="small" width="medium" overflow="hidden">
  <Carousel fill>
    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
  </Carousel>
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

        <Property name="activeChild">
          <Description>
            If specified, Carousel will be a controlled component. This means
            that future slide changes will not work unless you subscribe to
            onChild function and update activeChild accordingly.
          </Description>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
        </Property>

        <Property name="fill">
          <Description>
            Whether to expand to fill all of the available width and height in
            the parent container.
          </Description>
          <GenericBool />
        </Property>

        <Property name="play">
          <Description>
            If specified, the number of milliseconds between automatically
            transitioning to the next child. It will loop through all children
            indefinitely.
          </Description>
          <PropertyValue type="number">
            <Example>1500</Example>
          </PropertyValue>
        </Property>

        <Property name="initialChild">
          <Description>
            If specified, the index of the first element to be shown. Defaults
            to 0.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>0</Example>
          </PropertyValue>
        </Property>

        <Property name="onChild">
          <Description>
            If specified, this function will be called with the active index
            when the currently active carousel changes. Helpful when using
            Carousel as a controlled component.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="controls">
          <Description>
            Whether to show carousel controls and which type of controls.
          </Description>
          <GenericBoolTrue />
          <PropertyValue type="string">
            <Example>"arrows"</Example>
            <Example>"selectors"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="carousel.icons.next">
          <Description>
            The icon to use for the next image navigation control.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Next />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="carousel.animation.duration">
          <Description>The duration of the Carousel animation.</Description>
          <PropertyValue type="number">
            <Example defaultValue> 1000 </Example>
          </PropertyValue>
        </Property>

        <Property name="carousel.icons.previous">
          <Description>
            The icon to use for the previous image navigation control.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Previous />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="carousel.icons.current">
          <Description>
            The icon to use on the middle navigation control. One icon per
            carousel image.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Next />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="carousel.icons.color">
          <Description>The color used for Carousel icons.</Description>
          <GenericColor />
        </Property>

        <Property name="carousel.disabled.icons.color">
          <Description>The color used for disabled Carousel icons.</Description>
          <GenericColor />
        </Property>

        <Property name="global.colors.icon">
          <Description>The color of a given icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"black"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: #f8f8f8, light: #666666 }`}
            </Example>
          </PropertyValue>
        </Property>

        <EdgeStyle description="The possible sizes for margin." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const CarouselItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="none">
    <Box fill direction="row" justify="between" align="center" gap="small">
      <Box
        height="xsmall"
        background="white"
        elevation="medium"
        justify="center"
        pad="small"
      >
        <Previous size="medium" color="brand" />
      </Box>
      <Box
        width="medium"
        height="xsmall"
        background="white"
        elevation="medium"
      />
      <Box
        height="xsmall"
        background="white"
        elevation="medium"
        justify="center"
        pad="small"
      >
        <Next size="medium" color="brand" />
      </Box>
    </Box>
  </Item>
);

CarouselItem.propTypes = Item.propTypes;
