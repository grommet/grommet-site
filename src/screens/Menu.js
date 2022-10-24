import React from 'react';
import { Box, Menu } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericBoolFalse,
  GenericGridArea,
  GenericMargin,
  GenericBool,
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
  PropOptions,
} from '../components/Doc';

const MenuPage = () => (
  <Page>
    <ComponentDoc
      name="Menu"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?selectedKind=Controls-Menu&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/menu&module=%2Fsrc%2FMenu.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Menu',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/menu"
      description="A control that opens a Drop containing plain Buttons"
      intrinsicElement="button"
      code={`<Menu
  label="Menu"
  items={[
    { label: 'First Action', onClick: () => {} },
    { label: 'Second Action', onClick: () => {} },
  ]}
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

        <Property name="children">
          <Description>
            Menu can take in children as a function or node.
          </Description>
          <PropertyValue type="function">
            <Description>
              Function that will be called to render the visual representation.
              It will be passed a props object. The props passed are different
              depending on the menu open state. When the menu is closed, two
              props are passed: hover and focus. When the menu is open, all menu
              props are passed to this function. It should return a React
              element. **Note:** This function will be invoked on every mouse
              move when hovering.
            </Description>
            <Example>{`(props) => <Box ...>{...}</Box>`}</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Description>Node is anything that can be rendered</Description>
            <Example>
              {`
<Box>
  <CaretNext />
  <Text>Open Me</Text>
</Box>
`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="disabled">
          <Description>Whether the menu should be disabled.</Description>
          <GenericBoolFalse />
        </Property>

        <Property name="dropAlign">
          <Description>Where to place the drop down.</Description>
          <PropertyValue type="object">
            <Description>
              {`The keys correspond to a side of the drop down.
              The values correspond to a side of the control. For instance,
              {left: 'left', top: 'bottom'} would align the left edges and the top of
              the drop down to the bottom of the control. At most one of left or right and
              one of top or bottom should be specified.`}
            </Description>
            <Example>
              {`
{
  top: "top" | "bottom",
  bottom: "top" | "bottom",
  right: "left" | "right",
  left: "left" | "right"
}
            `}
            </Example>
            <Example defaultValue> {`{ top: "top", left: "left" }`} </Example>
          </PropertyValue>
        </Property>

        <Property name="dropBackground">
          <Description>Background color when drop is active</Description>
          <PropertyValue type="string">
            <Example>"neutral-1"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ color: "neutral-1", opacity: "medium" }`}</Example>
            <PropOptions prop="opacity">
              <Example>"weak"</Example>
              <Example>"medium"</Example>
              <Example>"strong"</Example>
              <Example>true</Example>
            </PropOptions>
          </PropertyValue>
        </Property>

        <Property name="dropTarget">
          <Description>
            Target where the drop will be aligned to. This should be a React
            reference. Typically, this is not required as the drop will be
            aligned to the Menu itself by default.
          </Description>
          <PropertyValue type="object">
            <Example>ref.current</Example>
          </PropertyValue>
        </Property>

        <Property name="dropProps">
          <Description>Any valid Drop prop.</Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="justifyContent">
          <Description>
            How to align the contents along the row axis.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"between"</Example>
            <Example>"around"</Example>
            <Example>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="icon">
          <Description>
            Indicates the icon shown as a control to open it.
          </Description>
          <GenericBool />
          <PropertyValue type="node">
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="items">
          <Description>
            Menu items to be placed inside the drop down. The object values can
            be any Button prop, for example: `label`, `onClick`, and `href`.
          </Description>
          <PropertyValue type="array[object]">
            <Example>
              {`[
  {
    label: 'Item 1',
    onClick: () => {},
  }, 
  {
    label: <Box alignSelf="center">Github</Box>,
    icon: (<Github />),
  }
]`}
            </Example>
          </PropertyValue>
          <PropertyValue type="array[array[object]]">
            <Description>
              Items can be defined as an array of arrays of objects to create
              groups of Menu items. If a menu group will only have a single
              item, that item must still be placed within an array. There should
              not be a mixture of arrays and objects as indexes of the outer
              array.
            </Description>
            <Example>
              {`[
  [
    { label: 'Item 1' },
    { label: 'Item 2' },
  ], 
  [
    { label: 'Item 3' },
  ]
]`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="label">
          <Description>
            Indicates the label shown as a control to open it.
          </Description>
          <PropertyValue type="string">
            <Example>"Actions"</Example>
          </PropertyValue>
          <PropertyValue type="node">
            <Example>{`<Box>...</Box>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="messages">
          <Description>
            Custom messages. Used for accessibility by screen readers. These
            values will be overridden if an a11yTitle is provided.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  openMenu: "Open Menu",
  closeMenu: "Close Menu"
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="open">
          <Description>
            Whether the state of the component should be open
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="size">
          <Description>The size of the menu.</Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="global.colors.control">
          <Description>The default color to use for the icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`{ dark: "graph-0", light: "brand" }`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="menu.background">
          <Description>
            The color for the background of the menu Drop when it is open.
          </Description>
          <PropertyValue type="string">
            <Example>"white"</Example>
          </PropertyValue>
        </Property>

        <Property name="menu.drop">
          <Description>Any valid Drop props for the Menu drop.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`align: {
  top: "top",
  left: "left",
},`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="menu.extend">
          <Description>Any additional style for the Menu.</Description>
          <GenericExtend />
        </Property>

        <Property name="menu.group.container">
          <Description>
            Any valid Box props for the container around grouped items.
          </Description>
          <PropertyValue defaultValue type="object">
            <Example>
              {`{
  pad: {
    vertical: 'xsmall',
  }
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="menu.group.separator.color">
          <Description>
            The color of the separator line between grouped items.
          </Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"border"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "light-4", light: "dark-3" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="menu.group.separator.pad">
          <Description>
            The padding around the separator line between grouped items.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
          </PropertyValue>
          <PropertyValue type="object" defaultValue>
            <Example>
              {`{
  horizontal: 'small',
  vertical: 'none'
}`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="menu.group.separator.size">
          <Description>
            The thickness of the separator line between grouped items.
          </Description>
          <PropertyValue defaultValue type="string">
            <Example>"xsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="menu.icons.color">
          <Description>The color to use for the icon.</Description>
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

        <Property name="menu.icons.down">
          <Description>
            The icon to show to the right of the label when Menu is closed.
          </Description>
          <PropertyValue type="element">
            <Example defaultValue>{`<FormDown />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="menu.icons.up">
          <Description>
            The icon to show to the right of the label when Menu is opened.
          </Description>
          <PropertyValue type="element">
            <Example>{`<FormUp />`}</Example>
          </PropertyValue>
        </Property>

        <Property name="menu.item">
          <Description>Any valid Button props for the menu items.</Description>
          <PropertyValue type="object">
            <Example>{`{ align: 'start' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="menu.item.gap">
          <Description>The gap between the label and icon.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xxsmall"</Example>
          </PropertyValue>
        </Property>

        <Property name="menu.item.justify">
          <Description>
            How to align the contents within the button.
          </Description>
          <PropertyValue type="string">
            <Example>"around"</Example>
            <Example>"between"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"evenly"</Example>
            <Example>"start"</Example>
            <Example>"stretch"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default MenuPage;

export const MenuItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box flex={false}>
      <Menu tabIndex="-1" size="large" label="i'm a menu" items={[]} />
      <Box
        elevation="medium"
        pad={{ horizontal: 'xlarge', vertical: 'large' }}
      />
    </Box>
  </Item>
);

MenuItem.propTypes = Item.propTypes;
