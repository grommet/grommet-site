import React from 'react';
import { CirclePlay } from 'grommet-icons';
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
import { ResponsiveBreakpoint } from '../utils/themeDocUtils';

export default () => (
  <Page>
    <ComponentDoc
      name="Video"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Media-Video&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/video&module=%2Fsrc%2FVideo.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url:
            'https://github.com/grommet/grommet/tree/master/src/js/components/Video',
          label: 'Github',
        },
      ]}
      description="A video player"
      intrinsicElement="video"
      code={`<Video controls="over" fit="cover">
  <source key="video" src="/assets/small.mp4" type="video/mp4" />
  <track
    key="cc"
    label="English"
    kind="subtitles"
    srcLang="en"
    src="/assets/small-en.vtt"
    default
  />
</Video>`}
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

        <Property name="autoPlay">
          <Description>
            Enables automatic playback of the video as soon as it is loaded.
          </Description>
          <GenericBool />
        </Property>

        <Property name="controls">
          <Description>
            Whether to show playback controls and where to place them.
          </Description>
          <PropertyValue type="boolean">
            <Example>false</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example defaultValue>"over"</Example>
            <Example>"below"</Example>
          </PropertyValue>
        </Property>

        <Property name="fit">
          <Description>How the image fills its container.</Description>
          <PropertyValue type="string">
            <Example>"cover"</Example>
            <Example>"contain"</Example>
          </PropertyValue>
        </Property>

        <Property name="loop">
          <Description>Enables continuous video looping.</Description>
          <GenericBool />
        </Property>

        <Property name="mute">
          <Description>
            Enables video muting. This option is best used with the autoPlay
            flag.
          </Description>
          <GenericBool />
        </Property>

        <Property name="messages">
          <Description>
            Custom messages. Used for accessibility by screen readers.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  closeMenu: "string",
  fullScreen: "string",
  progressMeter: "string",
  openMenu: "string",
  pauseButton: "string",
  playButton: "string",
  scrubber: "string",
  volumeDown: "string",
  volumeUp: "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <ResponsiveBreakpoint description="The actual breakpoint to trigger changes in the video component layout." />

        <Property name="global.edgeSize.xsmall">
          <Description>The width of the video scrubber.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"6px"</Example>
          </PropertyValue>
        </Property>

        <Property name="video.captions.background">
          <Description>The caption background color of the video </Description>
          <PropertyValue type="string">
            <Example defaultValue>"rgba(0, 0, 0, 0.7)"</Example>
          </PropertyValue>
        </Property>

        <Property name="video.icons.closedCaption">
          <Description>The icon to use for the caption.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<ClosedCaption />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="video.icons.configure">
          <Description>
            The icon to use for the configuration action.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Actions />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="video.icons.fullScreen">
          <Description>
            The icon to use for viewing the video in full screen.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Expand />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="video.icons.pause">
          <Description>The icon to use for pausing the video.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Pause />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="video.icons.play">
          <Description>The icon to use for playing the video.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Play />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="video.icons.reduceVolume">
          <Description>
            The icon to use for the action of lowering the volume.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<VolumeLow />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="video.icons.volume">
          <Description>
            The icon to use for the action of raising the volume.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Volume />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="video.scrubber.color">
          <Description>The background color of the video scrubber.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"light-4"</Example>
          </PropertyValue>
        </Property>

        <Property name="video.extend">
          <Description>Any additional style for Video.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const VideoItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <CirclePlay color="brand" size="xlarge" />
  </Item>
);

VideoItem.propTypes = Item.propTypes;
