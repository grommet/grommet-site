import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericGridArea,
  GenericMargin,
} from '../utils/genericPropExamples';
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

const AccordionPage = () => (
  <Page>
    <ComponentDoc
      name="Accordion"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Controls-Accordion',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/accordion&module=%2Fsrc%2FAccordion.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Accordion',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/accordion"
      description="An accordion containing collapsible panels"
      intrinsicElement="div"
      code={`<Accordion>
  <AccordionPanel label="Panel 1">
    <Box pad="medium" background="light-2">
      <Text>One</Text>
    </Box>
  </AccordionPanel>
  <AccordionPanel label="Panel 2">
    <Box pad="medium" background="light-2">
      <Text>Two</Text>
    </Box>
  </AccordionPanel>
</Accordion>
    `}
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

        <Property name="activeIndex">
          <Description>
            Active panel index. If specified, Accordion will be a controlled
            component. This means that future panel changes will not work unless
            you subscribe to onActive function and update activeIndex
            accordingly.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>0</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>Can be an array if multiple prop is true.</Description>
            <Example>[0, 2]</Example>
          </PropertyValue>
        </Property>

        <Property name="animate">
          <Description>
            Transition content in and out with a slide down animation.
          </Description>
          <PropertyValue type="boolean">
            <Example defaultValue>true</Example>
            <Example>false</Example>
          </PropertyValue>
        </Property>

        <Property name="children">
          <Description>Array of AccordionPanels.</Description>
          <PropertyValue type="node">
            <Example>{`<AccordionPanel>...</AccordionPanel>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onActive">
          <Description>
            Function that will be called when the active index changes. It will
            always send an array with currently active panel indexes.
          </Description>
          <PropertyValue type="function">
            <Example>{`([0]) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="multiple">
          <Description>Allow multiple panels to be opened at once.</Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
            <Example defaultValue>false</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for Tabs. Used for accessibility by screen readers.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  tabContents: "Tab Contents"
}
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>

    <ComponentDoc
      name="AccordionPanel"
      description="An Accordion panel."
      intrinsicElement="div"
    >
      <Properties>
        <Property name="header">
          <Description>
            If specified, the entire panel header will be managed by the caller.
          </Description>
          <PropertyValue type="node">
            <Example>(renderHeader('Header 2'))</Example>
          </PropertyValue>
        </Property>

        <Property name="label">
          <Description>The panel label.</Description>
          <PropertyValue type="string">
            <Example>"label"</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="accordion.hover.background">
          <Description>
            The background of the accordion panel when hovered.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"background-contrast"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "light-4", light: "dark-3" }`}
            </Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>Any supported Box background.</Description>
            <Example>
              {`
{
  color: "neutral-1",
  dark: true,
  opacity: true,
  position: "bottom",
  repeat: "no-repeat",
  size: "cover",
  image: "url(//my.com/assets/img.png)"
}
              `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="accordion.hover.heading.color">
          <Description>
            The text color of the heading when hovered. Backward compatible with
            accordion.hover.color.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "light-4", light: "dark-3" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.heading.level">
          <Description>The heading level.</Description>
          <PropertyValue type="number">
            <Example defaultValue>4</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.heading.margin">
          <Description>The margin size around the heading.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.icons.collapse">
          <Description>The icon to use when the panel is expanded.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormUp />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.icons.color">
          <Description>The icon color to use in the accordion.</Description>
          <PropertyValue name="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"control"</Example>
          </PropertyValue>
          <PropertyValue name="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.icons.expand">
          <Description>
            The icon to use when the panel is collapsed.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormDown />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.border.color">
          <Description>
            The border color to use in the accordion panel content.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"border"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.border.side">
          <Description>
            The border side to use in the accordion panel content.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"bottom"</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.panel.border.color">
          <Description>
            The border color to use on the accordion panel.
          </Description>
          <GenericColor />
        </Property>

        <Property name="accordion.panel.border.side">
          <Description>
            The border side to use on the accordion panel.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"bottom"</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.panel.border.size">
          <Description>The border size of the accordion panel.</Description>
          <PropertyValue type="string">
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
          </PropertyValue>
        </Property>

        <Property name="accordion.panel.border.style">
          <Description>The border style of the accordion panel.</Description>
          <PropertyValue type="string">
            <Example>"solid"</Example>
            <Example>"dashed"</Example>
            <Example>"dotted"</Example>
            <Example>"double"</Example>
            <Example>"groove"</Example>
            <Example>"ridge"</Example>
            <Example>"inset"</Example>
            <Example>"outset"</Example>
            <Example>"hidden"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default AccordionPage;

export const AccordionItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box width="small">
      <Box pad="small" background="brand" />
      <Box pad="small" background={{ color: 'brand', opacity: 'medium' }} />
      <Box pad="small" background="brand" />
      <Box pad="small" background={{ color: 'brand', opacity: 'medium' }} />
    </Box>
  </Item>
);

AccordionItem.propTypes = Item.propTypes;
