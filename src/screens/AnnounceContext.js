import React from 'react';
import { Sign } from 'grommet-icons';
import Page from '../components/Page';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';
import Item from './Components/Item';

const AnnounceContextPage = () => (
  <Page>
    <ComponentDoc
      name="Announce Context .Consumer"
      availableAt={[
        {
          url: 'https://storybook.grommet.io/?path=/story/Utilities-AnnounceContext',
          badge:
            'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/announcecontext&module=%2Fsrc%2FAnnounceContext.js',
          badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          label: 'CodeSandbox',
        },
      ]}
      description="A means of announcing events for screen readers"
    >
      <Properties>
        <Property name="children">
          <Description>
            Render function that will be called with an 'announce' function that
            can be called when something should be announced. 'announce'
            function accepts 'message', 'mode' and 'timeout' as arguments and
            these arguments can be passed as 'props' to the return component.
            'mode' can be one of 'polite', 'assertive' or 'off'. 'timeout' is
            measured in milliseconds.
          </Description>
          <PropertyValue type="function">
            <Example>
              {`
            {announce => <Button onClick={() => announce( "Button was clicked", "polite", 1000 ) }
            `}
            </Example>
          </PropertyValue>
        </Property>
      </Properties>
    </ComponentDoc>
  </Page>
);

export default AnnounceContextPage;

export const AnnounceContextItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Sign color="brand" size="xlarge" />
  </Item>
);

AnnounceContextItem.propTypes = Item.propTypes;
