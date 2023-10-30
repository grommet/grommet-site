import React from 'react';
import { Grommet as GrommetIcon } from 'grommet-icons';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericBoolFalse } from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';
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

const GrommetPage = () => (
  <Page>
    <ComponentDoc
      name="Grommet"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Utilities-Grommet',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/grommet&module=%2Fsrc%2FGrommet.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Grommet',
          label: 'Github',
        },
      ]}
      description="The top level Grommet container"
      intrinsicElement="div"
      code={`<Grommet
  theme={{ global: { 
      colors: { doc: '#ff99cc' } 
      }
    }}
  >
  <Box pad="large" background="doc" />
</Grommet>`}
    >
      <Properties>
        <Property name="background">
          <Description>
            Either a color identifier to use for the background color. For
            example: 'neutral-1'. Or, a 'url()' for an image. Dark is not needed
            if color is provided.
          </Description>
          <PropertyValue type="string">
            <Description>A color or image url.</Description>
            <Example>"neutral-1"</Example>
            <Example>"url(//my.com/assets/img.png)"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: "neutral-1",
  dark: true,
  opacity: true,
  position: "bottom",
  repeat: "no-repeat",
  size: "cover",
  image: "url(//my.com/assets/img.png)",
  light: "string",
  clip: "text",
  rotate: 45
}
              `}
            </Example>
            <Example>{`{ dark: "light-2", light: "dark-2" }`}</Example>
            <PropOptions prop="opacity">
              <Example>"weak"</Example>
              <Example>"medium"</Example>
              <Example>"strong"</Example>
              <Example>true</Example>
            </PropOptions>
            <PropOptions prop="position">
              <Example>any CSS for background-position</Example>
            </PropOptions>
            <PropOptions prop="repeat">
              <Example>"no-repeat"</Example>
              <Example>"repeat"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="size">
              <Example>"cover"</Example>
              <Example>"contain"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="clip">
              <Example>"text"</Example>
              <Example>"border-box"</Example>
              <Example>"padding-box"</Example>
              <Example>"content-box"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="dir">
          <Description>Layout direction for right to left contexts</Description>
          <PropertyValue type="string">
            <Example>"rtl"</Example>
          </PropertyValue>
        </Property>

        <Property name="full">
          <Description>Whether to take the whole viewport.</Description>
          <PropertyValue type="boolean">
            <Description>
              'true' should be used when the entire page layout will be
              controlled by a child Box or Grid, typically with a fixed header,
              footer, and/or sidebar, with scrolling being handled by the Main
              content within.
            </Description>
            <Example>true</Example>
            <Example defaultValue>false</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Description>
              'min' indicates it should take at minimum the whole viewport,
              allowing the viewport to control scrolling. This should be used
              when the scrolling behavior includes all of the content on the
              page.
            </Description>
            <Example>"min"</Example>
          </PropertyValue>
        </Property>

        <Property name="options">
          <Description>
            This prop was created to preserve backwards compatibility with
            existing behavior by allowing users to opt-in to newer behavior. Box
            cssGap, lets users opt into using the css gap property for Box gap
            instead of inserting an extra node into the dom to simulate a gap.
            Layer singleId provides a way to assign a unique id to a single DOM
            node. Currently, this is only supported for Layer. Drop
            checkContainingBlock will enable additional checks to be performed
            on the target of the Drop to more accurately determine its position.
            This is helpful in situations where the target is within a
            containing block that has a transform, perspective or filter css
            property applied.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  box: { cssGap: true },
  layer: { singleId: boolean ,
  drop: { checkContainingBlock: true } 
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>
            Whether or not Grommet should apply a global font-family, font-size,
            and line-height.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="cssVars">
          <Description>Whether to expose the css variables.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="theme">
          <Description>Custom styles for Grommet app component.</Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  global: {},
  anchor: {},
  ...
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="themeMode">
          <Description>
            Dark vs. light theme variation. Default is unspecified and left to
            theme. Auto defaults to the system preferred theme mode.
          </Description>
          <PropertyValue type="string">
            <Example>"dark"</Example>
            <Example>"light"</Example>
            <Example>"auto"</Example>
          </PropertyValue>
        </Property>

        <Property name="userAgent">
          <Description>
            User agent used to detect the device width for setting the initial
            breakpoint. Full list can be found at
            [deviceatlas.com](https://deviceatlas.com/blog/list-of-user-agent-strings)
          </Description>
          <PropertyValue type="string">
            <Example>
              "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML,
              like Gecko) Chrome/47.0.2526.111 Safari/537.36
            </Example>
          </PropertyValue>
        </Property>

        <Property name="containerTarget">
          <Description>
            The node where Drop and Layer containers are inserted.
          </Description>
          <PropertyValue defaultValue type="object">
            <Description>
              Defaults to document.body which is almost always the right choice.
              This is used for less common cases like rendering within an
              internal node (e.g. shadow root).
            </Description>
            <Example>document.body</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for grommet components. Use this property to define
            messages or a function to get localized messages for any grommet
            children components.
          </Description>
          <PropertyValue type="object">
            <Description>
              'format' is a function that will that will be called with an
              options object parameter containing the id of the message needed.
              This function should return the text string for that message. If
              this format function is not defined, messages will be used from
              the messages object below or a default message if the id wasn't
              defined in this object.
            </Description>
            <Example>
              {`
{
  format: function,
  messages: {
    button: {
      busy: "string",
      success: "string",
    },
    calendar: {
      previousMove: "string",
      previous: "string",
      nextMove: "string",
      next: "string"
    },
    carousel: {
      previous: "string",
      next: "string",
      jump: "string"
    },
    dateInput: {
      openCalendar: "string",
      enterCalendar: "string",
      exitCalendar: "string"
    },
    dataFilters: {
      clear: "string",
      heading: "string",
      open: "string",
      openSet: {
        singular: "string",
        plural: "string",
      },
    },
    dataForm: {
      reset: "string",
      submit: "string"
    },
    dataSearch: 
      label: "string",
      open: "string"
    },
    dataSort: {
      ascending: "string",
      by: "string",
      descending: "string",
      direction: "string",
      open: "string"
    },
    dataSummary: {
      filtered: "string",
      filteredSingle: "string",
      total: "string"
    },
    dataTableColumns: {
      open: "string",
      order: "string",
      select: "string",
      tip: "string",
    },
    dataTableGroupBy: {
      clear: "string",
      label: "string",
    },
    dataView: {
      label: "string",
    },
    fileInput: {
      browse: "string",
      dropPrompt: "string",
      dropPromptMultiple: "string",
      files: "string",
      remove: "string",
      removeAll: "string",
      maxFile: "string",
      maxSizeSingle: "string",
      maxSizeMultiple: {
        singular: "string",
        plural: "string",
      },
    },
    form: {
      invalid: "string",
      required: "string"
    },
    menu: {
      openMenu: "string",
      closeMenu: "string"
    },
    rangeSelector: {
      lower: "string",
      upper: "string"
    },
    select: { 
      multiple: "string",
      selected: "string",
    },
    skipLinks: { skipTo: "string" },
    tabs: { tabContents: "string" },
    textInput: {
      enterSelect: "string",
      suggestionsCount: "string",
      suggestionsExist: "string",
      suggestionIsOpen: "string"
    },
    video: {
      audioDescriptions: "string",
      captions: "string",
      closeMenu: "string",
      description: "string",
      fullScreen: "string",
      progressMeter: "string",
      scrubber: "string",
      openMenu: "string",
      pauseButton: "string",
      playButton: "string",
      volumeDown: "string",
      volumeUp: "string"
    }
  }
}
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="grommet.extend">
          <Description>Any additional style for Grommet.</Description>
          <GenericExtend />
        </Property>

        <Property name="global.font.face">
          <Description>Custom font face declaration.</Description>
          <PropertyValue type="string">
            <Example>"font"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`(props) => {}`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default GrommetPage;

export const GrommetItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <GrommetIcon color="brand" size="xlarge" />
  </Item>
);

GrommetItem.propTypes = Item.propTypes;
