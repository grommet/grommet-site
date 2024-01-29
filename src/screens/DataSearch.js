import React from 'react';
import { Data, DataSearch, Toolbar } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  Description,
} from '../components/Doc';
import { GenericBool } from '../utils/genericPropExamples';

const DataSearchPage = () => (
  <Page>
    <ComponentDoc
      name="DataSearch"
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
      isA={{
        base: 'TextInput',
        path: '/textinput',
      }}
    >
      <Properties>
        <Property name="drop">
          <Description>
            Whether to show the search via a DropButton.
          </Description>
          <GenericBool />
        </Property>
        <Property name="responsive">
          <Description>Whether the search is responsive.</Description>
          <GenericBool />
        </Property>
      </Properties>
    </ComponentDoc>
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
