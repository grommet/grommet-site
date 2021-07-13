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
