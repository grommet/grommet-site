import React from 'react';
import { Data, DataFilter, Toolbar } from 'grommet';
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

const DataFilterPage = () => (
  <Page>
    <ComponentDoc
      name="DataFilter"
      stable
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataFilter',
          label: 'Github',
        },
      ]}
      description="Filter one property in data"
      code={`<Data
  data={[{ age: 12 }, { age: 91 }]}
>
  <Toolbar><DataFilter property="age" /></Toolbar>
  <DataTable />
</Data>`}
    >
      <Properties>
        <Property name="options">
          <Description>
            The set of possible values for the property. Should not be used with
            'range'.
          </Description>
          <PropertyValue type="array of strings">
            <Example>{`['US', 'NZ']`}</Example>
          </PropertyValue>
          <PropertyValue type="array of objects">
            <Example>{`[
  { label: 'United States', value: 'US' },
  { label: 'New Zealand', value: 'NZ' },
]`}</Example>
          </PropertyValue>
        </Property>

        <Property name="property">
          <Description>The property to filter.</Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>

        <Property name="range">
          <Description>
            The range of numeric values. Should not be used with 'options'. If
            not specified, the default step will be calculated as (max - min) / 20.
          </Description>
          <PropertyValue type="object">
            <Example>{`{ min: 1, max: 100, step: 5 }`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DataFilterPage;

export const DataFilterItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[{}]}>
      <Toolbar>
        <DataFilter property="age" range={{ min: 1, max: 100 }} />
      </Toolbar>
    </Data>
  </Item>
);

DataFilterItem.propTypes = Item.propTypes;
