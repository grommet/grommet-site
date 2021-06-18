import React from 'react';

import { Anchor } from 'grommet';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import { themeDocUtils } from '../utils/themeDocUtils';
import Item from './Components/Item';

const desc = {
  name: 'Anchor',
  availableAt: [
    {
      url:
        'https://storybook.grommet.io/?selectedKind=Controls-Anchor&full=0&stories=1&panelRight=0',
      badge:
        'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
      label: 'Storybook',
    },
    {
      url:
        'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/anchor&module=%2Fsrc%2FAnchor.js',
      badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
      label: 'CodeSandbox',
    },
  ],
  description: 'A text link.',
  details:
    'We have a separate component from the browser\nbase so we can style it. You can either set the icon and/or label properties\nor just use children.',
  usage:
    "import { Anchor } from 'grommet';\n<Anchor href={location} label='Label' />",
  intrinsicElement: 'a',
  properties: [
    {
      description: 'Custom title to be used by screen readers.',
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
      description: 'The DOM tag or react component to use for the element.',
      name: 'as',
      format: 'string\nfunction',
    },
    {
      description: 'Label color and icon color, if not specified on the icon.',
      name: 'color',
      format: 'string\n{\n  dark: string,\n  light: string\n}',
    },
    {
      description: 'Whether the anchor is disabled.',
      defaultValue: false,
      name: 'disabled',
      format: 'boolean',
    },
    {
      description: 'Hyperlink reference to place in the anchor.',
      name: 'href',
      format: 'string',
    },
    {
      description: 'Icon element to place in the anchor.',
      name: 'icon',
      format: 'element',
    },
    {
      description: 'Label text to place in the anchor.',
      name: 'label',
      format: 'node',
    },
    {
      description:
        'Click handler. It can be used, for example,\n        to add analytics and track who clicked in the anchor.',
      name: 'onClick',
      format: 'function',
    },
    {
      description:
        'Whether an icon and label should be reversed so that the\n        icon is at the end of the anchor.',
      defaultValue: false,
      name: 'reverse',
      format: 'boolean',
    },
    {
      description:
        "The font size is typically driven by the components containing\nthis component. But, it can be adjusted directly via this size property,\ntypically when it is not contained in a 'Heading', 'Paragraph', or 'Text'.",
      name: 'size',
      format: 'xsmall\nsmall\nmedium\nlarge\nxlarge\nxxlarge\nstring',
    },
    {
      description: 'Sets font-weight property for anchor.',
      name: 'weight',
      format: 'normal\nbold\nnumber',
    },
  ],
};

const themeDoc = {
  'anchor.color': {
    description: 'The color of the label text and icon strokes.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ light: '#1D67E3', dark: '#6194EB' }",
  },
  'anchor.fontWeight': {
    description: 'The font weight of the label.',
    type: 'number',
    defaultValue: 600,
  },
  'anchor.textDecoration': {
    description: `The text decoration of the label. 
Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
for possible values.`,
    type: 'string',
    defaultValue: 'none',
  },
  'anchor.hover.fontWeight': {
    description: 'The font weight of the label when hovering.',
    type: 'number',
    defaultValue: undefined,
  },
  'anchor.hover.textDecoration': {
    description: `The text decoration of the label when hovering. 
Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
for possible values.`,
    type: 'string',
    defaultValue: 'underline',
  },
  'anchor.hover.extend': {
    description: 'Any additional style for the Anchor when hovering.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'anchor.extend': {
    description: 'Any additional style for the Anchor.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'text.medium.size': {
    description: 'The font size of the text label.',
    type: 'string',
    defaultValue: '18px',
  },
  'text.medium.height': {
    description: 'The line height of the text label.',
    type: 'string',
    defaultValue: '24px',
  },
  ...themeDocUtils.focusStyle,
  ...themeDocUtils.edgeStyle('The possible sizes for margin.'),
};

export default () => (
  <Page>
    <Doc
      name="Anchor"
      desc={desc}
      syntaxes={{
        ...genericSyntaxes,
        color: 'control',
        href: '//my.com/path',
        icon: '<Add />',
        label: ['Add', '<Box>...</Box>'],
        onClick: '() => {}',
      }}
      code={`<Anchor href="#" label="For Example" />`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const AnchorItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Anchor as="span">Anchor</Anchor>
  </Item>
);

AnchorItem.propTypes = Item.propTypes;
