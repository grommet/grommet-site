import React from 'react';
import { Anchor, Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericBool,
  GenericBoolTrue,
  GenericBoolFalse,
  GenericElevation,
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
import { EdgeStyle } from '../utils/themeDocUtils';

const DropPage = () => (
  <Page>
    <ComponentDoc
      name="Drop"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Controls-Drop',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Drop',
          label: 'Github',
        },
      ]}
      description="A container that is overlaid next to a target"
      intrinsicElement="div"
    >
      <Properties>
        <Property name="align">
          <Description>
            How to align the drop with respect to the target element. Not
            specifying a vertical or horizontal alignment will cause it to be
            aligned in the center.
          </Description>
          <Description>
            To prevent creating a new object on each render, the align property
            should be persistent, either as a static constant outside of the
            render function or memo-ized using hooks.
          </Description>
          <Description disableMarkdown>
            For more guidance on when and how to memoize,
            <Anchor href="https://reactjs.org/docs/hooks-reference.html#usememo">
              read the React documentation on the useMemo hook
            </Anchor>
            . For using a static constant, see our
            <Anchor href="https://storybook.grommet.io/?path=/story/controls-drop-simple--simple">
              Drop component Storybook examples
            </Anchor>
            .
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

        <Property name="background">
          <Description>
            Either a color or identifier to use for the background color. For
            example: 'neutral-1'. Or, a 'url()' for an image. Dark is not needed
            if color is provided.
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
  image: "url(//my.com/assets/img.png)"
  position: "bottom",
  opacity: true,
  repeat: "no-repeat",
  size: "cover",
  light: "string",
  clip: "text",
  rotate: 45
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
            <PropOptions prop="clip">
              <Example>"text"</Example>
              <Example>"border-box"</Example>
              <Example>"padding-box"</Example>
              <Example>"content-box"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="elevation">
          <Description>
            Elevated height of the target, indicated via a drop shadow. Only
            applicable if the Drop isn't plain.
          </Description>
          <GenericElevation />
        </Property>

        <Property name="inline">
          <Description>
            By default, Drop is rendered using a React Portal, which places it
            outside the current DOM hierarchy as a child of the body. Sometimes,
            this isn't desireable and specifying inline indicates that it should
            be rendered directly as a child of its parent comoponent.
          </Description>
          <GenericBool />
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the component.</Description>
          <GenericMargin />
        </Property>

        <Property name="onClickOutside">
          <Description>
            Function that will be invoked when the user clicks outside the drop.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onEsc">
          <Description>
            Function that will be called when the user presses the escape key
            inside the drop.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="overflow">
          <Description>
            How to control the overflow inside the drop.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"auto"</Example>
            <Example>"hidden"</Example>
            <Example>"scroll"</Example>
            <Example>"visible"</Example>
            <Example>"string"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  horizontal: "...",
  vertical: "..."
}            
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>
            Whether the drop element should have no background, elevation,
            margin or round.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="responsive">
          <Description>
            Whether to dynamically re-place when resized.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="restrictFocus">
          <Description>
            Whether focus should be moved to the Drop container if no element
            within the Drop had autoFocus placed on it.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="round">
          <Description>How much to round the corners.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"string"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  corner: "...",
  size: "..."
}
            `}
            </Example>
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

        <Property name="stretch">
          <Description>
            If set to true the drop element will be stretched to at least match
            the width of the target element. The default is true because that is
            what most uses of Drop want, like Select and Menu.
          </Description>
          <PropertyValue type="string">
            <Description>
              If set to align the width of the drop element will be restricted
              to the width of the target element.
            </Description>
            <Example>"align"</Example>
          </PropertyValue>
          <GenericBoolTrue />
        </Property>

        <Property name="target">
          <Description>Target where the drop will be aligned to.</Description>
          <PropertyValue type="object">
            <Description>This should be a React reference.</Description>
            <Example>targetRef.current</Example>
          </PropertyValue>
        </Property>

        <Property name="trapFocus">
          <Description>Traps keyboard focus inside of drop.</Description>
          <GenericBoolTrue />
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="drop.maxHeight">
          <Description>The max height of the Drop container.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.drop.background">
          <Description>The background color of Drop.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "black", light: "white" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.drop.border.radius">
          <Description>The border radius of the Drop container.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"0px"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.drop.extend">
          <Description>Any additional style for Drop.</Description>
          <GenericExtend />
        </Property>

        <Property name="global.drop.intelligentMargin">
          <Description>
            Whether the margin of the Drop should adapt based on the Drop's
            alignment with respect to its target. Margin will only be applied on
            the side of the Drop that is adjacent to its target.
          </Description>
          <GenericBool />
        </Property>

        <EdgeStyle description="The possible sizes for the Drop margin." />
        <Property name="global.drop.elevation">
          <Description>
            Elevated height above the underlying context, indicated via a drop
            shadow.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.drop.margin">
          <Description>The margin of the drop from the target.</Description>
          <GenericMargin />
        </Property>

        <Property name="global.drop.shadowSize">
          <Description>
            Deprecated. Use 'global.drop.elevation' instead.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.drop.zIndex">
          <Description>The stack order of the Drop.</Description>
          <PropertyValue type="number">
            <Example defaultValue>20</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default DropPage;

export const DropItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box
      border={{ color: 'brand', size: 'large' }}
      round="medium"
      margin="small"
      pad={{ horizontal: 'large', vertical: 'medium' }}
    />
  </Item>
);

DropItem.propTypes = Item.propTypes;
