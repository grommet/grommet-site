import React from 'react';
import { Shift } from 'grommet-icons';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericBool } from '../utils/genericPropExamples';
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

export default () => (
  <Page>
    <ComponentDoc
      name="Collapsible"
      description="Expand or collapse animation"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Utilities-Collapsible&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url:
            'https://github.com/grommet/grommet/tree/master/src/js/components/Collapsible',
          label: 'Github',
        },
      ]}
      code={`() => {
const [open, setOpen] = React.useState(false);
return (
  <Box align="start">
    <Button primary onClick={() => setOpen(!open)} label="Toggle" />
    <Collapsible open={open}>
      <Box
        background="light-2"
        round="medium"
        pad="medium"
        align="center"
        justify="center"
      >
        <Text>This is a box inside a Collapsible component</Text>
      </Box>
    </Collapsible>
    <Text>This is other content outside the Collapsible box</Text>
  </Box>
)}`}
      intrinsicElement="div"
    >
      <Properties>
        <Property name="open">
          <Description>
            Whether or not the component should be open.
          </Description>
          <GenericBool />
        </Property>

        <Property name="direction">
          <Description>
            Direction to animate the collapsible content.
          </Description>
          <PropertyValue type="string">
            <Example>"horizontal"</Example>
            <Example defaultValue>"vertical"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="collapsible.minSpeed">
          <Description>
            The minimum speed of Collapsible animation in milliseconds.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>200</Example>
          </PropertyValue>
        </Property>

        <Property name="collapsible.baseline">
          <Description>
            Default height to be used to calculate the optimal collapsible
            speed.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>500</Example>
          </PropertyValue>
        </Property>

        <Property name="collapsible.extend">
          <Description>Any additional style for Collapsible.</Description>
          <GenericExtend />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const CollapsibleItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Shift color="brand" size="xlarge" />
  </Item>
);

CollapsibleItem.propTypes = Item.propTypes;
