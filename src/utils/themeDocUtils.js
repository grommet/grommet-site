import React from 'react';
import PropTypes from 'prop-types';
import { GenericColor } from './genericThemeExamples';
import {
  Description,
  Example,
  Property,
  PropertyValue,
} from '../components/Doc';

export const BreakpointStyle = ({ description }) => (
  <Property name="global.breakpoints">
    <Description>{description}</Description>
    <PropertyValue type="object">
      <Example defaultValue>
        {`
{
  small: {
    value: 768,
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "4px",
      large: "6px",
      xlarge: "12px"
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "2px",
      xsmall: "3px",
      small: "6px",
      medium: "12px",
      large: "24px",
      xlarge: "48px"
    },
    size: {
      xxsmall: "24px",
      xsmall: "48px",
      small: "96px",
      medium: "192px",
      large: "384px",
      xlarge: "768px",
      full: "100%"
    }
  },
  medium: { value: 1536 },
  large: {}
}
        `}
      </Example>
    </PropertyValue>
  </Property>
);

BreakpointStyle.propTypes = {
  description: PropTypes.node.isRequired,
};

export const DisabledStyle = () => (
  <Property name="global.control.disabled.opacity">
    <Description>The opacity when a component is disabled.</Description>
    <PropertyValue type="number">
      <Example defaultValue>0.3</Example>
    </PropertyValue>
  </Property>
);

export const EdgeStyle = ({ description }) => (
  <Property name="global.edgeSize">
    <Description>{description}</Description>
    <PropertyValue type="object">
      <Example>
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
      </Example>
    </PropertyValue>
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
      <PropertyValue type="string">
        <Description>A hex, name, or rgb value.</Description>
        <Example defaultValue>"focus"</Example>
      </PropertyValue>
      <PropertyValue type="object">
        <Description>
          An object with a color for dark and light modes.
        </Description>
        <Example>{`{ dark: "string", light: "string" }`}</Example>
      </PropertyValue>
    </Property>
    <Property name="global.focus.inset">
      <Description>
        Focus styles for cases where focus indicator should be inset in the container.
      </Description>
      <PropertyValue type="object">
        <Description>
          An object can contain a border, outline, shadow, and twoColor.
        </Description>
        <Example>
          {`{    
        inset: {
          border: {
            color: 'focus',
          },
          outline: { color: 'focus', size: '2px', offset: '-2px' },
          shadow: undefined,
          twoColor: undefined,
        },}`}
        </Example>
      </PropertyValue>
    </Property>

    <Property name="global.focus.outline.color">
      <Description>
        The outline color around the component when in focus.
      </Description>
      <GenericColor />
    </Property>
    <Property name="global.focus.outline.size">
      <Description>
        The size of the outline around the component when in focus.
      </Description>
      <PropertyValue type="string">
        <Example>"2px"</Example>
      </PropertyValue>
    </Property>
    <Property name="global.focus.shadow.color">
      <Description>
        The shadow color around the component when in focus.
      </Description>
      <PropertyValue type="string">
        <Example defaultValue>"focus"</Example>
      </PropertyValue>
      <PropertyValue type="object">
        <Description>
          An object with a color for dark and light modes.
        </Description>
        <Example>{`{ dark: "string", light: "string" }`}</Example>
      </PropertyValue>
    </Property>
    <Property name="global.focus.shadow.size">
      <Description>
        The size of the shadow around the component when in focus.
      </Description>
      <PropertyValue type="string">
        <Example defaultValue>"2px"</Example>
      </PropertyValue>
    </Property>
  </>
);

export const IconColor = () => (
  <Property name="global.colors.icon">
    <Description>The color of a given icon.</Description>
    <PropertyValue type="string">
      <Description>A hex, name, or rgb value.</Description>
      <Example>"black"</Example>
    </PropertyValue>
    <PropertyValue type="object">
      <Description>
        An object with a color for dark and light modes.
      </Description>
      <Example defaultValue>{`{ dark: #f8f8f8, light: #666666 }`}</Example>
    </PropertyValue>
  </Property>
);

export const InputStyle = () => (
  <>
    <Property name="global.input.font.height">
      <Description>The line-height of the text.</Description>
      <PropertyValue type="string">
        <Example>"normal"</Example>
      </PropertyValue>
    </Property>
    <Property name="global.input.font.size">
      <Description>The size of the text.</Description>
      <PropertyValue type="string">
        <Example>"18px"</Example>
      </PropertyValue>
    </Property>
    <Property name="global.input.font.weight">
      <Description>
        The font-weight of the text. This value will only be applied if
        global.input.weight is undefined.
      </Description>
      <PropertyValue type="string">
        <Example>"bold"</Example>
      </PropertyValue>
      <PropertyValue type="number">
        <Example defaultValue>600</Example>
      </PropertyValue>
    </Property>
    <Property name="global.input.weight">
      <Description>
        This value has been deprecated and replaced by global.input.font.weight.
      </Description>
      <PropertyValue type="string">
        <Example>"bold"</Example>
      </PropertyValue>
      <PropertyValue type="number">
        <Example>300</Example>
      </PropertyValue>
    </Property>
    <Property name="global.input.padding">
      <Description>The padding of the text.</Description>
      <PropertyValue type="string">
        <Example defaultValue>"12px"</Example>
      </PropertyValue>
      <PropertyValue type="object">
        <Description>
          An object specifying padding for different sides of the component.
        </Description>
        <Example>
          {`
{ 
  top: "string", 
  bottom: "string", 
  left: "string", 
  right: "string", 
  horizontal: "string", 
  vertical: "string" 
}`}
        </Example>
      </PropertyValue>
    </Property>
  </>
);

export const PlaceholderStyle = () => (
  <Property name="global.colors.placeholder">
    <Description>The placeholder color used for the component.</Description>
    <PropertyValue type="string">
      <Example defaultValue>"#AAAAAA"</Example>
    </PropertyValue>
  </Property>
);

export const ResponsiveBreakpoint = ({ description }) => (
  <Property name="global.edgeSize.responsiveBreakpoint">
    <Description>{description}</Description>
    <PropertyValue type="string">
      <Example defaultValue>"small"</Example>
    </PropertyValue>
  </Property>
);

ResponsiveBreakpoint.propTypes = {
  description: PropTypes.node.isRequired,
};
