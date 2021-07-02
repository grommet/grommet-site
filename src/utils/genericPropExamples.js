import React from 'react';
import { Markdown } from 'grommet';
import { Example } from '../components/Doc/PropExample';
import { ExampleGroup } from '../components/Doc/ExampleGroup';

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
    <ExampleGroup>
      <Example>"none"</Example>
      <Example>"xxsmall"</Example>
      <Example>"xsmall"</Example>
      <Example>"small"</Example>
      <Example>"medium"</Example>
      <Example>"large"</Example>
      <Example>"xlarge"</Example>
    </ExampleGroup>
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
  </>
);
