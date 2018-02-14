import React, { Component } from 'react';

import { Drop } from 'grommet';
import doc from 'grommet/components/Drop/doc';

import Doc from '../components/Doc';

const desc = doc(Drop).toJSON();

export default class DropDoc extends Component {
  render() {
    return (
      <Doc
        name='Drop'
        desc={desc}
      />
    );
  }
}
