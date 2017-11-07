import React from 'react';

import { Box, Button, SkipLinkTarget, SkipLink, SkipLinks, Heading } from 'grommet';
import doc from 'grommet/components/SkipLinks/doc';

import Doc from '../components/Doc';

const desc = doc(SkipLinks).toJSON();

export default () => (
  <Doc name='SkipLinks' desc={desc}>
    <Box pad='large'>
      <SkipLinks>
        <SkipLink id='main' label='Main Content' />
        <SkipLink id='footer' label='Footer' />
      </SkipLinks>
      <Button onClick={() => {}} label='Test1' />
      <Box>
        <SkipLinkTarget id='main' />
        <Heading>Main Content</Heading>
        <Button onClick={() => {}} label='Test2' />
      </Box>
      <Box tag='footer'>
        <SkipLinkTarget id='footer' />
        <Heading>Footer</Heading>
        <Button onClick={() => {}} label='Test3' />
      </Box>
    </Box>
  </Doc>
);
