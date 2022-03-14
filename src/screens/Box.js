import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';

import {
  GenericA11yTitle,
  GenericAlign,
  GenericAlignSelf,
  GenericAs,
  GenericBool,
  GenericBoolTrue,
  GenericBoolFalse,
  GenericElevation,
  GenericFill,
  GenericGridArea,
  GenericMargin,
  GenericPad,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import {
  GenericExtend,
  GlobalAnimation,
  GlobalBorderSize,
  GlobalElevation,
  GlobalColorsBorder,
  GlobalHoverBackgroundColor,
  GlobalHoverBackgroundOpacity,
  GlobalHoverColor,
  GlobalEdgeSize,
  GlobalBreakpoints,
} from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
  PropOptions,
} from '../components/Doc';

const BoxPage = () => (
  <Page>
    <ComponentDoc
      name="Box"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Layout-Box&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/box&module=%2Fsrc%2FBox.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Box',
          label: 'Github',
        },
      ]}
      description="A container that lays out its contents in one direction"
      intrinsicElement="div"
      code={`<Box
  direction="row"
  border={{ color: 'brand', size: 'large' }}
  pad="medium"
>
  <Box pad="small" background="dark-3" />
  <Box pad="medium" background="light-3" />
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

        <Property name="align">
          <Description>
            How to align the contents along the cross axis. Any 'align-items'
            valid CSS value is accepted, including composed ones such 'first
            baseline' and 'unsafe start'.
          </Description>
          <GenericAlign />
        </Property>

        <Property name="alignContent">
          <Description>
            How to align the contents when there is extra space in the cross
            axis. Any 'align-content' valid CSS value is accepted, including
            composed ones such 'first baseline' and 'unsafe start'.
          </Description>
          <PropertyValue type="string">
            <Example>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"between"</Example>
            <Example>"around"</Example>
            <Example defaultValue>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="animation">
          <Description>
            Animation effect(s) to use. 'duration' and 'delay' should be in
            milliseconds. 'jiggle' and 'pulse' types are intended for small
            elements, like icons.
          </Description>
          <PropertyValue type="string">
            <Example>"fadeIn"</Example>
            <Example>"fadeOut"</Example>
            <Example>"jiggle"</Example>
            <Example>"pulse"</Example>
            <Example>"rotateLeft"</Example>
            <Example>"rotateRight"</Example>
            <Example>"slideUp"</Example>
            <Example>"slideDown"</Example>
            <Example>"slideLeft"</Example>
            <Example>"slideRight"</Example>
            <Example>"zoomIn"</Example>
            <Example>"zoomOut"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  type: "...",
  delay: 0,
  duration: 1000,
  size: "xsmall"
}
              `}
            </Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Example>["fadeIn", "slideDown", "..."]</Example>
          </PropertyValue>
        </Property>

        <Property name="background">
          <Description>
            The background of the box. Either a color identifier to use for the
            background color. For example: 'neutral-1'. Or, a 'url()' for an
            image. Dark is not needed if color is provided.
          </Description>
          <PropertyValue type="string">
            <Description>A color or image url.</Description>
            <Example>"neutral-1"</Example>
            <Example>"url(//my.com/assets/img.png)"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: "neutral-1",
  dark: true,
  opacity: true,
  position: "bottom",
  repeat: "no-repeat",
  size: "cover",
  image: "url(//my.com/assets/img.png)"
}
              `}
            </Example>
            <Example>{`{ dark: "light-2", light: "dark-2" }`}</Example>
            <PropOptions prop="opacity">
              <Example>"weak"</Example>
              <Example>"medium"</Example>
              <Example>"strong"</Example>
              <Example>true</Example>
            </PropOptions>
            <PropOptions prop="position">
              <Example>any CSS for background-position</Example>
            </PropOptions>
            <PropOptions prop="repeat">
              <Example>"no-repeat"</Example>
              <Example>"repeat"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="size">
              <Example>"cover"</Example>
              <Example>"contain"</Example>
              <Example>"string"</Example>
            </PropOptions>
          </PropertyValue>
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
          </PropertyValue>
        </Property>

        <Property name="border">
          <Description>A border around the Box.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Description>
              The 'between' option will place a border in the gap between child
              elements. You must have a 'gap' to use 'between'.
            </Description>
            <Example>"top"</Example>
            <Example>"left"</Example>
            <Example>"bottom"</Example>
            <Example>"right"</Example>
            <Example>"start"</Example>
            <Example>"end"</Example>
            <Example>"horizontal"</Example>
            <Example>"vertical"</Example>
            <Example>"all"</Example>
            <Example>"between"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: string | { dark: string, light: string },
  size: "medium",
  style: "dashed",
  side: "all"
}              
              `}
            </Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>
              An array of objects defining the border for different sides of the
              Box.
            </Description>
            <Example>
              {`
[
  {
    color: "black",
    size: "small",
    style: "solid",
    side: "top"
  },
  {
    color: "black",
    size: "medium",
    style: "dotted",
    side: "bottom"
  }
]
              `}
            </Example>
            <PropOptions prop="size">
              <SizesXsmallXlarge />
              <Example>"any CSS size"</Example>
            </PropOptions>
            <PropOptions prop="style">
              <Example>"solid"</Example>
              <Example>"dashed"</Example>
              <Example>"dotted"</Example>
              <Example>"double"</Example>
              <Example>"groove"</Example>
              <Example>"ridge"</Example>
              <Example>"inset"</Example>
              <Example>"outset"</Example>
              <Example>"hidden"</Example>
            </PropOptions>
            <PropOptions prop="side">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"horizontal"</Example>
              <Example>"vertical"</Example>
              <Example>"all"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="direction">
          <Description>
            The orientation to layout the child components in.
          </Description>
          <PropertyValue type="string">
            <Example>"row"</Example>
            <Example defaultValue>"column"</Example>
            <Example>"row-responsive"</Example>
            <Example>"row-reverse"</Example>
            <Example>"column-reverse"</Example>
          </PropertyValue>
        </Property>

        <Property name="elevation">
          <Description>
            Elevated height above the underlying context, indicated via a drop
            shadow.
          </Description>
          <GenericElevation />
        </Property>

        <Property name="flex">
          <Description>
            Whether flex-grow and/or flex-shrink is true and at a desired
            factor.
          </Description>
          <PropertyValue type="string">
            <Example>"grow"</Example>
            <Example>"shrink"</Example>
          </PropertyValue>
          <GenericBool />
          <PropertyValue type="object">
            <Example>{`{ grow: number, shrink: number }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="fill">
          <Description>
            Whether the width and/or height should fill the container.
          </Description>
          <GenericFill />
        </Property>

        <Property name="focusIndicator">
          <Description>
            When interactive via 'onClick', whether it should receive a focus
            outline.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="gap">
          <Description>
            The amount of spacing between child elements. This should not be
            used in conjunction with 'wrap' as the gap elements will not wrap
            gracefully. If a child is a Fragment, Box will not add a gap between
            the children of the Fragment.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <SizesXsmallXlarge />
            <Example>"any CSS size"</Example>
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

        <Property name="hoverIndicator">
          <Description>
            When 'onClick' has been specified, the hover indicator to apply when
            the user is mousing over the box.
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="string">
            <Example>"background"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object defining the background or the background and elevation.
            </Description>
            <Example>
              {`
{
  color: "...",
  dark: "...",
  image: "string",
  position: "string",
  opacity: "...",
  repeat: "...",
  size: "...",
  light: "string"
}
              `}
            </Example>
            <Example>
              {`
{
  background: {
    color: "...",
    dark: "...",
    image: "string",
    position: "string",
    opacity: "...",
    repeat: "...",
    size: "...",
    light: "string"
  },
  elevation: "..."
}
              `}
            </Example>
            <PropOptions prop="color">
              <Example>"string"</Example>
              <Example>{`{ dark: "string", light: "string" }`}</Example>
            </PropOptions>
            <PropOptions prop="dark">
              <Example>boolean</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="opacity">
              <Example>boolean</Example>
              <Example>number</Example>
              <Example>"weak"</Example>
              <Example>"medium"</Example>
              <Example>"strong"</Example>
            </PropOptions>
            <PropOptions prop="repeat">
              <Example>"no-repeat"</Example>
              <Example>"repeat"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="size">
              <Example>"cover"</Example>
              <Example>"contain"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="elevation">
              <Example>"none"</Example>
              <SizesXsmallXlarge />
              <Example>"string"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="justify">
          <Description>
            How to align the contents along the main axis.
          </Description>
          <PropertyValue type="string">
            <Example>"around"</Example>
            <Example>"between"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"evenly"</Example>
            <Example>"start"</Example>
            <Example defaultValue>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="onClick">
          <Description>
            Click handler. Setting this property adds additional attributes to
            the DOM for accessibility.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="overflow">
          <Description>How to handle Box overflow.</Description>
          <PropertyValue type="string">
            <Example>"auto"</Example>
            <Example>"hidden"</Example>
            <Example>"scroll"</Example>
            <Example>"visible"</Example>
            <Example>"any CSS overflow"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ vertical: "...", horizontal: "..." }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pad">
          <Description>
            The amount of padding around the Box contents.
          </Description>
          <GenericPad />
        </Property>

        <Property name="responsive">
          <Description>
            Whether margin, pad, and border sizes should be scaled for mobile
            environments.
          </Description>
          <GenericBoolTrue />
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

        <Property name="tag">
          <Description>
            The DOM tag to use for the element. NOTE: This is deprecated in
            favor of indicating the DOM tag via the 'as' property.
          </Description>
          <GenericAs />
        </Property>

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <GenericAs />
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

        <Property name="wrap">
          <Description>
            Whether children can wrap if they can't all fit.
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="string">
            <Example>"reverse"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.animation">
          <Description>The animation configuration for the Box.</Description>
          <GlobalAnimation />
        </Property>

        <Property name="global.borderSize">
          <Description>The possible border sizes in the Box.</Description>
          <GlobalBorderSize />
        </Property>

        <Property name="global.elevation">
          <Description>The possible shadows in Box elevation.</Description>
          <GlobalElevation />
        </Property>

        <Property name="global.colors.border">
          <Description>The color of the border.</Description>
          <GlobalColorsBorder />
        </Property>

        <Property name="global.hover.background.color">
          <Description>
            The color of the default background when hovering.
          </Description>
          <GlobalHoverBackgroundColor />
        </Property>

        <Property name="global.hover.background.opacity">
          <Description>
            The opacity of the default background when hovering.
          </Description>
          <GlobalHoverBackgroundOpacity />
        </Property>

        <Property name="global.hover.color">
          <Description>
            The color of the default background when hovering.
          </Description>
          <GlobalHoverColor />
        </Property>

        <Property name="global.opacity.medium">
          <Description>
            The value used when background opacity is set to true.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>0.4</Example>
          </PropertyValue>
        </Property>

        <Property name="global.size">
          <Description>
            The possible sizes for width, height, and basis.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  xxsmall: '48px',
  xsmall: '96px',
  small: '192px',
  medium: '384px',
  large: '768px',
  xlarge: '1152px',
  xxlarge: '1536px',
  full: '100%',
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="box.extend">
          <Description>Any additional style for the Box.</Description>
          <GenericExtend />
        </Property>

        <Property name="box.responsiveBreakpoint">
          <Description>
            The actual breakpoint to trigger changes in the border, direction,
            gap, margin, pad, and round.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.edgeSize">
          <Description>
            The possible sizes for any of gap, margin, and pad.
          </Description>
          <GlobalEdgeSize />
        </Property>

        <Property name="global.breakpoints">
          <Description>
            The possible breakpoints that could affect border, direction, gap,
            margin, pad, and round.
          </Description>
          <GlobalBreakpoints />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default BoxPage;

export const BoxItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box flex border={{ color: 'brand', size: 'xlarge' }} />
  </Item>
);

BoxItem.propTypes = Item.propTypes;
