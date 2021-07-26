import React from 'react';
import { Description, Example, PropertyValue } from '../components/Doc';

export const GenericColor = () => (
  <>
    <PropertyValue type="string">
      <Description>A hex, name, or rgb value.</Description>
      <Example>"brand"</Example>
    </PropertyValue>
    <PropertyValue type="object">
      <Description>
        An object with a color for dark and light modes.
      </Description>
      <Example>{`{ dark: "string", light: "string" }`}</Example>
    </PropertyValue>
  </>
);

export const GenericExtend = () => (
  <>
    <PropertyValue type="string">
      <Description>Any CSS.</Description>
      <Example>css`color: 'blue'`</Example>
    </PropertyValue>
    <PropertyValue type="function">
      <Example>{`(props) => {}`}</Example>
    </PropertyValue>
  </>
);

export const GenericOpacity = () => (
  <>
    <PropertyValue type="string">
      <Example>"medium"</Example>
    </PropertyValue>
    <PropertyValue type="number">
      <Example>0.5</Example>
    </PropertyValue>
  </>
);

export const GenericWeight = () => (
  <>
    <PropertyValue type="string">
      <Description>Any browser font-weight definition.</Description>
      <Example>"normal"</Example>
      <Example>"bold"</Example>
    </PropertyValue>
    <PropertyValue type="number">
      <Example>300</Example>
    </PropertyValue>
  </>
);

export const GlobalAnimation = () => (
  <PropertyValue type="object">
    <Example>
      {`
{
  duration: '1s',
  jiggle: { duration: '0.1s' }
}
      `}
    </Example>
  </PropertyValue>
);

export const GlobalBorderSize = () => (
  <PropertyValue type="object">
    <Example>
      {`
{
  xsmall: '1px',
  small: '2px',
  medium: '4px',
  large: '12px',
  xlarge: '24px,
}
      `}
    </Example>
  </PropertyValue>
);

export const GlobalElevation = () => (
  <PropertyValue type="object">
    <Example>
      {`
{
  light: {
    none: 'none',
    xsmall: '0px 1px 2px rgba(100, 100, 100, 0.50)',
    small: '0px 2px 4px rgba(100, 100, 100, 0.50)',
    medium: '0px 3px 8px rgba(100, 100, 100, 0.50)',
    large: '0px 6px 12px rgba(100, 100, 100, 0.50)',
    xlarge: '0px 8px 16px rgba(100, 100, 100, 0.50)',
  },
  dark: {
    none: 'none',
    xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
    small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
    medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
    large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
    xlarge: '0px 10px 24px rgba(255, 255, 255, 0.40)',
  },
}
      `}
    </Example>
  </PropertyValue>
);

export const GlobalColorsBorder = () => (
  <>
    <PropertyValue type="string">
      <Description>A hex, name, or rgb value.</Description>
      <Example>"brand"</Example>
    </PropertyValue>
    <PropertyValue type="object">
      <Description>
        An object with a color for dark and light modes.
      </Description>
      <Example defaultValue>
        {`
{ 
  dark: rgba(255, 255, 255, 0.33), 
  light: rgba(0, 0, 0, 0.33), 
}
        `}
      </Example>
    </PropertyValue>
  </>
);

export const GlobalHoverBackgroundColor = () => (
  <>
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
  </>
);

export const GlobalHoverBackgroundOpacity = () => (
  <>
    <PropertyValue type="string">
      <Example defaultValue>"medium"</Example>
    </PropertyValue>
    <PropertyValue type="number">
      <Example>0.5</Example>
    </PropertyValue>
  </>
);

export const GlobalHoverColor = () => (
  <>
    <PropertyValue type="string">
      <Description>A hex, name, or rgb value.</Description>
      <Example>"black"</Example>
    </PropertyValue>
    <PropertyValue type="object">
      <Description>
        An object with a color for dark and light modes.
      </Description>
      <Example defaultValue>{`{ dark: "white", light: "black" }`}</Example>
    </PropertyValue>
  </>
);

export const GlobalEdgeSize = () => (
  <PropertyValue type="object">
    <Example>
      {`
{
  edgeSize: {
    none: '0px',
    hair: '1px',
    xxsmall: '3px',
    xsmall: '6px',
    small: '12px',
    medium: '24px',
    large: '48px',
    xlarge: '96px',
    responsiveBreakpoint: 'small',
  },
}
      `}
    </Example>
  </PropertyValue>
);

export const GlobalBreakpoints = () => (
  <PropertyValue type="object">
    <Example>
      {`
{
  small: {
    value: '768px',
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: '4px',
      large: '6px',
      xlarge: '12px',
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '2px',
      xsmall: '3px',
      small: '6px',
      medium: '12px',
      large: '24px',
      xlarge: '48px',
    },
    size: {
      xxsmall: '24px',
      xsmall: '48px',
      small: '96px',
      medium: '192px',
      large: '384px',
      xlarge: '768px',
      full: '100%',
    },
  },
  medium: { value: '1536px' },
  large: {},
}
      `}
    </Example>
  </PropertyValue>
);
