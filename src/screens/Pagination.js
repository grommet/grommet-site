import React from 'react';
import { Pagination } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
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
} from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="Pagination"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Controls-Pagination&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://github.com/grommet/grommet/tree/master/src/js/components/Pagination',
          label: 'Github',
        },
      ]}
      description="A control that enables selection of a single page from a 
 range of pages"
      intrinsicElement="nav"
      code="<Pagination numberItems={237} />"
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

        <Property name="numberEdgePages">
          <Description>
            The number of pagination buttons visible at the start and end of
            page range.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>1</Example>
          </PropertyValue>
        </Property>

        <Property name="numberItems">
          <Description>The total number of items to paginate.</Description>
          <PropertyValue type="number">
            <Example>10</Example>
          </PropertyValue>
        </Property>

        <Property name="numberMiddlePages">
          <Description>
            The number of pagination buttons visible in the middle of the
            controls.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>3</Example>
          </PropertyValue>
        </Property>

        <Property name="onChange">
          <Description>
            Function called when the user clicks a page or arrow button.
          </Description>
          <PropertyValue type="function">
            <Description>
              The single argument is an event containing the target page via
              'event.page', and the startIndex and endIndex for items contained
              in the target page via 'event.startIndex' and 'event.endIndex',
              respectively.
            </Description>
            <Example>{`({ page, startIndex, endIndex }) => {...}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page">
          <Description>
            The default page. If used with onChange, it can be used to control
            the active page via state.
          </Description>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            Specifies what size the pagination control buttons should be.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
          </PropertyValue>
        </Property>

        <Property name="step">
          <Description>The number of items per page.</Description>
          <PropertyValue type="number">
            <Example defaultValue> 10 </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="pagination.button">
          <Description>
            Any valid Button theming to apply on the pagination buttons.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  active: {
    background: {
      color: 'active-background',
    },
  },
  color: 'text-strong',
  hover: {
    background: {
      color: 'background-contrast',
    },
    color: undefined,
  },
  size: {
    small: {
      border: {
        radius: 3px,
        width: 2px,
      },
      pad: {
        vertical: 4px,
        horizontal: 4px,
      },
      font: 14px,
      height: 30px,
      width: 30px,
    },
    medium: {
      border: {
        radius: 4px,
        width: 2px,
      },
      pad: {
        vertical: 4px,
        horizontal: 4px,
      },
      font: 18px,
      height: 36px,
      width: 36px,
    },
    large: {
      border: {
        radius: 6px,
        width: 2px,
      },
      pad: {
        vertical: 4px,
        horizontal: 4px,
      },
      font: 22px,
      height: 48px,
      width: 48px,
    },
  },
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pagination.container">
          <Description>
            Any valid Box props for the Box wrapping the pagination controls.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pagination.container.extend">
          <Description>
            Any additional style for the Box wrapping the pagination controls.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="pagination.controls.align">
          <Description>
            How the pagination controls should be aligned within the containing
            Box.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"center"</Example>
          </PropertyValue>
        </Property>

        <Property name="pagination.controls.direction">
          <Description>
            Direction in which the containing Box should display the pagination
            controls.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"row"</Example>
          </PropertyValue>
        </Property>

        <Property name="pagination.controls.gap">
          <Description>Amount of gap spacing between each control.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"xxsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="pagination.controls.margin">
          <Description>Amount of margin surrounding the controls.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"none"</Example>
          </PropertyValue>
        </Property>

        <Property name="pagination.controls.pad">
          <Description>Amount of pad surrounding the controls.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"none"</Example>
          </PropertyValue>
        </Property>

        <Property name="pagination.icons.color">
          <Description>The color used for the icon.</Description>
          <GenericColor />
        </Property>

        <Property name="pagination.icons.next">
          <Description>Icon to use as the 'next page' control.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Next />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pagination.icons.previous">
          <Description>Icon to use as the 'previous page' control.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<Previous />`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const PaginationItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Pagination numberItems={237} />
  </Item>
);

PaginationItem.propTypes = Pagination.propTypes;
