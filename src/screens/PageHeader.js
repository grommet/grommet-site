import React from 'react';
import { Anchor, Button, PageHeader } from 'grommet';
import Page from '../components/Page';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericGridArea,
  GenericMargin,
} from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const extendedGenericSyntaxes = JSON.parse(JSON.stringify(genericSyntaxes));
extendedGenericSyntaxes.margin.unshift('none');

const PageHeaderPage = () => (
  <Page>
    <ComponentDoc
      name="PageHeader"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Type-Paragraph&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/paragraph&module=%2Fsrc%2FParagraph.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Paragraph',
          label: 'Github',
        },
      ]}
      description="A paragraph of text"
      intrinsicElement="p"
      code={`<PageHeader
      title="Page Title"
      subtitle="A subtitle for the page."
      parent={<Anchor label="Parent Page" />}
      actions={<Button label="Edit" primary />}
    />`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>
            Custom label to be used by screen readers. When provided, an
            aria-label will be added to the element.
          </Description>
          <GenericA11yTitle />
        </Property>

        <Property name="alignSelf">
          <Description>
            How to align along the cross axis when contained in a Box or along
            the column axis when contained in a Grid.
          </Description>
          <GenericAlignSelf />
        </Property>

        <Property name="children">
          <Description>
            Any content to be rendered directly beneath the PageHeader.
          </Description>
          <PropertyValue type="element">
            <Example>{`<NameValueList>
    <NameValuePair name="Created On">Jan 10, 2022</NameValuePair>
    <NameValuePair name="Last Edited">August 12, 2022</NameValuePair>
</NameValueList>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="gridArea">
          <Description>
            The name of the area to place this inside a parent Grid.
          </Description>
          <GenericGridArea />
        </Property>

        <Property name="margin">
          <Description>The amount of margin around the component.</Description>
          <GenericMargin />
        </Property>

        <Property name="actions">
          <Description>Any page-level actions.</Description>
          <PropertyValue type="element">
            <Example>{`<Box direction="row">
    <Button label="Delete" />
    <Button label="Edit" primary />
</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="parent">
          <Description>
            Contextual navigation or information about where the current page is
            located within an application.
          </Description>
          <PropertyValue type="element">
            <Example>{`<Anchor label="Parent Page" icon={<FormPrevious />} />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="subtitle">
          <Description>
            Additional description about a page's purpose. When provided as a
            string, it will be rendered as a paragraph.
          </Description>
          <PropertyValue type="string">
            <Example>
              "This page provides documentation for PageHeader."
            </Example>
          </PropertyValue>
          <PropertyValue type="element">
            <Example>{`<Box>This is a custom subtitle for the page.</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="title">
          <Description>
            The title of the page. When provided as a string, it will be
            rendered as an h1.
          </Description>
          <PropertyValue type="string">
            <Example>"PageHeader Documentation"</Example>
          </PropertyValue>
          <PropertyValue type="element">
            <Example>{`<Heading size="xxlarge">PageHeader Documentation</Heading>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="gridProps">
          <Description>Any valid Grid prop.</Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="pageHeader.actions">
          <Description>
            Any valid Box props for the actions container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ align: 'end' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.parent">
          <Description>
            Any valid Box props for the parent container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ align: 'start' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.subtitle">
          <Description>Any valid Paragraph props for the subtitle.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
fill: true,
margin: 'none'
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.title">
          <Description>Any valid Heading props for the title.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
fill: true,
margin: 'none',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.small">
          <Description>
            Any valid Grid props for the PageHeader layout at small breakpoint.
            The 'areas' can be customized to change where the contents render.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
small: {
    areas: [
      ['parent', 'null'],
      ['title', 'actions'],
      ['subtitle', 'actions'],
    ],
    columns: [['small', 'flex'], 'auto'],
    rows: ['auto', 'auto', 'auto'],
    gap: { row: 'xsmall', column: 'large' },
  },
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.medium">
          <Description>
            Any valid Grid props for the PageHeader layout at medium breakpoint.
            The 'areas' can be customized to change where the contents render.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
medium: {
    areas: [
      ['parent', 'null'],
      ['title', 'actions'],
      ['subtitle', 'actions'],
    ],
    columns: [['medium', 'large'], 'auto'],
    rows: ['auto', 'auto', 'auto'],
    gap: { row: 'xsmall', column: 'medium' },
  },
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.large">
          <Description>
            Any valid Grid props for the PageHeader layout at large breakpoint.
            The 'areas' can be customized to change where the contents render.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
large: {
    areas: [
      ['parent', 'null'],
      ['title', 'actions'],
      ['subtitle', 'actions'],
    ],
    columns: [['medium', 'large'], 'auto'],
    rows: ['auto', 'auto', 'auto'],
    gap: { row: 'xsmall', column: 'large' },
  },
`}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default PageHeaderPage;

export const PageHeaderItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <PageHeader
      title="Page Title"
      subtitle="A subtitle for the page."
      parent={<Anchor label="Parent Page" />}
      actions={<Button label="Edit" primary />}
    />
  </Item>
);

PageHeaderItem.propTypes = Item.propTypes;
