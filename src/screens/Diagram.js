import React from 'react';
import { Box, Diagram, Stack } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericBool } from '../utils/genericPropExamples';
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
import { EdgeStyle } from '../utils/themeDocUtils';

const connection = (fromTarget, toTarget, { color, ...rest } = {}) => ({
  fromTarget,
  toTarget,
  color: color || 'graph-0',
  thickness: 'xsmall',
  round: true,
  type: 'rectilinear',
  ...rest,
});

const DiagramPage = () => (
  <Page>
    <ComponentDoc
      name="Diagram"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Visualizations-Diagram&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/diagram&module=%2Fsrc%2FDiagram.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Diagram',
          label: 'Github',
        },
      ]}
      description="Graphical connection lines"
      intrinsicElement="svg"
      code={`<Stack guidingChild={1}>
  <Diagram
    connections={[
      {
        fromTarget: '1',
        toTarget: '2',
        thickness: 'xsmall',
        color: 'graph-0',
      },
      {
        fromTarget: '1',
        toTarget: '4',
        thickness: 'xsmall',
        color: 'graph-1',
        type: 'rectilinear',
      },
    ]}
  />
  <Box>
    <Box direction="row">
      <Box id="1" margin="small" pad="medium" background="light-4" />
      <Box id="2" margin="small" pad="medium" background="light-4" />
    </Box>
    <Box direction="row">
      <Box id="3" margin="small" pad="medium" background="light-4" />
      <Box id="4" margin="small" pad="medium" background="light-4" />
    </Box>
  </Box>
</Stack>`}
    >
      <Properties>
        <Property name="animation">
          <Description>Animation to be used by entire Diagram.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"pulse"</Example>
            <Example>"draw"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  type: "pulse" | "draw",
  delay: number | "string",
  duration:  number | "string",
  size: "xsmall" | "small" | "medium" | "large" | "xlarge"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="connections">
          <Description>
            Array of objects describing the connections.
          </Description>
          <PropertyValue type="array">
            <Description>
              The 'fromTarget' and 'toTarget' may be either DOM element ids or
              React references. 'animation' can be used to give specific
              connections their own animation. 'offset' can be used to shift a
              bit to reduce the amount of overlap with other connection lines to
              make the lines easier to distinguish.
            </Description>
            <Example>
              {`
[
  {
    anchor: "center",
    animation: "...",
    color: "graph-0",
    fromTarget: "my-dom-id-1",
    label: "link 5",
    offset: "...",
    thickness: "medium",
    toTarget: "my-dom-id-2",
    type: "rectilinear"
  }
]
            `}
            </Example>
            <PropOptions prop="anchor">
              <Example>"center"</Example>
              <Example>"vertical"</Example>
              <Example>"horizontal"</Example>
            </PropOptions>
            <PropOptions prop="offset">
              <Example>"xsmall"</Example>
              <Example>"small"</Example>
              <Example>"medium"</Example>
              <Example>"large"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="thickness">
              <Example>"hair"</Example>
              <Example>"xxsmall"</Example>
              <Example>"xsmall"</Example>
              <Example>"small"</Example>
              <Example>"medium"</Example>
              <Example>"large"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="type">
              <Example>"direct"</Example>
              <Example>"curved"</Example>
              <Example>"rectilinear"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="diagram.animation">
          <Description>
            Configuration for draw and pulse animations in Diagram.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{ 
  pulse: {
    duration: 1000,
  }, 
  draw: {
    duration: 2000,
  },
}
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="diagram.extend">
          <Description>Any additional style for Diagram.</Description>
          <GenericExtend />
        </Property>

        <Property name="diagram.line.color">
          <Description>The color of the connection line.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"graph-0"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="global.animation">
          <Description>The animation configuration for Diagram.</Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  duration: "1s",
  jiggle: { duration: "0.1s" }
}
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.colors">
          <Description>Color options.</Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  "icon": { "dark": "#f8f8f8", "light": "#666666" },
  "active": "rgba(221, 221, 221, 0.5)",
  "background-back": { "dark": "#33333308", "light": "#EDEDED" },
  "background-front": { "dark": "#444444", "light": "#FFFFFF" },
  "background-contrast": { "light": "#33333310", "dark": "#FFFFFF18" },
  "active-background": "background-contrast",
  "active-text": "text-strong",
  "black": "#000000",
  "border": { "dark": "rgba(255, 255, 255, 0.33)", "light": "rgba(0, 0, 0, 0.33)" },
  "brand": "#7D4CDB",
  "control": { "dark": "accent-1", "light": "brand" },
  "focus": "#6FFFB0",
  "graph-0": "accent-1",
  "graph-1": "neutral-1",
  "graph-2": "neutral-2",
  "graph-3": "neutral-3",
  "graph-4": "neutral-4",
  "placeholder": "#AAAAAA",
  "selected": "brand",
  "text": { "dark": "#f8f8f8", "light": "#444444" },
  "text-strong": { "dark": "#FFFFFF", "light": "#000000" },
  "text-weak": { "dark": "#CCCCCC", "light": "#555555" },
  "text-xweak": { "dark": "#BBBBBB", "light": "#666666" },
  "selected-background": "brand",
  "selected-text": "text-strong",
  "white": "#FFFFFF",
  "accent-1": "#6FFFB0",
  "accent-2": "#FD6FFF",
  "accent-3": "#81FCED",
  "accent-4": "#FFCA58",
  "dark-1": "#333333",
  "dark-2": "#555555",
  "dark-3": "#777777",
  "dark-4": "#999999",
  "dark-5": "#999999",
  "dark-6": "#999999",
  "light-1": "#F8F8F8",
  "light-2": "#F2F2F2",
  "light-3": "#EDEDED",
  "light-4": "#DADADA",
  "light-5": "#DADADA",
  "light-6": "#DADADA",
  "neutral-1": "#00873D",
  "neutral-2": "#3D138D",
  "neutral-3": "#00739D",
  "neutral-4": "#A2423D",
  "status-critical": "#FF4040",
  "status-error": "#FF4040",
  "status-warning": "#FFAA15",
  "status-ok": "#00C781",
  "status-unknown": "#CCCCCC",
  "status-disabled": "#CCCCCC",
  "background": { "light": "#ffffff", "dark": "#000000" }
}
              `}
            </Example>
          </PropertyValue>
        </Property>

        <EdgeStyle description="The possible sizes for the connections thickness and offset." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default DiagramPage;

const itemProps = {
  color: 'brand',
  thickness: 'xsmall',
  round: true,
};

export const DiagramItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Stack>
      <Box>
        <Box direction="row">
          {[1, 2, 3].map((id) => (
            <Box
              key={id}
              id={id}
              basis="xxsmall"
              margin="small"
              pad="medium"
              round="full"
              background={{ color: 'brand', opacity: 'medium' }}
            />
          ))}
        </Box>
        <Box direction="row">
          {[4, 5, 6, 7].map((id) => (
            <Box
              key={id}
              id={id}
              basis="xxsmall"
              margin="small"
              pad="medium"
              round="full"
              background={{ color: 'brand', opacity: 'medium' }}
            />
          ))}
        </Box>
      </Box>
      <Diagram
        connections={[
          connection('2', '4', itemProps),
          connection('3', '5', itemProps),
          connection('2', '5', itemProps),
          connection('3', '6', itemProps),
          connection('6', '7', itemProps),
        ]}
      />
    </Stack>
  </Item>
);

DiagramItem.propTypes = Item.propTypes;
