import React from 'react';

import { Box, Card, CardHeader, CardBody, CardFooter } from 'grommet';

import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { GenericExtend } from '../utils/genericThemeExamples';

export default () => (
  <Page>
    <ComponentDoc
      name="Card"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Layout-Card&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Card',
          label: 'Github',
        },
      ]}
      description="A Card is a container of information that provides access to more 
 details"
      intrinsicElement="div"
      code={`<Card  height="small" width="small" background="light-1">
  <CardHeader pad="medium">Header</CardHeader>
  <CardBody pad="medium">Body</CardBody>
  <CardFooter pad={{horizontal: "small"}} background="light-2">
    <Button
    icon={<Icons.Favorite color="red" />}
    hoverIndicator
    />
    <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
  </CardFooter>
</Card>`}
    >
      <ThemeDoc>
        <Property name="card.body">
          <Description>Any valid Box prop for the CardBody.</Description>
          <PropertyValue type="object">
            <Example defaultValue> {`{}`} </Example>
          </PropertyValue>
        </Property>

        <Property name="card.container">
          <Description>Any valid Box prop for the Card container.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ round: "small", elevation: "small" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="card.footer">
          <Description>Any valid Box prop for the CardFooter.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ background: "background-contrast" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="card.header">
          <Description>Any valid Box prop for the CardHeader.</Description>
          <PropertyValue type="object">
            <Example defaultValue> {`{}`} </Example>
          </PropertyValue>
        </Property>

        <Property name="card.hover.container.elevation">
          <Description>
            The elevation to apply to a Card with 'onClick' when it is hovered.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="card.hover.container.extend">
          <Description>
            Any additional style for the card container.
          </Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>

    <ComponentDoc
      name="CardHeader"
      description="The Card Header"
      intrinsicElement="div"
      isA={{
        base: 'Header',
        path: '/header',
      }}
    />

    <ComponentDoc
      name="CardBody"
      description="The body of the card, mostly used for placing content"
      intrinsicElement="div"
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          flex: 'true',
        },
      }}
    />

    <ComponentDoc
      name="CardFooter"
      description="The Card Footer"
      intrinsicElement="div"
      isA={{
        base: 'Footer',
        path: '/footer',
      }}
      pageTitle="Card"
    />
  </Page>
);

export const CardItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="none">
    <Box align="center" pad="small">
      <Card height="small" width="small">
        <CardHeader background="brand" pad="small" />
        <CardBody background="white" />
        <CardFooter background="brand" pad="small" />
      </Card>
    </Box>
  </Item>
);

CardItem.propTypes = Item.propTypes;
