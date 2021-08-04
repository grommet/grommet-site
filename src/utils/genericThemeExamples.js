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

export const GlobalColors = () => (
  <PropertyValue type="object">
    <Example>
      {`
{
  icon: { dark: '#f8f8f8', light: '#666666' },
  active: 'rgba(221, 221, 221, 0.5)',
  'background-back': { dark: '#33333308', light: '#EDEDED' },
  'background-front': { dark: '#444444', light: '#FFFFFF' },
  'background-contrast': { light: '#33333310', dark: '#FFFFFF18' },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: { dark: 'rgba(255, 255, 255, 0.33)', light: 'rgba(0, 0, 0, 0.33)' },
  brand: '#7D4CDB',
  control: { dark: 'accent-1', light: 'brand' },
  focus: '#6FFFB0',
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: { dark: '#f8f8f8', light: '#444444' },
  'text-strong': { dark: '#FFFFFF', light: '#000000' },
  'text-weak': { dark: '#CCCCCC', light: '#555555' },
  'text-xweak': { dark: '#BBBBBB', light: '#666666' },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF',
  'accent-1': '#6FFFB0',
  'accent-2': '#FD6FFF',
  'accent-3': '#81FCED',
  'accent-4': '#FFCA58',
  'dark-1': '#333333',
  'dark-2': '#555555',
  'dark-3': '#777777',
  'dark-4': '#999999',
  'dark-5': '#999999',
  'dark-6': '#999999',
  'light-1': '#F8F8F8',
  'light-2': '#F2F2F2',
  'light-3': '#EDEDED',
  'light-4': '#DADADA',
  'light-5': '#DADADA',
  'light-6': '#DADADA',
  'neutral-1': '#00873D',
  'neutral-2': '#3D138D',
  'neutral-3': '#00739D',
  'neutral-4': '#A2423D',
  'status-critical': '#FF4040',
  'status-error': '#FF4040',
  'status-warning': '#FFAA15',
  'status-ok': '#00C781',
  'status-unknown': '#CCCCCC',
  'status-disabled': '#CCCCCC',
  background: { light: '#ffffff', dark: '#000000' },
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
