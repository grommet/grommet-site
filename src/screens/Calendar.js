import React, { Component } from 'react';

import { Box, Calendar } from 'grommet';
import { doc } from 'grommet/components/Calendar/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Calendar).toJSON();

export default class extends Component {
  state = { date: (new Date()).toISOString() }

  render() {
    const { date } = this.state;
    return (
      <Page>
        <Doc
          name='Calendar'
          desc={desc}
          example={(
            <Box align='center'>
              <Calendar
                size='small'
                date={date}
                onSelect={nextDate => this.setState({ date: nextDate })}
              />
            </Box>
          )}
          props={{
            animate: 'true false',
            bounds: '[\'2018-09-01\', \'2018-12-31\']',
            date: '\'2018-10-16T12:22:00Z\'',
            dates: `
['2018-10-12', '2018-10-17']
[['2018-10-19', '2018-11-23']]
            `,
            disabled: `
['2018-09-21', '2018-09-27']
[['2018-12-23', '2018-12-26']]
            `,
            header: `
({
  date: Date,
  locale: 'en-US',
  onPreviousMonth: func,
  onNextMonth: func,
  previousInBound: bool,
  nextInBound: bool,
}) => {}
            `,
            locale: '\'en-US\'',
            onReference: '(\'2018-10-22T12:22:00Z\') => {}',
            onSelect: '(\'2018-10-22T12:22:00Z\') => {}',
            range: 'true false',
            reference: '\'2018-10\'',
            showAdjacentDays: 'true false',
            size: '\'small\' \'medium\' \'large\'',
          }}
        />
      </Page>
    );
  }
}
