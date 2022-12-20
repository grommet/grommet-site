import React from 'react';
import { StarRating } from 'grommet';
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

const StarRatingPage = () => (
  <Page>
    <ComponentDoc
      name="StarRating"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/input-form-solicited-feedback--solicited-feedback',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/StarRating',
          label: 'Github',
        },
      ]}
      description="A Star Rating"
      code="<StarRating />"
    >
      <ThemeDoc>
        <Property name="starRating.color">
          <Description>
            The color of the label text and icon strokes.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light mode.
            </Description>
            <Example>{`{dark: "black", light: "brand"}`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default StarRatingPage;

export const StarRatingItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <StarRating />
  </Item>
);

StarRatingItem.propTypes = Item.propTypes;
