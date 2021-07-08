import React from 'react';
import { Markdown } from 'grommet';
import { Description, Example, PropertyValue } from '../components/Doc';

export const GenericA11yTitle = () => (
  <Example>"a user friendly label for screen readers"</Example>
);

export const GenericAlignSelf = () => (
  <>
    <Example>"start"</Example>
    <Example>"center"</Example>
    <Example>"end"</Example>
    <Example>"stretch"</Example>
  </>
);

export const GenericGridArea = () => (
  <Example>"a parent grid area name"</Example>
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
        <Markdown>
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
        </Markdown>
      </Example>
    </PropertyValue>
  </>
);
