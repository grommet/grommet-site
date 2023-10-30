import React from 'react';
import { Button as Tag } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericAs,
  GenericBool,
  GenericBoolTrue,
  GenericGridArea,
  SizesXsmallXlarge,
} from '../utils/genericPropExamples';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
  PropOptions,
} from '../components/Doc';

const TagPage = () => (
  <Page>
    <ComponentDoc
      name="Tag"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Type-Tag',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/tag&module=%2Fsrc%2FTag.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Tag',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/tag"
      description="A component to represent a textual tag"
      intrinsicElement="div"
      code={`<Tag name="name" value="value" />`}
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

        <Property name="as">
          <Description>
            The DOM tag or react component to use for the element.
          </Description>
          <GenericAs />
        </Property>

        <Property name="gridArea">
          <Description>
            The name of the area to place this inside a parent Grid.
          </Description>
          <GenericGridArea />
        </Property>

        <Property name="name">
          <Description>Name text to place in the tag.</Description>
          <PropertyValue type="string">
            <Example>"name"</Example>
          </PropertyValue>
        </Property>
        <Property name="onClick">
          <Description>
            Click handler. If this property is specified the tag will be a
            button. This should not be used in conjunction with 'onRemove'.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onRemove">
          <Description>
            If specified, the tag will include a remove button. This function
            will be called when the remove button is activated. This should not
            be used in conjunction with 'onClick'.
          </Description>
          <PropertyValue type="function">
            <Example>{`() => {}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            The possible sizes of the Tag, that impacts the overall Tag padding,
            border radius, text size and line height.
          </Description>
          <PropertyValue type="string">
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="value">
          <Description>Value text to place in the tag.</Description>
          <PropertyValue type="string">
            <Example>"value"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="tag.border">
          <Description>Any box border settings.</Description>
          <GenericBoolTrue />
          <PropertyValue type="string">
            <Example defaultValue>
              {`{
  xsmall: "1px",
  small: "2px",
  medium: "4px",
  large: "12px",
  xlarge: "24px",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.round">
          <Description>
            How much to round the corners. May be overridden by a size-specific
            value below.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example defaultValue>"large"</Example>
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="tag.icons.remove">
          <Description>The remove icon in the Tag.</Description>
          <PropertyValue type="object">
            <Example defaultValue>FormClose</Example>
            <Example>Trash</Example>
          </PropertyValue>
        </Property>

        <Property name="tag.name">
          <Description>Any valid Text props for the name.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{}`}</Example>
            <Example>{`{ weight: 600 }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="tag.pad">
          <Description>
            The amount of padding around the Box contents. May be overidden by
            size specific values below.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  horizontal: "small",
  vertical: "xsmall",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.xsmall.pad">
          <Description>The pad</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  horizontal: "8px",
  vertical: "xxsmall",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.xsmall.icon">
          <Description>The remove icon properties</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  size: "18px",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.xsmall.round">
          <Description>How much to round the corners.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"large"</Example>
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="tag.size.small.pad">
          <Description>The pad for size small.</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  horizontal: "10px",
  vertical: "xxsmall",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.small.icon">
          <Description>The remove icon properties</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  size: "18px",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.small.round">
          <Description>How much to round the corners.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"large"</Example>
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="tag.size.medium.pad">
          <Description>The pad</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  horizontal: "12px",
  vertical: "xsmall",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.medium.icon">
          <Description>The remove icon properties</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  size: "medium",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.medium.round">
          <Description>How much to round the corners.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"large"</Example>
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="tag.size.large.pad">
          <Description>The pad</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  horizontal: "16px",
  vertical: "xsmall",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.large.icon">
          <Description>The remove icon properties</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  size: "30px",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.large.round">
          <Description>How much to round the corners.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"large"</Example>
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="tag.size.xlarge.pad">
          <Description>The pad</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  horizontal: "18px",
  vertical: "xsmall",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.xlarge.icon">
          <Description>The remove icon properties</Description>
          <PropertyValue type="object">
            <Example>
              {`{
  size: "36px",
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.size.xlarge.round">
          <Description>How much to round the corners.</Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"large"</Example>
            <SizesXsmallXlarge />
            <Example>"full"</Example>
            <Example>"any CSS size"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ size: "...", corner: "..." }`}</Example>
            <PropOptions prop="corner">
              <Example>"top"</Example>
              <Example>"left"</Example>
              <Example>"bottom"</Example>
              <Example>"right"</Example>
              <Example>"top-left"</Example>
              <Example>"top-right"</Example>
              <Example>"bottom-left"</Example>
              <Example>"bottom-right"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="tag.remove">
          <Description>
            Any valid Button props for the remove button.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{
  margin: {
    right: "xsmall"
  }
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tag.separator">
          <Description>
            The separator text between the 'name' and 'value' text.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>":"</Example>
          </PropertyValue>
        </Property>

        <Property name="tag.value">
          <Description>Any valid Text props for the value.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ weight: 600 }`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default TagPage;

export const TagItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Tag label="I'm a Tag" secondary />
  </Item>
);

TagItem.propTypes = Item.propTypes;
