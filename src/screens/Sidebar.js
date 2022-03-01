import React from 'react';
import { Sidebar } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';

const SidebarPage = () => (
  <Page>
    <ComponentDoc
      name="Sidebar"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Layout-Sidebar&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Sidebar',
          label: 'Github',
        },
      ]}
      description="A sidebar, typically used with Nav children"
      intrinsicElement="div"
      code={`<Sidebar background="brand" round="small"
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
    >
      <Properties>
        <Property name="footer">
          <Description>
            If specified, a footer element for the Sidebar.
          </Description>
          <PropertyValue type="node">
            <Example>{`<SidebarFooter />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="header">
          <Description>
            If specified, an header element for the Sidebar.
          </Description>
          <PropertyValue type="node">
            <Example>{`<SidebarHeader />`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default SidebarPage;

export const SidebarItem = ({ name, path }) => (
  <Item name={name} path={path} center align="start">
    <Sidebar background="brand" pad="medium" />
  </Item>
);

SidebarItem.propTypes = Item.propTypes;
