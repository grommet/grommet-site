import React from 'react';
import { Paragraph, Markdown } from 'grommet';
import Page from '../../components/Page';
import {
  ComponentDoc,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../../components/Doc';
import RoutedAnchor from '../../components/RoutedAnchor';
import {
  GenericExtend,
  GlobalBorderSize,
  GlobalEdgeSize,
  GlobalBreakpoints,
  GenericColor,
} from '../../utils/genericThemeExamples';
import {
  GenericBackground,
  GenericBool,
  GenericBoolFalse,
  GenericMargin,
} from '../../utils/genericPropExamples';

const GlobalTheme = () => (
  <Page>
    <ComponentDoc name="Global Theme Properties">
      <Paragraph>
        <Markdown>
          This is a list of global theme properties that affect multiple
          components. Some of the properties can be overridden by component
          level theme properties. For more information on theming see the
          [theming wiki
          page](https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation).
        </Markdown>
      </Paragraph>
      <ThemeDoc>
        <Property name="global.active.background">
          <Description>
            The background used to style active elements.
          </Description>
          <PropertyValue type="string">
            <Example>'active'</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object can be passed with a color and opacity or with a dark
              and light value. color can accept either a string or an object.
            </Description>
            <Example defaultValue>
              {`
{
    color: 'active',
    opacity: 'medium',
}

              `}
            </Example>
            <Example>{`{ dark: 'black', light: 'white' }`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.active.color">
          <Description>
            The text color used to style active elements.
          </Description>
          <PropertyValue type="string">
            <Example>'black'</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example
              defaultValue
            >{`{ dark: 'white', light: 'black' }`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.animation">
          <Description>
            The animation configuration used for Diagram and Box.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  duration: "1s",
  jiggle: { duration: "0.1s" }
}
`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="global.backgrounds">
          <Description>Backgrounds to use across the application.</Description>
          <Description>
            The background's name is provided as a value a component's
            `background` prop such as Box, Header, Page, and more.
          </Description>
          <PropertyValue type="object">
            <Description disableMarkdown>
              {`A background of one of the following types \`string\`,
             \`{ dark: string, light: string }\` object,
             or `}
              <RoutedAnchor
                path="/box#background"
                label="background type object"
              />
              .
            </Description>
            <Description>
              The background may be used throughout the application by referring
              to its name.
            </Description>
            <Example>{`{
  'hero-image-3': 'url(//my.com/assets/img.png)',
  'ambient-1': {
    dark: 'linear-gradient()',
    light: 'linear-gradient()'
  },
  'seasonal-promotion': {
    color: 'neutral-1',
    image: 'url(//my.com/assets/img.png)',
    opacity: 'medium'
  },
}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.borderSize">
          <Description>The possible border sizes.</Description>
          <GlobalBorderSize />
        </Property>
        <Property name="global.breakpoints">
          <Description>
            The possible breakpoints to define window sizes.
          </Description>
          <GlobalBreakpoints />
        </Property>
        <Property name="global.breakpoint[size].radius">
          <Description>The border radius for the given size.</Description>
          <PropertyValue type="string">
            <Example>"4px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.deviceBreakpoints">
          <Description>
            Breakpoints used at Server Side Rendering for the initial rendering.
            These values correspond to the `global.breakpoints`.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  phone: 'small',
  tablet: 'medium',
  computer: 'large',
}`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="global.colors">
          <Description>
            The color values to use across the application.
          </Description>
          <PropertyValue type="object">
            <Description>
              {`A color of type \`string\` or \`{ dark: string; light: string }\`
              can be assigned to a name. The color can be used throughout
              the application by referring to that name.`}
            </Description>
            <Example defaultValue>
              {`{
  active: 'rgba(221, 221, 221, 0.5)',
  'background-back': {
    dark: '#33333308',
    light: '#EDEDED',
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF',
  },
  'background-contrast': {
    light: '#33333310',
    dark: '#FFFFFF18',
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: 'rgba(255, 255, 255, 0.33)',
    light: 'rgba(0, 0, 0, 0.33)',
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand',
  },
  focus: focusColor,
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#000000',
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#555555',
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#666666',
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF',
}`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="global.control.border.color">
          <Description>The border color.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"border"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.control.border.radius">
          <Description>The border radius.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.control.border.width">
          <Description>The border width.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"1px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.control.disabled.opacity">
          <Description>The opacity when a component is disabled.</Description>
          <PropertyValue type="number">
            <Example defaultValue>0.3</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"weak"</Example>
            <Example>"medium"</Example>
            <Example>"strong"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.debounceDelay">
          <Description>
            The time to wait after the user stopped typing, measured in ms.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>500</Example>
          </PropertyValue>
        </Property>
        <Property name="global.deprecated">
          <Description>
            Allows specifying colors, backgrounds, or button kinds as
            deprecated. When a deprecated property is used, a warning will be
            shown in the console while running in development mode.
          </Description>
          <PropertyValue type="object">
            <Description>
              An object containing arrays of deprecated properties with their
              names and warning messages.
            </Description>
            <Example>
              {`
{
  colors: [
    {
      name: 'accent-1',
      message: 'accent-1 is deprecated, use brand instead',
    },
    {
      name: 'accent-2',
      message: 'accent-2 is no longer supported, use blue instead',
    },
  ],
  backgrounds: [
    {
      name: 'background-1',
      message: 'background-1 is deprecated, use background-contrast instead',
    },
  ],
  button: {
    kind: [
      {
        name: 'old-style',
        message: 'old-style button is deprecated, use primary instead',
      },
    ],
  },
}
              `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="global.drop.background">
          <Description>
            The default background color to use for Drop.
          </Description>
          <GenericBackground />
        </Property>
        <Property name="global.drop.border.width">
          <Description>The default border width to use for Drop.</Description>
          <PropertyValue type="string">
            <Example>"1px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.drop.border.radius">
          <Description>The default border radius to use for Drop.</Description>
          <PropertyValue type="string">
            <Example>"0px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.drop.intelligentMargin">
          <Description>
            When true, the Drop will account for alignment when assigning
            margin.
          </Description>
          <GenericBool />
        </Property>
        <Property name="global.drop.margin">
          <Description>The margin to use for Drop.</Description>
          <GenericMargin />
        </Property>
        <Property name="global.drop.shadowSize">
          <Description>
            The box-shadow to use for Drop. This is deprecated in favor of
            `global.drop.elevation`.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.drop.elevation">
          <Description>The box-shadow to use for Drop.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.drop.zIndex">
          <Description>The z-index to use for Drop.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"20"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.focus.border">
          <Description>
            The border style to use for the focus state.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
      border: {
        color: 'blue',
      },
}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.focus.outline">
          <Description>
            The outline style to use for the focus state. This includes color,
            size and offset.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
    outline: 
    { color: 'purple',
      size: '2px',
      offset: '2px'
     },
}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.focus.shadow">
          <Description>
            The shadow style to use for the focus state. This includes color,
            size, blur and inset.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
   shadow: {
        color: 'red',
        size: '2px',
        blur: '0px',
        inset: true,
      },
}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.focus.twoColor">
          <Description>Enable a two-color focus effect.</Description>
          <PropertyValue type="boolean" />
          <GenericBoolFalse />
        </Property>
        <Property name="global.edgeSize">
          <Description>
            The possible sizes for any of gap, margin, and pad.
          </Description>
          <GlobalEdgeSize />
        </Property>
        <Property name="global.elevation.light">
          <Description>
            The box-shadow to use while the theme is in light mode.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>{`{
  none: 'none',
  xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
  small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
  medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
  large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
  xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.elevation.dark">
          <Description>
            The box-shadow to use while the theme is in dark mode.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>{`{
  none: 'none',
  xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
  small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
  medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
  large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
  xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.focus.border.color">
          <Description>
            The border color when an element receives focus.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"focus"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.focus.outline.color">
          <Description>
            The outline color when an element receives focus. A shadow or
            outline is required for accessibility.
          </Description>
          <GenericColor />
        </Property>
        <Property name="global.focus.outline.size">
          <Description>
            The outline size when an element receives focus. A shadow or outline
            is required for accessibility.
          </Description>
          <PropertyValue type="string">
            <Example>"1px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.focus.shadow">
          <Description>
            The outline size when an element receives focus. A shadow or outline
            is required for accessibility.
          </Description>
          <PropertyValue type="string">
            <Description>
              Accepts any value that can be passed to box-shadow.
            </Description>
            <Example>"5px 5px 5px red"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{
  color: 'focus',
  size: '2px',
}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.font.face">
          <Description>
            The global font face. Accepts any values that can be passed to
            font-face.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
  font-family: 'MyFont';
  src: url(font_file.woff),
}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global.font.family">
          <Description>
            The global font family. Accepts any values that can be passed to
            font-family.
          </Description>
          <PropertyValue type="string">
            <Example>"serif"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.font.height">
          <Description>
            The space between lines. Accepts any value that can be passed to
            line-height.
          </Description>
          <PropertyValue type="string">
            <Example>"normal"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.font.size">
          <Description>
            The size of the font. Accepts any value that can be passed to
            font-size.
          </Description>
          <PropertyValue type="string">
            <Example>"15px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.font.weight">
          <Description>
            The thickness of characters. Accepts any value that can be passed to
            font-weight.
          </Description>
          <PropertyValue type="string">
            <Example>"normal"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>
        <Property name="global.hover.background">
          <Description>The background style when hovering.</Description>
          <GenericBackground />
        </Property>
        <Property name="global.hover.color">
          <Description>The text color when hovering.</Description>
          <GenericColor />
        </Property>
        <Property name="global.input.extend">
          <Description>Any additional styles for input components.</Description>
          <GenericExtend />
        </Property>
        <Property name="global.input.padding">
          <Description>The padding for input components.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"none"</Example>
            <Example>"xxsmall"</Example>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"any CSS size"</Example>
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
  right: "...",
  start: "...",
  end: "..."
}
        `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="global.input.font.height">
          <Description>
            The space between lines. Accepts any value that can be passed to
            line-height.
          </Description>
          <PropertyValue type="string">
            <Example>"normal"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.input.font.size">
          <Description>
            The size of the font. Accepts any value that can be passed to
            font-size.
          </Description>
          <PropertyValue type="string">
            <Example>"normal"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.input.font.weight">
          <Description>
            The thickness of characters. Accepts any value that can be passed to
            font-weight.
          </Description>
          <PropertyValue type="string">
            <Example>"normal"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>
        <Property name="global.input.weight">
          <Description>
            The size of the font. Accepts any value that can be passed to
            font-size. Deprecated in favor of `global.input.font.weight`.
          </Description>
          <PropertyValue type="string">
            <Example>"normal"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>
        <Property name="global.opacity.strong">
          <Description>
            The value to use when opacity is set to strong.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>0.8</Example>
          </PropertyValue>
        </Property>
        <Property name="global.opacity.medium">
          <Description>
            The value to use when opacity is set to medium.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>0.4</Example>
          </PropertyValue>
        </Property>
        <Property name="global.opacity.weak">
          <Description>
            The value to use when opacity is set to weak.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>0.1</Example>
          </PropertyValue>
        </Property>
        <Property name="global.radius">
          <Description>The border radius.</Description>
          <PropertyValue type="string">
            <Example>"4px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.selected.background">
          <Description>
            The background to use when an element is selected.
          </Description>
          <GenericBackground />
        </Property>
        <Property name="global.selected.color">
          <Description>
            The font color to use when an element is selected.
          </Description>
          <GenericColor />
        </Property>
        <Property name="global.spacing">
          <Description>A spacing unit used by various components.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>
        <Property name="global.size">
          <Description>The possible sizes for row and column.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  xxsmall: "48px",
  xsmall: "96px",
  small: "192px",
  medium: "384px",
  large: "768px",
  xlarge: "1152px",
  xxlarge: "1536px",
  full: "100%",
}`}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default GlobalTheme;
