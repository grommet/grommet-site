import React from 'react';
import { ThumbsRating } from 'grommet';
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
          url: 'https://storybook.grommet.io/?path=/story/input-form-unsolicited-feedback--un-solicited-feedback',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/ThumbsRating',
          label: 'Github',
        },
      ]}
      description="A Thumbs Rating"
      intrinsicElement="div"
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
            <Example>{`{dark: "black", light: "brand"}`}</Example>
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
            <Example>{`{dark: "black", light: "brand"}`}</Example>
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
