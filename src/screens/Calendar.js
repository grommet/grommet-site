import React from 'react';
import { Box } from 'grommet';
import Item from './Components/Item';
import Page from '../components/Page';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBoolTrue,
  GenericBoolFalse,
  GenericGridArea,
  GenericMargin,
  SizesXsmallXlarge,
  GenericBool,
} from '../utils/genericPropExamples';
import { GenericExtend, GenericWeight } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
  PropOptions,
} from '../components/Doc';
import { IconColor, EdgeStyle } from '../utils/themeDocUtils';

const CalendarPage = () => (
  <Page>
    <ComponentDoc
      name="Calendar"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Visualizations-Calendar',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/calendar&module=%2Fsrc%2FCalendar.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Calendar',
          label: 'Github',
        },
      ]}
      description="A calendar of days displayed by month"
      intrinsicElement="div"
      code={`<Calendar
  size="small"
  date={(new Date()).toISOString()}
  onSelect={(date) => {}}
/>`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>
            Custom label to be used by screen readers. When provided, an
            aria-label will be added to the element.
          </Description>
          <GenericA11yTitle />
        </Property>

        <Property name="alignSelf">
          <Description>
            How to align along the cross axis when contained in a Box or along
            the column axis when contained in a Grid.
          </Description>
          <GenericAlignSelf />
        </Property>

        <Property name="gridArea">
          <Description>
            The name of the area to place this inside a parent Grid.
          </Description>
          <GenericGridArea />
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the component.</Description>
          <GenericMargin />
        </Property>

        <Property name="activeDate">
          <Description>
            When using range, Whether the next date selection will affect the
            start or end bound of the range.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
            <Example>"end"</Example>
          </PropertyValue>
        </Property>

        <Property name="animate">
          <Description>
            Whether to animate the calender as the user interacts with it.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="bounds">
          <Description>
            An array of two numbers indicating the limits on navigation in
            ISO8601 format.
          </Description>
          <PropertyValue type="array">
            <Example>["2018-09-01", "2018-12-31"]</Example>
          </PropertyValue>
        </Property>

        <Property name="children">
          <Description>
            Function that will be called to render each day.
          </Description>
          <PropertyValue type="function">
            <Description>
              'date' is a string containing an ISO8601 date for the day being
              rendered. 'day' is a number containing the day of the month being
              rendered. 'isInRange' is a boolean indicating whether the date is
              within a selected range of dates. 'isSelected' is a boolean
              indicating whether this date is selected.
            </Description>
            <Example>{`({ date, day, isInRange, isSelected }) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="date">
          <Description>
            The selected date or array of dates in ISO8601 format.
          </Description>
          <PropertyValue type="string">
            <Example>"2018-10-16T12:22:00Z"</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Example>["2018-10-12", "2018-10-17"]</Example>
          </PropertyValue>
        </Property>

        <Property name="dates">
          <Description>Multiple selected dates in ISO8601 format.</Description>
          <PropertyValue type='array["string"]'>
            <Example>["2018-10-12", "2018-10-17"]</Example>
          </PropertyValue>
          <PropertyValue type='array[array["string"]]'>
            <Description>
              Items that are an array indicate a range of dates.
            </Description>
            <Example>[["2018-10-19", "2018-11-23"]]</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>
            Multiple dates in ISO8601 format that should not be selectable.
          </Description>
          <PropertyValue type='array["string"]'>
            <Example>["2018-09-21", "2018-09-27"]</Example>
          </PropertyValue>
          <PropertyValue type='array[array["string"]]'>
            <Description>
              Items that are an array indicate a range of dates.
            </Description>
            <Example>[["2018-12-23", "2018-12-26"]]</Example>
          </PropertyValue>
        </Property>

        <Property name="daysOfWeek">
          <Description>Whether to show the days of the week.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="fill">
          <Description>
            Whether the calendar should fill the parent container.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="firstDayOfWeek">
          <Description>The first day of the week.</Description>
          <PropertyValue type="number">
            <Description>0 for Sunday. 1 for Monday.</Description>
            <Example defaultValue>0</Example>
            <Example>1</Example>
          </PropertyValue>
        </Property>

        <Property name="header">
          <Description>
            If specified, the entire calendar header will be managed by the
            caller.
          </Description>
          <PropertyValue type="function">
            <Description>
              'onPreviousMonth' and 'onNextMonth' are callbacks that will tell
              the calendar to move between months. 'previousInBound' and
              'nextInBound' are booleans that tell, when using 'bounds', if the
              current date is within that range. You can then use that to
              disable the previous and next buttons.
            </Description>
            <Example>
              {`
({
  date: Date,
  locale: "en-US",
  onPreviousMonth: func,
  onNextMonth: func,
  previousInBound: bool,
  nextInBound: bool,
}) => {}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="locale">
          <Description>The locale to use.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"en-US"</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for Calendar. Used for accessibility by screen
            readers.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>
              {`
({
  previous: "Moved to {date}",
  next: "Moved to {date}",
})
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="onReference">
          <Description>
            Called with an ISO8601 date when the user navigates to a different
            month.
          </Description>
          <PropertyValue type="function">
            <Example>{`('2018-10-22T12:22:00Z') => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSelect">
          <Description>
            Called with an ISO8601 date when the user selects a day. For single
            select, make this the subsequent 'date' property value. For multiple
            select or ranges, toggle values in 'dates'. Not specifying this
            property makes the component read only.
          </Description>
          <PropertyValue type="function">
            <Example>{`('2018-10-22T12:22:00Z') => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="range">
          <Description>
            Whether to automatically manage multiple date selection as a range.
            When the user clicks the first date, onSelect will be called with
            that date. When the user selects another date, onSelect will be
            called with an array of two dates.
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="string">
            <Description>
              If range = "array", then an array of dates will be returned even
              when the start or end date of the range is undefined.
            </Description>
            <Example>"array"</Example>
          </PropertyValue>
        </Property>

        <Property name="reference">
          <Description>
            The date to show if 'date' isn't set, in ISO8601 format.
          </Description>
          <PropertyValue type="string">
            <Example>"2018-10-12"</Example>
          </PropertyValue>
        </Property>

        <Property name="showAdjacentDays">
          <Description>
            Whether to show the days from the previous and next months.
          </Description>
          <GenericBoolTrue />
          <PropertyValue type="string">
            <Description>
              'trim' limits adjacent days shown to rows containing days in the
              current month.
            </Description>
            <Example>"trim"</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>What size to make it.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="calendar.day.hover">
          <Description>
            Any additional background and color style for the day of Calendar
            hover.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "light-4", light: "dark-3" }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="calendar.day.selected">
          <Description>
            Any additional background and color style for the day selected in
            Calendar.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "light-4", light: "dark-3" }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="calendar.day.selected.font.weight">
          <Description>Font weight for the selected date.</Description>
          <GenericWeight defaultValue="bold" />
        </Property>
        <Property name="calendar.day.selected.hover">
          <Description>
            Any additional background and color style for the day selected in
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "light-4", light: "dark-3" }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="calendar.day.inRange.color">
          <Description>
            Any additional color style for the day in range of Calendar.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="calendar.day.inRange.font.weight">
          <Description>Font weight for the days in range.</Description>
          <GenericWeight defaultValue="bold" />
        </Property>
        <Property name="calendar.day.inRange.hover">
          <Description>
            Any additional background and color hover style for the days in range.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "light-4", light: "dark-3" }`}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="calendar.day.extend">
          <Description>
            Any additional style for the day of Calendar.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="calendar.extend">
          <Description>Any additional style for the Calendar.</Description>
          <GenericExtend />
        </Property>

        <Property name="calendar.heading.level">
          <Description>
            The `calendar[size].title` should be used in place of this heading
            level used for the calendar.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>4</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.icons.next">
          <Description>
            The icon to use for the next month navigation control.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Next />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.icons.previous">
          <Description>
            The icon to use for the previous month navigation control.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Previous />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.icons.small.next">
          <Description>
            The icon to use for the next month navigation control when small.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormNext />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.icons.small.previous">
          <Description>
            The icon to use for the previous month navigation control when
            small.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormPrevious />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.daySize">
          <Description>The size of a day when large.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"109.7px"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.fontSize">
          <Description>The font size to use for days when large.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"30px"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.lineHeight">
          <Description>The line height to use for days when large.</Description>
          <PropertyValue type="number">
            <Example defaultValue>1.11</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.slideDuration">
          <Description>
            How long it animate the slide between months when large.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"0.8s"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.title">
          <Description>
            Any valid Text prop for the calendar text heading when large.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue> {`{}`} </Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.daySize">
          <Description>The size of a day when medium.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"54.84px"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.fontSize">
          <Description>The font size to use for days when medium.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.lineHeight">
          <Description>
            The line height to use for days when medium.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1.45</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.slideDuration">
          <Description>
            How long it animate the slide between months when medium.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"0.5s"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.title">
          <Description>
            Any valid Text prop for the calendar text heading when medium.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue> {`{}`} </Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.day.round">
          <Description>
            The amount to round the corner of a day when small.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.range.round">
          <Description>
            The amount to round the corner days in range when small.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.range.round.start">
          <Description>
            The amount to round the corner days in range when small.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.range.round.end">
          <Description>
            The amount to round the corner days in range when small.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.daySize">
          <Description>The size of a day when small.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"27.42px"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.fontSize">
          <Description>The font size to use for days when small.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"14px"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.lineHeight">
          <Description>The line height to use for days when small.</Description>
          <PropertyValue type="number">
            <Example defaultValue>1.375</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.slideDuration">
          <Description>
            How long it animate the slide between months when small.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"0.2s"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.small.title">
          <Description>
            Any valid Text prop for the calendar text heading when small.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue> {`{}`} </Example>
          </PropertyValue>
        </Property>

        <Property name="global.size.small">
          <Description>The width of the calendar when small.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"192px"</Example>
          </PropertyValue>
        </Property>

        <Property name="global.size.medium">
          <Description>The width of the calendar when medium.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"384px"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.day.round">
          <Description>
            The amount to round the corner day when medium.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.range.round">
          <Description>
            The amount to round the corner days in range when medium.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.range.round.start">
          <Description>
            The amount to round the corner days in range when medium.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.medium.range.round.end">
          <Description>
            The amount to round the corner days in range when medium.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="global.size.large">
          <Description>The width of the calendar when large.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"768px"</Example>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.day.round">
          <Description>
            The amount to round the corner day when large.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.range.round">
          <Description>
            The amount to round the corner days in range when large.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.range.round.start">
          <Description>
            The amount to round the corner days in range when large.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="calendar.large.range.round.end">
          <Description>
            The amount to round the corner days in range when large.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>
        <IconColor />

        <EdgeStyle description="The possible sizes for margin." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default CalendarPage;

export const CalendarItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box flex={false} gap="xsmall">
      {[0, 1, 2, 3, 4].map((week) => (
        <Box key={week * 100} flex direction="row" gap="xsmall">
          {[0, 1, 2, 3, 4, 5, 6].map((day) => (
            <Box
              key={week * 100 + day * 10}
              flex={false}
              pad="xsmall"
              round
              background={{
                color: 'brand',
                opacity:
                  (week === 0 && day < 3 && 'weak') ||
                  (week === 1 && day === 5 && 'strong') ||
                  (week === 4 && day > 4 && 'weak') ||
                  'medium',
              }}
            />
          ))}
        </Box>
      ))}
    </Box>
  </Item>
);

CalendarItem.propTypes = Item.propTypes;
