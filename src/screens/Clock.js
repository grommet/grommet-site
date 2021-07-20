import React from 'react';
import { Clock } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBool,
  GenericGridArea,
  GenericMargin,
} from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';
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
      name="Clock"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Visualization-Clock&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/clock&module=%2Fsrc%2FClock.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A clock with timezone awareness"
      intrinsicElement={['div', 'svg']}
      code={`<Clock type="digital" />`}
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
          <Description>
            The amount of margin around the component. An object can be
            specified to distinguish horizontal margin, vertical margin, and
            margin on a particular side.
          </Description>
          <GenericMargin />
        </Property>

        <Property name="hourLimit">
          <Description>
            Whether to roll over the hours after 12 or after 24.
          </Description>
          <PropertyValue type="number">
            <Example>12</Example>
            <Example defaultValue>24</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"12"</Example>
            <Example>"24"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            If the clock is running, this function will be called with the
            current time value each time it changes.
          </Description>
          <PropertyValue type="function">
            <Example>{`('T10:37:46') => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="precision">
          <Description>How precise a time to represent.</Description>
          <PropertyValue type="string">
            <Example>"hours"</Example>
            <Example>"minutes"</Example>
            <Example defaultValue>seconds</Example>
          </PropertyValue>
        </Property>

        <Property name="run">
          <Description>
            Whether the clock should actively adjust time or be fixed to the
            time specified. 'backward' could be used as a countdown timer.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"backward"</Example>
            <Example defaultValue>"forward"</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            Size for both Analog and Digital Clocks. For Analog, there's also
            'huge', that's equal to 'xxlarge' and exists for backwards
            compatibility
          </Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example defaultValue>medium</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"xxlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="time">
          <Description>
            ISO8601 time or duration. For example: 'PT8H12M23S', 'T08:12:23', or
            '2015-02-22T08:12:23'. Any included date portion will be ignored. If
            not provided, the current browser time will be used.
          </Description>
          <PropertyValue type="string">
            <Example>"2018-10-23T10:37:45"</Example>
            <Example>"T10:37:45"</Example>
            <Example>"PT10H37M45S"</Example>
          </PropertyValue>
        </Property>

        <Property name="type">
          <Description>What type of visualization to show.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"analog"</Example>
            <Example>"digital"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="clock.analog.extend">
          <Description>Any additional style for the Analog Clock.</Description>
          <GenericExtend />
        </Property>

        <Property name="clock.analog.hour.color">
          <Description>The color of the hour hand.</Description>
          <PropertyValue type="string | { dark: string, light: string }">
            <Example defaultValue>{`{ dark: light-2, light: dark-3 }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.hour.shape">
          <Description>The shape of the hour hand</Description>
          <PropertyValue type="string">
            <Example defaultValue>"round"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.hour.size">
          <Description>The length of the hour hand.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.hour.width">
          <Description>The thickness of the hour hand</Description>
          <PropertyValue type="string">
            <Example defaultValue>"8px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.minute.color">
          <Description>The color of the minute hand.</Description>
          <PropertyValue type="string | { dark: string, light: string }">
            <Example defaultValue>{`{ dark: light-4, light: dark-3 }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.minute.shape">
          <Description>The shape of the minute hand.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"round"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.minute.size">
          <Description>The length of the minute hand.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"12px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.minute.width">
          <Description>The thickness of the minute hand.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.second.color">
          <Description>The color of the seconds hand</Description>
          <PropertyValue type="string | { dark: string, light: string }">
            <Example defaultValue>
              {`{ dark: accent-1, light: accent-1}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.second.shape">
          <Description>The shape of the seconds hand.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"round"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.second.size">
          <Description>The length of the seconds hand.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"10px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.second.width">
          <Description>The thickness of the seconds hand.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"3px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.size.xsmall">
          <Description>The whole size of the Analog Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"48px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.size.small">
          <Description>The whole size of the Analog Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"72px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.size.medium">
          <Description>The whole size of the Analog Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"96px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.size.large">
          <Description>The whole size of the Analog Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"144px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.size.xlarge">
          <Description>The whole size of the Analog Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"216px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.size.xxlarge">
          <Description>The whole size of the Analog Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"288px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.analog.size.huge">
          <Description>The whole size of the Analog Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"288px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.xsmall.size">
          <Description>Defines the font size of the Digital Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"10px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.xsmall.height">
          <Description>
            Defines the line height of the Digital Clock
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1.5</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.small.size">
          <Description>Defines the font size of the Digital Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"14px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.small.height">
          <Description>
            Defines the line height of the Digital Clock
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1.43</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.medium.size">
          <Description>Defines the font size of the Digital Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.medium.height">
          <Description>
            Defines the line height of the Digital Clock
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1.375</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.large.size">
          <Description>Defines the font size of the Digital Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"22px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.large.height">
          <Description>
            Defines the line height of the Digital Clock
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1.167</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.xlarge.size">
          <Description>Defines the font size of the Digital Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"26px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.xlarge.height">
          <Description>
            Defines the line height of the Digital Clock
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1.1875</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.xxlarge.size">
          <Description>Defines the font size of the Digital Clock</Description>
          <PropertyValue type="string">
            <Example defaultValue>"34px"</Example>
          </PropertyValue>
        </Property>

        <Property name="clock.digital.text.xxlarge.height">
          <Description>
            Defines the line height of the Digital Clock
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1.125</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const ClockItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Clock size="large" type="digital" />
  </Item>
);

ClockItem.propTypes = Item.propTypes;
