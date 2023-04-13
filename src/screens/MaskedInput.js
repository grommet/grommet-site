import React from 'react';
import { MaskedInput } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericBool,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import {
  GenericExtend,
  GlobalHoverColor,
  GenericOpacity,
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
import {
  DisabledStyle,
  FocusStyle,
  InputStyle,
  PlaceholderStyle,
} from '../utils/themeDocUtils';

const MaskedInputPage = () => (
  <Page>
    <ComponentDoc
      name="MaskedInput"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Input-MaskedInput',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/maskedinput&module=%2Fsrc%2FMaskedInput.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/MaskedInput',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/maskedinput"
      description="An input field with formalized syntax"
      intrinsicElement="input"
      code={`<MaskedInput
  mask={[
    {
      length: [1, 2],
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', ],
      regexp: /^1[1-2]$|^[0-9]$/,
      placeholder: 'hh',
    },
    { fixed: ':' },
    {
      length: 2,
      options: ['00', '15', '30', '45'],
      regexp: /^[0-5][0-9]$|^[0-9]$/,
      placeholder: 'mm',
    },
    { fixed: ' ' },
    {
      length: 2,
      options: ['am', 'pm'],
      regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
      placeholder: 'ap',
    },
  ]}
  value=""
  onChange={(event) => {/* event.target.value */}}
/>`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>Custom title to be used by screen readers.</Description>
          <GenericA11yTitle />
        </Property>

        <Property name="dropHeight">
          <Description>The height of the drop container.</Description>
          <PropertyValue type="string">
            <SizesXsmallXlarge />
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="dropProps">
          <Description>Any valid Drop prop.</Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="icon">
          <Description>
            An optional icon to show. This could be used to provide an
            indication of what kind of input is expected, like an email icon, or
            what the input will be used for, like a search icon.
          </Description>
          <PropertyValue type="element">
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>The id attribute of the input.</Description>
          <PropertyValue type="string">
            <Example>"InputId"</Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>The name attribute of the input.</Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function that will be called when the user types or pastes text.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="focusIndicator">
          <Description>
            Whether the plain MaskedInput should receive a focus outline.
          </Description>
          <GenericBool />
        </Property>

        <Property name="onBlur">
          <Description>
            Function that will be called when the user leaves the field.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="mask">
          <Description>Describes the structure of the mask.</Description>
          <PropertyValue type="array">
            <Description>
              If a regexp is provided, it should allow both the final full
              string element as well as partial strings as the user types
              characters one by one. When using regexp to match number values
              make sure that the option values are numbers as well. If the
              `options` prop is specified `restrictToOptions` can be set to
              false to allow input that differs from the items in `options`.
            </Description>
            <Example>
              {`
[
  {
    length: number | [number],
    fixed: "string",
    options: [string] | [number],
    regexp: {},
    placeholder: "string",
    restrictToOptions: true
  }
]
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="reverse">
          <Description>
            Whether an icon should be reversed so that the icon is at the end of
            the input.
          </Description>
          <GenericBool />
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

        <Property name="textAlign">
          <Description>How to align the text inside the input.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>
            What text to put in the input. The caller should ensure that it is
            initially valid with respect to the mask.
          </Description>
          <PropertyValue type="string">
            <Example>"example@my.com"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>0</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.hover.background">
          <Description>The background style when hovering.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"active"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ color: "active", opacity: "medium" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.hover.color">
          <Description>The text color when hovering.</Description>
          <GlobalHoverColor />
        </Property>

        <Property name="maskedInput.extend">
          <Description>Any additional style for MaskedInput.</Description>
          <GenericExtend />
        </Property>

        <Property name="maskedInput.container.extend">
          <Description>
            Any additional style for the container surrounding the input and, if
            present, icon.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="text.medium">
          <Description>The size of the text for MaskedInput.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="maskedInput.disabled.opacity">
          <Description>
            The opacity when the MaskedInput is disabled.
          </Description>
          <GenericOpacity />
        </Property>

        <DisabledStyle />

        <FocusStyle />

        <PlaceholderStyle />

        <InputStyle />

        <Property name="global.input.extend">
          <Description>Any additional style for an input.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default MaskedInputPage;

export const MaskedInputItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'xlarge' }}>
    <MaskedInput
      mask={[
        { placeholder: 'hh' },
        { fixed: ':' },
        { placeholder: 'mm' },
        { fixed: ' ' },
        { placeholder: 'ap' },
      ]}
      disabled
    />
  </Item>
);

MaskedInputItem.propTypes = Item.propTypes;
