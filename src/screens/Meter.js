import React, { Component } from 'react';

import { Box, Meter } from 'grommet';
import { doc } from 'grommet/components/Meter/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';

const desc = doc(Meter).toJSON();

const SINGLE_VALUE = [
  // eslint-disable-next-line no-alert
  { value: 60, label: 'sixty', onClick: () => alert('60') },
];
const MULTIPLE_VALUES = [
  {
    // eslint-disable-next-line no-alert
    value: 60,
    label: 'sixty',
    color: 'neutral-1',
    onClick: () => alert('60'),
  },
  {
    // eslint-disable-next-line no-alert
    value: 10,
    label: 'ten',
    color: 'accent-1',
    onClick: () => alert('10'),
  },
];

export default class MeterDoc extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onHover(index) {
    return b => this.setState({ highlight: b ? index : undefined });
  }

  render() {
    const { highlight } = this.state;
    const multipleValues = MULTIPLE_VALUES.map((value, index) => ({
      ...value,
      highlight: index === highlight,
      onHover: this.onHover(index),
    }));
    return (
      <Page>
        <Doc
          name="Meter"
          desc={desc}
          syntaxes={{
            ...genericSyntaxes,
            backgroundColor: [
              'light-2',
              {
                color: 'light-2',
                opacity: 'medium',
              },
            ],
            values: [
              [{ value: 75 }],
              [
                {
                  value: 45,
                  color: 'accent-1',
                  highlight: false,
                  label: 'utilization',
                  onClick: '() => {}',
                  onHover: '(true) => {}',
                },
              ],
            ],
          }}
          example={<Meter values={SINGLE_VALUE} aria-label="meter" />}
          examples={{
            background: (
              <Meter
                background={{ color: 'light-4', opacity: 'medium' }}
                size="xsmall"
                values={SINGLE_VALUE}
                aria-label="meter"
              />
            ),
            round: (
              <Meter
                round
                size="xsmall"
                values={SINGLE_VALUE}
                aria-label="rounded meter"
                background={{ color: 'light-4', opacity: 'medium' }}
              />
            ),
            thickness: (
              <Box direction="row" justify="end" wrap>
                {['xsmall', 'small', 'medium', 'large', 'xlarge'].map(
                  thickness => (
                    <Box key={thickness} margin="xsmall">
                      <Meter
                        thickness={thickness}
                        size="xsmall"
                        values={SINGLE_VALUE}
                        aria-label={`${thickness} thickness meter`}
                        background={{ color: 'light-4', opacity: 'medium' }}
                      />
                    </Box>
                  ),
                )}
              </Box>
            ),
            type: (
              <Box direction="row" justify="end" wrap>
                {['bar', 'circle'].map(type => (
                  <Box key={type} margin="xsmall">
                    <Meter
                      type={type}
                      size="xsmall"
                      values={SINGLE_VALUE}
                      aria-label={`${type} meter`}
                      background={{ color: 'light-4', opacity: 'medium' }}
                    />
                  </Box>
                ))}
              </Box>
            ),
            values: (
              <Box direction="row" justify="end" wrap>
                <Box margin="xsmall">
                  <Meter
                    size="xsmall"
                    values={multipleValues}
                    aria-label="multiple value meter"
                    background={{ color: 'light-4', opacity: 'medium' }}
                  />
                </Box>
                <Box margin="xsmall">
                  <Meter
                    round
                    size="xsmall"
                    values={multipleValues}
                    aria-label="multiple value meter"
                    background={{ color: 'light-4', opacity: 'medium' }}
                  />
                </Box>
                <Box margin="xsmall">
                  <Meter
                    round
                    type="circle"
                    size="xsmall"
                    values={multipleValues}
                    aria-label="multiple value meter"
                    background={{ color: 'light-4', opacity: 'medium' }}
                  />
                </Box>
              </Box>
            ),
          }}
        />
      </Page>
    );
  }
}
