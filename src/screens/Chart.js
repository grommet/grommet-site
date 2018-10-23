import React from 'react';

import { Box, Chart } from 'grommet';
import { doc, docCalcs } from 'grommet/components/Chart/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';

const desc = doc(Chart).toJSON();
const Dummy = () => (<div />);
const descCalcs = docCalcs(Dummy).toJSON();

const BOUNDS = [[0, 7], [0, 100]];

const VALUES = [
  { value: [7, 100], label: 'one hundred' },
  { value: [6, 70], label: 'seventy' },
  { value: [5, 60], label: 'sixty' },
  { value: [4, 80], label: 'eighty' },
  { value: [3, 40], label: 'forty' },
  { value: [2, 0], label: 'zero' },
  { value: [1, 30], label: 'thirty' },
  { value: [0, 60], label: 'sixty' },
];

const VALUES2 = [
  { value: [7, 0, 100], label: 'one hundred' },
  { value: [6, 10, 70], label: 'seventy' },
  { value: [5, 20, 60], label: 'sixty' },
  { value: [4, 60, 80], label: 'eighty' },
  { value: [3, 30, 40], label: 'forty' },
  { value: [2, 0], label: 'zero' },
  { value: [1, 10, 30], label: 'thirty' },
  { value: [0, 20, 60], label: 'sixty' },
];

export default () => (
  <Page>
    <Doc
      name='Chart'
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        bounds: [[[0, 10], [0, 100]]],
        color: [
          'accent-1',
          { color: 'accent-1', opacity: true },
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
      examples={{
        color: (
          <Chart
            color='brand'
            bounds={BOUNDS}
            values={VALUES}
            size={{ width: 'small', height: 'xsmall' }}
            aria-label='colored chart'
          />
        ),
        onClick: (
          <Box>
            {['line', 'area'].map(type => (
              <Box key={type} margin={{ bottom: 'xsmall' }}>
                <Chart
                  type={type}
                  round={true}
                  bounds={BOUNDS}
                  onClick={() => alert(`Clicked ${type}`)}
                  values={VALUES}
                  size={{ width: 'small', height: 'xsmall' }}
                  aria-label={`${type} rounded chart`}
                />
              </Box>
            ))}
          </Box>
        ),
        onHover: (
          <Box>
            {['line', 'area'].map(type => (
              <Box key={type} margin={{ bottom: 'xsmall' }}>
                <Chart
                  type={type}
                  round={true}
                  bounds={BOUNDS}
                  onHover={over => console.log(`over ${type} ${over}`)}
                  values={VALUES}
                  size={{ width: 'small', height: 'xsmall' }}
                  aria-label={`${type} rounded chart`}
                />
              </Box>
            ))}
          </Box>
        ),
        round: (
          <Box>
            {['bar', 'line', 'area'].map(type => (
              <Box key={type} margin={{ bottom: 'xsmall' }}>
                <Chart
                  type={type}
                  round={true}
                  bounds={BOUNDS}
                  values={VALUES}
                  size={{ width: 'small', height: 'xsmall' }}
                  aria-label={`${type} rounded chart`}
                />
              </Box>
            ))}
          </Box>
        ),
        thickness: (
          <Box>
            {['xsmall', 'small', 'medium', 'large'].map(thickness => (
              <Box key={thickness} margin={{ bottom: 'xsmall' }}>
                <Chart
                  thickness={thickness}
                  bounds={BOUNDS}
                  values={VALUES}
                  size={{ width: 'small', height: 'xsmall' }}
                  aria-label={`${thickness} thickness chart`}
                />
              </Box>
            ))}
          </Box>
        ),
        type: (
          <Box>
            {['bar', 'line', 'area'].map(type => (
              <Box key={type} margin={{ bottom: 'xsmall' }}>
                <Chart
                  type={type}
                  bounds={BOUNDS}
                  values={VALUES}
                  size={{ width: 'small', height: 'xsmall' }}
                  aria-label={`${type} chart`}
                />
              </Box>
            ))}
          </Box>
        ),
        values: (
          <Box>
            {['bar', 'area'].map(type => (
              <Box key={type} margin={{ bottom: 'xsmall' }}>
                <Chart
                  type={type}
                  bounds={BOUNDS}
                  values={VALUES2}
                  size={{ width: 'small', height: 'xsmall' }}
                  aria-label={`ranged ${type} chart`}
                />
              </Box>
            ))}
          </Box>
        ),
      }}
    />

    <Doc name='calcs' nav={false} desc={descCalcs} />
  </Page>
);
