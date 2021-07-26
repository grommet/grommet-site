import React from 'react';
import { Main } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="Main"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Layout-Main&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/main&module=%2Fsrc%2FMain.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
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
