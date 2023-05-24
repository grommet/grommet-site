import React from 'react';
import { Box, Footer } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

const FooterPage = () => (
  <Page>
    <ComponentDoc
      name="Footer"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Layout-Footer',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Footer',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/footer"
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

export default FooterPage;

export const FooterItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box flex background={{ color: 'brand', opacity: 'weak' }} />
    <Footer background="brand" pad="medium" />
  </Item>
);

FooterItem.propTypes = Item.propTypes;
