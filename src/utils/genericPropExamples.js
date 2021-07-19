import React from 'react';
import { Description, Example, PropertyValue } from '../components/Doc';

export const GenericA11yTitle = () => (
  <PropertyValue type="string">
    <Example>"a user friendly label for screen readers"</Example>
  </PropertyValue>
);

export const GenericAlign = () => (
  <PropertyValue type="string">
    <Example>"start"</Example>
    <Example>"center"</Example>
    <Example>"end"</Example>
    <Example>"baseline"</Example>
    <Example>"stretch</Example>
  </PropertyValue>
);

export const GenericAlignSelf = () => (
  <PropertyValue type="string">
    <Example>"start"</Example>
    <Example>"center"</Example>
    <Example>"end"</Example>
    <Example>"stretch"</Example>
  </PropertyValue>
);

export const GenericAs = () => (
  <>
    <PropertyValue type="string">
      <Description>The name of a component.</Description>
      <Example>"div"</Example>
    </PropertyValue>
    <PropertyValue type="function">
      <Example>{`() => {}`}</Example>
    </PropertyValue>
  </>
);

export const GenericBoolTrue = () => (
  <PropertyValue type="boolean">
    <Example defaultValue>true</Example>
    <Example>false</Example>
  </PropertyValue>
);

export const GenericBoolFalse = () => (
  <PropertyValue type="boolean">
    <Example>true</Example>
    <Example defaultValue>false</Example>
  </PropertyValue>
);

export const GenericBool = () => (
  <PropertyValue type="boolean">
    <Example>true</Example>
    <Example>false</Example>
  </PropertyValue>
);

export const GenericElevation = () => (
  <PropertyValue type="string">
    <Example defaultValue>"none"</Example>
    <Example>"xsmall"</Example>
    <Example>"small"</Example>
    <Example>"medium"</Example>
    <Example>"large"</Example>
    <Example>"xlarge"</Example>
    <Example>"any custom elevation name in the current theme"</Example>
  </PropertyValue>
);

export const GenericFill = () => (
  <>
    <PropertyValue type="string">
      <Example>"horizontal"</Example>
      <Example>"vertical"</Example>
    </PropertyValue>
    <GenericBool />
  </>
);

export const GenericGridArea = () => (
  <PropertyValue type="string">
    <Example>"a parent grid area name"</Example>
  </PropertyValue>
);

export const GenericMargin = () => (
  <>
    <PropertyValue type="string">
      <Example>"none"</Example>
      <Example>"xxsmall"</Example>
      <Example>"xsmall"</Example>
      <Example>"small"</Example>
      <Example>"medium"</Example>
      <Example>"large"</Example>
      <Example>"xlarge"</Example>
    </PropertyValue>
    <PropertyValue type="object">
      <Description>
        Can be specified to distinguish horizontal margin, vertical margin, and
        margin on a particular side.
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
  </>
);

export const GenericPad = () => (
  <>
    <PropertyValue type="string">
      <Description>
        T-shirt sizing based off the theme or a specific size in px, em, etc.
      </Description>
      <Example defaultValue>"none"</Example>
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
        An object can be specified to distinguish horizontal padding, vertical
        padding, and padding on a particular side.
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
  </>
);

export const SizesXsmallXlarge = () => (
  <>
    <Example>"xsmall"</Example>
    <Example>"small"</Example>
    <Example>"medium"</Example>
    <Example>"large"</Example>
    <Example>"xlarge"</Example>
  </>
);
