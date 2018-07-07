import React, { Component } from 'react';

import { RangeInput } from 'grommet';
import doc from 'grommet/components/RangeInput/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(RangeInput).toJSON();

class RangeInputDoc extends Component {
  state = {
    value: 0,
  }

  render() {
    const { value } = this.state;
    return (
      <Page>
        <Doc
          name='RangeInput'
          desc={desc}
          examples={{
            value: (
              <RangeInput
                value={value}
                onChange={event => this.setState({ value: event.target.value })}
              />
            ),
          }}
        />
      </Page>
    );
  }
}

export default RangeInputDoc;
