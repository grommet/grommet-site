import React from 'react';

import { Box, Button, Heading, Paragraph } from 'grommet';
import { doc, themeDoc } from 'grommet/components/Button/doc';

import RoutedAnchor from '../components/RoutedAnchor';
import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(Button).toJSON();
delete desc.availableAt;
delete desc.description;

const Examples = () => (
  <Box>
    <Paragraph size="large">
      A grommet Button is used for anything that looks like a button on the
      screen. If an <code>href</code> is provided, it will be rendered in the
      DOM with <code>&lt;a/&gt;</code>. An{' '}
      <RoutedAnchor path="/anchor" label="Anchor" /> component should be used
      for inline anchors within textual contexts.
    </Paragraph>
    <Paragraph size="large">
      In May 2020, we enhanced Button to have three kinds, outlined below. In
      order to maintain backwards compatibility, this approach is only available
      when the theme being used defines <code>button.default</code>.
    </Paragraph>
    <Heading level={2}>default</Heading>
    <Paragraph size="large">
      The majority of Buttons on the page. Their affordance is primarily driven
      by their context, in a <RoutedAnchor path="/nav" label="Nav" /> in a{' '}
      <RoutedAnchor path="/header" label="Header" /> or{' '}
      <RoutedAnchor path="/sidebar" label="Sidebar" />, the corner of a tile or
      card, etc.
    </Paragraph>
    <Heading level={2}>primary</Heading>
    <Paragraph size="large">
      The primary call to action. There should typically be at most one primary
      Button on the screen. In a <RoutedAnchor path="/form" label="Form" />{' '}
      context, it signifies the action bound to the enter key that will submit
      the form.
    </Paragraph>
    <Heading level={2}>secondary</Heading>
    <Paragraph size="large">
      When there isn’t enough context to indicate its affordance, or when it
      should call extra attention to itself but isn’t the primary call to
      action, use a secondary Button. Secondary buttons are only available when
      the underlying theme being used defines <code>button.default</code>.
    </Paragraph>
  </Box>
);

export default () => (
  <Page>
    <Doc
      name="Button"
      align="stretch"
      desc={desc}
      text=""
      examples={<Examples />}
      code={'<Button primary label="label" />'}
      syntaxes={{
        ...genericSyntaxes,
        color: 'control',
        href: '//my.com/path',
        icon: '<Add />',
        label: ['Add', '<Box>...</Box>'],
        onClick: '() => {}',
      }}
      themeDoc={themeDoc}
    />
  </Page>
);

export const ButtonItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Button label="i'm a button" primary onClick={() => {}} />
  </Item>
);

ButtonItem.propTypes = Item.propTypes;
