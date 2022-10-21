import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericGridArea,
  GenericMargin,
  GenericFill,
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

const StackPage = () => (
  <Page>
    <ComponentDoc
      name="Stack"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Layout-Stack&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/stack&module=%2Fsrc%2FStack.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Stack',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/stack"
      description="A container that stacks contents on top of each other"
      intrinsicElement="div"
      code={`<Stack anchor="top-right">
  <Icons.Notification size="large" />
  <Box
    background="brand"
    pad={{ horizontal: 'xsmall' }}
    round
  >
    <Text>8</Text>
  </Box>
</Stack>`}
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

        <Property name="anchor">
          <Description>
            Where to anchor children from. If not specified, children fill the
            guiding child's area.
          </Description>
          <PropertyValue type="string">
            <Example>"center"</Example>
            <Example>"top"</Example>
            <Example>"left"</Example>
            <Example>"bottom"</Example>
            <Example>"right"</Example>
            <Example>"top-left"</Example>
            <Example>"top-right"</Example>
            <Example>"bottom-left"</Example>
            <Example>"bottom-right"</Example>
          </PropertyValue>
        </Property>

        <Property name="fill">
          <Description>
            Whether to expand to fill all of the available width and height in
            the parent container.
          </Description>
          <GenericFill />
        </Property>

        <Property name="guidingChild">
          <Description>
            Which child to guide layout from. All other children will be
            positioned within that area. Defaults to 'first'.
          </Description>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example defaultValue>"first"</Example>
            <Example>"last"</Example>
          </PropertyValue>
        </Property>

        <Property name="interactiveChild">
          <Description>
            Which child to restrict user interaction to. All other children will
            have user interaction disabled.
          </Description>
          <PropertyValue type="number">
            <Example>1</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example defaultValue>"first"</Example>
            <Example>"last"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="stack.extend">
          <Description>
            Any additional style for the control of the Stack component.
          </Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default StackPage;

export const StackItem = ({ name, path }) => (
  <Item name={name} path={path}>
    <Box flex border={{ color: 'brand', size: 'xlarge' }}>
      <Box flex background="brand" margin="medium" />
    </Box>
  </Item>
);

StackItem.propTypes = Item.propTypes;
