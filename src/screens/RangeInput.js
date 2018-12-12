import React, { Component } from 'react';

import { RangeInput } from 'grommet';
import { doc } from 'grommet/components/RangeInput/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(RangeInput).toJSON();

class RangeInputDoc extends Component {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;
    return (
      <Page>
        <Doc
          name="RangeInput"
          desc={desc}
          example={<RangeInput />}
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

export const RangeInputItem = props => (
  <Item {...props} center pad="large">
    <RangeInput />
  </Item>
);
