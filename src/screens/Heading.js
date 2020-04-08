import React from 'react';

import { Heading } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Heading/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Heading).toJSON();

export default () => (
  <Page>
    <Doc
      name="Heading"
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        a11yTitle: 'Open Drop',
        color: [
          'neutral-1',
          {
            dark: 'light-1',
            light: 'dark-2',
          },
        ],
        level: [1, 2, 3, 4, 5, 6],
      }}
      code={`<Heading margin="none">Chapter 1</Heading>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const HeadingItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Heading level={2} margin="none">
      Chapter 1
    </Heading>
  </Item>
);

HeadingItem.propTypes = Item.propTypes;
