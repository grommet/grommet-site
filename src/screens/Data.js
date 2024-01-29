import React from 'react';
import { Box, Data, DataTable, Paragraph } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  ThemeDoc,
  Description,
  Example,
} from '../components/Doc';

const dataExample = `[
  {
    id: 1, 
    name: 'Scott', 
    age: 24,
    siblings: ['Scarlet', 'Scout'],
    contact: {
      company: 'Acme, Inc.',
      social: '@scotty',
    },
  },
  {
    id: 2, 
    name: 'Zelsa', 
    age: 91,
    siblings: ['Zack', 'Zoe', 'Zelda', 'Zed', 'Ziggy'],
    contact: {
      company: 'Retired',
    },
  },
]`;

const propertiesObjectExample = `{
  name: {
    label: 'Name',
    search: false,
  },
  country: {
    label: 'Country',
    options: ['US', 'UK', 'FR'],
    sort: false,
  },
  status: {
    label: 'Status',
    options: [ 
      {label: 'Visited', value: true}, 
      {label: 'Not visited', value: false}, 
    ],
    filter: false,
  },
  age: {
    { label: 'Age', badge: false },
    range: {
      min: 1,
      max: 120,
      step: 5
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
      <Box>
        <Paragraph size="large">
          Data simplifies the process of managing and presenting data driven
          content. It establishes a context that tracks which filters, search,
          and sort controls have been applied. Using that, it determines what
          subset of the data should be rendered.
        </Paragraph>

        <Paragraph id="default-filter-types" size="large">
          Data provides smart defaults for what kind of filter to render for a
          property based on the type of data and number of unique options.
        </Paragraph>
        <DataTable
          aria-describedby="#default-filter-types"
          alignSelf="start"
          columns={[
            {
              property: 'type',
              header: 'Type',
            },
            {
              property: 'amount',
              header: 'Number of options',
            },
            {
              property: 'filter',
              header: 'Default filter',
            },
          ]}
          data={[
            {
              type: 'string',
              amount: `Less than 5`,
              filter: 'CheckBoxGroup',
            },
            {
              type: 'string',
              amount: `5 or more`,
              filter: 'SelectMultiple',
            },
            {
              type: 'number',
              amount: '--',
              filter: 'RangeSelector',
            },
          ]}
        />

        <Paragraph size="large">
          If a custom filter type is desired, this can be done using a
          compositional approach, where you provide your own component as a
          child to DataFilter.
        </Paragraph>
        <Example>{`<Data>
  <DataFilters>
    <DataFilter property="a">
      <MyCustomFilter />
    </DataFilter>
 </DataFilters>
</Data>`}</Example>
      </Box>
      <Properties>
        <Property name="data">
          <Description>Array of data objects.</Description>
          <PropertyValue type="array">
            <Example>{dataExample}</Example>
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
            this property allows the caller to specify how the label renders and
            which properties should be filterable, searchable, sortable, and
            badgeable (included in DataFilters badge count). By default
            properties will be filterable, searchable, sortable, and badgeable
            unless specified otherwise.
          </Description>
          <Description>
            For numeric data, a 'min', 'max', and 'step' can be specified for
            the range.
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
              DataSearch and DataFilters with `layer` prop.
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
      <ThemeDoc>
        <Property name="data.button.kind">
          <Description>
            The kind of button to render for DataClearFilters, DataFilters,
            DataSearch, DataSort, and DataTableColumns. This can reference any
            button kinds defined in your button theme.
          </Description>
          <PropertyValue type="string">
            <Example>"toolbar"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
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
