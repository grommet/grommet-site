import React from 'react';
import { Button } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericColor } from '../utils/genericThemeExamples';
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
      name="Notification"
      availableAt={[
        {
          url: 'https://storybook.grommet.io',
          badge: 'https://cdn-images-1.medium.com/',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github',
          badge: 'https://codesandbox.io/',
          label: 'CodeSandbox',
        },
      ]}
      description="A Notification"
      code="// <Notification />"
    >
      <Properties>
        <Property name="title">
          <Description>
            A string that represents the title of a Notification.
          </Description>
          <PropertyValue type="string">
            <Example>"Your session has expired."</Example>
          </PropertyValue>
        </Property>

        <Property name="message">
          <Description>
            A custom message displayed under the title. Provides more
            information about the Notification.
          </Description>
          <PropertyValue type="string">
            <Example>"You were signed out due to inactivity."</Example>
          </PropertyValue>
        </Property>

        <Property name="status">
          <Description>
            An indicator that relays the current status of a Notification.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"unknown"</Example>
            <Example>"normal"</Example>
            <Example>"warning"</Example>
            <Example>"critical"</Example>
          </PropertyValue>
        </Property>

        <Property name="toast">
          <Description>
            A boolean flag that indicates whether or not the Notification is a
            Toast Notification.
          </Description>
          <PropertyValue type="boolean">
            <Example defaultValue>"false"</Example>
            <Example>"true"</Example>
          </PropertyValue>
        </Property>

        <Property name="onClose">
          <Description>
            Click handler. Not setting this property causes the Notification to
            not have a close button.
          </Description>
          <PropertyValue type="function">
            <Example>{`(...args: any[]) => any`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="notification.toast.container">
          <Description>
            Any valid Box prop for the Toast Notification container.
          </Description>
          <PropertyValue type="object">
            <Description>
              'background.color' is used for the container color. 'width' is
              used for the default width of a Toast Notification.
            </Description>
            <Example defaultValue>
              {`
                    {
                        elevation: 'medium',
                        round: 'xsmall',
                        width: 'medium',
                        pad: { horizontal: 'small', vertical: 'xsmall' },
                        background: {
                            color: 'background-front',
                        },
                    }
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.iconContainer">
          <Description>Any valid Box prop for the icon container.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
                    {
                        pad: { right: 'small' },
                    }
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.textContainer">
          <Description>Any valid Box prop for the text container.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
                    {
                        gap: 'medium',
                    },
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.title">
          <Description>Any valid Text prop for the title text.</Description>
          <PropertyValue type="object">
            <Description>
              'color' is used for the text color and 'weight' for the weight of
              the title.
            </Description>
            <Example defaultValue>
              {`
                    {
                        weight: 'bold',
                        color: {
                            light: 'black',
                            dark: 'white',
                        },
                    },
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.message">
          <Description>Any valid Text prop for the message text.</Description>
          <PropertyValue type="object">
            <Description>'color' is used for the message color.</Description>
            <Example defaultValue>
              {`
                    {
                        color: {
                            light: 'black',
                            dark: 'white',
                        },
                    },
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.button.icon">
          <Description>The default close button icon.</Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<FormClose />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.button.color">
          <Description>The color of the close button icon.</Description>
          <GenericColor />
          <PropertyValue>
            <Example defaultValue>
              {`
                    color: {
                        light: 'black',
                        dark: 'white',
                    },`}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.unknown.icon">
          <Description>
            The default icon for an unknown status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<StatusUnknownSmall />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.unknown.color">
          <Description>The color of the close button icon.</Description>
          <GenericColor />
          <PropertyValue>
            <Example defaultValue>
              {`
                    "status-unknown"
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.normal.icon">
          <Description>
            The default icon for a normal status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<StatusGoodSmall />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.normal.color">
          <Description>The color of the close button icon.</Description>
          <GenericColor />
          <PropertyValue>
            <Example defaultValue>
              {`
                    "status-ok"
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.warning.icon">
          <Description>
            The default icon for a warning status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<StatusWarningSmall />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.warning.color">
          <Description>The color of the close button icon.</Description>
          <GenericColor />
          <PropertyValue>
            <Example defaultValue>
              {`
                    "status-warning"
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.critical.icon">
          <Description>
            The default icon for a critical status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<StatusCriticalSmall />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.critical.color">
          <Description>The color of the close button icon.</Description>
          <GenericColor />
          <PropertyValue>
            <Example defaultValue>
              {`
                    "status-critical"
                `}
            </Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const NotificationItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Button label="Button" />
  </Item>
);

NotificationItem.propTypes = Item.propTypes;
