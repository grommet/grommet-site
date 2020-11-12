import React from 'react';

import { Anchor, Box, DataChart, Heading, Paragraph } from 'grommet';
import { doc, themeDoc } from 'grommet/components/DataChart/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';
import { Code } from '../components/Doc/Code';

const desc = doc(DataChart).toJSON();
delete desc.availableAt;
delete desc.description;

const Examples = () => (
  <Box>
    <Box
      alignSelf="start"
      margin={{ top: 'medium' }}
      pad="medium"
      round
      background="light-3"
    >
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
    <Paragraph size="xlarge">
      DataChart takes an array of objects in <code>data</code> and provides
      various visualization capabilities on that data. It attempts to default as
      much as it possibly can to make it easy to get started and then customize
      later. What follows is some guidance on how to get started and then delve
      into what DataChart can do.
    </Paragraph>

    <Heading level={2}>series</Heading>
    <Paragraph size="large">
      To begin with, give your DataChart some data and set the{' '}
      <code>series</code> property to indicate which properties in the data
      objects should be used.
    </Paragraph>
    <Code
      basis={['1/3', '2/3']}
      code={`() => {
  const data = [{ date: '2020-08-20', amount: 2 }, { date: '2020-08-21', amount: 47 }, { date: '2020-08-22', amount: 33 }];
  return (
    <DataChart data={data} series={['date', 'amount']} />
  );
}`}
      name="series"
    />
    <Paragraph>
      Note that the X and Y axis are defaulted and the dates are automatically
      formatted based on the granularity given.
    </Paragraph>

    <Heading level={2}>chart</Heading>
    <Paragraph size="large">
      Next, we can customize the kind of chart we are looking at.
    </Paragraph>
    <Code
      basis={['1/3', '2/3']}
      code={`() => {
  const data = [{ date: '2020-08-20', amount: 2 }, { date: '2020-08-21', amount: 47 }, { date: '2020-08-22', amount: 33 }];
  return (
    <DataChart
      data={data}
      series={['date', 'amount']}
      chart={[
        { property: 'amount', type: 'line', opacity: 'medium', thickness: 'xsmall', round },
        { property: 'amount', type: 'point', point: 'star', thickness: 'medium' }
      ]}
    />
  );
}`}
      name="series"
    />

    <Heading level={2}>axis and guide</Heading>
    <Paragraph size="large">
      Next, we can customize the axis and add guide lines.
    </Paragraph>
    <Code
      basis={['1/3', '2/3']}
      code={`() => {
  const data = [{ date: '2020-08-20', amount: 2 }, { date: '2020-08-21', amount: 47 }, { date: '2020-08-22', amount: 33 }];
  return (
    <DataChart
      data={data}
      series={['date', { property: 'amount', prefix: '$' }]}
      chart={[
        { property: 'amount', type: 'line', opacity: 'medium', thickness: 'xsmall', round },
        { property: 'amount', type: 'point', point: 'star', thickness: 'medium' }
      ]}
      guide={{ x: { granularity: 'fine' } }}
    />
  );
}`}
      name="series"
    />
  </Box>
);

export default () => (
  <Page>
    <Doc
      name="DataChart"
      align="stretch"
      desc={desc}
      text=""
      examples={<Examples />}
      themeDoc={themeDoc}
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
