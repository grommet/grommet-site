import React from 'react';

import { Box, DataTable } from 'grommet';
import { doc } from 'grommet/components/DataTable/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(DataTable).toJSON();

export default () => (
  <Page>
    <Doc
      name="DataTable"
      desc={desc}
      code={`<DataTable
  columns={[
    {
      property: 'name',
      header: <Text>Name</Text>,
      primary: true,
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
  ]}
  data={[
    { name: 'Alan', percent: 20 },
    { name: 'Bryan', percent: 30 },
    { name: 'Chris', percent: 40 },
    { name: 'Eric', percent: 80 },
  ]}
/>`}
    />
  </Page>
);

export const DataTableItem = ({ name, path }) => (
  <Item name={name} path={path} center>
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

DataTableItem.propTypes = Item.propTypes;
