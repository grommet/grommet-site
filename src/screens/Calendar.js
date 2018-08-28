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
        />
      </Page>
    );
  }
}
