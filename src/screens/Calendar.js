import React, { Component } from 'react';
import moment from 'moment';

import { Box, Calendar } from 'grommet';
import doc from 'grommet/components/Calendar/doc';

import Doc from '../components/Doc';

const desc = doc(Calendar).toJSON();

export default class extends Component {
  state = { date: moment().toISOString() }

  render() {
    const { date } = this.state;
    return (
      <Doc
        name='Calendar'
        desc={desc}
        example={
          <Box align='center'>
            <Calendar
              bounds={[
                moment().subtract(2, 'months').startOf('month').toISOString(),
                moment().add(2, 'months').endOf('month').toISOString(),
              ]}
              date={date}
              onSelect={nextDate => this.setState({ date: nextDate })}
            />
          </Box>
        }
      />
    );
  }
}
