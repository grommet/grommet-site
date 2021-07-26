import React from 'react';
import { Anchor, Nav } from 'grommet';
import { FacebookOption, Twitter, Github, Linkedin } from 'grommet-icons';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="Nav"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Controls-Nav&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/nav&module=%2Fsrc%2FNav.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
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
