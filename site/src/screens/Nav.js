import React from 'react';

import { Anchor, Nav } from 'grommet';
import { FacebookOption, Twitter, Github, Linkedin } from 'grommet-icons';
import { doc } from 'grommet/components/Nav/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Nav).toJSON();

export default () => (
  <Page>
    <Doc
      name="Nav"
      desc={desc}
      code={`<Nav direction="row" background="brand" pad="medium">
    <Anchor icon={<Icons.Home />} hoverIndicator />
    <Anchor icon={<Icons.Notification />} hoverIndicator />
    <Anchor icon={<Icons.ChatOption />} hoverIndicator />
</Nav>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          as: 'nav',
          flex: false,
          gap: 'medium',
        },
      }}
    />
  </Page>
);

export const NavItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Nav direction="row" align="end" background="brand" pad="medium">
      <Anchor icon={<FacebookOption />} hoverIndicator />
      <Anchor icon={<Twitter />} hoverIndicator />
      <Anchor icon={<Github />} hoverIndicator />
      <Anchor icon={<Linkedin />} hoverIndicator />
    </Nav>
  </Item>
);

NavItem.propTypes = Item.propTypes;
