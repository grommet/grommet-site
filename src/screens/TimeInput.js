import React from 'react';
import { Box, TimeInput } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericBoolFalse } from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const TimeInputPage = () => (
  <Page>
    <ComponentDoc
      name="TimeInput"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Input-TimeInput',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/TimeInput',
          label: 'Github',
        },
      ]}
      description="A control to input a time value"
      code={`<TimeInput
  format="12"
  value="14:30:00"
  onChange={({ value }) => {}}
/>`}
    >
      <Properties>
        <Property name="defaultValue">
          <Description>
            The default time value. Accepts HH:mm or HH:mm:ss format.
          </Description>
          <PropertyValue type="string">
            <Example>"14:30"</Example>
            <Example>"14:30:00"</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>Whether the TimeInput is disabled.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="format">
          <Description>
            Whether to use a 12-hour or 24-hour time format. If not specified,
            defaults to whichever convention the browser's locale uses.
          </Description>
          <PropertyValue type="string">
            <Example>"12"</Example>
            <Example>"24"</Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>
            The DOM id attribute value to use for the underlying element.
          </Description>
          <PropertyValue type="string">
            <Example>"id"</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for TimeInput. Used for internationalization and
            customization of default strings and accessibility announcements.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  activePeriodValue: "string",
  activeSection: "string",
  activeSectionValue: "string",
  chooseTime: "string",
  currentValue: "string",
  currentValueWithoutSeconds: "string",
  inputLabel: "string",
  invalidTime: "string",
  openDrop: "string",
  sectionHours: "string",
  sectionMeridiem: "string",
  sectionMinutes: "string",
  sectionSeconds: "string"
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="minuteStep">
          <Description>
            The increment, in minutes, used when navigating the minutes section
            with the up/down arrow keys or the drop options.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1</Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>
            The name of the input. This property is required when used within
            FormField.
          </Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when the user types or selects a time.
            The updated value will be available via 'event.value'.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ value }) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="readOnly">
          <Description>Whether the TimeInput is read-only.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="value">
          <Description>
            The time value. Accepts HH:mm or HH:mm:ss format.
          </Description>
          <PropertyValue type="string">
            <Example>"14:30"</Example>
            <Example>"14:30:00"</Example>
          </PropertyValue>
        </Property>

        <Property name="showSeconds">
          <Description>
            Whether to display and allow editing of the seconds portion of the
            time value. Defaults to false.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example defaultValue>false</Example>
          </PropertyValue>
        </Property>

        <Property name="inline">
          <Description>
            Whether to render the time picker directly instead of opening it
            from an input.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example>false</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="timeInput.container">
          <Description>
            Styles the outer field container. Supports Box appearance and sizing
            properties, including background, border, margin, pad, and round.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ round: "xxsmall" }`}</Example>
            <Example>{`{ background: "string", border: {}, margin: "string", pad: "string", round: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.value">
          <Description>
            The visible value frame. Supports Box-part appearance and sizing
            properties: background, border, elevation, height, margin, pad,
            round, and width.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ background: "string", border: {}, elevation: "string", height: "string", margin: "string", pad: "string", round: "string", width: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.segment">
          <Description>
            {`Time sections and separators. Supports Box-part appearance
            properties (background, border, elevation, height, margin, pad,
            round, and width) and text properties (color, size, and weight).
            <br />
            <br />
            Placeholder text supports color, size, and weight. Its active state
            supports background, border, elevation, pad, and round, plus text
            color, size, and weight. Set active.border to style the active
            underline.`}
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  pad: { horizontal: 'xxsmall' },
  active: {
    background: 'active-background',
    border: {
      color: { dark: 'white', light: 'black' },
      side: 'bottom',
      size: 'small',
    },
  },
}`}
            </Example>
            <Example>{`{
  background: "string",
  border: {},
  color: "string",
  height: "string",
  margin: "string",
  pad: "string",
  placeholder: { color: "string", size: "string", weight: "number" },
  round: "string",
  size: "string",
  weight: "number",
  active: {
    background: "string",
    border: { side: "bottom" },
    color: "string",
    pad: "string",
    round: "string",
    weight: "number"
  }
}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.dropButton">
          <Description>
            The popup trigger button. Accepts a Button kind string, an object
            with kind and icon, or a Button theme object with an optional icon.
          </Description>
          <PropertyValue type="string">
            <Example>"toolbar"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ kind: "toolbar", icon: <Clock /> }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop">
          <Description>
            The popup frame. Supports Box appearance properties, width, height
            (including height.min), and gap. The base theme defines the default
            width; if width.max is omitted, it defaults to 100%.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ background: "string", border: {}, gap: "string", height: "string", width: { min: "string", max: "string" } }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop.column">
          <Description>
            Each popup list. Supports Box-part appearance and sizing properties
            (background, border, elevation, height, margin, pad, round, and
            width), plus gap. If height is omitted, the responsive default max
            height is retained.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ background: "string", border: {}, gap: "string", height: "string", margin: "string", pad: "string", round: "string", width: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop.option.container">
          <Description>
            The Box-backed option surface. Supports Box-part appearance and
            sizing properties (background, border, elevation, height, margin,
            pad, round, and width). Its hover, selected, and selected.hover
            states support background, border, elevation, pad, and round.
            Missing selected values inherit the base container style.
          </Description>
          <PropertyValue type="object">
            <Example>{`{
  background: "string",
  border: {},
  pad: "string",
  round: "string",
  hover: { background: "string" },
  selected: {
    background: "string",
    hover: { background: "string" }
  }
}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop.option.text">
          <Description>
            The option label. Supports color, size, and weight; selected
            supports the same properties and overrides their base values
            individually.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ color: "string", size: "string", weight: "number", selected: { color: "string", size: "string", weight: "number" } }`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default TimeInputPage;

export const TimeInputItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'xlarge' }}>
    <Box>
      <TimeInput format="24" value="14:30" disabled />
    </Box>
  </Item>
);

TimeInputItem.propTypes = Item.propTypes;
