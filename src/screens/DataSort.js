import React from 'react';
import { Data, DataSort, Toolbar } from 'grommet';
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

const DataSortPage = () => (
  <Page>
    <ComponentDoc
      name="DataSort"
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataSort',
          label: 'Github',
        },
      ]}
      description="Sort inputs for Data"
      code={`<Data
  data={[{ name: 'Scott' }, { name: 'Zelda' }]}
>
  <Toolbar><DataSort drop /></Toolbar>
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
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DataSortPage;

export const DataSortItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[{}]}>
      <Toolbar>
        <DataSort drop />
      </Toolbar>
    </Data>
  </Item>
);

DataSortItem.propTypes = Item.propTypes;
