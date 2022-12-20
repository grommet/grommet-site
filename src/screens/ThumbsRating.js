import React from 'react';
import { Markdown, ThumbsRating } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const ThumbsRatingPage = () => (
  <Page>
    <ComponentDoc
      name="ThumbsRating"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Visualizations-Spinner&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Spinner',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/spinner"
      description="A Thumbs Rating"
      code="<ThumbsRating />"
    >
      <ThemeDoc>
        <Property name="thumbsRating.dislike.color">
          <Description>The color of the dislike icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light mode.
            </Description>
            <Example defaultValue>
              <Markdown>{`{"dark": "black", "light": "brand"}`}</Markdown>
            </Example>
          </PropertyValue>
        </Property>
        <Property name="thumbsRating.like.color">
          <Description>The color of the like icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light mode.
            </Description>
            <Example>
              {`{dark: "black", light: "brand"}`}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default ThumbsRatingPage;

export const ThumbsRatingItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <ThumbsRating />
  </Item>
);

ThumbsRatingItem.propTypes = Item.propTypes;
