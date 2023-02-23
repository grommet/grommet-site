import React from 'react';

import { Cards } from 'grommet';

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
} from '../components/Doc';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericAs,
  GenericGridArea,
  GenericMargin,
  GenericPad,
  GenericBool,
} from '../utils/genericPropExamples';

const CardsPage = () => (
  <Page>
    <ComponentDoc
      name="Cards"
      stable
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/visualizations-cards-simple--simple',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Cards',
          label: 'Github',
        },
      ]}
      description="A grid layout used for multiple cards"
      intrinsicElement="div"
      code={`<Cards
      data={[
        'Boise',
        'Fort Collins',
        'Los Gatos',
        'Palo Alto',
        'San Francisco',
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

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <GenericAs />
        </Property>

        <Property name="children">
          <Description>
            Function that will be called when each value is rendered.
          </Description>
          <PropertyValue type="function">
            <Example>{`{(datum) => (
17        <Card key={datum.city} as="li">
18          <CardBody>
19            <Heading level={2} size="small" margin="none">
20              {datum.city}
21            </Heading>
22          </CardBody>
23          <CardFooter>{datum.state}</CardFooter>
24        </Card>
25      )}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="data">
          <Description>The data set.</Description>
          <PropertyValue type="array">
            <Example>
              {`
[
  {
    "date": "2020-05-28",
    "amount": 88,
    "percent": 20
  },
  {
    "date": "2020-05-27",
    "amount": 77,
    "percent": 15
  }
]
            `}
            </Example>
          </PropertyValue>
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

        <Property name="onMore">
          <Description>
            Use this to indicate that 'cards' doesn't contain all that it could.
          </Description>
          <PropertyValue type="function">
            <Description>
              It will be called when the entire cards of items has been
              rendered. This might be used when the total number of cards that
              could be retrieved is more than you'd want to load into the
              browser. 'onMore' allows you to lazily fetch more from the server
              only when needed.
            </Description>
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pad">
          <Description>
            The amount of padding around the Box contents.
          </Description>
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

        <Property name="show">
          <Description>
            Ensure that the item at this index is visible initially.
          </Description>
          <PropertyValue type="number">
            <Example>10</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            The size of the columns given to the grid containing the cards.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
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
        <Property name="cards.container">
          <Description>Any Box properties.</Description>
          <Example defaultValue> {`{}`} </Example>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default CardsPage;

export const CardsItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="none">
    <Cards data={['Boise', 'Fort Collins', 'Los Gatos']} />
  </Item>
);

CardsItem.propTypes = Item.propTypes;
