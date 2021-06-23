import React from 'react';

import { Box } from 'grommet';
import { Next, Previous } from 'grommet-icons';
import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = {
  name: 'Carousel',
  availableAt: [
    {
      url:
        'https://storybook.grommet.io/?selectedKind=Media-Carousel&amp;full=0&amp;stories=1&amp;panelRight=0',
      badge:
        'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
      label: 'Storybook',
    },
    {
      url:
        'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/carousel&amp;module=%2Fsrc%2FCarousel.js',
      badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
      label: 'CodeSandbox',
    },
  ],
  description:
    "A carousel that cycles through children. Child components\n      would typically be Images. It is the caller's responsibility to ensure\n      that all children are the same size.",
  usage: "import { Carousel } from 'grommet';\n&lt;Carousel /&gt;",
  intrinsicElement: 'div',
  properties: [
    {
      description:
        'Custom label to be used by screen readers. When provided, an aria-label will\n   be added to the element.',
      name: 'a11yTitle',
      format: 'string',
    },
    {
      description:
        'How to align along the cross axis when contained in\n      a Box or along the column axis when contained in a Grid.',
      name: 'alignSelf',
      format: 'start\ncenter\nend\nstretch',
    },
    {
      description:
        'The name of the area to place\n    this inside a parent Grid.',
      name: 'gridArea',
      format: 'string',
    },
    {
      description:
        'The amount of margin around the component. An object can\n    be specified to distinguish horizontal margin, vertical margin, and\n    margin on a particular side.',
      name: 'margin',
      format:
        'none\nxxsmall\nxsmall\nsmall\nmedium\nlarge\nxlarge\n{\n  bottom: \n    xxsmall\n    xsmall\n    small\n    medium\n    large\n    xlarge\n    string,\n  end: \n    xxsmall\n    xsmall\n    small\n    medium\n    large\n    xlarge\n    string,\n  horizontal: \n    xxsmall\n    xsmall\n    small\n    medium\n    large\n    xlarge\n    string,\n  left: \n    xxsmall\n    xsmall\n    small\n    medium\n    large\n    xlarge\n    string,\n  right: \n    xxsmall\n    xsmall\n    small\n    medium\n    large\n    xlarge\n    string,\n  start: \n    xxsmall\n    xsmall\n    small\n    medium\n    large\n    xlarge\n    string,\n  top: \n    xxsmall\n    xsmall\n    small\n    medium\n    large\n    xlarge\n    string,\n  vertical: \n    xxsmall\n    xsmall\n    small\n    medium\n    large\n    xlarge\n    string\n}\nstring',
    },
    {
      description:
        'If specified, Carousel will be a controlled component. This means\n      that future slide changes will not work unless you subscribe to onChild\n      function and update activeChild accordingly.',
      name: 'activeChild',
      format: 'number',
    },
    {
      description:
        'Whether to expand to fill\n      all of the available width and height in the parent container.',
      name: 'fill',
      format: 'boolean',
    },
    {
      description:
        'If specified, the number of\n      milliseconds between automatically transitioning to the next child. It\n      will loop through all children indefinitely.',
      name: 'play',
      format: 'number',
    },
    {
      description:
        'If specified, the index of\n      the first element to be shown. Defaults to 0.',
      name: 'initialChild',
      format: 'number',
    },
    {
      description:
        'If specified, this function will\n      be called with the active index when the currently active carousel\n      changes. Helpful when using Carousel as a controlled component.',
      name: 'onChild',
      format: 'function',
    },
    {
      description:
        'Whether to show carousel controls and which type of controls.',
      defaultValue: true,
      name: 'controls',
      format: 'boolean\narrows\nselectors',
    },
  ],
};

const themeDoc = {
  'carousel.icons.next': {
    description: 'The icon to use for the next image navigation control.',
    type: 'element',
    defaultValue: '&lt;Next /&gt;',
  },
  'carousel.animation.duration': {
    description: 'The duration of the Carousel animation.',
    type: 'number',
    defaultValue: 1000,
  },
  'carousel.icons.previous': {
    description: 'The icon to use for the previous image navigation control.',
    type: 'element',
    defaultValue: '&lt;Previous /&gt;',
  },
  'carousel.icons.current': {
    description:
      'The icon to use on the middle navigation control.\n      One icon per carousel image.',
    type: 'element',
    defaultValue: '&lt;Next /&gt;',
  },
  'carousel.icons.color': {
    description: 'The color used for Carousel icons.',
    type: "string | { 'dark': string, 'light': string }",
  },
  'carousel.disabled.icons.color': {
    description: 'The color used for disabled Carousel icons.',
    type: "string | { 'dark': string, 'light': string }",
  },
  'global.colors.icon': {
    description: 'The color of a given icon.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: #f8f8f8, light: #666666 }',
  },
  'global.edgeSize': {
    description: 'The possible sizes for margin.',
    type: 'object',
    defaultValue:
      "{\n    edgeSize: {\n      none: '0px',\n      hair: '1px',\n      xxsmall: '3px',\n      xsmall: '6px',\n      small: '12px',\n      medium: '24px',\n      large: '48px',\n      xlarge: '96px',\n      responsiveBreakpoint: 'small',\n    },\n  }",
  },
};

export default () => (
  <Page>
    <Doc
      name="Carousel"
      desc={desc}
      code={`<Box height="small" width="medium" overflow="hidden">
  <Carousel fill>
    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
  </Carousel>
</Box>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const CarouselItem = ({ name, path }) => (
  <Item name={name} path={path} center pad="none">
    <Box fill direction="row" justify="between" align="center" gap="small">
      <Box
        height="xsmall"
        background="white"
        elevation="medium"
        justify="center"
        pad="small"
      >
        <Previous size="medium" color="brand" />
      </Box>
      <Box
        width="medium"
        height="xsmall"
        background="white"
        elevation="medium"
      />
      <Box
        height="xsmall"
        background="white"
        elevation="medium"
        justify="center"
        pad="small"
      >
        <Next size="medium" color="brand" />
      </Box>
    </Box>
  </Item>
);

CarouselItem.propTypes = Item.propTypes;
