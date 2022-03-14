import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import Nav from '../components/Nav';

const AboutPage = () => (
  <Box>
    <Box pad="large">
      <Nav />
      <Box direction="row">
        <Box margin={{ vertical: 'large' }} basis="medium">
          <Heading level={1}>
            <strong>About</strong>
          </Heading>
          <Paragraph size="large">
            <strong>TBD</strong>
          </Paragraph>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default AboutPage;
