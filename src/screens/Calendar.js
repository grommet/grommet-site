import React, { Component } from 'react';

import { Box, Calendar } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Calendar/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Calendar).toJSON();

export default class extends Component {
  state = { date: new Date().toISOString() };

  render() {
    const { date } = this.state;
    return (
      <Page>
        <Doc
          name="Calendar"
          desc={desc}
          example={
            <Box align="center">
              <Calendar
                size="small"
                date={date}
                onSelect={nextDate => this.setState({ date: nextDate })}
              />
            </Box>
          }
          syntaxes={{
            ...genericSyntaxes,
            animate: [true, false],
            bounds: [['2018-09-01', '2018-12-31']],
            date: '2018-10-16T12:22:00Z',
            dates: [
              ['2018-10-12', '2018-10-17'],
              [['2018-10-19', '2018-11-23']],
            ],
            disabled: [
              ['2018-09-21', '2018-09-27'],
              [['2018-12-23', '2018-12-26']],
            ],
            firstDayOfWeek: [0, 1],
            header: `({
  date: Date,
  locale: "en-US",
  onPreviousMonth: func,
  onNextMonth: func,
  previousInBound: bool,
  nextInBound: bool,
}) => {}`,
            locale: 'en-US',
            onReference: "('2018-10-22T12:22:00Z') => {}",
            onSelect: "('2018-10-22T12:22:00Z') => {}",
            range: [true, false],
            reference: '2018-10',
            showAdjacentDays: [true, false],
            size: ['small', 'medium', 'large'],
            'calendar.icons.next': '<Next />',
            'calendar.icons.previous': '<Previous />',
            'calendar.icons.small.next': '<FormNext />',
            'calendar.icons.small.previous': '<FormPrevious />',
          }}
          themeDoc={themeDoc}
        />
      </Page>
    );
  }
}

export const CalendarItem = props => (
  <Item {...props} center>
    <Box flex={false} gap="xsmall">
      {[0, 1, 2, 3, 4].map(week => (
        <Box key={week * 100} flex direction="row" gap="xsmall">
          {[0, 1, 2, 3, 4, 5, 6].map(day => (
            <Box
              key={week * 100 + day * 10}
              flex={false}
              pad="xsmall"
              round
              background={{
                color: 'brand',
                opacity:
                  (week === 0 && day < 3 && 'weak') ||
                  (week === 1 && day === 5 && 'strong') ||
                  (week === 4 && day > 4 && 'weak') ||
                  'medium',
              }}
            />
          ))}
        </Box>
      ))}
    </Box>
  </Item>
);
