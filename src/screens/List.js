import React from 'react';
import { List } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBool,
  GenericGridArea,
  GenericMargin,
  GenericPad,
} from '../utils/genericPropExamples';
import { GenericExtend, GlobalHoverColor } from '../utils/genericThemeExamples';
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
      name="List"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Visualizations-List&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
      ]}
      description="An ordered list of items"
      intrinsicElement="ol"
      code={`<List
  primaryKey="name"
  secondaryKey="percent"
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

        <Property name="action">
          <Description>
            Accepts a function that allows for a custom rendering of a
            component.
          </Description>
          <PropertyValue type="function">
            <Description>
              The function should be passed with an item and index of an array
              and return a react element.
            </Description>
            <Example>{`({item, index}) => <Content />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <PropertyValue type="string">
            <Description>The name of a component.</Description>
            <Example>"ul"</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="background">
          <Description>Item background.</Description>
          <PropertyValue type="string">
            <Example>"light-2"</Example>
          </PropertyValue>
          <PropertyValue type="array[string]">
            <Description>
              An array value indicates that items should have different
              backgrounds, modulo the array index.
            </Description>
            <Example>["white", "light-2"]</Example>
          </PropertyValue>
        </Property>

        <Property name="border">
          <Description>Item border.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"horizontal"</Example>
            <Example>"vertical"</Example>
            <Example>"top"</Example>
            <Example>"bottom"</Example>
            <Example>"right"</Example>
            <Example>"left"</Example>
            <Example>"start"</Example>
            <Example>"end"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: "string" | { dark: "string", light: "string" },
  side: "horizontal",
  size: "small"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="data">
          <Description>Array of data objects.</Description>
          <PropertyValue type="array[string]">
            <Example>["item1", "item2"]</Example>
          </PropertyValue>
          <PropertyValue type="array[object]">
            <Example>
              {`[
  { city: "Boise", state: "Idaho" },
  { city: "Fort Collins", state: "Colorado" }
]`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="children">
          <Description>
            Function that will be called when each data item is rendered. It
            will be passed three arguments, the individual data item, its index,
            and an object indicating the state of the item, if any. It should
            return a react element.
          </Description>
          <PropertyValue type="function">
            <Example>{`(item, index, { active }) => <Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="itemProps">
          <Description>
            Item specific background, border, and pad, keyed by data index. The
            background, border, and pad accept the same values as the same named
            properties on List.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ 27: { background: ..., border: ..., pad: ... }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onMore">
          <Description>
            Use this to indicate that 'data' doesn't contain all that it could.
            It will be called when all of the data items have been rendered.
            This might be used when the total number of items that could be
            retrieved is more than you'd want to load into the browser. 'onMore'
            allows you to lazily fetch more from the server only when needed.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onClickItem">
          <Description>
            When supplied, this function will be called with an event object
            which includes an 'item' property containing the data value
            associated with the clicked item and an 'index' property containing
            the index in 'data' of the clicked item. You should not include
            interactive elements, like Anchor or Button inside 'primaryKey' or
            'secondaryKey' as that can cause confusion with overlapping
            interactive elements.
          </Description>
          <PropertyValue type="function">
            <Example>{`({ item, index }) => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onOrder">
          <Description>
            Use this to indicate that the user should be allowed to re-order the
            data items. This cannot be used with 'paginate' or 'onClickItem'.
            The function will be called with the array of items in their new
            order when the user moves items via drag and drop or the move
            up/down controls.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pad">
          <Description>Item padding.</Description>
          <GenericPad />
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

        <Property name="primaryKey">
          <Description>
            When a string is supplied, it indicates the property in a data item
            object to use to get the primary content. If a function is supplied,
            it will be called with the current data item object and should
            return a React element that will be rendered as the primary content.
          </Description>
          <PropertyValue type="string">
            <Example>"property"</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Example>{`item => (<Text>{item.entry}</Text>)`}</Example>
          </PropertyValue>
        </Property>

        <Property name="secondaryKey">
          <Description>
            When a string is supplied, it indicates the property in a data item
            object to use to get the secondary content. If a function is
            supplied, it will be called with the current data item object and
            should return a React element that will be rendered as the secondary
            content.
          </Description>
          <PropertyValue type="string">
            <Example>"secondaryProperty"</Example>
          </PropertyValue>
          <PropertyValue type="function">
            <Example>{`item => (<Text>{item.entry}</Text>)`}</Example>
          </PropertyValue>
        </Property>

        <Property name="show">
          <Description>The index of an item or page to show.</Description>
          <PropertyValue type="number">
            <Description>
              If provided as a number, the index of an item to show.
            </Description>
            <Example>15</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              If using paginate and provided as an object, the default page to
              show.
            </Description>
            <Example>{`{ page: 2 }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="step">
          <Description>How many items to render at a time.</Description>
          <PropertyValue type="number">
            <Example defaultValue>50</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.hover.background">
          <Description>
            The background style when hovering over an interactive item.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"active"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ color: "active", opacity: "medium" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.hover.color">
          <Description>
            The text color when hovering over an interactive item.
          </Description>
          <GlobalHoverColor />
        </Property>

        <Property name="list.container">
          <Description>
            When using paginate, any valid Box props for the container
            surrounding the List and Pagination components.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ gap: "small" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="list.container.extend">
          <Description>
            Any additional style for the container surrounding the List and
            Pagination components.
          </Description>
          <GenericExtend />
        </Property>

        <Property name="list.extend">
          <Description>Any additional style for the list.</Description>
          <GenericExtend />
        </Property>

        <Property name="list.icons.down">
          <Description>
            The icon to use for the move down button in re-ordable lists.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormDown />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="list.icons.up">
          <Description>
            The icon to use for the move up button in re-ordable lists.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormUp />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="list.item.background">
          <Description>Background color for list items.</Description>
          <PropertyValue type="string">
            <Example>"background"</Example>
          </PropertyValue>
          <PropertyValue type="array[string]">
            <Example>["background", "background-contrast"]</Example>
          </PropertyValue>
        </Property>

        <Property name="list.item.border">
          <Description>Border for list items.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example defaultValue>"horizontal"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: "string" | { dark: "string", light: "string" },
  side: "horizontal",
  size: "small"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="list.item.pad">
          <Description>Pad for list items.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "medium", vertical: "small" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="list.item.extend">
          <Description>Any additional style for the list items.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const ListItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <List
      data={['One', 'Two', 'Three']}
      pad={{ horizontal: 'small', vertical: 'xsmall' }}
    />
  </Item>
);

ListItem.propTypes = Item.propTypes;
