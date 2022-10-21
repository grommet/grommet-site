import React from 'react';
import { Spinner } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericColor } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const SpinnerPage = () => (
  <Page>
    <ComponentDoc
      name="Spinner"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Visualizations-Spinner&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/spinner&module=%2Fsrc%2FSpinner.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Spinner',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/spinner"
      description="A Spinner"
      code="<Spinner />"
    >
      <Properties>
        <Property name="size">
          <Description>A fixed size.</Description>
          <PropertyValue type="string">
            <Example>"xsmall"</Example>
            <Example defaultValue>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="color">
          <Description>The border color of the Spinner.</Description>
          <GenericColor />
        </Property>

        <Property name="message">
          <Description>
            Custom message for Spinner. Used for accessibility by screen
            readers.
          </Description>
          <PropertyValue type="string">
            <Description>
              When message is a string, the message will be announced for screen
              readers once the Spinner is loaded.
            </Description>
            <Example>"spinner loaded"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              When an object, the 'start' message will be announced as the
              Spinner appears, and the 'end' message as the spinner closes.
            </Description>
            <Example>
              {`
{
  start: "string",
  end: "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="spinner.container">
          <Description>
            Any valid Box prop for the Spinner container.
          </Description>
          <PropertyValue type="object">
            <Description>
              'color' is used for the spinner border color and 'size' for the
              default size of the Spinner.
            </Description>
            <Example defaultValue>
              {`
{
  animation: "rotateRight", 
  color: "brand",
  pad: "small", 
  round: "full", 
  size: "small"
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="spinner.icon">
          <Description>The default Spinner visualization.</Description>
          <PropertyValue type="node">
            <Description>
              A react element or SVG to use as the default Spinner.
            </Description>
            <Example>{`<Icon />`}</Example>
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG" />
        </Property>

        <Property name="spinner.size.xsmall">
          <Description>The xsmall size of the Spinner.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="spinner.size.small">
          <Description>The small size of the Spinner.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="spinner.size.medium">
          <Description>The medium size of the Spinner.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"48px"</Example>
          </PropertyValue>
        </Property>

        <Property name="spinner.size.large">
          <Description>The large size of the Spinner.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"72px"</Example>
          </PropertyValue>
        </Property>

        <Property name="spinner.size.xlarge">
          <Description>The xlarge size of the Spinner.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"96px"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default SpinnerPage;

export const SpinnerItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Spinner
      message={{
        start: 'Data is loading',
        end: 'Data has been successfully load',
      }}
    />
  </Item>
);

SpinnerItem.propTypes = Item.propTypes;
