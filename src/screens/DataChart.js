import React from 'react';

import { Box, DataChart, Paragraph } from 'grommet';
import { doc, themeDoc } from 'grommet/components/DataChart/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(DataChart).toJSON();

export default () => (
  <Page>
    <Box
      alignSelf="center"
      align="center"
      background="status-disabled"
      pad={{ horizontal: 'large', vertical: 'small' }}
      margin={{ bottom: 'medium' }}
      round
    >
      <Paragraph size="large">
        NOTE: DataChart is an experimental component. Its properties are likely
        to change in a way that breaks compatibility. It will not abide by
        semantic versioning rules until this note is removed. We are publishing
        it to make it easier for it to be evaluated. Please send your feedback
        in the #general channel on slack.
      </Paragraph>
    </Box>
    <Doc
      name="DataChart"
      desc={desc}
      themeDoc={themeDoc}
      code={`<DataChart
  chart={{ key: 'amount' }}
  data={[
    { date: '2020-05-26', amount: 66 },
    { date: '2020-05-27', amount: 77 },
    { date: '2020-05-28', amount: 88 },
  ]}
/>`}
      syntaxes={{
        ...genericSyntaxes,
        chart: [
          [{ key: 'amount' }],
          [
            {
              key: 'amount',
              type: 'line',
              color: 'graph-1',
              thickness: 'medium',
              dash: true,
              round: true,
            },
          ],
          [
            {
              keys: [{ key: 'amount' }, { key: 'percent' }],
              thickness: 'medium',
            },
          ],
        ],
        data: [
          [
            {
              date: '2020-05-28',
              amount: 88,
              percent: 20,
            },
            {
              date: '2020-05-27',
              amount: 77,
              percent: 15,
            },
          ],
        ],
        gap: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
        pad: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
        size: ['fill', { height: '...', width: '...' }],
        thickness: ['hair', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
        xAxis: [
          true,
          {
            guide: true,
            key: 'date',
            labels: 2,
            render: '(dataIndex, axisIndex) => element',
          },
        ],
        yAxis: [
          true,
          {
            guide: true,
            labels: 3,
            render: '(value, axisIndex) => element',
          },
        ],
      }}
    />
  </Page>
);

const DATA_CHART_DATA = [
  { date: '2020-01-15', amount: 33 },
  { date: '2020-02-15', amount: 11 },
  { date: '2020-03-15', amount: 22 },
  { date: '2020-04-15', amount: 66 },
  { date: '2020-05-15', amount: 88 },
];

export const DataChartItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <DataChart
      aria-label="DataChart example"
      size={{ width: 'small', height: 'xsmall' }}
      data={DATA_CHART_DATA}
      chart={{ key: 'amount', color: 'brand' }}
      thickness="medium"
      gap="xsmall"
      xAxis={{
        labels: 2,
        render: i =>
          new Date(DATA_CHART_DATA[i].date).toLocaleDateString('en-US', {
            month: 'short',
          }),
      }}
      yAxis={{ guide: true, labels: 2 }}
    />
  </Item>
);

DataChartItem.propTypes = Item.propTypes;
