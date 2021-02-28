import React from 'react';

import { Spinner } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Spinner/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Spinner).toJSON();

export default () => (
  <Page>
    <Doc name="Spinner" desc={desc} code="<Spinner />" themeDoc={themeDoc} />
  </Page>
);

export const SpinnerItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Spinner />
  </Item>
);

SpinnerItem.propTypes = Item.propTypes;
