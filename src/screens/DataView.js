import React from 'react';
import { Data, DataView, Toolbar } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

const DataViewPage = () => (
  <Page>
    <ComponentDoc
      name="DataView"
      stable
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataView',
          label: 'Github',
        },
      ]}
      description="Select one of the views in data"
      code={`<Data
  data={[{ age: 12 }, { age: 91 }]}
  views={[
    { name: 'oldest', sort: { property: 'age', direction: 'desc' } },
    { name: 'youngest', sort: { property: 'age', direction: 'asc' } }
  ]}
>
  <Toolbar><DataView /></Toolbar>
  <DataTable />
</Data>`}
    />
  </Page>
);

export default DataViewPage;

export const DataViewItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[{}]} views={[]}>
      <Toolbar>
        <DataView />
      </Toolbar>
    </Data>
  </Item>
);

DataViewItem.propTypes = Item.propTypes;
