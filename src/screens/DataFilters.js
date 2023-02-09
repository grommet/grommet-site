import React from 'react';
import { Data, DataFilters, Toolbar } from 'grommet';
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
      <Properties>
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
