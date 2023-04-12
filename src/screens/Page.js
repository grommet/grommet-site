import React from 'react';
import { Box, Paragraph } from 'grommet';
import PageDoc from '../components/Page';
import Item from './Components/Item';
import RoutedAnchor from '../components/RoutedAnchor';
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

const PagePage = () => (
  <PageDoc>
    <ComponentDoc
      name="Page"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Layout-Page',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Page',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/page"
      description="A container to provide context for how content should be laid out on a page"
      intrinsicElement="div"
      code={`<Page kind="narrow">
  <PageContent background="light-3">
    <Paragraph>
      Some content
    </Paragraph>
  </PageContent>
</Page>
    `}
    >
      <Box
        alignSelf="start"
        margin={{ top: 'medium' }}
        pad="medium"
        round
        background="light-3"
      >
        <Paragraph margin="none">
          The Page component can be customized with any of the properties
          available in <RoutedAnchor path="/box" label="Box" />.
        </Paragraph>
      </Box>
      <Properties>
        <Property name="kind">
          <Description>
            The type of page layout. See associated theme props.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"wide"</Example>
            <Example>"narrow"</Example>
            <Example>"full"</Example>
            <Example>string</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="page.wide.alignSelf">
          <Description>How to align the content on a Page.</Description>
          <PropertyValue type="string">
            <Example>"start"</Example>
            <Example defaultValue>"center"</Example>
            <Example>"end"</Example>
            <Example>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="page.wide.width">
          <Description>The min and max width of the content.</Description>
          <PropertyValue type="object">
            <Example
              defaultValue
            >{`{ min: "medium", max: "xxlarge" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.wide.small">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'large' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.wide.medium">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'medium' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.wide.large">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'large' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.narrow.alignSelf">
          <Description>How to align the content on a Page.</Description>
          <PropertyValue type="string">
            <Example>"start"</Example>
            <Example defaultValue>"center"</Example>
            <Example>"end"</Example>
            <Example>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="page.narrow.width">
          <Description>The min and max width of the content.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ min: "medium", max: "large" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.narrow.small">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'large' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.narrow.medium">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'medium' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.narrow.large">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'large' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.full.alignSelf">
          <Description>How to align the content on a Page.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"stretch"</Example>
          </PropertyValue>
        </Property>

        <Property name="page.full.width">
          <Description>The min and max width of the content.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ min: "medium", max: "100%" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.full.small">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'large' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.full.medium">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'medium' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="page.full.large">
          <Description>Any valid Box props.</Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ pad: { horizontal: 'large' }}`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>

    <ComponentDoc
      name="PageContent"
      description="A container for content within a Page"
      intrinsicElement="div"
      isA={{
        base: 'Box',
        path: '/box',
        defaultProps: {
          fill: 'horizontal',
        },
      }}
    >
      <Properties>
        <Property name="background">
          <Description>
            The background of the Page. Use `fill: "horizontal"` to specify that
            the background should ignore width restrictions and fill the width
            of the Page.
          </Description>
          <PropertyValue type="string">
            <Description>A color or image url.</Description>
            <Example>"neutral-1"</Example>
            <Example>"url(//my.com/assets/img.png)"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Example>
              {`
{
  color: "neutral-1",
  dark: true,
  opacity: true,
  position: "bottom",
  repeat: "no-repeat",
  size: "cover",
  image: "url(//my.com/assets/img.png)",
  fill: "horizontal,
  clip: "text",
  rotate: 45
}
              `}
            </Example>
            <Example>{`{ dark: "light-2", light: "dark-2" }`}</Example>
            <PropOptions prop="opacity">
              <Example>"weak"</Example>
              <Example>"medium"</Example>
              <Example>"strong"</Example>
              <Example>true</Example>
            </PropOptions>
            <PropOptions prop="position">
              <Example>any CSS for background-position</Example>
            </PropOptions>
            <PropOptions prop="repeat">
              <Example>"no-repeat"</Example>
              <Example>"repeat"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="size">
              <Example>"cover"</Example>
              <Example>"contain"</Example>
              <Example>"string"</Example>
            </PropOptions>
            <PropOptions prop="clip">
              <Example>"text"</Example>
              <Example>"border-box"</Example>
              <Example>"padding-box"</Example>
              <Example>"content-box"</Example>
            </PropOptions>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </PageDoc>
);

export default PagePage;

export const PageItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box width="small">
      <Box pad="xlarge" background="brand" />
    </Box>
  </Item>
);

PageItem.propTypes = Item.propTypes;
