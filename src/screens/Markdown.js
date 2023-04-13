import React from 'react';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';

const CONTENT = `## Grommet **heart**s markdown

Favorite thing, [link](https://twitter.com/grommet_io)`;
const MarkdownPage = () => (
  <Page>
    <ComponentDoc
      name="Markdown"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Type-Markdown',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/markdown&module=%2Fsrc%2FMarkdown.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Markdown',
          label: 'Github',
        },
      ]}
      description="Markdown formatting using Grommet components"
      intrinsicElement="div"
      code={`<Markdown>${CONTENT}</Markdown>`}
    >
      <Properties>
        <Property name="components">
          <Description>
            Custom components and props to override html elements such as 'img'
            or 'pre'. By default 'a', 'p', 'img', and table elements are
            overridden with grommet components.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`{
  a: { component: Anchor, props: {...} },
  img: { component: Image },
  p: { component: Paragraph },
  table: { component: Table },
  td: { component: TableCell },
  tbody: { component: TableBody },
  tfoot: { component: TableFooter },
  th: { component: TableCell },
  thead: { component: TableHeader },
  tr: { component: TableRow }
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="options">
          <Description>
            Used to tune the jsx compiler to specific properties, available
            options on
            [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx).
          </Description>
          <PropertyValue type="object">
            <Example>{`{ ... }`}</Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default MarkdownPage;

export const MarkdownItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <code>grommet **heart**&#39;s markdown</code>
  </Item>
);

MarkdownItem.propTypes = Item.propTypes;
