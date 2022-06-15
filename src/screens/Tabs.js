import React from 'react';
import { Box, Text } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBool,
  GenericBoolFalse,
  GenericGridArea,
  GenericMargin,
  GenericBackground,
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

const TabsPage = () => (
  <Page>
    <ComponentDoc
      name="Tabs"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Controls-Tabs&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/tabs&module=%2Fsrc%2FTabs.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Tabs',
          label: 'Github',
        },
      ]}
      description="A container with controls to show one Tab at a time"
      intrinsicElement="div"
      code={`<Tabs>
  <Tab title="tab 1">
    <Box pad="medium">One</Box>
  </Tab>
  <Tab title="tab 2">
    <Box pad="medium">Two</Box>
  </Tab>
</Tabs>`}
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

        <Property name="activeIndex">
          <Description>
            Active tab index. If specified, Tabs will be a controlled component.
            This means that future tab changes will not work unless you
            subscribe to onActive function and update activeIndex accordingly.
          </Description>
          <PropertyValue type="number">
            <Example>0</Example>
          </PropertyValue>
        </Property>

        <Property name="alignControls">
          <Description>
            How to align the tab controls along the vertical axis.
          </Description>
          <PropertyValue type="string">
            <Example>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="children">
          <Description>Array of Tab.</Description>
          <PropertyValue type="node">
            <Example>{`<Tab>...</Tab>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="flex">
          <Description>
            Whether flex-grow and/or flex-shrink is true.
          </Description>
          <GenericBool />
          <PropertyValue type="string">
            <Example>"grow"</Example>
            <Example>"shrink"</Example>
          </PropertyValue>
        </Property>

        <Property name="justify">
          <Description>How to align the tabs along the main axis.</Description>
          <PropertyValue type="string">
            <Example>"start"</Example>
            <Example defaultValue>"center"</Example>
            <Example>"end"</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages for Tabs. Used for accessibility by screen readers.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ tabContents: "Tab Contents" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="onActive">
          <Description>
            Function that will be called with the active tab index when the
            currently active tab changes.
          </Description>
          <PropertyValue type="function">
            <Example>{`(1) => {}`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.borderSize">
          <Description>The size of the border.</Description>
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

        <Property name="global.colors.border">
          <Description>The color of tabs border.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"rgba(0, 0, 0, 0.33)"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "rgba(255, 255, 255, 0.33)", light: "rgba(0, 0, 0, 0.33)" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="global.edgeSize.small">
          <Description>The possible sizes for margin, pad and gap.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"6px"</Example>
          </PropertyValue>
        </Property>

        <Property name="tabs.background">
          <Description>Background styling of Tabs.</Description>
          <GenericBackground />
        </Property>

        <Property name="tabs.extend">
          <Description>Any additional style for Tabs.</Description>
          <GenericExtend />
        </Property>

        <Property name="tabs.gap">
          <Description>The gap size between the Tabs.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="tabs.header.background">
          <Description>The background styles of Tabs header.</Description>
          <GenericColor />
        </Property>

        <Property name="tabs.header.border.color">
          <Description>Border color of the tabs controls.</Description>
          <GenericColor />
        </Property>

        <Property name="tabs.header.border.side">
          <Description>Side of the border of the tabs controls.</Description>
          <PropertyValue type="string">
            <Example>"top"</Example>
          </PropertyValue>
        </Property>

        <Property name="tabs.header.border.size">
          <Description>Border size of the tabs controls.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
        </Property>

        <Property name="tabs.header.border.style">
          <Description>Border style of the tabs controls.</Description>
          <PropertyValue type="string">
            <Example>"solid"</Example>
          </PropertyValue>
        </Property>

        <Property name="tabs.header.extend">
          <Description>Any additional style for Tabs header.</Description>
          <GenericExtend />
        </Property>

        <Property name="tabs.panel.extend">
          <Description>Any additional style for Tabs panel.</Description>
          <GenericExtend />
        </Property>

        <Property name="tabs.step">
          <Description>
            The number of tabs to advance or move back by when the left and
            right arrows are visible and there is not enough room to display all
            of the tabs on the screen. The sizes correspond to the responsive
            breakpoint screen sizes.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`
step: {
  small: 1;
  medium: 3;
  large: 3;
};
            `}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>

    <ComponentDoc
      name="Tab"
      description="One tab within Tabs"
      intrinsicElement="button"
    >
      <Properties>
        <Property name="disabled">
          <Description>Whether the tab is disabled.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="icon">
          <Description>Icon element to place in the tab.</Description>
          <PropertyValue type="element">
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="plain">
          <Description>Whether this is a plain tab with no style.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="reverse">
          <Description>
            Whether an icon and label should be reversed so that the icon is at
            the end of the tab.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="title">
          <Description>The title of the tab.</Description>
          <PropertyValue type="node">
            <Example>"Tab Title"</Example>
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="tab.active">
          <Description>Styles for the active tab.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{color: "text", background: undefined }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tab.background">
          <Description>Background styling of Tab.</Description>
          <GenericBackground />
        </Property>

        <Property name="tab.border">
          <Description>Border styles of the tab</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  side: "bottom",
  size: "small",
  color: {
    dark: "accent-1",
    light: "brand",
  },
  active: {
    color: {
      dark: "white",
      light: "black",
    },
  },
  hover: {
    color: {
      dark: "white",
      light: "black",
    },
    // extend: undefined,
  },
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tab.border.disabled.color">
          <Description>Border color of the Tab when disabled</Description>
          <GenericColor />
        </Property>

        <Property name="tab.color">
          <Description>Text color for the Tab.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"control"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="tab.disabled.color">
          <Description>Text color of the Tab when disabled.</Description>
          <GenericColor />
        </Property>

        <Property name="tab.extend">
          <Description>Any additional style for Tab.</Description>
          <GenericExtend />
        </Property>

        <Property name="tab.hover.background">
          <Description>Background style of the Tab on hover.</Description>
          <GenericBackground />
        </Property>

        <Property name="tab.hover.color">
          <Description>Text color of the tab on hover.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"black"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "white", light: "black" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tab.hover.extend">
          <Description>Any additional style for Tab hover.</Description>
          <GenericExtend />
        </Property>

        <Property name="tab.margin">
          <Description>The margin of Tab.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>
              {`{ vertical: "xxsmall", horizontal: "small" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="tab.pad">
          <Description>The pad of Tab.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example defaultValue>{`{ bottom: "xsmall" }`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default TabsPage;

export const TabsItem = ({ name, path }) => (
  <Item name={name} path={path} center justify="end" pad="none">
    <Box direction="row" align="end" alignSelf="stretch" gap="small">
      <Box
        flex
        background={{ color: 'brand', opacity: 'medium' }}
        pad={{ vertical: 'medium', horizontal: 'small' }}
        round={{ corner: 'top', size: 'small' }}
      />
      <Box
        flex
        align="center"
        background="brand"
        pad={{ vertical: 'small', horizontal: 'small' }}
        round={{ corner: 'top', size: 'small' }}
      >
        <Text>i&#39;m a tab</Text>
      </Box>
      <Box
        flex
        background={{ color: 'brand', opacity: 'medium' }}
        pad={{ vertical: 'medium', horizontal: 'small' }}
        round={{ corner: 'top', size: 'small' }}
      />
    </Box>
  </Item>
);

TabsItem.propTypes = Item.propTypes;
