import React from 'react';
import { Description, Example, PropertyValue } from '../components/Doc';

export const GenericExtend = () => (
  <>
    <PropertyValue>
      <Description>Any CSS</Description>
      <Example>css`color: 'blue'`</Example>
    </PropertyValue>
    <PropertyValue>
      <Description>A function</Description>
      <Example>(props) => {}</Example>
    </PropertyValue>
  </>
);
