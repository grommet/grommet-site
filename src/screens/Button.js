import React from 'react';

import { Box, Button, Heading, Paragraph } from 'grommet';
import RoutedAnchor from '../components/RoutedAnchor';
import Page from '../components/Page';
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
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericAs,
  GenericBool,
  GenericGridArea,
  GenericMargin,
  GenericBoolFalse,
  GenericBoolTrue,
  SizesXsmallXlarge,
  GenericFill,
} from '../utils/genericPropExamples';
import {
  GenericExtend,
  GenericColor,
  GlobalHoverColor,
  GenericOpacity,
  GenericWeight,
} from '../utils/genericThemeExamples';
import { FocusStyle, DisabledStyle } from '../utils/themeDocUtils';

const ButtonPage = () => (
  <Page>
    <ComponentDoc
      name="Button"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Controls-Button&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/button&module=%2Fsrc%2FButton.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Button',
          label: 'Github',
        },
      ]}
      intrinsicElement="button"
      code={`<Button primary label="label" />`}
      designSystemLink="https://design-system.hpe.design/components/button"
    >
      <Box>
        <Paragraph size="large">
          A grommet Button is used for anything that looks like a button on the
          screen. If an <code>href</code> is provided, it will be rendered in
          the DOM with <code>&lt;a/&gt;</code>. An{' '}
          <RoutedAnchor path="/anchor" label="Anchor" /> component should be
          used for inline anchors within textual contexts.
        </Paragraph>
        <Paragraph size="large">
          In May 2020, we enhanced Button to have three kinds, outlined below.
          In order to maintain backwards compatibility, this approach is only
          available when the theme being used defines{' '}
          <code>button.default</code>.
        </Paragraph>
        <Heading level={2}>default</Heading>
        <Paragraph size="large">
          The majority of Buttons on the page. Their affordance is primarily
          driven by their context, in a <RoutedAnchor path="/nav" label="Nav" />{' '}
          in a <RoutedAnchor path="/header" label="Header" /> or{' '}
          <RoutedAnchor path="/sidebar" label="Sidebar" />, the corner of a tile
          or card, etc.
        </Paragraph>
        <Heading level={2}>primary</Heading>
        <Paragraph size="large">
          The primary call to action. There should typically be at most one
          primary Button on the screen. In a{' '}
          <RoutedAnchor path="/form" label="Form" /> context, it signifies the
          action bound to the enter key that will submit the form.
        </Paragraph>
        <Heading level={2}>secondary</Heading>
        <Paragraph size="large">
          When there isn’t enough context to indicate its affordance, or when it
          should call extra attention to itself but isn’t the primary call to
          action, use a secondary Button. Secondary buttons are only available
          when the underlying theme being used defines{' '}
          <code>button.default</code>.
        </Paragraph>
      </Box>
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

        <Property name="children">
          <Description>
            Function that can be called to render the visual representation.
            When Button has children, it is styled as a plain button.
          </Description>
          <PropertyValue type="function">
            <Description>
              'disabled', 'hover', and 'focus' can be passed as an argument that
              would then return a react element.
            </Description>
            <Example>{`({ disabled, hover, focus }) => {<Box>...</Box>}`}</Example>
          </PropertyValue>
          <PropertyValue type="object" />
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="active">
          <Description>Whether the button is active.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <GenericAs />
          <PropertyValue type="element">
            <Description>
              A specific element to use, such as a router element like Link from
              react-router-dom.
            </Description>
            <Example>Link</Example>
          </PropertyValue>
        </Property>

        <Property name="badge">
          <Description>
            An indicator to show on the top-right of the Button. For
            accessibility, supplement the badge by adding an a11yTitle to the
            Button which provides a useful message to screen readers. For
            example, "2 unread notifications".
          </Description>
          <PropertyValue type="boolean">
            <Description>
              When badge is a boolean, the badge will be a circle with
              background color 'brand'.
            </Description>
            <Example>true</Example>
            <Example>false</Example>
          </PropertyValue>
          <PropertyValue type="element">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Description>
              When badge is a number, that number will appear inside the badge.
            </Description>
            <Example>10</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              When badge is an object, background refers to the background color
              of the badge, value refers to either the numeric value that
              appears within the badge or a boolean if background has been
              defined on the object but no numeric content is desired, and max
              refers to the max value that can appear inside the badge. For
              example, if value is 10 and max is 9, the content in the badge
              will be displayed as 9+.
            </Description>
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
  }
  max: number,
  value: "..."
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
            <PropOptions prop="value">
              <Example>boolean</Example>
              <Example>number</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="color">
          <Description>
            Fill color for primary, label color for plain, border color
            otherwise. If button.default is defined in the theme, the color prop
            will fill the background color for primary and secondary button
            types. Color prop will change the text color for default button.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"control"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example> {`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>Whether the button is disabled.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="fill">
          <Description>
            Whether the button expands to fill all of the available width and/or
            height.
          </Description>
          <GenericFill />
        </Property>

        <Property name="focusIndicator">
          <Description>
            Whether when 'plain' it should receive a focus outline.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="gap">
          <Description>
            The amount of spacing between icon and label in the button.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="hoverIndicator">
          <Description>
            The hover indicator to apply when the user is mousing over the
            button. This prop is meant to be used only with plain Buttons.
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

        <Property name="href">
          <Description>
            If specified, the button will behave like an anchor tag.
          </Description>
          <PropertyValue type="string">
            <Example>"//my.com/path"</Example>
          </PropertyValue>
        </Property>

        <Property name="icon">
          <Description>
            Icon element to place in the button. For accessibility with screen
            readers, if using just an icon (no label), add an a11yTitle to the
            Button that describes the icon.
          </Description>
          <PropertyValue type="element">
            <Example>{`<Add />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="justify">
          <Description>
            How to align the contents within the button.
          </Description>
          <PropertyValue type="string">
            <Example>"around"</Example>
            <Example defaultValue>"between"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"evenly"</Example>
            <Example>"start"</Example>
            <Example>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="label">
          <Description>Label text to place in the button.</Description>
          <PropertyValue type="string">
            <Example>"label"</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onClick">
          <Description>
            Click handler. Not setting this property and not specifying a href
            causes the Button to be disabled.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>
            Whether this is a plain button with no border or pad. Non plain
            button will show both pad and border. When using the kind button
            (i.e. button.default on the theme), the usage of plain is
            deprecated.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="primary">
          <Description>
            Whether this is a primary button. There should be at most one per
            page or screen.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="reverse">
          <Description>
            Whether an icon and label should be reversed so that the icon is at
            the end of the anchor.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="secondary">
          <Description>Whether this is a secondary button.</Description>
          <GenericBool />
        </Property>

        <Property name="size">
          <Description>
            The possible sizes of Button, that impacts the overall Button
            padding, border radius, text size and line height. 'size' will not
            impact any icon related sizing.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
          </PropertyValue>
        </Property>

        <Property name="target">
          <Description>
            Specifies where to display the URL defined in the href property.
          </Description>
          <PropertyValue type="string">
            <Example>"_self"</Example>
            <Example>"_blank"</Example>
            <Example>"_parent"</Example>
            <Example>"_top"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="tip">
          <Description>
            tooltip or a hint when hovering over the button.
          </Description>
          <PropertyValue type="string">
            <Description>
              If the value is a string and no a11yTitle value is provided, tip
              value will be used for the a11yTitle default value.
            </Description>
            <Example>"example tooltip"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  content: node | "string",
  dropProps: {...}
  plain: boolean
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="type">
          <Description>
            The type of button. Set the type to submit for the default button on
            forms.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"button"</Example>
            <Example>"reset"</Example>
            <Example>"submit"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.active.background.color">
          <Description>
            The background color when using active prop.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"active"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="global.active.background.opacity">
          <Description>
            The value used for active button background opacity.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>0.5</Example>
          </PropertyValue>
        </Property>

        <Property name="global.active.color">
          <Description>The text color when using active prop.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"black"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "white", light: "black" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.hover.background">
          <Description>The background style when hovering.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"active"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ color: "active", opacity: "medium" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.hover.color">
          <Description>The text color when hovering.</Description>
          <GlobalHoverColor />
        </Property>

        <Property name="global.edgeSize.small">
          <Description>The padding around an icon-only button.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"12px"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.colors.control">
          <Description>The color of the border.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "white", light: "brand" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.colors.brand">
          <Description>The light version of the border.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"#7D4CDB"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.colors.text">
          <Description>The color of the text label.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"black"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: '#f8f8f8', light: '#444444' }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="text.medium.size">
          <Description>The font size of the text label.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="text.medium.height">
          <Description>The line height of the text label.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.active.background.color">
          <Description>Background color when the button is active.</Description>
          <GenericColor />
        </Property>

        <Property name="button.active.border.color">
          <Description>The border color when the button is active.</Description>
          <GenericColor />
        </Property>

        <Property name="button.active.color">
          <Description>Label color when the button is active.</Description>
          <GenericColor />
        </Property>

        <Property name="button.active.extend">
          <Description>Any additional style for an active Button.</Description>
          <GenericExtend />
        </Property>

        <Property name="button.active.default">
          <Description>
            Adjustments to the default Button style when the Button is active.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
         background: string | object,
         border: string | object | array,
         color:  string | object,
         font: {
           weight: string | number,
         },
         icon: element,
         padding: {
           vertical: string,
           horizontal: string,
         },
         reverse: boolean,
         extend: any css,
       }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.active.primary">
          <Description>
            Adjustments to the primary Button style when the Button is active.
            Only relevant for themes that have defined a value for
            button.default.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
         background: string | object,
         border: string | object | array,
         color:  string | object,
         font: {
           weight: string | number,
         },
         icon: element,
         padding: {
           vertical: string,
           horizontal: string,
         },
         reverse: boolean,
         extend: any css,
       }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.active.secondary">
          <Description>
            Adjustments to the secondary Button style when the Button is active.
            Only relevant for themes that have defined a value for
            button.default.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
         background: string | object,
         border: string | object | array,
         color:  string | object,
         font: {
           weight: string | number,
         },
         icon: element,
         padding: {
           vertical: string,
           horizontal: string,
         },
         reverse: boolean,
         extend: any css,
       }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.badge.container.background">
          <Description>The background of the badge.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ dark: "string", light: "string" }`}</Example>
            <Example>
              {`
{
  color: { dark: "string", light: "string" } | "string",
  dark: bool,
  image: "string",
  position: "string",
  opacity: bool | "string",
  repeat: "no-repeat" | "repeat",
  size: "cover" | "contain" | "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="button.badge.container.extend">
          <Description>Any additional styles for the badge.</Description>
          <GenericExtend />
        </Property>

        <Property name="button.badge.container.pad">
          <Description>
            When badge has a value, the amount of pad to apply.
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object can be specified to distinguish horizontal padding,
              vertical padding, and padding on a particular side.
            </Description>
            <Example>
              {`
{
  vertical: "...",
  horizontal: "...",
  top: "...",
  bottom: "...",
  left: "...",
  right: "..."
}
        `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="button.badge.size.medium">
          <Description>
            The minimum width and height of the badge when the badge contains a
            value. If badge is a boolean, the default width and height will be
            one half of this value.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.badge.text.size.medium">
          <Description>
            The size of the text that is mapped according to
            'button.badge.size.medium'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"14px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.border.color">
          <Description>The color of the border.</Description>
          <GenericColor />
        </Property>

        <Property name="button.border.radius">
          <Description>The corner radius.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.border.width">
          <Description>The border width.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"2px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.color">
          <Description>The color of the text label.</Description>
          <GenericColor />
        </Property>

        <Property name="button.default.background.color">
          <Description>
            The color of the background for default buttons.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.default.background.opacity">
          <Description>
            The value used for default button background opacity.
          </Description>
          <GenericOpacity />
        </Property>

        <Property name="button.default.border.color">
          <Description>
            The color of the border for default buttons.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.default.color">
          <Description>The color of the label for default buttons.</Description>
          <GenericColor />
        </Property>

        <Property name="button.default.font.weight">
          <Description>
            The weight of the text label for default buttons.
          </Description>
          <GenericWeight />
        </Property>

        <Property name="button.default.extend">
          <Description>Any additional style for a default button.</Description>
          <GenericExtend />
        </Property>

        <Property name="button.default.padding.horizontal">
          <Description>
            The horizontal padding for a default button.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"22px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.default.padding.vertical">
          <Description>The vertical padding for a default button.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.disabled.color">
          <Description>Label color when the button is disabled.</Description>
          <GenericColor />
        </Property>

        <Property name="button.disabled.border.color">
          <Description>
            The border color when the button is disabled.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.disabled.background.color">
          <Description>
            Background color when the button is disabled.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.disabled.opacity">
          <Description>The opacity when the button is disabled.</Description>
          <PropertyValue type="number">
            <Example defaultValue>0.3</Example>
          </PropertyValue>
        </Property>

        <Property name="button.disabled.extend">
          <Description>Any additional style for a disabled Button.</Description>
          <GenericExtend />
        </Property>

        <Property name="button.disabled.default">
          <Description>
            Adjustments to the default Button style when the Button is disabled.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.disabled.primary">
          <Description>
            Adjustments to the primary Button style when the Button is disabled.
            Only relevant for themes that have defined a value for
            button.default.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.disabled.secondary">
          <Description>
            Adjustments to the secondary Button style when the Button is
            disabled. Only relevant for themes that have defined a value for
            button.default.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.hover.color">
          <Description>Label color when the button is hovered.</Description>
          <GenericColor />
        </Property>

        <Property name="button.hover.border.color">
          <Description>
            The border color when the button is hovered.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.hover.background.color">
          <Description>
            Background color when the button is hovered.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.hover.extend">
          <Description>Any additional style for a hovered Button.</Description>
          <GenericExtend />
        </Property>

        <Property name="button.hover.default">
          <Description>
            Adjustments to the default Button style when the Button is hovered.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.hover.primary">
          <Description>
            Adjustments to the primary Button style when the Button is hovered.
            Only relevant for themes that have defined a value for
            button.default.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.hover.secondary">
          <Description>
            Adjustments to the secondary Button style when the Button is
            hovered. Only relevant for themes that have defined a value for
            button.default.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.icon.size">
          <Description>
            Adjustments to the icon size on different screen sizes.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
              small: '12px',
              medium: '18px',
              large: '28px',
            }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.[kind].direction">
          <Description>The direction of the icon + label.</Description>
          <PropertyValue type="string">
            <Example defaultValue>'row'</Example>
          </PropertyValue>
        </Property>

        <Property name="button.padding.horizontal">
          <Description>The horizontal padding.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"22px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.padding.vertical">
          <Description>The vertical padding.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.primary.background.color">
          <Description>
            The color of the background for primary buttons. Only relevant for
            themes that have defined a value for button.default.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.primary.background.opacity">
          <Description>
            The value used for primary button background opacity. Only relevant
            for themes that have defined a value for button.default.
          </Description>
          <GenericOpacity />
        </Property>

        <Property name="button.primary.border.color">
          <Description>
            The color of the border for primary buttons. Only relevant for
            themes that have defined a value for button.default.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.primary.color">
          <Description>The color of the label for primary buttons.</Description>
          <GenericColor />
        </Property>

        <Property name="button.primary.font.weight">
          <Description>
            The weight of the text label for primary buttons.
          </Description>
          <GenericWeight />
        </Property>

        <Property name="button.primary.padding.horizontal">
          <Description>
            The horizontal padding for a primary button.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"22px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.primary.padding.vertical">
          <Description>The vertical padding for a primary button.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.primary.extend">
          <Description>Any additional style for a primary button.</Description>
          <GenericExtend />
        </Property>

        <Property name="button.secondary.background.color">
          <Description>
            The color of the background for secondary buttons. Only relevant for
            themes that have defined a value for button.default.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.secondary.background.opacity">
          <Description>
            The value used for secondary button background opacity. Only
            relevant for themes that have defined a value for button.default.
          </Description>
          <GenericOpacity />
        </Property>

        <Property name="button.secondary.border.color">
          <Description>
            The color of the border for secondary buttons. Only relevant for
            themes that have defined a value for button.default.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.secondary.color">
          <Description>
            The color of the label for secondary buttons. Only relevant for
            themes that have defined a value for button.default.
          </Description>
          <GenericColor />
        </Property>

        <Property name="button.secondary.font.weight">
          <Description>
            The weight of the text label for secondary buttons. Only relevant
            for themes that have defined a value for button.default.
          </Description>
          <GenericWeight />
        </Property>

        <Property name="button.secondary.padding.horizontal">
          <Description>
            The horizontal padding for a secondary button. Only relevant for
            themes that have defined a value for button.default.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"22px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.secondary.padding.vertical">
          <Description>
            The vertical padding for a secondary button. Only relevant for
            themes that have defined a value for button.default.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.secondary.extend">
          <Description>
            Any additional style for a secondary button. Only relevant for
            themes that have defined a value for button.default.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="button.size.small.border.radius">
          <Description>The border corner radius.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.small.pad.horizontal">
          <Description>The pad</Description>
          <PropertyValue type="string">
            <Example defaultValue>"20px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.small.pad.vertical">
          <Description>The pad</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.small.iconOnly.pad">
          <Description>
            Specify pad for iconOnly Buttons across button sizes.
          </Description>
          <PropertyValue type="string">
            <Example>"4px"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ horizontal: string; vertical: string }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.medium.border.radius">
          <Description>The border corner radius.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.medium.pad.horizontal">
          <Description>The pad</Description>
          <PropertyValue type="string">
            <Example defaultValue>"22px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.medium.pad.vertical">
          <Description>The pad</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.medium.iconOnly.pad">
          <Description>
            Specify pad for iconOnly Buttons across button sizes.
          </Description>
          <PropertyValue type="string">
            <Example>"4px"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ horizontal: string; vertical: string }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.large.border.radius">
          <Description>The border corner radius.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.large.pad.horizontal">
          <Description>The pad</Description>
          <PropertyValue type="string">
            <Example defaultValue>"32px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.large.pad.vertical">
          <Description>The pad</Description>
          <PropertyValue type="string">
            <Example defaultValue>"8px"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.size.large.iconOnly.pad">
          <Description>
            Specify pad for iconOnly Buttons across button sizes.
          </Description>
          <PropertyValue type="string">
            <Example>"4px"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="button.transition.duration">
          <Description>
            The length of time it will take for the element to transition
            between two states.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>0.1</Example>
          </PropertyValue>
        </Property>

        <Property name="button.transition.properties">
          <Description>
            The CSS properties you want to add the transition to.
          </Description>
          <PropertyValue type="string">
            <Example>"color"</Example>
            <Example>"background-color"</Example>
            <Example>"border-color"</Example>
            <Example>"box-shadow"</Example>
          </PropertyValue>
        </Property>

        <Property name="button.transition.timing">
          <Description>
            Describes how a transition will progress over one cycle of its
            duration and allowing it to change speed during its course.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>ease-in-out</Example>
          </PropertyValue>
        </Property>

        <Property name="button.extend">
          <Description>Any additional style for the Button.</Description>
          <GenericExtend />
        </Property>

        <Property name="tip.content">
          <Description>
            When using tip prop, any valid Box property for the Tip container.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{ 
  background: "background-contrast", 
  elevation: "small", 
  margin: "xsmall", 
  pad: { vertical: "xsmall", horizontal: "small" }, 
  round: "small"
}
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tip.drop">
          <Description>
            When using tip prop, any valid Drop property for the Tooltip.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  align: { top: "bottom" },
  background: "none",
  elevation: "none",
  margin: "none"
}
  `}
            </Example>
          </PropertyValue>
        </Property>

        <FocusStyle />
        <DisabledStyle />

        <Property name="button.skeleton">
          <Description>
            Any Skeleton properties which will be applied to the Button when in
            skeleton mode. For the Button to be in skeleton mode, use the
            'skeleton' property on a parent Box.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ width: { min: '100px' }}`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default ButtonPage;

export const ButtonItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Button label="i'm a button" primary onClick={() => {}} />
  </Item>
);

ButtonItem.propTypes = Item.propTypes;
