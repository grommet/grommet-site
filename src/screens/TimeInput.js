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
      stable
      description="A control to input a time value"
      code={`<TimeInput
  format="12"
  value="14:30:00"
  onChange={({ value }) => {}}
/>`}
    >
      <Properties>
        <Property name="defaultValue">
          <Description>The default time value, uninitialized.</Description>
          <PropertyValue type="string">
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
          <Description>The time value, in HH:mm:ss format.</Description>
          <PropertyValue type="string">
            <Example>"14:30:00"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="timeInput.active.background">
          <Description>
            The background of the currently active time section.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"active-background"</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.active.indicator.color">
          <Description>
            The color of the active section's indicator bar.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ dark: "white", light: "black" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.active.indicator.size">
          <Description>
            The size of the active section's indicator bar.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.active.pad">
          <Description>
            The padding around the currently active time section.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"xxsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.button.margin">
          <Description>
            The margin around the clock icon used to open the time selection
            drop.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ right: "small" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.container.round">
          <Description>How much to round the corners.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"xxsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop.option.background">
          <Description>
            The background of an option in the time selection drop.
          </Description>
          <PropertyValue type="string">
            <Example>"background-front"</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop.option.hover.background">
          <Description>
            The background of an option in the time selection drop when hovered
            or active via keyboard navigation.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"active-background"</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop.option.selected.background">
          <Description>The background of the selected option.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"selected"</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop.option.selected.color">
          <Description>The text color of the selected option.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"white"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.drop.option.selected.hover.background">
          <Description>
            The background of the selected option when hovered or active via
            keyboard navigation.
          </Description>
          <PropertyValue type="string">
            <Example>"selected"</Example>
          </PropertyValue>
        </Property>

        <Property name="timeInput.icon.clock">
          <Description>
            The icon used in the input to open the time selection drop.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<Clock />`}</Example>
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
      <TimeInput format="12" value="14:30:00" disabled />
    </Box>
  </Item>
);

TimeInputItem.propTypes = Item.propTypes;
