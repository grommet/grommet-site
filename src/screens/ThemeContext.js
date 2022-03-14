import React from 'react';
import { Paint } from 'grommet-icons';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';

const ThemeContext = () => (
  <Page>
    <ComponentDoc
      name="ThemeContext .Extend"
      pageTitle="ThemeContext"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=undefined-ThemeContext&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/themecontext&module=%2Fsrc%2FThemeContext.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A means of tweaking the theme for contained components"
      code={`<ThemeContext.Extend
  value={
    { 
      global: { 
        colors: { doc: '#ff99cc' } 
      } 
    }
  }
>
  <Box pad="large" background="doc" />
</ThemeContext.Extend>`}
    >
      <Properties>
        <Property name="value">
          <Description>
            Sparse theme object that will be merged with the current theme.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default ThemeContext;

export const ThemeContextItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Paint color="brand" size="xlarge" />
  </Item>
);

ThemeContextItem.propTypes = Item.propTypes;
