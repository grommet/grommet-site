import React from 'react';
import { Data, DataTableGroupBy, Toolbar } from 'grommet';
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

const DataTableGroupByPage = () => (
  <Page>
    <ComponentDoc
      name="DataTableGroupBy"
      stable
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataTableGroupBy',
          label: 'Github',
        },
      ]}
      description="Customize DataTable groupBy for Data"
      code={`<Data
  data={[{ id: 1, name: 'Scott', country: 'AUS' }, { id: 2, name: 'Zelda', country: 'AUS' }]}
>
  <Toolbar><DataTableGroupBy options={['country']} drop /></Toolbar>
  <DataTable />
</Data>`}
    >
      <Properties>
        <Property name="options">
          <Description>The set of possible columns to group by.</Description>
          <PropertyValue type="array of strings">
            <Example>{`['size', 'state']`}</Example>
          </PropertyValue>
          <PropertyValue type="array of objects">
            <Example>{`[
  { label: 'Size', value: 'size' },
  { label: 'State', value: 'state' },
]`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DataTableGroupByPage;

export const DataTableGroupByItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[]}>
      <Toolbar>
        <DataTableGroupBy drop options={['size', 'state']} />
      </Toolbar>
    </Data>
  </Item>
);

DataTableGroupByItem.propTypes = Item.propTypes;
