import React from 'react';
import { Box, Data, DataFilters, Heading, Paragraph, Toolbar } from 'grommet';
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
import RoutedAnchor from '../components/RoutedAnchor';

const DataFiltersPage = () => (
  <Page>
    <ComponentDoc
      name="DataFilters"
      stable
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataFilters',
          label: 'Github',
        },
      ]}
      description="Filters for Data"
      code={`<Data
  data={[{ name: 'Scott' }, { name: 'Zelda' }]}
>
  <Toolbar><DataFilters drop /></Toolbar>
  <DataTable />
</Data>`}
    >
      <Box>
        <Heading level={2}>Default filter types</Heading>
        <Paragraph size="large">
          For details, see{' '}
          <RoutedAnchor path="/data" label="Data default filter types" />.
        </Paragraph>
      </Box>
      <Properties>
        <Property name="clearFilters">
          <Description>
            Whether DataFilters should display a "Clear filters" button when
            filters have been applied. If using DataClearFilters component
            directly, this can be set to false.
          </Description>
          <PropertyValue type="boolean">
            <Example defaultValue>true</Example>
            <Example>false</Example>
          </PropertyValue>
        </Property>

        <Property name="drop">
          <Description>
            Whether to show the controls via a DropButton.
          </Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
          </PropertyValue>
        </Property>

        <Property name="heading">
          <Description>
            Sets a custom heading for the Layer or inline versions.
          </Description>
          <PropertyValue type="string">
            <Example>{`"Custom Filters"`}</Example>
          </PropertyValue>
        </Property>

        <Property name="layer">
          <Description>Whether to show the controls via a Layer.</Description>
          <PropertyValue type="boolean">
            <Example>true</Example>
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
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DataFiltersPage;

export const DataFiltersItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[]}>
      <Toolbar>
        <DataFilters drop />
      </Toolbar>
    </Data>
  </Item>
);

DataFiltersItem.propTypes = Item.propTypes;
