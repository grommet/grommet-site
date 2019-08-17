import React from 'react';

import { Anchor, Box, Image, Text, Paragraph } from 'grommet';
import { Next } from 'grommet-icons';

import Header from '../../components/Header';
import Section from './Section';

// eslint-disable-next-line react/prop-types
const Tile = ({ desc, label, link }) => (
  <Box align="center" size="small" pad={{ horizontal: 'large' }}>
    <Anchor
      size="xlarge"
      href={link}
      label={<Text size="large">{label}</Text>}
      icon={<Next color="accent-1" />}
      reverse
      target="_blank"
    />
    <Paragraph textAlign="center" size="xlarge" alignSelf="center">
      {desc}
    </Paragraph>
  </Box>
);

export const Tools = () => {
  return (
    <Box>
      <Section pad={{ top: 'xlarge' }} background="neutral-2">
        <Header
          label="but wait there's more"
          summary="we've been hard at work on making grommet even easier to learn and use"
        />
        <Box
          direction="row-responsive"
          justify="center"
          gap="large"
          margin="large"
        >
          <Tile
            desc="build experiences with grommet components; then publish and share
              your ideas with a simple wysiwg interface"
            label="Grommet Designer"
            link="https://designer.grommet.io/"
          />
          <Tile
            desc="want grommet to look like your brand? plug your details in and
              share it or import it into to grommet designer"
            label="Grommet Themer"
            link="https://theme-designer.grommet.io/"
          />
        </Box>
        <Box direction="row" gap="large" margin={{ horizontal: 'large' }}>
          <Image width={96} fit="cover" src="/img/tools/designer.png" />
          <Image width={96} fit="cover" src="/img/tools/themer.png" />
        </Box>
      </Section>
    </Box>
  );
};
