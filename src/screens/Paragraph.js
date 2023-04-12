import React from 'react';
import { Paragraph } from 'grommet';
import Page from '../components/Page';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBoolTrue,
  GenericBool,
  GenericGridArea,
  GenericMargin,
} from '../utils/genericPropExamples';
import { GenericExtend, GenericColor } from '../utils/genericThemeExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { EdgeStyle } from '../utils/themeDocUtils';

const extendedGenericSyntaxes = JSON.parse(JSON.stringify(genericSyntaxes));
extendedGenericSyntaxes.margin.unshift('none');

const ParagraphPage = () => (
  <Page>
    <ComponentDoc
      name="Paragraph"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Type-Paragraph',
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
      code={`<Paragraph margin="none">
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
</Paragraph>`}
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

        <Property name="color">
          <Description>
            A color identifier to use for the text color.
          </Description>
          <GenericColor />
        </Property>

        <Property name="fill">
          <Description>
            Whether the width should fill the container.
          </Description>
          <GenericBool />
        </Property>

        <Property name="maxLines">
          <Description>
            Restrict the text to this number of lines and truncate with ellipsis
            if it is too long to fit. For the text to get truncated, the
            Paragraph needs to be contained within a layout component such as a
            Box or generic div.
          </Description>
          <PropertyValue type="number">
            <Example>3</Example>
          </PropertyValue>
        </Property>
        <Property name="responsive">
          <Description>
            Whether margin should be scaled for mobile environments.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="size">
          <Description>The size of the Paragraph text.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"xxlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="textAlign">
          <Description>How to align the text inside the paragraph.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"justify"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="paragraph">
          <Description>
            The possible sizes of the paragraph in terms of its max-width,
            font-size and line-height.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  small: {
    size: '14px',
    height: '20px',
    maxWidth: '336px',
  },
  medium: {
    size: '18px',
    height: '24px',
    maxWidth: '432px',
  },
  large: {
    size: '22px',
    height: '28px',
    maxWidth: '528px',
  },
  xlarge: {
    size: '26px',
    height: '32px',
    maxWidth: '624px',
  },
  xxlarge: {
    size: '34px',
    height: '40px',
    maxWidth: '816px',
  },
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="paragraph.font.family">
          <Description>The font family to use for Paragraph.</Description>
          <PropertyValue type="string">
            <Example>"Segoe UI"</Example>
          </PropertyValue>
        </Property>

        <Property name="paragraph.textAlign">
          <Description>How to align the text inside the Paragraph.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
          </PropertyValue>
        </Property>

        <Property name="paragraph.extend">
          <Description>Any additional style for the Paragraph.</Description>
          <GenericExtend />
        </Property>

        <EdgeStyle description="The possible sizes for margin." />
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default ParagraphPage;

export const ParagraphItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Paragraph>
      OASIS was much more than a game or an entertainment platform. It&apos;s a
      new way of life.
    </Paragraph>
  </Item>
);

ParagraphItem.propTypes = Item.propTypes;
