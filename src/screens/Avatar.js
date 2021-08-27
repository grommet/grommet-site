import React from 'react';
import { Avatar } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';
import { GenericExtend } from '../utils/genericThemeExamples';

export default () => (
  <Page>
    <ComponentDoc
      name="Avatar"
      availableAt={[
        {
          url:
            'https://storybook.grommet.io/?selectedKind=Visualizations-Avatar&full=0&stories=1&panelRight=0',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
      ]}
      description="An Avatar"
      intrinsicElement="div"
      code={`<Box direction="row"  gap="small">
  <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
  <Avatar background="accent-2">
    <Icons.UserFemale color="accent-1" />
  </Avatar>
</Box>`}
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          align: 'center',
          justify: 'center',
          overflow: 'hidden',
          round: 'full',
        },
      }}
    >
      <Properties>
        <Property name="size">
          <Description>A fixed size.</Description>
          <PropertyValue type="string">
            <Description>
              T-shirt sizing based off the theme or a specific size in px, em,
              etc.
            </Description>
            <Example>"xsmall"</Example>
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"2xl"</Example>
            <Example>"3xl"</Example>
            <Example>"4xl"</Example>
            <Example>"5xl"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="src">
          <Description>A URL for an avatar image.</Description>
          <PropertyValue type="string">
            <Example>"//s.gravatar.com/avatar/"</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="avatar.extend">
          <Description>Any additional style for the Avatar.</Description>
          <GenericExtend />
        </Property>

        <Property name="avatar.size.xsmall">
          <Description>The xsmall size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.size.small">
          <Description>The small size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"24px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.size.medium">
          <Description>The medium size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"48px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.size.large">
          <Description>The large size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"72px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.size.xlarge">
          <Description>The xlarge size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"96px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.size.2xl">
          <Description>The 2xlarge size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"120px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.size.3xl">
          <Description>The 3xlarge size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"144px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.size.4xl">
          <Description>The 4xlarge size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"168px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.size.5xl">
          <Description>The 5xlarge size of the Avatar.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"192px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.extend">
          <Description>Any additional style for the text.</Description>
          <GenericExtend />
        </Property>

        <Property name="avatar.text.fontWeight">
          <Description>The font weight of the label.</Description>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.xsmall">
          <Description>
            The size of the text that is mapped according to
            'avatar.size.xsmall'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"14px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.small">
          <Description>
            The size of the text that is mapped according to
            'avatar.size.small'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"18px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.medium">
          <Description>
            The size of the text that is mapped according to
            'avatar.size.medium'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"22px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.large">
          <Description>
            The size of the text that is mapped according to
            'avatar.size.large'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"26px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.xlarge">
          <Description>
            The size of the text that is mapped according to
            'avatar.size.xlarge'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"34px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.2xl">
          <Description>
            The size of the text that is mapped according to 'avatar.size.2xl'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"42px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.3xl">
          <Description>
            The size of the text that is mapped according to 'avatar.size.3xl'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"54px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.4xl">
          <Description>
            The size of the text that is mapped according to 'avatar.size.4xl'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"70px"</Example>
          </PropertyValue>
        </Property>

        <Property name="avatar.text.size.5xl">
          <Description>
            The size of the text that is mapped according to 'avatar.size.5xl'.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"90px"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const AvatarItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
  </Item>
);

AvatarItem.propTypes = Item.propTypes;
