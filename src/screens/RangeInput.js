import React from 'react';
import { RangeInput } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericBoolFalse,
  GenericPad,
} from '../utils/genericPropExamples';
import {
  GenericExtend,
  GenericOpacity,
  GenericColor,
} from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { FocusStyle } from '../utils/themeDocUtils';

const RangeInputPage = () => (
  <Page>
    <ComponentDoc
      name="RangeInput"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Input-RangeInput',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/rangeinput&module=%2Fsrc%2FRangeInput.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/RangeInput',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/rangeinput"
      description="A slider control to input a value within a fixed range"
      intrinsicElement="input"
      code={`function Example() {
  const [value, setValue] = React.useState(10);
  return (
    <RangeInput
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
}`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>
            Custom label to be used by screen readers. When provided, an
            aria-label will be added to the element.
          </Description>
          <GenericA11yTitle />
        </Property>

        <Property name="color">
          <Description>The color of the track.</Description>
          <PropertyValue type="string">
            <Description>
              A hex, name, rgb value, or theme color name.
            </Description>
            <Example>"control"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>
              An array of objects with a color, value and opacity based on thumb
              value.
            </Description>
            <Example>
              {`[
  { value: 3, color: '#FF0000', opacity: 0.5 },
  { value: 7, color: { light: 'control', dark: 'brand' } },
  { value: 10, color: '#00FF00' },
]`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description disableMarkdown>
            {`Same as React <input disabled={} />. Also adds a hidden input
            element with the same name so form submissions work.`}
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="id">
          <Description>The id attribute of the range input.</Description>
          <PropertyValue type="string">
            <Example>"inputId"</Example>
          </PropertyValue>
        </Property>

        <Property name="min">
          <Description>The minimum value permitted.</Description>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"1"</Example>
          </PropertyValue>
        </Property>

        <Property name="max">
          <Description>The maximum value permitted.</Description>
          <PropertyValue type="number">
            <Example>10</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"10"</Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>The name attribute of the range input.</Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when the user changes the value. It
            will be passed an event object. The new input value will be
            available via 'event.target.value'.
          </Description>
          <PropertyValue type="function">
            <Example>{`(event) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="step">
          <Description>The step interval between values.</Description>
          <PropertyValue type="number">
            <Example>"2"</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>The current value.</Description>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"1"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <FocusStyle />

        <Property name="global.colors.border">
          <Description>The color used for rangeInput.track.color.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "rgba(255, 255, 255, 0.33)", light: "rgba(0, 0, 0, 0.33)" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.spacing">
          <Description>
            The height, width and border-radius of the range thumb.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="rangeInput.disabled.opacity">
          <Description>
            The opacity when the RangeInput is disabled.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>0.3</Example>
          </PropertyValue>
        </Property>

        <Property name="rangeInput.disabled.thumb.color">
          <Description>
            The color of the thumb on RangeInput when disabled.
          </Description>
          <GenericColor />
        </Property>

        <Property name="rangeInput.disabled.track.color">
          <Description>
            The color of the track on RangeInput when disabled.
          </Description>
          <GenericColor />
        </Property>

        <Property name="rangeInput.extend">
          <Description>Any additional style for the RangeInput.</Description>
          <GenericExtend />
        </Property>

        <Property name="rangeInput.pad">
          <Description>The pad around the RangeInput.</Description>
          <GenericPad />
        </Property>

        <Property name="rangeInput.thumb.color">
          <Description>The color of the thumb.</Description>
          <GenericColor />
        </Property>

        <Property name="rangeInput.thumb.extend">
          <Description>Any additional style for the thumb.</Description>
          <GenericExtend />
        </Property>

        <Property name="rangeInput.track.color">
          <Description>The color of the track.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"border"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="rangeInput.track.opacity">
          <Description>The opacity of the track color.</Description>
          <GenericOpacity />
        </Property>

        <Property name="rangeInput.track.lower.color">
          <Description>The color of the lower bound track.</Description>
          <GenericColor />
        </Property>

        <Property name="rangeInput.track.lower.opacity">
          <Description>The opacity on the lower bound track color.</Description>
          <GenericOpacity />
        </Property>

        <Property name="rangeInput.track.upper.color">
          <Description>The color of the upper track.</Description>
          <GenericColor />
        </Property>

        <Property name="rangeInput.track.upper.opacity">
          <Description>The opacity on the upper track color.</Description>
          <GenericOpacity />
        </Property>

        <Property name="rangeInput.track.extend">
          <Description>Any additional style for the track.</Description>
          <GenericExtend />
        </Property>

        <Property name="rangeInput.track.height">
          <Description>The height of the track.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"4px"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default RangeInputPage;

export const RangeInputItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="large">
    <RangeInput />
  </Item>
);

RangeInputItem.propTypes = Item.propTypes;
