import React from 'react';
import { Anchor, Paragraph } from 'grommet';
import Page from '../../components/Page';
import {
  ComponentDoc,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
  Properties,
} from '../../components/Doc';
import { GenericExtend } from '../../utils/genericThemeExamples';
import {
  GenericA11yTitle,
  GenericBoolFalse,
} from '../../utils/genericPropExamples';

const Icons = () => (
  <Page>
    <ComponentDoc
      name="Icons"
      description={
        <Paragraph size="xxlarge">
          Documentation on how to use&nbsp;
          <Anchor href="https://icons.grommet.io/?">grommet-icons</Anchor>.
        </Paragraph>
      }
      code={`<Icons.Home size="large" />`}
    >
      <Properties>
        <Property name="a11yTitle">
          <Description>Custom title to be used by screen readers.</Description>
          <GenericA11yTitle />
        </Property>

        <Property name="color">
          <Description>Color of the icon.</Description>
          <PropertyValue type="string">
            <Example>'plain'</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>{`{ dark: 'white', light: 'black' }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>Size of the icon.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"medium"</Example>
          </PropertyValue>
        </Property>

        <Property name="height">
          <Description>
            A text t-shirt size to align the height of an icon with the text
            line-height. This is useful when an icon's dimensions is smaller
            than the text line-height and the icon is presented in a row with
            align="start". The size of the icon will not be changed, but top and
            bottom padding will be added to align the icon with the text.
          </Description>
          <PropertyValue type="string">
            <Example>"medium"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="icon.extend">
          <Description>Any additional styles to place on the icon.</Description>
          <GenericExtend />
        </Property>

        <Property name="icon.size">
          <Description>The height and width of the icon.</Description>
          <PropertyValue type="object">
            <Example>{`{ 
    small: string;
    medium: string;
    large: string;
    xlarge: string;
}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="icon.disableScaleDown">
          <Description>
            When set to true, `vector-effect="non-scaling-stroke"` is added to
            simple icons. Currently this affects Add, Checkmark, Close, Down,
            LinkDown, LinkNext, LinkUp, Next, Previous, Search, and Up.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="icon.matchSize">
          <Description>
            When true, Grommet components that have a size prop and an icon will
            pass the component size to the icon.
          </Description>
          <GenericBoolFalse />
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default Icons;
