import React from 'react';
import { Box, Footer } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="Footer"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Layout-Footer&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
      ]}
      description="Footer for a document or section"
      code={`<Footer background="brand" pad="medium">
  <Text>Copyright</Text>
  <Anchor label="About" />
</Footer>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          align: 'center',
          as: 'footer',
          direction: 'row',
          flex: false,
          gap: 'medium',
          justify: 'between',
        },
      }}
    />
  </Page>
);

export const FooterItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box flex background={{ color: 'brand', opacity: 'weak' }} />
    <Footer background="brand" pad="medium" />
  </Item>
);

FooterItem.propTypes = Item.propTypes;
