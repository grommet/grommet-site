import React from 'react';
import { Toolbar, Button } from 'grommet';
import { Search, Filter } from 'grommet-icons';
import Page from '../components/Page';
import Item from './Components/Item';
import { ComponentDoc } from '../components/Doc';

const ToolbarPage = () => (
  <Page>
    <ComponentDoc
      name="Toolbar"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/data-toolbar',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Toolbar',
          label: 'Github',
        },
      ]}
      description="a Box container for Data filters and controls"
      code={`<Toolbar>
    <TextInput icon={<Icons.Search />} />
    <DropButton kind="toolbar" icon={<Icons.Filter />} />
    <Button label="Create" primary />
</Toolbar>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          align: 'start',
          cssGap: 'small',
          direction: 'row',
          flex: false,
          gap: 'small',
        },
      }}
    />
  </Page>
);

export default ToolbarPage;

export const ToolbarItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="medium">
    <Toolbar>
      <Button a11yTitle="Toolbar search" icon={<Search />} />
      <Button a11yTitle="Toolbar filter" kind="toolbar" icon={<Filter />} />
      <Button label="Action" />
    </Toolbar>
  </Item>
);

ToolbarItem.propTypes = Item.propTypes;
