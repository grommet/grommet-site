import React from 'react';

import { Sidebar } from 'grommet';
import { doc } from 'grommet/components/Sidebar/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Sidebar).toJSON();

export default () => (
  <Page>
    <Doc
      name="Sidebar"
      desc={desc}
      code={`    
    <Sidebar background="brand" round="small"
      header={
        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
      }
      footer={
        <Button icon={<Icons.Help />} hoverIndicator />
      }
    >
      <Nav gap="small">
        <Button icon={<Icons.Projects />} hoverIndicator />
        <Button icon={<Icons.Clock />} hoverIndicator />
      </Nav>
    </Sidebar>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          pad: 'small',
          gap: 'large',
          height: "min: '100%'",
        },
      }}
    />
  </Page>
);

export const SidebarItem = ({ name, path }) => (
  <Item name={name} path={path} center align="start">
    <Sidebar background="brand" pad="medium" />
  </Item>
);

SidebarItem.propTypes = Item.propTypes;
