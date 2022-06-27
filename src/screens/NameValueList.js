import React from 'react';
import {
  Box,
  Paragraph,
  RoutedAnchor,
  NameValueList,
  NameValuePair,
  Text,
} from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericAlign,
  GenericAlignSelf,
  GenericMargin,
} from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const NameValueListPage = () => (
  <Page>
    <ComponentDoc
      name="NameValueList"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/visualizations-namevaluelist-simple--simple',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/NameValueList',
          label: 'Github',
        },
      ]}
      description="A name-value list displays a group of name-value pairs"
      intrinsicElement="dl"
      code={`<Box width="medium">
  <NameValueList>
    <NameValuePair name="Power">
      <Text color="text-strong">Ok</Text>
    </NameValuePair>
    <NameValuePair name="Health">
      <Text color="text-strong">Critical</Text>
    </NameValuePair>
  </NameValueList>
</Box>`}
    >
      <Box
        alignSelf="start"
        margin={{ top: 'medium' }}
        pad="medium"
        round
        background="light-3"
      >
        <Paragraph margin="none">
          The NameValueList component can be customized with any of the
          properties available in <RoutedAnchor path="/grid" label="Grid" />.
        </Paragraph>
      </Box>
      <Properties>
        <Property name="align">
          <Description>
            How to align the contents along the cross axis. Any 'align-items'
            valid CSS value is accepted, including composed ones such 'first
            baseline' and 'unsafe start'.
          </Description>
          <GenericAlign />
        </Property>

        <Property name="layout">
          <Description>
            The orientation to layout the NameValuePairs.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"column"</Example>
            <Example>"grid"</Example>
          </PropertyValue>
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the component.</Description>
          <GenericMargin />
        </Property>

        <Property name="nameProps">
          <Description>The alignment and width of the name.</Description>
          <PropertyValue type="object">
            <Example>{`{ width: "xsmall", align: "end" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pairProps">
          <Description>
            The orienation to layout the name and value.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ direction: "column" }`}</Example>
            <Example>{`{ direction: "column-reverse" }`}</Example>
            <Example>{`{ direction: "row" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="valueProps">
          <Description>The alignment and width of the value.</Description>
          <PropertyValue type="object">
            <Example>{`{ width: "large", align: "end" }`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="nameValueList.gap">
          <Description>
            The gap to apply when pairProps.direction = row (default). If an
            object is provided, "column" affects the gap size between the name
            and value and "row" affects the gap size between NameValuePairs. If
            a string is provided, a uniform gap will be applied to both.
          </Description>
          <PropertyValue type="object">
            <Example
              defaultValue
            >{`{ column: 'large', row: 'small' }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>
        <Property name="nameValueList.pair.column.gap">
          <Description>
            The gap to apply when pairProps.direction = column. If an object is
            provided, "column" affects the gap size between columns of
            NameValuePairs (applicable when layout = grid) and "row" affects the
            gap size between rows of NameValuePairs. If a string is provided, a
            uniform gap will be applied to both.
          </Description>
          <PropertyValue type="object">
            <Example
              defaultValue
            >{`{ column: 'large', row: 'medium' }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>

    <ComponentDoc
      name="NameValuePair"
      description="One pair within the NameValueList"
      intrinsicElement="div"
    >
      <Properties>
        <Property name="alignSelf">
          <Description>
            How to align along the cross axis when contained in a Box or along
            the column axis when contained in a Grid.
          </Description>
          <GenericAlignSelf />
        </Property>

        <Property name="children">
          <Description>The value of the NameValuePair.</Description>
          <PropertyValue type="node">
            <Example>{`<Anchor>jane.doe@email.com</Anchor>`}</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>500</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>
              "Grommet helps you build responsive and accessible mobile-first
              projects."
            </Example>
          </PropertyValue>
        </Property>

        <Property name="name">
          <Description>The name for the NameValuePair.</Description>
          <PropertyValue type="string">
            <Example>"Created on"</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Text size="small">Description</Text>`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
      <ThemeDoc>
        <Property name="nameValueList.name.width">
          <Description>The width of the name.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="nameValuePair.name">
          <Description>Any valid Text Props for the name.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ weight: 'bold' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="nameValueList.value.width">
          <Description>The width of the value.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="nameValuePair.value">
          <Description>Any valid Text Props for the value.</Description>
          <PropertyValue type="object">
            <Example>{`{ color: 'text-strong' }`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default NameValueListPage;

export const NameValueListItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <NameValueList
      valueProps={{ width: 'xsmall' }}
      pairProps={{ direction: 'column' }}
    >
      <NameValuePair name="Model type">
        <Text size="xsmall">MXQ83700F3</Text>
      </NameValuePair>
    </NameValueList>
  </Item>
);

NameValueListItem.propTypes = Item.propTypes;
