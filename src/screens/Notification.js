import React from 'react';

import { Notification } from 'grommet-icons';
import { Box, Paragraph, Heading } from 'grommet';

import Page from '../components/Page';
import Item from './Components/Item';
import { Code } from '../components/Doc/Code';

import { GenericColor } from '../utils/genericThemeExamples';
import { GenericBoolFalse } from '../utils/genericPropExamples';

import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

const NotificationPage = () => (
  <Page>
    <ComponentDoc
      name="Notification"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/visualizations-notification-status--status',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/Notification',
          label: 'Github',
        },
      ]}
      designSystemLink="https://design-system.hpe.design/components/notification"
      code={`<Notification
  title="Default Status Title"
  message="This is an example of a notification message"
  onClose={() => {}}
/>`}
      description="deliver transparent clarity for task and
      system statuses"
    >
      <Box
        alignSelf="start"
        margin={{ top: 'medium' }}
        pad="medium"
        round
        background="light-3"
      >
        <Paragraph margin="none">
          The Notification component is a work-in-progress. This page is focused
          on the first iteration of Notifications, which is mainly the Toast
          Notification. We are currently exploring and ideating on banners,
          badging, bells, and inline, global and system notifications to include
          in future versions.
        </Paragraph>
      </Box>
      <Heading>Toast Notifications</Heading>
      <Paragraph size="large">
        Toast notifications are used to communicate low severity level
        information to users in an unobtrusive way. They should be used
        sparingly to display low attention messages and statuses that do not
        require user action.
      </Paragraph>
      <Paragraph size="large">
        If there are multiple toast notifications, you should deal with them by
        having only one toast present at a time. Once the first toast is
        dismissed or timed out, the next one should appear.
      </Paragraph>
      <Code
        code={`function Example() {
const [visible, setVisible] = React.useState();

return (
  <Box>
    <Button 
      label="Open Toast Notification" 
      onClick={() => setVisible(true)} 
    />
    <Paragraph textAlign="center">
      This notification will disappear after 8 seconds
      if not dismissed via the close button.
    </Paragraph>
    {visible && (
      <Notification
        toast
        title="Toast Notification"
        message="This is an example of a toast notification"
        onClose={() => setVisible(false)}
      />
    )}
  </Box>
);
}`}
        name="Toast Notification"
      />
      <Properties>
        <Property name="actions">
          <Description>
            Anchors that appear to the right of the title and message. Value
            should be provided as an array of objects, where the object accepts
            any Anchor properties.
          </Description>
          <PropertyValue type="array">
            <Example>{`[{ label: 'Renew Subscription', href: '/renew'}]`}</Example>
            <Example>{`[
  { label: 'Renew Subscription', href: '/renew'},
  { label: 'View Details', href:'/details' }
]`}</Example>
          </PropertyValue>
        </Property>
        <Property name="global">
          <Description>
            A boolean flag indicating whether or not the Notification is a
            Global Notification. Global notifications are displayed directly
            beneath an application header as opposed to a notification within an
            individual page. Global Banner notifications can receive their own
            theming.
          </Description>
          <GenericBoolFalse />
        </Property>
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
            <Example>"info"</Example>
            <Example>"critical"</Example>
          </PropertyValue>
        </Property>

        <Property name="toast">
          <Description>
            A boolean flag that indicates whether or not the Notification is a
            Toast Notification.
          </Description>
          <GenericBoolFalse />
          <PropertyValue type="object">
            <Description>
              When using Toast Notification a position is available to pass in
              as an object which will then be the position of the toast content.
              `autoClose` can be set to false to prevent the notification from
              closing after a period of time defined by
              `notification.toast.time`.
            </Description>
            <Example>{`{ 
  autoClose: boolean,
  position: 'bottom-right',
}`}</Example>
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
        <Property name="notification.close.color">
          <Description>The color of the close button icon.</Description>
          <GenericColor />
        </Property>

        <Property name="notification.close.icon">
          <Description>The default close button icon.</Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<FormClose />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.container">
          <Description>
            Any valid Box prop for the Notification container.
          </Description>
          <PropertyValue type="object">
            <Description>
              'background.color' is used for the container color.
            </Description>
            <Example defaultValue>
              {`
{
    round: 'xsmall',
    pad: { horizontal: 'small', vertical: 'xsmall' },
    background: {
        color: 'background-front',
    }
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.direction">
          <Description>
            The layout direction for the title and message.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"column"</Example>
            <Example>"row"</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.global.container">
          <Description>
            Any valid Box prop for the Global Notification container.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
  round: 'none',
  pad: {
    horizontal: 'large',
    vertical: 'xsmall',
},
                `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="notification.global.direction">
          <Description>
            The layout direction for the title and message of a global
            notification.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"row"</Example>
            <Example>"column"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.critical.color">
          <Description>The color of the critical status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
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
        <Property name="notification.critical.background">
          <Description>The background of a critical Notification.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
background: {
  color: 'status-critical',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.critical.global.background">
          <Description>
            The background of a critical global Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-critical',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.critical.toast.background">
          <Description>
            The background of a critical toast Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-warning',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example defaultValue>"background-front"</Example>
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

        <Property name="notification.info.color">
          <Description>The color of the info status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"text-strong"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.info.icon">
          <Description>
            The default icon for an info status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<CircleInformation />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.info.background">
          <Description>The background of an info Notification.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
background: {
  color: 'background-contrast',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.info.global.background">
          <Description>
            The background of an info global Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'background-back',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.info.toast.background">
          <Description>
            The background of an info toast Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'background-back',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.message">
          <Description>Any valid Text prop for the message text.</Description>
          <PropertyValue type="object">
            <Description>'color' is used for the message color.</Description>
            <Example defaultValue>"text"</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.normal.color">
          <Description>The color of the normal status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-ok"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
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
        <Property name="notification.normal.background">
          <Description>The background of a normal Notification.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
background: {
  color: 'status-ok',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.normal.global.background">
          <Description>
            The background of a normal global Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-ok',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.normal.toast.background">
          <Description>
            The background of a normal toast Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-ok',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.textContainer">
          <Description>Any valid Box prop for the text container.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
    gap: 'medium'
}
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
    color: 'text'
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.toast.container">
          <Description>
            Any valid Box prop for the Toast Notification container.
          </Description>
          <PropertyValue type="object">
            <Description>
              'width' is used for the default width of a Toast Notification.
            </Description>
            <Example defaultValue>
              {`
{
    elevation: 'medium',
    width: 'medium'
}
                `}
            </Example>
          </PropertyValue>
        </Property>
        <Property name="notification.toast.direction">
          <Description>
            The layout direction for the title and message of a toast
            notification.
          </Description>
          <PropertyValue type="string">
            <Example>"column"</Example>
            <Example>"row"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.toast.layer">
          <Description>
            Any valid Layer prop for the Toast Notification layer.
          </Description>
          <PropertyValue type="object">
            <Description>
              'position' is used for the default positioning of a Toast
              Notification.
            </Description>
            <Example defaultValue>
              {`
{
    position: 'top',
    margin: 'medium',
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.toast.time">
          <Description>The time duration of a Toast Notification.</Description>
          <PropertyValue type="number">
            <Description>The value is in milliseconds (ms).</Description>
            <Example defaultValue>8000</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.unknown.color">
          <Description>The color of the unknown status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-unknown"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
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
        <Property name="notification.unknown.background">
          <Description>The background of an unknown Notification.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
background: {
  color: 'status-unknown',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.unknown.global.background">
          <Description>
            The background of an unknown global Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-unknown',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.unknown.toast.background">
          <Description>
            The background of an unknown toast Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-unknown',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.undefined.background">
          <Description>
            The background of a Notification with no status defined.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-unknown',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.undefined.global.background">
          <Description>
            The background of a Notification with no status defined.
          </Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
background: {
  color: 'status-unknown',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.undefined.toast.background">
          <Description>
            The background of a Notification with no status defined.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-unknown',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.warning.color">
          <Description>The color of the warning status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-warning"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
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
        <Property name="notification.warning.background">
          <Description>The background of a warning Notification.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
background: {
  color: 'status-warning',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.warning.global.background">
          <Description>
            The background of a warning global Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-warning',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>
        <Property name="notification.warning.toast.background">
          <Description>
            The background of a warning toast Notification.
          </Description>
          <PropertyValue type="object">
            <Example>
              {`
background: {
  color: 'status-warning',
  opacity: 'weak',
},
            `}
            </Example>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Example defaultValue>"background-front"</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export default NotificationPage;

export const NotificationItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Notification size="large" />
  </Item>
);

NotificationItem.propTypes = Item.propTypes;
