import React from 'react';
import { Anchor, Nav } from 'grommet';
import { FacebookOption, Twitter, Github, Linkedin } from 'grommet-icons';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

const NavPage = () => (
  <Page>
    <ComponentDoc
      name="Nav"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Controls-Nav',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Nav',
          label: 'Github',
        },
      ]}
      description="Is a Box container for navigation links"
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          as: 'nav',
          flex: false,
          gap: 'medium',
        },
      }}
      code={`<Nav direction="row" background="brand" pad="medium">
  <Anchor icon={<Icons.Home />} hoverIndicator />
  <Anchor icon={<Icons.Notification />} hoverIndicator />
  <Anchor icon={<Icons.ChatOption />} hoverIndicator />
</Nav>`}
    />
  </Page>
);

export default NavPage;

export const NavItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Nav direction="row" align="end" background="brand" pad="medium">
      <Anchor as="span" icon={<FacebookOption />} hoverIndicator />
      <Anchor as="span" icon={<Twitter />} hoverIndicator />
      <Anchor as="span" icon={<Github />} hoverIndicator />
      <Anchor as="span" icon={<Linkedin />} hoverIndicator />
    </Nav>
  </Item>
);

NavItem.propTypes = Item.propTypes;
