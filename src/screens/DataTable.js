import React from 'react';

import { Box, DataTable, Meter, Text } from 'grommet';
import { doc } from 'grommet/components/DataTable/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(DataTable).toJSON();

const columns = [
  {
    property: 'name',
    header: <Text>Name</Text>,
    primary: true,
    search: true,
  },
  {
    property: 'percent',
    header: 'Complete',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    ),
  },
];

const data = [
  { name: 'Alan', percent: 20 },
  { name: 'Bryan', percent: 30 },
  { name: 'Chris', percent: 40 },
  { name: 'Eric', percent: 80 },
  { name: 'Doug', percent: 60 },
  { name: 'Jet', percent: 40 },
  { name: 'Michael', percent: 50 },
  { name: 'Tracy', percent: 10 },
];

export default () => (
  <Page>
    <Doc
      name="DataTable"
      desc={desc}
      example={<DataTable columns={columns} data={data} sortable />}
    />
  </Page>
);

export const DataTableItem = props => (
  <Item {...props} center>
    <Box gap="xsmall">
      <Box background="brand" />
      {[0, 1, 2, 3].map(row => (
        <Box key={row * 100} direction="row" gap="xsmall">
          {[0, 1, 2].map(col => (
            <Box
              key={col * 100 + row * 10}
              background={
                (!row && 'brand') ||
                (!col && { color: 'brand', opacity: 'medium' }) ||
                undefined
              }
              border={col && row ? { color: 'brand' } : undefined}
              width={col ? 'xsmall' : 'xxsmall'}
              pad="small"
            />
          ))}
        </Box>
      ))}
    </Box>
  </Item>
);
