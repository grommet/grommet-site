import React from 'react';

import { Anchor, Box, DataChart, Paragraph } from 'grommet';
import { doc, themeDoc } from 'grommet/components/DataChart/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(DataChart).toJSON();

export default () => (
  <Page>
    <Box alignSelf="center" pad="medium" round background="light-3">
      <Paragraph margin="none">
        DataChart is in beta mode. We anticipate making API surface changes
        without changing the grommet major version number. This is to allow
        broader usage and feedback gathering. In version 2.15.0, the API surface
        changed, see{' '}
        <Anchor href="https://github.com/grommet/grommet/pull/4226#issue-439480100">
          notes
        </Anchor>
        .
      </Paragraph>
    </Box>
    <Doc
      name="DataChart"
      desc={desc}
      themeDoc={themeDoc}
      code={`<DataChart
  series={['date', 'amount']}
  data={[
    { date: '2020-05-26', amount: 66 },
    { date: '2020-05-27', amount: 77 },
    { date: '2020-05-28', amount: 88 },
  ]}
/>`}
      syntaxes={{
        ...genericSyntaxes,
        axis: {
          x: [
            true,
            {
              granularity: ['coarse', 'medium', 'fine'],
              property: 'date',
            },
          ],
          y: [
            true,
            {
              granularity: ['coarse', 'medium', 'fine'],
              property: 'amount',
            },
          ],
        },
        chart: [
          [
            'amount',
            {
              property: 'amount',
              type: ['area', 'bar', 'line', 'point'],
              color: 'graph-1',
              thickness: 'medium',
              dash: true,
              round: true,
            },
            {
              property: ['amount', 'percent'],
              type: 'bars',
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
        series: [
          [
            'propertyName',
            {
              label: 'Property Label',
              prefix: '$',
              property: 'propertyName',
              render: '(value, datam, dataIndex) => element',
              suffix: '%',
            },
          ],
        ],
        thickness: ['hair', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
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
      series={['date', 'amount']}
      chart={[
        {
          property: 'amount',
          type: 'line',
          color: 'brand',
          opacity: 'medium',
          thickness: 'xsmall',
        },
        {
          property: 'amount',
          type: 'point',
          point: 'diamond',
          color: 'brand',
          thickness: 'medium',
        },
      ]}
      guide={{ x: true }}
      pad="xsmall"
      axis={{
        x: { granularity: 'medium' },
        y: { granularity: 'coarse' },
      }}
    />
  </Item>
);

DataChartItem.propTypes = Item.propTypes;
