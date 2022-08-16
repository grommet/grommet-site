import React from 'react';
import { Anchor, Button, PageHeader } from 'grommet';
import Page from '../components/Page';
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

const PageHeaderPage = () => (
  <Page>
    <ComponentDoc
      name="PageHeader"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Layout-PageHeader&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/PageHeader',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/pageheader"
      description="A layout component to display page title, subtitle, parent, and page-level actions"
      intrinsicElement="header"
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

        <Property name="size">
          <Description>
            The possible sizes of PageHeader, which impacts the padding, title
            sizing, and subtitle sizing. 'size' will not impact parent or action
            sizing.
          </Description>
          <PropertyValue type="string">
            <Example>small</Example>
            <Example>medium</Example>
            <Example>large</Example>
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
            <Example>{`
<Heading size="xxlarge">
    PageHeader Documentation
</Heading>`}</Example>
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

        <Property name="pageHeader.pad">
          <Description>Padding applied to PageHeader.</Description>
          <PropertyValue type="string">
            <Example>{`'large'`}</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>{`{ 
  top: 'large', 
  bottom: 'medium'
}`}</Example>
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

        <Property name="pageHeader.size.small.pad">
          <Description>
            Amount of pad when PageHeader size = 'small'.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  top: 'medium',
  bottom: 'small'
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.size.small.subtitle">
          <Description>
            Any valid Paragraph props for the subtitle when PageHeader size =
            'small'.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  size: 'small',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.size.small.title">
          <Description>
            Any valid Heading props for the title when PageHeader size =
            'small'.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  size: 'small',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.size.medium.pad">
          <Description>
            Amount of pad when PageHeader size = 'medium'. If not specified,
            will default to pageHeader.pad.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.size.medium.subtitle">
          <Description>
            Any valid Paragraph props for the subtitle when PageHeader size =
            'medium'. If not specified, will default to pageHeader.subtitle.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.size.medium.title">
          <Description>
            Any valid Heading props for the title when PageHeader size =
            'medium'. If not specified, will default to pageHeader.title.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.size.large.pad">
          <Description>
            Amount of pad when PageHeader size = 'large'.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  top: 'xlarge',
  bottom: 'large'
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.size.large.subtitle">
          <Description>
            Any valid Paragraph props for the subtitle when PageHeader size =
            'large'.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  size: 'large',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="pageHeader.size.large.title">
          <Description>
            Any valid Heading props for the title when PageHeader size =
            'large'.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  size: 'large',
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
      ['parent', 'parent'],
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
      ['parent', 'parent'],
      ['title', 'actions'],
      ['subtitle', 'actions'],
    ],
    columns: [['medium', 'flex'], 'auto'],
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
      ['parent', 'parent'],
      ['title', 'actions'],
      ['subtitle', 'actions'],
    ],
    columns: [['medium', 'flex'], 'auto'],
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
