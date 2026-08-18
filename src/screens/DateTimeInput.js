import React from 'react';
import { DateTimeInput } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const DateTimeInputPage = () => (
  <Page>
    <ComponentDoc
      name="DateTimeInput"
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DateTimeInput',
          label: 'GitHub',
        },
      ]}
      stable
      description="a control to input a time and date value"
      code={`<DateTimeInput
  format="12"
  value={value}
  onChange={({ value }) => setValue(value)}
/>`}
    >
      <Properties>
        <Property name="defaultValue">
          <Description>
            The initial date-time value in ISO 8601 format.
          </Description>
          <PropertyValue type="string">
            <Example>"2026-07-22T18:30:00.000Z"</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>Whether the DateTimeInput is disabled.</Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example>false</Example>
          </PropertyValue>
        </Property>

        <Property name="format">
          <Description>
            Whether to use a 12-hour or 24-hour time format. If not specified,
            defaults to the browser's locale convention.
          </Description>
          <PropertyValue type="string">
            <Example>'12'</Example>
            <Example>'24'</Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>
            The DOM id attribute value to use for the underlying element.
          </Description>
          <PropertyValue type="string">
            <Example>"datetime-input-id"</Example>
          </PropertyValue>
        </Property>

        <Property name="inline">
          <Description>
            Whether the date-time picker should always be shown or displayed via
            a drop when interacting with the input.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example>false</Example>
          </PropertyValue>
        </Property>

        <Property name="locale">
          <Description>
            The locale string for date and time formatting. If not specified,
            defaults to the browser's locale.
          </Description>
          <PropertyValue type="string">
            <Example>"en-US"</Example>
            <Example>"de-DE"</Example>
            <Example>"fr-FR"</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for DateTimeInput. Used for internationalization and
            customization of default strings and accessibility announcements.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  activeSection: "string",
  activeSectionValue: "string",
  chooseDateTime: "string",
  inputLabel: "string",
  invalidDateTime: "string",
  openDrop: "string",
  sectionDay: "string",
  sectionHours: "string",
  sectionMeridiem: "string",
  sectionMinutes: "string",
  sectionMonth: "string",
  sectionSeconds: "string",
  sectionYear: "string"
}`}
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
            <Example>15</Example>
            <Example>30</Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>
            The name of the input. This property is required when used within a
            FormField.
          </Description>
          <PropertyValue type="string">
            <Example>"appointment-time"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Callback function called when the date-time value changes. Receives
            an event object containing the new value in ISO 8601 format.
          </Description>
          <PropertyValue type="function">
            <Example>{`(event: { value?: string }) => setValue(event.value)`}</Example>
          </PropertyValue>
        </Property>

        <Property name="readOnly">
          <Description>
            Whether the DateTimeInput is read-only and cannot be edited by the
            user.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example>false</Example>
          </PropertyValue>
        </Property>

        <Property name="showSeconds">
          <Description>
            Whether to include seconds in the time picker and display.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example>false</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>
            The current date-time value in ISO 8601 format. Use this to control
            the DateTimeInput's value.
          </Description>
          <PropertyValue type="string">
            <Example>"2026-07-22T18:30:00.000Z"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="dateTimeInput.button.margin">
          <Description>The margin around the calendar button.</Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>{`{ right: "small" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.container.round">
          <Description>The border radius for the container.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"xxsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.active.background">
          <Description>
            The background color for active date/time sections.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"active-background"</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.active.pad">
          <Description>The padding for active date/time sections.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"xxsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.active.indicator.color">
          <Description>The color of the active section indicator.</Description>
          <PropertyValue type="string">
            <Example>"black"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ dark: "white", light: "black" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.active.indicator.size">
          <Description>The size of the active section indicator.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.drop.pad">
          <Description>The padding inside the drop container.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ vertical: "small", horizontal: "small" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.drop.gap">
          <Description>The gap between elements inside the drop.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.drop.border.color">
          <Description>
            The color of the divider between the Calendar and TimeInput inside
            the DateTimeInput drop.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"border"</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.drop.border.size">
          <Description>
            The border size of the divider between the Calendar and TimeInput
            inside the DateTimeInput drop.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"xsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.icon.calendar">
          <Description>
            The icon to display for the calendar button.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>undefined</Example>
          </PropertyValue>
        </Property>

        <Property name="dateTimeInput.separator.pad">
          <Description>The padding around date/time separators.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"xxsmall"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`{ vertical: "xxsmall", horizontal: "xxsmall" }`}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default DateTimeInputPage;

export const DateTimeInputItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'xlarge' }}>
    <DateTimeInput defaultValue="2024-06-15T12:00:00" disabled />
  </Item>
);

DateTimeInputItem.propTypes = Item.propTypes;
