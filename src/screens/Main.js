import React from 'react';
import { Main } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

const MainPage = () => (
  <Page>
    <ComponentDoc
      name="Main"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Layout-Main',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Main',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/main"
      description="main content of a document"
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          as: 'main',
          fill: 'vertical',
          flex: 'grow',
          overflow: 'auto',
        },
      }}
      code={`<Main pad="large">
  <Heading>Something</Heading>
  <Paragraph>Something about something</Paragraph>
</Main>`}
    />
  </Page>
);

export default MainPage;

export const MainItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Main
      pad="small"
      background="brand"
      overflow="scroll"
      border={{ side: 'right', size: 'large', color: 'light-4' }}
    />
  </Item>
);

MainItem.propTypes = Item.propTypes;
