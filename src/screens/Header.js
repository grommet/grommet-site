import React from 'react';
import { Header, Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="Header"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Layout-Header&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/header&module=%2Fsrc%2FHeader.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
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
    />
  </Page>
);

export const HeaderItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Header background="brand" pad="medium" />
    <Box flex background={{ color: 'brand', opacity: 'weak' }} />
  </Item>
);

HeaderItem.propTypes = Item.propTypes;
