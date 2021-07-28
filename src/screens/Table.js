import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBoolFalse,
  GenericGridArea,
  GenericMargin,
  SizesXsmallXlarge,
  GenericBackground,
} from '../utils/genericPropExamples';
import { GenericExtend } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { ResponsiveBreakpoint } from '../utils/themeDocUtils';

export default () => (
  <Page name="Table">
    <ComponentDoc
      name="Table"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Visualizations-Table&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/table&module=%2Fsrc%2FTable.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A table of data organized in cells"
      intrinsicElement="table"
      code={`<Table>
  <TableHeader>
    <TableRow>
      <TableCell scope="col" border="bottom">
        Name
      </TableCell>
      <TableCell scope="col" border="bottom">
        Flavor
      </TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell scope="row">
        <strong>Eric</strong>
      </TableCell>
      <TableCell>Coconut</TableCell>
    </TableRow>
    <TableRow>
      <TableCell scope="row">
        <strong>Chris</strong>
      </TableCell>
      <TableCell>Watermelon</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
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

        <Property name="caption">
          <Description>One line description.</Description>
          <PropertyValue type="string">
            <Example>"caption"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <ResponsiveBreakpoint description="The actual breakpoint to trigger changes in Table." />
        <Property name="global.size">
          <Description>The size that impacts max-width and width.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  xxsmall: '48px',
  xsmall: '96px',
  small: '192px',
  medium: '384px',
  large: '768px',
  xlarge: '1152px',
  xxlarge: '1536px',
  full: '100%',
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="table.extend">
          <Description>Any additional style for Table.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>

    <ComponentDoc
      name="TableCell"
      description="A cell of data in a table"
      intrinsicElement="td"
    >
      <Properties>
        <Property name="plain">
          <Description>
            Whether default styling context should be removed.
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="string">
            <Example>"noPad"</Example>
          </PropertyValue>
        </Property>

        <Property name="scope">
          <Description>
            For header cells, what scope the header is for. Typically, the cells
            in a TableHeader have 'col' scope and the primary cell in each row
            in the TableBody has 'row' scope.
          </Description>
          <PropertyValue type="string">
            <Example>"col"</Example>
            <Example>"row"</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            What size the cell should be. Typically, this is not needed unless
            you are trying to align multiple tables.
          </Description>
          <PropertyValue type="string">
            <Example>"xxsmall"</Example>
            <SizesXsmallXlarge />
            <Example>"1/2"</Example>
            <Example>"1/3"</Example>
            <Example>"2/3"</Example>
            <Example>"1/4"</Example>
            <Example>"2/4"</Example>
            <Example>"3/4"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="verticalAlign">
          <Description>How to align the contents vertically.</Description>
          <PropertyValue type="string">
            <Example>"top"</Example>
            <Example>"middle"</Example>
            <Example>"bottom"</Example>
          </PropertyValue>
        </Property>

        <Property name="align">
          <Description>How to align the body inside the Table.</Description>
          <PropertyValue type="string">
            <Example>"left"</Example>
            <Example>"right"</Example>
            <Example>"center"</Example>
            <Example>"justify"</Example>
            <Example>"inherit"</Example>
            <Example>"start"</Example>
            <Example>"end"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="table.body.align">
          <Description>How to align the body inside the Table.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.body.border">
          <Description>The border side of the body.</Description>
          <PropertyValue type="string">
            <Example>"top"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.body.extend">
          <Description>Any additional style for Table body.</Description>
          <GenericExtend />
        </Property>

        <Property name="table.body.pad">
          <Description>The padding of the body.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "small", vertical: "xsmall" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="table.footer.align">
          <Description>How to align the footer inside the Table.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.footer.border">
          <Description>The border side of the footer.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"top"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.footer.extend">
          <Description>Any additional style for Table footer.</Description>
          <GenericExtend />
        </Property>

        <Property name="table.footer.fill">
          <Description>Whether the height should fill the footer.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"vertical"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.footer.pad">
          <Description>The padding of the footer.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "small", vertical: "xsmall" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="table.footer.verticalAlign">
          <Description>How to align the content vertically.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"top"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.header.align">
          <Description>How to align the header inside the Table.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.header.background">
          <Description>The background color of the header.</Description>
          <GenericBackground />
        </Property>

        <Property name="table.header.border">
          <Description>The border side of the header.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"bottom"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.header.fill">
          <Description>Whether the height should fill the header.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"vertical"</Example>
          </PropertyValue>
        </Property>

        <Property name="table.header.extend">
          <Description>Any additional style for Table header.</Description>
          <GenericExtend />
        </Property>

        <Property name="table.header.pad">
          <Description>The padding of the header.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ horizontal: "small", vertical: "xsmall" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="table.header.verticalAlign">
          <Description>How to align the content vertically.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"bottom"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>

    <ComponentDoc
      name="TableRow"
      description="A row of cells in a table"
      intrinsicElement="tr"
    />
    <ComponentDoc
      name="TableHeader"
      description="The header of a table"
      intrinsicElement="thead"
    />
    <ComponentDoc
      name="TableBody"
      description="The body of a table"
      intrinsicElement="tbody"
    />
    <ComponentDoc
      name="TableFooter"
      description="The footer of a table"
      intrinsicElement="tfoot"
      pageTitle="Table"
    />
  </Page>
);

export const TableItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box>
      {[0, 1, 2, 4].map(row => (
        <Box key={row} direction="row">
          {[0, 1, 2].map(col => (
            <Box
              key={col}
              border={{ color: 'brand' }}
              width="xxsmall"
              pad="small"
            />
          ))}
        </Box>
      ))}
    </Box>
  </Item>
);

TableItem.propTypes = Item.propTypes;
