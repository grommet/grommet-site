import React from 'react';

import { RangeInput } from 'grommet';
import { doc, themeDoc } from 'grommet/components/RangeInput/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(RangeInput).toJSON();

export default () => (
  <Page>
    <Doc
      name="RangeInput"
      desc={desc}
      code={`<RangeInput
  value={10}
  onChange={(event) => {/* event.target.value */}}
/>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const RangeInputItem = props => (
  <Item {...props} center pad="large">
    <RangeInput />
  </Item>
);
