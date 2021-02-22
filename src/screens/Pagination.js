import React from 'react';

import { Pagination } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Pagination/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';
import { genericSyntaxes } from '../utils/props';

const desc = doc(Pagination).toJSON();

export default () => (
  <Page>
    <Doc
      name="Pagination"
      desc={desc}
      code="<Pagination numberItems={237} />"
      syntaxes={{
        ...genericSyntaxes,
        onChange: ['({ page, startIndex, endIndex }) => {...}'],
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const PaginationItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Pagination numberItems={237} />
  </Item>
);

PaginationItem.propTypes = Pagination.propTypes;
