import React from 'react';

import { DateInput } from 'grommet';
import { doc, themeDoc } from 'grommet/components/DateInput/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(DateInput).toJSON();

export default () => (
  <Page>
    <Doc
      name="DateInput"
      desc={desc}
      code={`<DateInput
  format="mm/dd/yyyy"
  value={(new Date()).toISOString()}
  onChange={({ value }) => {}}
/>`}
      syntaxes={{
        ...genericSyntaxes,
        value: ['2018-10-16T12:22:00Z', ['2018-10-12', '2018-10-17']],
        onChange: '({ value }) => {}',
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const DateInputItem = ({ name, path }) => (
  <Item name={name} path={path} center pad={{ horizontal: 'xlarge' }}>
    <DateInput format="mm/dd/yyyy" disabled />
  </Item>
);

DateInputItem.propTypes = Item.propTypes;
