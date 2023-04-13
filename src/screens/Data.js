import React from 'react';
import { Data } from 'grommet';
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

const propertiesObjectExample = `{
  name: {
    label: 'Name',
    search: true,
  },
  country: {
    label: 'Country',
    options: ['US', 'UK', 'FR'],
  },
  status: {
    label: 'Status',
    options: [ 
      {label: 'Visited', value: true}, 
      {label: 'Not visited', value: false}, 
    ]
  },
  age: {
    label: 'Age',
    range: {
      min: 1,
      max: 120,
    },
  },
}`;

const viewObjectExample = `{
  properties: {
    country: ['US', 'UK'],
    age: {
      min: 22,
      max: 56,
    },
  },
  search: 'com',
  sort: {
    property: 'date',
    direction: 'desc',
  },
  page: 1,
  step: 50
}`;

const viewsObjectExample = `[
  {
    name: 'English speaking',
    properties: {
      country: ['US', 'UK'],
    },
    search: 'comm',
    sort: {
      property: 'date',
      direction: 'desc',
    },
    step: 50
  },
  {
    name: 'middle age',
    properties: {
      age: {
        min: 40,
        max: 60,
      },
    },
    sort: {
      property: 'age',
      direction: 'asc',
    },
    step: 50
  },
]`;

const messagesObjectExample = `{
  "dataFilters": {
    "clear": "Clear filters",
    "heading": "Filters",
    "open": "Open filters"
  },
  "dataForm": {
    "reset": "Undo changes",
    "submit": "Apply filters"
  },
  "dataSearch": {
    "label": "Search data"
  },
  "dataSort": {
    "ascending": "Ascending",
    "by": "Sort by",
    "descending": "Descending",
    "direction": "Sort direction"
  },
  "dataSummary": {
    "filtered": "{filteredTotal} results of {total} items",
    "filteredSingle": "{filteredTotal} result of {total} items",
    "total": "{total} items"
  },
  "dataTableColumns": {
    "open": "Open column selector",
    "order": "Order columns",
    "select": "Select columns"
  },
}`;

const DataPage = () => (
  <Page>
    <ComponentDoc
      name="Data"
      stable
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Layout-Footer',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Data',
          label: 'Github',
        },
      ]}
      description="Container and context provider for data driven content"
      intrinsicElement="div"
      code={`<Data
  data={[{ name: 'Scott' }, { name: 'Zelda' }]}
  toolbar
>
  <DataTable />
</Data>`}
    >
      <Properties>
        <Property name="data">
          <Description>Array of data objects.</Description>
          <PropertyValue type="array">
            <Example>{`[
  { id: 1, name: 'Scott', age: 12 },
  { id: 2, name: 'Zelsa', age: 91 },
]`}</Example>
          </PropertyValue>
        </Property>

        <Property name="defaultView">
          <Description>The default view of the data.</Description>
          <PropertyValue type="object">
            <Example>{viewObjectExample}</Example>
          </PropertyValue>
        </Property>

        <Property name="filteredTotal">
          <Description>
            The total number of objects that exist in the data set AFTER any
            filtering has been applied. This should be used when retrieving data
            from a paged API where the number of objects in 'data' is only one
            page and the filtered set of data is larger than a page.
          </Description>
          <PropertyValue type="number">
            <Example>270</Example>
          </PropertyValue>
        </Property>

        <Property name="id">
          <Description>
            A unique identifier for the Data. This is required if more than one
            Data is rendered on the page.
          </Description>
          <PropertyValue type="string">
            <Example>"data_1"</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for Data related components.
          </Description>
          <PropertyValue type="object">
            <Example>{messagesObjectExample}</Example>
          </PropertyValue>
        </Property>

        <Property name="onView">
          <Description>
            Function that will be called when the user changes the view. This
            includes, searching, filtering, sorting, and paging. It will be
            called with an object describing the current view. See the 'view'
            property for an example of the object. Callers can combine 'view'
            and 'onView' to use Data as a controlled component.
          </Description>
          <PropertyValue type="function">
            <Example>{`(view) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="properties">
          <Description>
            This describes the objects found in 'data', sort of a schema. Using
            this property overrides the default filters. It allows caller to
            specify how property label renders and which properties should be
            filterable.
          </Description>
          <PropertyValue type="object">
            <Example>{propertiesObjectExample}</Example>
          </PropertyValue>
        </Property>

        <Property name="toolbar">
          <Description>
            Whether to include a toolbar and what to put in it.
          </Description>
          <PropertyValue type="boolean">
            <Description>
              Setting it to 'true' will include a Toolbar containing both
              DataSearch and DataFilters with 'drop'.
            </Description>
            <Example>true</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"search"</Example>
            <Example>"filters"</Example>
          </PropertyValue>
        </Property>

        <Property name="total">
          <Description>
            The total number of objects that exist in the data set BEFORE any
            filtering is applied. This should be used when retrieving data from
            a paged API where the number of objects in 'data' is only one page
            and the entire set of data is larger than a page or when the caller
            is managing filtering to indicate how large the data set is without
            any filters applied.
          </Description>
          <PropertyValue type="number">
            <Example>2700</Example>
          </PropertyValue>
        </Property>

        <Property name="updateOn">
          <Description>
            Whether to change the view on each filter input change or to gather
            multiple changes up into a single submit.
          </Description>
          <PropertyValue type="string">
            <Example>"change"</Example>
            <Example defaultValue>"submit"</Example>
          </PropertyValue>
        </Property>

        <Property name="view">
          <Description>The current view of the data.</Description>
          <PropertyValue type="string">
            <Description>The name of the view in 'views' in use.</Description>
            <Example>"flagged"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>The view used to describe any filtering.</Description>
            <Example>{viewObjectExample}</Example>
          </PropertyValue>
        </Property>

        <Property name="views">
          <Description>The set of predefined views of the data.</Description>
          <PropertyValue type="array">
            <Example>{viewsObjectExample}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DataPage;

export const DataItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[]} toolbar />
  </Item>
);

DataItem.propTypes = Item.propTypes;
