import React from 'react';

import { Avatar } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Avatar/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Avatar).toJSON();

export default () => (
  <Page>
    <Doc
      name="Avatar"
      desc={desc}
      code={`<Box direction="row"  gap="small"><Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
      <Avatar background="accent-2">
      <Icons.UserFemale color="accent-1" />
    </Avatar></Box>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          align: 'center',
          justify: 'center',
          overflow: 'hidden',
          round: 'full',
        },
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const AvatarItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
  </Item>
);

AvatarItem.propTypes = Item.propTypes;
