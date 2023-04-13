import React from 'react';
import { Header, Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Property,
  PropertyValue,
  Example,
  Description,
  Properties,
} from '../components/Doc';

const HeaderPage = () => (
  <Page>
    <ComponentDoc
      name="Header"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Layout-Header',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Header',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/header"
      description="Is a Box container for introductory content"
      code={`<Header background="brand">
  <Button icon={<Icons.Home />} hoverIndicator />
  <Menu label="account" items={[{ label: 'logout' }]} />
</Header>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          align: 'center',
          as: 'header',
          direction: 'row',
          flex: false,
          gap: 'medium',
          justify: 'between',
        },
      }}
    >
      <Properties>
        <Property name="sticky">
          <Description>
            Whether the Header should hide when the user is scrolling down and
            appear once the user scrolls back up.
          </Description>
          <PropertyValue type="string">
            <Example>`sticky= "scrollUp"`</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default HeaderPage;

export const HeaderItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Header background="brand" pad="medium" />
    <Box flex background={{ color: 'brand', opacity: 'weak' }} />
  </Item>
);

HeaderItem.propTypes = Item.propTypes;
