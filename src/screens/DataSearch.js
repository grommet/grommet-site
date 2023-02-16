import React from 'react';
import { Data, DataSearch, Toolbar } from 'grommet';
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

const DataSearchPage = () => (
  <Page>
    <ComponentDoc
      name="DataSearch"
      stable
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataSearch',
          label: 'Github',
        },
      ]}
      description="Search input for Data"
      intrinsicElement="input"
      code={`<Data
  data={[{ name: 'Scott' }, { name: 'Zelda' }]}
>
  <Toolbar><DataSearch /></Toolbar>
  <DataTable />
</Data>`}
    />

    <Properties>
      <Property name="drop">
        <Description>Whether to show the search via a DropButton.</Description>
        <PropertyValue type="boolean">
          <Example>true</Example>
        </PropertyValue>
      </Property>
    </Properties>

    <Properties>
      <Property name="responsive">
        <Description>Whether the serach is responsive.</Description>
        <PropertyValue type="boolean">
          <Example>true</Example>
        </PropertyValue>
      </Property>
    </Properties>
  </Page>
);

export default DataSearchPage;

export const DataSearchItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[]}>
      <Toolbar>
        <DataSearch />
      </Toolbar>
    </Data>
  </Item>
);

DataSearchItem.propTypes = Item.propTypes;
