import React from 'react';

import { Chart, Heading, Paragraph } from 'grommet';
import { doc, docCalcs, themeDoc } from 'grommet/components/Chart/doc';

import Page from '../components/Page';
import Doc, { Prop } from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Chart).toJSON();
const Dummy = () => <div />;
const descCalcs = docCalcs(Dummy).toJSON();

export default () => (
  <Page>
    <Doc
      name="Chart"
      desc={desc}
      themeDoc={themeDoc}
      code={`<Chart
  bounds={[[0, 7], [0, 100]]}
  values={[
    { value: [7, 100], label: 'one hundred' },
    { value: [6, 70], label: 'seventy' },
    { value: [5, 60], label: 'sixty' },
    { value: [4, 80], label: 'eighty' },
    { value: [3, 40], label: 'forty' },
    { value: [2, 0], label: 'zero' },
    { value: [1, 30], label: 'thirty' },
    { value: [0, 60], label: 'sixty' },
  ]}
  aria-label="chart"
/>`}
      syntaxes={{
        ...genericSyntaxes,
        bounds: [
          [
            [0, 10],
            [0, 100],
          ],
        ],
        color: [
          'graph-0',
          { color: 'graph-0', opacity: true },
          {
            VALUES: {
              opacity: ['weak', 'medium', 'strong', true],
            },
          },
        ],
        onClick: '() => {}',
        onHover: '(true) => {}',
        size: [
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'fill',
          'full',
          'any CSS size',
          { height: '...', width: '...' },
        ],
        values: [
          [20, 30],
          [{ value: [10, 20] }],
          [
            {
              value: [10, 10, 20],
              label: 'first',
              onClick: '() => {}',
              onHover: '() => {}',
            },
          ],
        ],
      }}
    />

    <Doc title="calcs()" name="calcs" nav={false} desc={descCalcs}>
      <code>
        {`const { axis, bounds, pad, thickness } = calcs(values, { coarseness, steps })`}
      </code>
      <Paragraph>
        <code>calcs()</code> takes an array of values and provides
        recommendations on how to set Chart properties and construct axes.
      </Paragraph>
      <Heading level={2}>options</Heading>
      <Prop
        property={{
          name: 'coarseness',
          description: `affects the precision of the bounds and axes.
        For example, if the values are [27.35, 9.47], higher
        coarseness would bound it from 0-50, lower coarseness would bound it
        from 9-28.`,
          format: 'number',
          defaultValue: 5,
        }}
        first
      />
      <Prop
        property={{
          name: 'steps',
          description: `affects the stepping of the axis values`,
        }}
        syntax="[1, 1]"
        first={false}
      />
      <Heading level={2}>returns</Heading>
      <Prop
        property={{
          name: 'bounds',
          description: `an array of arrays suitable for use with the
          Chart bounds property`,
        }}
        syntax="[[0, 2], [0, 100]]"
        first
      />
      <Prop
        property={{
          name: 'thickness',
          description: `a string suitable for use with the Chart
          thickness property`,
        }}
        syntax="medium"
        first={false}
      />
      <Prop
        property={{
          name: 'pad',
          description: `a string suitable for use with the Chart pad
          property`,
        }}
        syntax="medium"
        first={false}
      />
      <Prop
        property={{
          name: 'axes',
          description: `an array of arrays. The first array is for X axis
          values. The second array is for Y axis values.`,
        }}
        syntax="[[0, 1, 2], [0, 50, 100]]"
        first={false}
      >
        <Paragraph>
          The X axis values could be rendered however you like, perhaps with
          something like:
        </Paragraph>
        <pre>
          <code>
            {`<Box direction="row" justify="between" gap="small">
  {axis[0].map(a => <Text color="text-xweak" />)}
</Box>`}
          </code>
        </pre>
      </Prop>
    </Doc>
  </Page>
);

const CHART_VALUES = [
  { value: [4, 5], label: '4' },
  { value: [3, 2], label: '3' },
  { value: [2, 10], label: '2' },
  { value: [1, 7], label: '1' },
  { value: [0, 3], label: '0' },
];

export const ChartItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Chart
      aria-label="Chart example"
      bounds={[
        [0, 4],
        [0, 10],
      ]}
      size={{ width: 'small', height: 'xsmall' }}
      round
      color="brand"
      values={CHART_VALUES}
    />
  </Item>
);

ChartItem.propTypes = Item.propTypes;
