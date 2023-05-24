import React from 'react';
import { Descend } from 'grommet-icons';
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
import { GenericBoolFalse } from '../utils/genericPropExamples';

const InfiniteScrollPage = () => (
  <Page>
    <ComponentDoc
      name="InfiniteScroll"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Utilities-InfiniteScroll',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/infinitescroll&module=%2Fsrc%2FInfiniteScroll.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/InfiniteScroll',
          label: 'Github',
        },
      ]}
      description="A container that lazily renders items"
      code={`<Box height="small" overflow="auto">
  <InfiniteScroll items={[1, 2, 3, 4, 5, 6, 7]}>
    {(item) => (
      <Box
        flex={false}
        pad="medium"
        background={\`dark-\${(item % 3) + 1}\`}
      >
        <Text>{item}</Text>
      </Box>
    )}
  </InfiniteScroll>
</Box>`}
    >
      <Properties>
        <Property name="children">
          <Description disableMarkdown>
            Function that will be called when each item is rendered.
          </Description>
          <PropertyValue type="function">
            <Description>
              It will be called with three arguments, the item to render, the
              index of the item, and a ref that should be applied to the
              element.
            </Description>
            <Example>{`{(item, index, ref) => ( <li key={index} ref={ref}> {item} </li> )}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="items">
          <Description>
            The children callback will be called to render each item.
          </Description>
          <PropertyValue type="array[any]">
            <Example>[]</Example>
          </PropertyValue>
        </Property>

        <Property name="onMore">
          <Description>
            Use this to indicate that 'items' doesn't contain all that it could.
          </Description>
          <PropertyValue type="function">
            <Description>
              It will be called when the entire list of items has been rendered.
              This might be used when the total number of items that could be
              retrieved is more than you'd want to load into the browser.
              'onMore' allows you to lazily fetch more from the server only when
              needed.
            </Description>
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="renderMarker">
          <Description disableMarkdown>
            Function that will be called to render the marker element that is
            inserted into the DOM to track when scrolling nears the end of the
            rendered items.
          </Description>
          <PropertyValue type="function">
            <Description>
              {`It will be called with a single element that should
              be wrapped appropriately. This is needed when the default
              element, a <span>, isn't sufficient, such as a row of a 
              table body.`}
            </Description>
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="replace">
          <Description>
            Whether to replace previously rendered items with a generic spacing
            element when they have scrolled out of view. This is more performant
            but means that in-page searching will not find elements that have
            been replaced. In general, this should be set to true within Drop
            containers and false otherwise.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="show">
          <Description>
            Ensure that the item at this index is visible initially.
          </Description>
          <PropertyValue type="number">
            <Example>80</Example>
          </PropertyValue>
        </Property>

        <Property name="step">
          <Description>How many items to render at a time.</Description>
          <PropertyValue type="number">
            <Example defaultValue>50</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default InfiniteScrollPage;

export const InfiniteScrollItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Descend color="brand" size="xlarge" />
  </Item>
);

InfiniteScrollItem.propTypes = Item.propTypes;
