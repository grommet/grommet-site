import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericBool,
  GenericBoolTrue,
  GenericBoolFalse,
  GenericMargin,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';
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
import { BreakpointStyle } from '../utils/themeDocUtils';

export default () => (
  <Page>
    <ComponentDoc
      name="Layer"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Layout-Layer&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/layer&module=%2Fsrc%2FLayer.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url:
            'https://github.com/grommet/grommet/tree/master/src/js/components/Layer',
          label: 'Github',
        },
      ]}
      description="An overlay"
      intrinsicElement="div"
      code={`function Example() {
  const [show, setShow] = React.useState();
  return (
    <Box>
      <Button label="show" onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Button label="close" onClick={() => setShow(false)} />
        </Layer>
      )}
    </Box>
  );
}`}
    >
      <Properties>
        <Property name="animate">
          <Description>
            Whether to animate the Layer content when it opens. This property is
            deprecated and will be removed in the next major version of grommet.
            Instead, use 'animation'.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="animation">
          <Description>
            Animation transition of the Layer content when it opens and closes.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example defaultValue>"slide"</Example>
            <Example>"fadeIn"</Example>
            <Example>"none"</Example>
          </PropertyValue>
        </Property>

        <Property name="background">
          <Description>
            Either a color identifier to use for the background color.
          </Description>
          <PropertyValue type="string">
            <Description>A color or image url.</Description>
            <Example>"neutral-1"</Example>
            <Example>"url(//my.com/assets/img.png)"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>Dark is not needed if color is provided.</Description>
            <Example>
              {`
{
  color: "neutral-1",
  dark: true,
  image: "url(//my.com/assets/img.png)"
  position: "bottom",
  opacity: true,
  repeat: "no-repeat",
  size: "cover",
  light: "string"
}
              `}
            </Example>
            <Example>{`{ dark: "light-2", light: "dark-2" }`}</Example>
            <PropOptions prop="opacity">
              <Example>"weak"</Example>
              <Example>"medium"</Example>
              <Example>"strong"</Example>
              <Example>boolean</Example>
              <Example>number</Example>
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

        <Property name="full">
          <Description>
            Whether the width and/or height should fill the current viewport
            size.
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="string">
            <Example>"vertical"</Example>
            <Example>"horizontal"</Example>
          </PropertyValue>
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the Layer.</Description>
          <GenericMargin />
        </Property>

        <Property name="modal">
          <Description>
            Whether there should be an overlay preventing interaction underneath
            the layer.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="onClickOutside">
          <Description>
            Function that will be invoked on modal layers when the user clicks
            outside the layer.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onEsc">
          <Description>
            Function that will be called when the user presses the escape key
            inside the layer.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>
            Whether this is a plain Layer with no background color, border, or
            elevation.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="position">
          <Description>Position of the layer content.</Description>
          <PropertyValue type="string">
            <Example>"bottom"</Example>
            <Example>"bottom-left"</Example>
            <Example>"bottom-right"</Example>
            <Example defaultValue>"center"</Example>
            <Example>"end"</Example>
            <Example>"hidden"</Example>
            <Example>"left"</Example>
            <Example>"right"</Example>
            <Example>"start"</Example>
            <Example>"top"</Example>
            <Example>"top-left"</Example>
            <Example>"top-right"</Example>
          </PropertyValue>
        </Property>

        <Property name="responsive">
          <Description>
            Whether the layer should take full width and height on mobile. If a
            target is provided, the Layer will take the full width and height of
            the target.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="target">
          <Description>
            Target where the layer will be aligned to. This should be a React
            reference.
          </Description>
          <PropertyValue type="object">
            <Example>ref.current</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.size.xxsmall">
          <Description>The minimal height of the Layer.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"48px"</Example>
          </PropertyValue>
        </Property>

        <Property name="layer.background">
          <Description>
            The background color of the Layer Container.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"white"</Example>
          </PropertyValue>
        </Property>

        <Property name="layer.border.radius">
          <Description>The rounding of the Layer corners.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="layer.border.intelligentRounding">
          <Description>
            Whether the border-radius of the Layer should adapt based on the
            Layer's position. Wherever the Layer is touching the edge of the
            screen, a border-radius of 0 will be applied.
          </Description>
          <GenericBool />
        </Property>

        <Property name="layer.container.zIndex">
          <Description>The stack order of Layer Container.</Description>
          <PropertyValue type="number">
            <Example defaultValue>20</Example>
          </PropertyValue>
        </Property>

        <Property name="layer.extend">
          <Description>Any additional style for Layer.</Description>
          <GenericExtend />
        </Property>

        <Property name="layer.container.elevation">
          <Description>
            Elevated height above the underlying container, indicated via a drop
            shadow. Any Box elevation value is valid.
          </Description>
          <PropertyValue type="string">
            <Example>"none"</Example>
            <SizesXsmallXlarge />
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="layer.container.extend">
          <Description>Any additional style for Layer Container.</Description>
          <GenericExtend />
        </Property>

        <Property name="layer.overlay.background">
          <Description>The background of the Layer overlay.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"rgba(0, 0, 0, 0.5)"</Example>
          </PropertyValue>
        </Property>

        <Property name="layer.responsiveBreakpoint">
          <Description>
            The actual breakpoint to trigger changes in the border, direction,
            gap, margin, pad, and round.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="layer.zIndex">
          <Description>The stack order of Layer.</Description>
          <PropertyValue type="number">
            <Example defaultValue>20</Example>
          </PropertyValue>
        </Property>

        <BreakpointStyle
          description="The possible breakpoints that could affect border, direction, gap, margin,
 pad, and round."
        />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const LayerItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box flex direction="row">
      <Box basis="1/3" background={{ color: 'brand', opacity: 'weak' }} />
      <Box flex background="brand" />
    </Box>
  </Item>
);

LayerItem.propTypes = Item.propTypes;
