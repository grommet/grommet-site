import React from 'react';
import { DateInput } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericBoolFalse,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="DateInput"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Input-DateInput&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/dateinput&module=%2Fsrc%2FDateInput.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url:
            'https://github.com/grommet/grommet/tree/master/src/js/components/DateInput',
          label: 'Github',
        },
      ]}
      description="A control to input a single date or a date range"
      intrinsicElement="div"
      code={`<DateInput
  format="mm/dd/yyyy"
  value={(new Date()).toISOString()}
  onChange={({ value }) => {}}
/>`}
    >
      <Properties>
        <Property name="buttonProps">
          <Description>
            Any properties to pass on to the underlying DropButton when not
            inline and no format.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="calendarProps">
          <Description>
            Any properties to pass on to the underlying Calendar.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="defaultValue">
          <Description>
            The default date or date range value in ISO8601 format.
          </Description>
          <PropertyValue type="string">
            <Example>"2020-07-21T15"</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Example>[2020-07-31T15, 2020-07-31T15]</Example>
          </PropertyValue>
        </Property>

        <Property name="dropProps">
          <Description>
            Any properties to pass on to the underlying Drop when not inline.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ align: { top: "bottom", left: "left" } }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="format">
          <Description>
            The date format to use. This property should be used when in a Form.
          </Description>
          <PropertyValue type="string">
            <Description>
              If not specified, the date value will not be displayed as a text
              string and the user will not be able to enter a date by typing.
              For example: 'mm/dd/yyyy', or for a range:
              'mm/dd/yyyy-mm/dd/yyyy'. For a date without leading zeros:
              'm/d/yyyy'.
            </Description>
            <Example>"mm/dd/yyyy"</Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>The id of the input.</Description>
          <PropertyValue type="string">
            <Example>"date-input-id"</Example>
          </PropertyValue>
        </Property>

        <Property name="inline">
          <Description>
            Whether the calendar should always be shown or via a Drop when
            interacting with the input.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="inputProps">
          <Description>
            Any properties to pass on to the underlying MaskedInput when there
            is a format.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
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
            Function that will be called when the user types or selects a date.
            The updated value will be available via 'event.value'.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>
            The date or date range value(s) in ISO8601 format.
          </Description>
          <PropertyValue type="string">
            <Example>"2018-10-16T12:22:00Z"</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Example>["2018-10-12", "2018-10-17"]</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>The size of the text.</Description>
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"xxlarge"</Example>
            <Example>"2xl"</Example>
            <Example>"3xl"</Example>
            <Example>"4xl"</Example>
            <Example>"5xl"</Example>
            <Example>"6xl"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for DateInput. Used for accessibility by screen
            readers.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  "enterCalendar": "Calendar is open, press tab to enter the calendar",
  "exitCalendar": "Exited calendar dialog"
}
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="dateInput.icon.size">
          <Description>The size of the Calendar icon</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const DateInputItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'xlarge' }}>
    <DateInput format="mm/dd/yyyy" disabled />
  </Item>
);

DateInputItem.propTypes = Item.propTypes;
