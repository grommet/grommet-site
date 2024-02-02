import React from 'react';
import { Data, DataSummary, Toolbar } from 'grommet';
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

const DataSummaryPage = () => (
  <Page>
    <ComponentDoc
      name="DataSummary"
      stable
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataSummary',
          label: 'Github',
        },
      ]}
      description="Summarize Data"
      code={`<Data
  data={[{ name: 'Scott' }, { name: 'Zelda' }]}
>
  <DataSummary />
  <DataTable />
</Data>`}
    >
      <Properties>
        <Property name="messages">
          <Description>
            Customize the messages shown. This can also be driven via Data
            'messages'.
          </Description>
          <PropertyValue type="object">
            <Example>{`"filtered": "{filteredTotal} results of {total} {items}",
    "filteredSingle": "{filteredTotal} result of {total} {items}",
    "items": "items",
    "itemsSingle": "item",
    "selected": "{selected} selected",
    "total": "{total} {items}",
    "totalSingle": "{total} {items}"`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DataSummaryPage;

export const DataSummaryItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[]}>
      <Toolbar>
        <DataSummary />
      </Toolbar>
    </Data>
  </Item>
);

DataSummaryItem.propTypes = Item.propTypes;
