import React from 'react';
import { Heading } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  GenericA11yTitle,
  GenericAlignSelf,
  GenericGridArea,
  GenericMargin,
  GenericBoolTrue,
  GenericBoolFalse,
  GenericBool,
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
import { EdgeStyle, BreakpointStyle } from '../utils/themeDocUtils';

const HeadingPage = () => (
  <Page>
    <ComponentDoc
      name="Heading"
      availableAt={[
        {
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
          url: 'https://storybook.grommet.io/?selectedKind=Type-Heading&full=0&stories=1&panelRight=0',
        },
        {
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/heading&module=%2Fsrc%2FHeading.js',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Heading',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/foundation/typography#heading"
      description="Heading text structured in levels"
      intrinsicElement={['h1', 'h2', 'h3', 'h4']}
      code={`<Heading margin="none">Chapter 1</Heading>`}
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

        <Property name="level">
          <Description>
            The heading level. It corresponds to the number after the 'H' for
            the DOM tag. Set the level for semantic accuracy and accessibility.
            The sizing can be further adjusted using the size property.
          </Description>
          <PropertyValue type="string">
            <Example>"1"</Example>
            <Example>"2"</Example>
            <Example>"3"</Example>
            <Example>"4"</Example>
            <Example>"5"</Example>
            <Example>"6"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example defaultValue>1</Example>
            <Example>2</Example>
            <Example>3</Example>
            <Example>4</Example>
            <Example>5</Example>
            <Example>6</Example>
          </PropertyValue>
        </Property>

        <Property name="responsive">
          <Description>
            Whether the font size should be scaled for mobile environments.
          </Description>
          <GenericBoolTrue />
        </Property>

        <Property name="overflowWrap">
          <Description>
            Specifies whether line breaks should be inserted within an otherwise
            unbreakable string, such as long word or URL, to prevent text from
            overflowing its container.
          </Description>
          <PropertyValue type="string">
            <Description>
              "normal" specifies that line breaks may only occur at normal
              string breakpoints, such as a space or hyphen.
            </Description>
            <Description>
              "anywhere" and "break-word" both prevent text from overflowing by
              allowing strings to break at any point.
            </Description>
            <Description>
              They differ in how their min-content widths are calculated,
              affecting how they are treated in flex layouts such a Box and
              Grid. "anywhere" is the most flexible, its min-content width is
              equal to width longest word in the string. "break-word" prefers to
              occupy the intrinsic width of the string.
            </Description>
            <Example>"normal"</Example>
            <Example>"anywhere"</Example>
            <Example defaultValue>"break-word"</Example>
          </PropertyValue>
        </Property>

        <Property name="size">
          <Description>
            The font size is primarily driven by the chosen tag. But, it can be
            adjusted via this size property. The tag should be set for semantic
            correctness and accessibility. This size property allows for
            stylistic adjustments.
          </Description>
          <PropertyValue type="string">
            <Example>"small"</Example>
            <Example defaultValue>"medium"</Example>
            <Example>"large"</Example>
            <Example>"xlarge"</Example>
            <Example>"string"</Example>
          </PropertyValue>
        </Property>

        <Property name="textAlign">
          <Description>How to align the text inside the heading.</Description>
          <PropertyValue type="string">
            <Example defaultValue>"start"</Example>
            <Example>"center"</Example>
            <Example>"end"</Example>
            <Example>"justify"</Example>
          </PropertyValue>
        </Property>

        <Property name="truncate">
          <Description>
            Restrict the text to a single line and truncate with ellipsis if it
            is too long to all fit.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="weight">
          <Description>Font weight</Description>
          <PropertyValue type="string">
            <Example defaultValue>"normal"</Example>
            <Example>"bold"</Example>
            <Example>"lighter"</Example>
            <Example>"bolder"</Example>
          </PropertyValue>
          <PropertyValue type="number">
            <Example>300</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <BreakpointStyle description="The possible breakpoints that could affect font-size and max-width" />

        <EdgeStyle description="The possible sizes for margin." />

        <Property name="heading.color">
          <Description>The color of the heading.</Description>
          <GenericColor />
        </Property>

        <Property name="heading.extend">
          <Description>Any additional style for Heading.</Description>
          <GenericExtend />
        </Property>

        <Property name="heading.level">
          <Description>
            The level that impacts line-height, max-width, font size, weight and
            family of the Heading. Heading styling is automatically adjusted at
            different screen sizes. When the heading.responsiveBreakpoint is hit
            ("small" by default), all heading styles will automatically be
            adjusted. A heading of level 1, for example, will use the styling
            defined in heading level 2; a heading of level 2 will use the
            styling defined in heading level 3 and so forth. The tag in the DOM
            is not adjusted. A heading of level 1 remains an h1. The styling
            adjustment is intended to aid readability on smaller screens but
            will not semantically affect your application structure. If you do
            not want this responsive styling to occur, you can set
            header.responsiveBreakpoint to undefined.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
{
  1: {
    font: {},
    small: {
      size: "34px",
      height: "40px",
      maxWidth: "816px"
    },
    medium: {
      size: "50px",
      height: "56px",
      maxWidth: "1200px"
    },
    large: {
      size: "82px",
      height: "88px",
      maxWidth: "1968px"
    },
    xlarge: {
      size: "114px",
      height: "120px",
      maxWidth: "2736px"
    }
  },
  2: {
    font: {},
    small: {
      size: "26px",
      height: "32px",
      maxWidth: "624px"
    },
    medium: {
      size: "34px",
      height: "40px",
      maxWidth: "816px"
    },
    large: {
      size: "50px",
      height: "56px",
      maxWidth: "1200px"
    },
    xlarge: {
      size: "66px",
      height: "72px",
      maxWidth: "1584px"
    }
  },
  3: {
    font: {},
    small: {
      size: "22px",
      height: "28px",
      maxWidth: "528px"
    },
    medium: {
      size: "26px",
      height: "32px",
      maxWidth: "624px"
    },
    large: {
      size: "34px",
      height: "40px",
      maxWidth: "816px"
    },
    xlarge: {
      size: "42px",
      height: "48px",
      maxWidth: "1008px"
    }
  },
  4: {
    font: {},
    small: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    large: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    xlarge: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    }
  },
  5: {
    font: {},
    small: {
      size: "16px",
      height: "22px",
      maxWidth: "384px"
    },
    medium: {
      size: "16px",
      height: "22px",
      maxWidth: "384px"
    },
    large: {
      size: "16px",
      height: "22px",
      maxWidth: "384px"
    },
    xlarge: {
      size: "16px",
      height: "22px",
      maxWidth: "384px"
    }
  },
  6: {
    font: {},
    small: {
      size: "14px",
      height: "20px",
      maxWidth: "336px"
    },
    medium: {
      size: "14px",
      height: "20px",
      maxWidth: "336px"
    },
    large: {
      size: "14px",
      height: "20px",
      maxWidth: "336px"
    },
    xlarge: {
      size: "14px",
      height: "20px",
      maxWidth: "336px"
    }
  }
}
            `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="heading.weight">
          <Description>
            Default heading weight used unless a per level heading is defined.
          </Description>
          <PropertyValue type="number">
            <Example defaultValue>600</Example>
          </PropertyValue>
        </Property>

        <Property name="heading.font">
          <Description>
            Default heading font used unless a per level heading is defined.
          </Description>
          <PropertyValue type="object">
            <Example>{`{}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="heading.skeleton">
          <Description>
            Any Skeleton properties which will be applied to the Heading when in
            skeleton mode. For the Heading to be in skeleton mode, use the
            'skeleton' property on a parent Box.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>{`{ width: { min: '200px' }}`}</Example>
          </PropertyValue>
        </Property>

        <Property name="heading.responsiveBreakpoint">
          <Description>
            The breakpoint to trigger changes in the Heading layout. The actual
            values will be derived from global.breakpoints.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"small"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default HeadingPage;

export const HeadingItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Heading level={2} margin="none">
      Chapter 1
    </Heading>
  </Item>
);

HeadingItem.propTypes = Item.propTypes;
