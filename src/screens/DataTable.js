import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
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
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBool,
  GenericBoolTrue,
  GenericGridArea,
  GenericMargin,
  GenericFill,
} from '../utils/genericPropExamples';
import { GenericExtend, GenericColor } from '../utils/genericThemeExamples';

const DataTablePage = () => (
  <Page>
    <ComponentDoc
      name="DataTable"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Visualizations-DataTable',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/datatable&module=%2Fsrc%2FDataTable.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataTable',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/datatable"
      description="A data driven table"
      intrinsicElement="table"
      code={`<DataTable
  columns={[
  {
    property: 'name',
    header: <Text>Name</Text>,
    primary: true,
  },
  {
    property: 'percent',
    header: 'Complete',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    ),
  },
  ]}
  data={[
    { name: 'Alan', percent: 20 },
    { name: 'Bryan', percent: 30 },
    { name: 'Chris', percent: 40 },
    { name: 'Eric', percent: 80 },
  ]}
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

        <Property name="allowSelectAll">
          <Description>
            Whether or not to show the select all CheckBox in the DataTable
            header when `onSelect` is defined.
          </Description>
          <GenericBoolTrue />
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

        <Property name="background">
          <Description>Cell background.</Description>
          <PropertyValue type="string">
            <Example>"light-2"</Example>
          </PropertyValue>
          <PropertyValue type="array">
            <Description>
              If you pass an array, rows will cycle between the array values.
            </Description>
            <Example>["white", "light-2"]</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              You can set the background per context by passing an object with
              keys for 'heading', 'body', and/or 'footer'.
            </Description>
            <Example>
              {`
{
  header: "dark-2",
  body: ["white", "light-2"],
  footer: { dark: "light-2", light: "dark-3" }
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="border">
          <Description>Cell border.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"horizontal"</Example>
            <Example>"vertical"</Example>
            <Example>"top"</Example>
            <Example>"bottom"</Example>
            <Example>"right"</Example>
            <Example>"left"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              You can set the border per context by passing an object with keys
              for 'heading', 'body', and/or 'footer'.
            </Description>
            <Example>
              {`
{
  color: "border",
  side: "horizontal",
  size: "small"
}
            `}
            </Example>
            <Example>
              {`
{
  header: "bottom",
  body: {
    color: "light-2",
    side: "bottom"
  },
  footer: "top"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="columns">
          <Description>A description of the data.</Description>
          <PropertyValue type="array">
            <Description>
              The order controls the column order. 'property' indicates which
              property in the data objects to associate the column with.
              'header' indicates what to display in the column header. 'render'
              allows for custom rendering of body cells. Use 'render' for custom
              formatting for things like currency and date or to display rich
              content like Meters. 'align' indicates how the cells in the column
              are aligned. 'aggregate' indicates how the data in the column
              should be aggregated. This only applies to a footer or groupBy
              context. 'footer' indicates what should be shown in the footer for
              the column. 'search' indicates whether a search filter should be
              made available for the column. 'primary' indicates that this
              property should be used as the unique identifier, which gives the
              cell 'row' scope for accessibility. If 'primary' is not used for
              any column, and 'primaryKey' isn't specified either, then the
              first column will be used. 'pin' indicates that this column should
              not scroll out of view to the left when the table is scrolled
              horizontally. 'plain' = true indicates that the body cells in the
              column will not apply pad.
            </Description>
            <Example>
              {`
[
  {
    align: "...",
    aggregate: "...",
    footer: node | { aggregate: "..." },
    header: string | node | { aggregate: "..." },
    pin: boolean,
    plain: boolean,
    primary: boolean,
    property: "string",
    render: function,
    search: boolean,
    sortable: boolean,
    size: "...",
    units: "string",
    verticalAlign: "..."
  }
]
            `}
            </Example>
            <PropOptions prop="align">
              <Example>"start"</Example>
              <Example>"center"</Example>
              <Example>"end"</Example>
            </PropOptions>
            <PropOptions prop="aggregate">
              <Example>"avg"</Example>
              <Example>"max"</Example>
              <Example>"min"</Example>
              <Example>"sum"</Example>
            </PropOptions>
            <PropOptions prop="size">
              <Example>"small"</Example>
              <Example>"medium"</Example>
              <Example>"large"</Example>
              <Example>"xlarge"</Example>
              <Example>"1/2"</Example>
              <Example>"1/4"</Example>
              <Example>"2/4"</Example>
              <Example>"3/4"</Example>
              <Example>"1/3"</Example>
              <Example>"2/3"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="verticalAlign">
              <Example>"middle"</Example>
              <Example>"top"</Example>
              <Example>"bottom"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="data">
          <Description>Array of data objects.</Description>
          <PropertyValue type="array">
            <Example>{`[{}]`}</Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>
            When supplied, disables 'onClickRow' and 'onSelect' interaction for
            the indicated rows. The values in this array should match the
            'primaryKey' or 'columns[].primary' keyed value for the row's data
            object.
          </Description>
          <PropertyValue type="array">
            <Example>["string"]</Example>
            <Example>[number]</Example>
          </PropertyValue>
        </Property>

        <Property name="fill">
          <Description>
            Whether the width and/or height should fill the container.
          </Description>
          <GenericFill />
        </Property>

        <Property name="groupBy">
          <Description>Property to group data by.</Description>
          <PropertyValue type="string">
            <Example>"location"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              If object is specified 'property' is used to group data by,
              'expand' accepts array of group keys that sets expanded groups and
              'onExpand' is a function that will be called after expand button
              is clicked with an array of keys of expanded groups. If 'onUpdate'
              is being used to lazy load group items, 'expandable' can be used
              to specify which items in the data are group header items and
              'select' and 'onSelect' can be specified in 'groupBy' to help
              specify the selection state of the groups and handle changes in
              group selection state.
            </Description>
            <Example>
              {`
{
  "property": "location",
  "expand": ["Paris", "Los Angeles"],
  "onExpand": "(key) => {...}"
}
            `}
            </Example>
            <Example>
              {`
{
  "property": "location",
  "expand": ["Paris", "Los Angeles"],
  "expandable": ["Paris", "Los Angeles", "Fort Collins", "San Jose"],
  "select": { "": "some", "Paris": "all", "Los Angeles": "some"}
  "onSelect": (selected, datum, groupBySelected) => {...}
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="onClickRow">
          <Description>
            When supplied, this function will be called with an event object
            that include a 'datum' property containing the data value associated
            with the clicked row. You should not include interactive elements,
            like Anchor or Button inside table cells as that can cause confusion
            with overlapping interactive elements. If onSelect is being used you
            have the option to make the whole row clickable by passing in
            `select` to onClickRow.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ datum }) => {...}`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>'select'</Example>
          </PropertyValue>
        </Property>

        <Property name="rowDetails">
          <Description>
            When supplied, this function will be called with row data. Function
            can return a React Element which will be rendered on expanding the
            row.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onMore">
          <Description>
            Use this to indicate that 'data' doesn't contain all that it could.
            It will be called when all of the data rows have been rendered. This
            might be used when the total number of items that could be retrieved
            is more than you'd want to load into the browser. 'onMore' allows
            you to lazily fetch more from the server only when needed. This
            cannot be combined with properties that expect all data to be
            present in the browser, such as columns.search, sortable, groupBy,
            or columns.aggregate.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSearch">
          <Description>
            When supplied, and when at least one column has 'search' enabled,
            this function will be called with an object with keys for property
            names and values which are the search text strings. This is
            typically employed so a back-end can be used to search through the
            data.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ key: "search text", ... }) => {...}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSelect">
          <Description>
            When supplied, causes checkboxes to be added to each row such that
            the user can indicate which rows should be selected.
          </Description>
          <PropertyValue type="function">
            <Description disableMarkdown>
              {`This function
            will be called with an array of primary key values, suitable to be
            passed to the 'select' property, along with the data item that was changed.
            If you are storing select state via
            a 'useState' hook, you can do something like: '
            <DataTable select={select} onSelect={setSelect} />'.`}
            </Description>
            <Example>{`(selected, datum) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onSort">
          <Description disableMarkdown>
            When supplied, this function will be called with an object with a
            'property' property that indicates which property is being sorted on
            and a 'direction' property that will either be 'asc' or 'desc'.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ property, direction }) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onUpdate">
          <Description disableMarkdown>
            This function provides a way to lazy-load data. It is similar to
            `onMore` except it also allows for lazily providing expanded group
            data and assumes the `data` is already in sorted order. Like
            `onMore`, DataTable will call `onUpdate` when the user has scrolled
            to the end of existing data. `onUpdate` is also called when the sort
            changes or a group is expanded or collapsed by the user. It is
            passed information on the current sort settings and the maximum
            number of items it needs to return. If `groupBy` is specified,
            `data` should include an item for each group also. This item should
            have its own unique value in the property specified as the
            `primaryKey` and this unique key value should be listed in
            `groupBy.expandable` so the DataTable can tell it is a group header.
            `onUpdate` will be passed an array of group keys for groups that are
            currently expanded so it can decide whether to include items for a
            group's members. If the table also has `select` or `onSelect`
            specified, `groupBy` should also include an `onSelect` callback and
            a separate `select` to define the overall selection state of the
            groups. Since DataTable may not have all the items, it is up to the
            onSelect callbacks and onUpdate to determine if groups are fully or
            partially selected and set that in `groupBy.select`.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ expanded, sort, show, count }) => {}`}</Example>
          </PropertyValue>
        </Property>
        <Property name="pad">
          <Description>Cell padding.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xxsmall"</Example>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object can be specified to distinguish horizontal padding,
              vertical padding, and padding on a particular side.
            </Description>
            <Description>
              You can set the padding per context by passing an object with keys
              for 'heading', 'body', and/or 'footer'.
            </Description>
            <Example>
              {`
{
  vertical: "...",
  horizontal: "...",
  top: "...",
  bottom: "...",
  left: "...",
  right: "...",
  start: "...",
  end: "..."
}
        `}
            </Example>
            <Example>
              {`
{
  header: "...",
  body: "...",
  footer: "..."
}
      `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="paginate">
          <Description>Whether to paginate the data.</Description>
          <GenericBool />
          <PropertyValue type="object">
            <Description>
              If providing an object, any Box props or Pagination props are
              valid and will be used to style the underlying pagination
              component.
            </Description>
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pin">
          <Description>
            Whether the header and/or footer should be pinned when not all rows
            are visible. A value of true pins both header and footer.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"header"</Example>
            <Example>"footer"</Example>
          </PropertyValue>
        </Property>

        <Property name="placeholder">
          <Description>
            A text message or any content to place over the table body. For
            example, to say "loading ..." when waiting for data to arrive.
          </Description>
          <PropertyValue type="string">
            <Example>"loading..."</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="primaryKey">
          <Description>
            When supplied, indicates the property for a data object to use to
            get a unique identifier. See also the 'columns.primary' description.
            Use this property when the columns approach will not work for your
            data set. Setting primaryKey to false indicates there should be no
            unique identifier, avoid this as it's less accessible.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"property"</Example>
          </PropertyValue>
        </Property>

        <Property name="replace">
          <Description>
            Whether to replace previously rendered items with a generic spacing
            element when they have scrolled out of view. This is more performant
            but means that in-page searching will not find elements that have
            been replaced.
          </Description>
          <GenericBool />
        </Property>

        <Property name="resizeable">
          <Description>
            Whether to allow the user to resize column widths.
          </Description>
          <GenericBool />
        </Property>

        <Property name="rowProps">
          <Description disableMarkdown>
            Row specific background, border, and pad, keyed by primary key
            value. The background, border, and pad accept the same values as the
            same named properties on DataTable.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ "primary-key-value": { background: ..., border: ..., pad: ... }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="select">
          <Description>
            When supplied, causes checkboxes to be added to each row to indicate
            which rows are selected. The values in this array should match the
            'primaryKey' or 'columns[].primary' keyed value for the row's data
            object. If 'onSelect' is provided, the CheckBoxes are enabled and
            this function can be used to track select changes.
          </Description>
          <PropertyValue type="array">
            <Example>["string"]</Example>
            <Example>[number]</Example>
          </PropertyValue>
        </Property>

        <Property name="show">
          <Description>The item or page to show.</Description>
          <PropertyValue type="number">
            <Description>
              If provided as a number, the index of an item to show.
            </Description>
            <Example>10</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              If using paginate and provided as an object in the format of the
              default page to show.
            </Description>
            <Example>{`{ page: 2 }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            The height of the table body. If set, the table body will have a
            fixed height and the rows will be scrollable within it. In order to
            preserve header and footer cell alignment, all cells will have the
            same width. This cannot be used in combination with 'resizeable'.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
            <Example>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="sort">
          <Description>
            Which property to sort on and which direction to sort. When
            'external' is true, it indicates that the caller will take care of
            sorting the 'data' via 'onSort'. Otherwise, the existing data will
            be sorted within DataTable.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  direction: "asc" | "desc",
  external: boolean,
  property: "string"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="sortable">
          <Description>Whether to allow the user to sort columns.</Description>
          <GenericBool />
        </Property>

        <Property name="step">
          <Description>How many items to render at a time.</Description>
          <PropertyValue type="number">
            <Example defaultValue>50</Example>
          </PropertyValue>
        </Property>

        <Property name="verticalAlign">
          <Description>How to vertically align items.</Description>
          <PropertyValue type="string">
            <Example>"bottom"</Example>
            <Example>"middle"</Example>
            <Example>"top"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  header: "string",
  body: "string",
  footer: "string"
}
              `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.hover.background">
          <Description>
            The background style when hovering over an interactive row.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"active"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ color: 'active', opacity: 'medium' }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.hover.color">
          <Description>
            The text color when hovering over an interactive row.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"black"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: 'white', light: 'black' }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.body.extend">
          <Description>Any additional style for an DataTable Body.</Description>
          <GenericExtend />
        </Property>

        <Property name="dataTable.body.selected">
          <PropertyValue type="object">
            <Description>
              Any additional style for an DataTable selected body.
            </Description>
          </PropertyValue>
        </Property>

        <Property name="dataTable.container">
          <Description>
            When using paginate, any valid Box props for the container
            surrounding the DataTable and Pagination components.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ gap: 'small' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.container.extend">
          <Description>
            Any additional style for the container surrounding the DataTable and
            Pagination components.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="dataTable.groupHeader.background">
          <Description>The background color of the group header.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"light-2"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: 'dark-2', light: 'light-2' }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.groupHeader.border.side">
          <Description>
            The border side rendered for the group header.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"bottom"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.groupHeader.border.size">
          <Description>The border size of the group header border.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"xsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.groupHeader.fill">
          <Description>
            Whether the height should fill the group header.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"vertical"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.groupHeader.pad">
          <Description>The pad used for the group header.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "small", vertical: "xsmall" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header">
          <Description>Styles for the header.</Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  gap: "small",
  units: {
    color: "text-xweak",
    margin: { left: "xsmall" }
  }
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header.background">
          <Description>Any valid Box background value.</Description>
          <PropertyValue type="string">
            <Example>"background"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ dark: string, light: string }`}</Example>
            <Example>
              {`
{
  color: { dark: string, light: string } | string,
  dark: bool,
  image: string,
  position: string,
  opacity: bool | string,
  repeat: no-repeat | repeat,
  size: cover | contain | string
}            
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header.border">
          <Description>Any valid Box border value.</Description>
          <PropertyValue type="string">
            <Example>"bottom"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: string | { dark: string, light: string },
  size: "medium",
  style: "dashed",
  side: "all"
}              
              `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header.color">
          <Description>The label and icon color in a header cell.</Description>
          <GenericColor />
        </Property>

        <Property name="dataTable.header.extend">
          <Description>Any additional styles for header cells.</Description>
          <GenericExtend />
        </Property>

        <Property name="dataTable.header.font.weight">
          <Description>The font weight for text in header cells.</Description>
          <PropertyValue type="string">
            <Example>"bold"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header.font.size">
          <Description>The font size for text in header cells.</Description>
          <PropertyValue type="string">
            <Example>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header.gap">
          <Description>
            The gap between elements within the header cell.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header.hover.background">
          <Description>
            The hover background color of the header cell contents, if
            clickable. Any valid Box background options apply.
          </Description>
          <PropertyValue type="string">
            <Example>"background"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ dark: string, light: string }`}</Example>
            <Example>
              {`
{
  color: { dark: string, light: string } | string,
  dark: bool,
  image: string,
  position: string,
  opacity: bool | string,
  repeat: no-repeat | repeat,
  size: cover | contain | string
}            
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header.pad">
          <Description>
            The pad around the contents of the header cell.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "small", vertical: "xsmall" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.header.units">
          <Description>
            Any Text component properties for styling the header's units text.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  color: "text-xweak",
  margin: { left: "xsmall" }
}
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.resize.hover.color">
          <Description>The color of the resizer when hovered over.</Description>
          <GenericColor />
        </Property>

        <Property name="dataTable.resize.hover.side">
          <Description>
            The side of the resizer when hovered over. If color or size are
            defined, this will default to 'end' which is the recommended value.
          </Description>
          <PropertyValue type="string">
            <Example>"end"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.resize.hover.size">
          <Description>
            The size of the resizer when hovered over. Size values correspond
            with those accepted by Box border.
          </Description>
          <PropertyValue type="string">
            <Example>"2px"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.icons.ascending">
          <Description>The ascending icon.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormDown />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.icons.contract">
          <Description>The contract icon.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormUp />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.icons.descending">
          <Description>The descending icon.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormUp />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.icons.expand">
          <Description>The expand icon.</Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormDown />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.icons.sortable">
          <Description>The icon indicating a column can be sorted.</Description>
          <PropertyValue type="element">
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.pinned.body.background">
          <Description>Any valid Box background options apply.</Description>
          <PropertyValue type="string">
            <Example>"background"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ dark: string, light: string }`}</Example>
            <Example>
              {`
{
  color: { dark: string, light: string } | string,
  dark: bool,
  image: string,
  position: string,
  opacity: bool | string,
  repeat: no-repeat | repeat,
  size: cover | contain | string
}            
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.pinned.body.extend">
          <Description>
            Any additional styles for pinned body cells.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="dataTable.pinned.header.background">
          <Description>Any valid Box background options apply.</Description>
          <PropertyValue type="string">
            <Example>"background"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ dark: string, light: string }`}</Example>
            <Example>
              {`
{
  color: { dark: string, light: string } | string,
  dark: bool,
  image: string,
  position: string,
  opacity: bool | string,
  repeat: no-repeat | repeat,
  size: cover | contain | string
}            
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.pinned.header.extend">
          <Description>
            Any additional styles for pinned header cells.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="dataTable.pinned.footer.background">
          <Description>Any valid Box background options apply.</Description>
          <PropertyValue type="string">
            <Example>"background"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ dark: string, light: string }`}</Example>
            <Example>
              {`
{
  color: { dark: string, light: string } | string,
  dark: bool,
  image: string,
  position: string,
  opacity: bool | string,
  repeat: no-repeat | repeat,
  size: cover | contain | string
}            
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.pinned.footer.extend">
          <Description>
            Any additional styles for pinned footer cells.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="dataTable.primary.weight">
          <Description>The font weight for primary cells.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"bold"</Example>
          </PropertyValue>
        </Property>

        <Property name="dataTable.resize.border.color">
          <Description>The border color for resize.</Description>
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

        <Property name="dataTable.resize.border.side">
          <Description>The border side used for resize.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"right"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.row.hover.background">
          <Description>
            The background color when hovering over an interactive row.
          </Description>
          <GenericColor />
        </Property>

        <Property name="table.row.hover.color">
          <Description>
            The text color when hovering over an interactive row.
          </Description>
          <GenericColor />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default DataTablePage;

export const DataTableItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box gap="xsmall">
      <Box background="brand" />
      {[0, 1, 2, 3].map((row) => (
        <Box key={row * 100} direction="row" gap="xsmall">
          {[0, 1, 2].map((col) => (
            <Box
              key={col * 100 + row * 10}
              background={
                (!row && 'brand') ||
                (!col && { color: 'brand', opacity: 'medium' }) ||
                undefined
              }
              border={col && row ? { color: 'brand' } : undefined}
              width={col ? 'xsmall' : 'xxsmall'}
              pad="small"
            />
          ))}
        </Box>
      ))}
    </Box>
  </Item>
);

DataTableItem.propTypes = Item.propTypes;
