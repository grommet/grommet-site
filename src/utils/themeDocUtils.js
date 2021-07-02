import React from 'react';
import PropTypes from 'prop-types';
import { Markdown } from 'grommet';
import { Description } from '../components/Doc/Description';
import { Example } from '../components/Doc/PropExample';
import { Property } from '../components/Doc/Property';

export const BreakpointStyle = ({ description }) => (
  <Property name="global.breakpoints">
    <Description>{description}</Description>
    <Example defaultValue>
      <Markdown>
        {`
    {
      "small": {
        "value": 768,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "4px",
          "large": "6px",
          "xlarge": "12px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "3px",
          "small": "6px",
          "medium": "12px",
          "large": "24px",
          "xlarge": "48px"
        },
        "size": {
          "xxsmall": "24px",
          "xsmall": "48px",
          "small": "96px",
          "medium": "192px",
          "large": "384px",
          "xlarge": "768px",
          "full": "100%"
        }
      },
      "medium": {"value": 1536},
      "large": {}
    }
        `}
      </Markdown>
    </Example>
  </Property>
);

BreakpointStyle.propTypes = {
  description: PropTypes.node.isRequired,
};

export const DisabledStyle = () => (
  <Property name="global.control.disabled.opacity">
    <Description>The opacity when a component is disabled.</Description>
    <Example defaultValue>0.3</Example>
  </Property>
);

export const EdgeStyle = ({ description }) => (
  <Property name="global.edgeSize">
    <Description>{description}</Description>
    <Example>
      <Markdown>
        {`
    {
      none: '0px',
      hair: '1px',
      xxsmall: '3px',
      xsmall: '6px',
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
      responsiveBreakpoint: 'small'
    }
        `}
      </Markdown>
    </Example>
  </Property>
);

EdgeStyle.propTypes = {
  description: PropTypes.node.isRequired,
};

export const FocusStyle = () => (
  <>
    <Property name="global.focus.border.color">
      <Description>
        The border color of the component when in focus.
      </Description>
      <Example defaultValue>"focus"</Example>
      <Example>{`{ dark: string, light: string }`}</Example>
    </Property>
    <Property name="global.focus.outline.color">
      <Description>
        The outline color around the component when in focus.
      </Description>
      <Example>string</Example>
      <Example>{`{ dark: string, light: string }`}</Example>
    </Property>
    <Property name="global.focus.outline.size">
      <Description>
        The size of the outline around the component when in focus.
      </Description>
      <Example>string</Example>
    </Property>
    <Property name="global.focus.shadow.color">
      <Description>
        The shadow color around the component when in focus.
      </Description>
      <Example defaultValue>"focus"</Example>
      <Example>{`{ dark: string, light: string }`}</Example>
    </Property>
    <Property name="global.focus.shadow.size">
      <Description>
        The size of the shadow around the component when in focus.
      </Description>
      <Example defaultValue>"2px"</Example>
    </Property>
  </>
);

export const IconColor = () => (
  <Property name="global.colors.icon">
    <Description>The color of a given icon.</Description>
    <Example defaultValue>{`{ dark: #f8f8f8, light: #666666 }`}</Example>
    <Example>string</Example>
  </Property>
);

export const InputStyle = () => (
  <>
    <Property name="global.input.font.height">
      <Description>The line-height of the text.</Description>
      <Example>string</Example>
    </Property>
    <Property name="global.input.font.size">
      <Description>The size of the text.</Description>
      <Example>string</Example>
    </Property>
    <Property name="global.input.font.weight">
      <Description>
        The font-weight of the text. This value will only be applied if
        global.input.weight is undefined.
      </Description>
      <Example defaultValue>600</Example>
    </Property>
    <Property name="global.input.weight">
      <Description>
        This value has been deprecated and replaced by global.input.font.weight.
      </Description>
      <Example>number</Example>
      <Example>string</Example>
    </Property>
    <Property name="global.input.padding">
      <Description>The padding of the text.</Description>
      <Example defaultValue>12px</Example>
      <Example>
        {`{ top: string, bottom: string, left: string, right: 
    string, horizontal: string, vertical: string }`}
      </Example>
    </Property>
  </>
);

export const placeholderStyle = () => (
  <Property name="global.colors.placeholder">
    <Description>The placeholder color used for the component.</Description>
    <Example defaultValue>"#AAAAAA"</Example>
  </Property>
);

export const responsiveBreakpoint = ({ description }) => (
  <Property name="global.edgeSize.responsiveBreakpoint">
    <Description>{description}</Description>
    <Example defaultValue>"small"</Example>
  </Property>
);

responsiveBreakpoint.propTypes = {
  description: PropTypes.node.isRequired,
};
