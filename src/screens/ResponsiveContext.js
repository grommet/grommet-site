import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { BreakpointStyle } from '../utils/themeDocUtils';

const ResponsiveContextPage = () => (
  <Page>
    <ComponentDoc
      name="Responsive Context"
      availableAt={[
        {
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
          url: 'https://storybook.grommet.io/?selectedKind=undefined-ResponsiveContext&full=0&stories=1&panelRight=0',
        },
        {
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/responsivecontext&module=%2Fsrc%2FResponsiveContext.js',
        },
      ]}
      description="A means of providing different rendering behavior based on the
 screen resolution"
      code={`function Example() {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box pad="medium">
      <Text>{size}</Text>
    </Box>
  );
}`}
    >
      <Properties>
        <Property name="children">
          <Description>
            Render function that will be called with the current screen
            resolution size (e.g our base theme of size 'small', 'medium',
            'large'). The size value will be derived from global.breakpoints
            entry in the theme object.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <BreakpointStyle
          description="The possible breakpoints that could affect border, direction,
gap, margin, pad, and round. The default values help to optimize content for
mobile, tablet, and computer."
        />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default ResponsiveContextPage;

export const ResponsiveContextItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box direction="row" align="end" gap="xsmall">
      <Box align="center">
        <Box
          border={{ color: 'brand', size: 'medium' }}
          round="small"
          pad={{ horizontal: 'xlarge', vertical: 'large' }}
        />
        <Box background="brand" pad="small" />
      </Box>
      <Box
        border={{ color: 'brand', size: 'medium' }}
        round="xsmall"
        pad={{ horizontal: 'small', vertical: 'medium' }}
      />
    </Box>
  </Item>
);

ResponsiveContextItem.propTypes = Item.propTypes;
