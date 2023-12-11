import React from 'react';
import {
  Data,
  // DataClearFilters
} from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

const DataClearFilters = () => (
  <Page>
    <ComponentDoc
      name="DataClearFilters"
      stable
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataClearFilters',
          label: 'Github',
        },
      ]}
      description="a button that clears any applied filters"
      code={`<Data
  data={[{ name: 'Scott' }, { name: 'Zelda' }]}
>
  <Toolbar><DataClearFilters /></Toolbar>
  <DataTable />
</Data>`}
      isA={{
        base: 'Button',
        path: '/button',
      }}
    />
  </Page>
);

export default DataClearFilters;

export const DataClearFiltersItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[]}><DataClearFilters /></Data>
  </Item>
);

DataClearFiltersItem.propTypes = Item.propTypes;
