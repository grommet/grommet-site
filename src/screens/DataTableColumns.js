import React from 'react';
import { Data, DataTableColumns, Toolbar } from 'grommet';
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

const DataTableColumnsPage = () => (
  <Page>
    <ComponentDoc
      name="DataTableColumns"
      stable
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/DataTableColumns',
          label: 'Github',
        },
      ]}
      description="Customize DataTable columns for Data"
      code={`<Data
  data={[{ id: 1, name: 'Scott', age: 12 }, { id: 2, name: 'Zelda', age: 91 }]}
>
  <Toolbar><DataTableColumns options={['id', 'name', 'age']} drop /></Toolbar>
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

        <Property name="options">
          <Description>The set of possible columns.</Description>
          <PropertyValue type="array of strings">
            <Example>{`['id', 'name', 'age']`}</Example>
          </PropertyValue>
          <PropertyValue type="array of objects">
            <Description>
              An array of objects that can include a `label`, `property` in
              which is the value as well as any of CheckBox props excluding the
              'checked' property, use 'property' prop instead of 'checked'.
            </Description>
            <Example>{`[
  { label: 'Id', property: 'id', disabled: true },
  { label: 'Name', property: 'name' },
  { label: 'Age', property: 'age' },
]`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default DataTableColumnsPage;

export const DataTableColumnsItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Data data={[]}>
      <Toolbar>
        <DataTableColumns drop options={['name', 'age']} />
      </Toolbar>
    </Data>
  </Item>
);

DataTableColumnsItem.propTypes = Item.propTypes;
