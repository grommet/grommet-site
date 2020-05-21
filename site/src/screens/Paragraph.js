import React from 'react';

import { Paragraph } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Paragraph/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Paragraph).toJSON();

const extendedGenericSyntaxes = JSON.parse(JSON.stringify(genericSyntaxes));
extendedGenericSyntaxes.margin.unshift('none');

export default () => (
  <Page>
    <Doc
      name="Paragraph"
      desc={desc}
      syntaxes={{
        ...extendedGenericSyntaxes,
        color: 'neutral-1',
      }}
      code={`<Paragraph margin="none">
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
</Paragraph>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const ParagraphItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Paragraph>
      OASIS was much more than a game or an entertainment platform. It&apos;s a
      new way of life.
    </Paragraph>
  </Item>
);

ParagraphItem.propTypes = Item.propTypes;
