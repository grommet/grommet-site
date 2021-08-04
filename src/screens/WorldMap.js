import React from 'react';
import { WorldMap } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericFill,
  GenericGridArea,
  GenericMargin,
} from '../utils/genericPropExamples';
import { GenericExtend, GenericColor } from '../utils/genericThemeExamples';
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

const WorldMapDoc = () => (
  <Page>
    <ComponentDoc
      name="WorldMap"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Visualizations-WorldMap&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/worldmap&module=%2Fsrc%2FWorldMap.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A map of the world, or a continent"
      intrinsicElement="svg"
      code={`<WorldMap
  color="neutral-1"
  continents={[
    {
      name: 'Africa',
      color: 'light-5',
      onClick: (name) => {},
    },
  ]}
  onSelectPlace={(lat, lon) => {}}
  places={[
    {
      name: 'Sydney',
      location: [-33.8830555556, 151.216666667],
      color: 'accent-2',
      onClick: (name) => {},
    },
  ]}
  selectColor="accent-2"
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

        <Property name="color">
          <Description>
            Color when hovering over places while selecting.
          </Description>
          <GenericColor />
        </Property>

        <Property name="continents">
          <Description>Continent details.</Description>
          <PropertyValue type="array">
            <Example>
              {`
[
  {
    name: "string",
    color: "string" | { dark: "white", light: "black" },
    onClick: (name) => {},
    onHover: (name) => {}
  },
]
            `}
            </Example>
            <PropOptions prop="name">
              <Example>"Africa"</Example>
              <Example>"Asia"</Example>
              <Example>"Australia"</Example>
              <Example>"Europe"</Example>
              <Example>"North America"</Example>
              <Example>"South America"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="fill">
          <Description>
            Whether the width and/or height should fill the container.
          </Description>
          <GenericFill />
        </Property>

        <Property name="onSelectPlace">
          <Description>
            Called when the user clicks on a place. It is passed the location.
          </Description>
          <PropertyValue type="function">
            <Example>{`([lat, lon]) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="places">
          <Description>Place details.</Description>
          <PropertyValue type="array">
            <Description>
              'location' is an array of two numeric values that indicates the
              latitude and longitude of the specified location.
            </Description>
            <Example>
              {`
[
  {
    color: "string" | 
      { dark: "string", light: "string" },
    name: "Sydney",
    location: [
      -33.8830555556, 
      151.216666667
    ],
    onClick: function,
    onHover: function
  },
]
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="hoverColor">
          <Description>
            Color when hovering over places while selecting.
          </Description>
          <GenericColor />
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="worldMap.color">
          <Description>
            The color for each individual dot when a color is not passed as a
            prop.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"light-3"</Example>
          </PropertyValue>
        </Property>

        <Property name="worldMap.continent.active">
          <Description>
            The size of the visual dots belonging to a continent when the
            continent is being hovered.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"8px"</Example>
          </PropertyValue>
        </Property>

        <Property name="worldMap.continent.base">
          <Description>
            The size of the visual dots belonging to a continent that is not
            being hovered.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"6px"</Example>
          </PropertyValue>
        </Property>

        <Property name="worldMap.hover.color">
          <Description>
            The color for an individual dot when it is being hovered.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"light-4"</Example>
          </PropertyValue>
        </Property>

        <Property name="worldMap.place.active">
          <Description>
            The size of a visual dot for an individual place in the map when it
            is being hovered.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"20px"</Example>
          </PropertyValue>
        </Property>

        <Property name="worldMap.place.base">
          <Description>
            The size of the visual dot representing an individual place in the
            map when it is not being hovered.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"8px"</Example>
          </PropertyValue>
        </Property>

        <Property name="worldMap.extend">
          <Description>Any additional style for the WorldMap.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default WorldMapDoc;

export const WorldMapItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="medium">
    <WorldMap color="brand" />
  </Item>
);

WorldMapItem.propTypes = Item.propTypes;
