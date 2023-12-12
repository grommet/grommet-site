import React from 'react';
import { Data, DataClearFilters } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

const DataClearFiltersPage = () => (
  <Page>
    <ComponentDoc
      name="DataClearFilters"
      stable
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/data-dataclearfilters-simple--simple',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataClearFilters',
          label: 'Github',
        },
      ]}
      description="a button that clears any applied filters"
      code={`<Data
  data={[{ name: 'Scott' }, { name: 'Zelda' }]}
>
  <Toolbar align="center">
    <DataFilters clearFilters={false} drop />
    <DataClearFilters />
  </Toolbar>
  <DataTable />
</Data>`}
      isA={{
        base: 'Button',
        path: '/button',
      }}
    />
  </Page>
);

export default DataClearFiltersPage;

export const DataClearFiltersItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[]}>
      <DataClearFilters tabIndex={-1} />
    </Data>
  </Item>
);

DataClearFiltersItem.propTypes = Item.propTypes;
