import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Image, Paragraph, RoutedAnchor, RoutedButton, Stack, Text,
} from 'grommet';
import { Favorite } from 'grommet-icons';
import Nav from '../components/Nav';

export default class Home extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange(['#FCC', '#FFFFFF']);
  }

  render() {
    return (
      <Box>
        <Stack guidingChild={3}>
          <Box>
            <Image src='img/circles.svg' fit='cover' />
          </Box>
          <Box>
            <Image src='img/graffiti.svg' fit='cover' />
          </Box>
          <Box>
            <Image src='img/geometric.svg' fit='cover' />
          </Box>
          <Box direction='row' responsive={true}>
            <Box pad='large' margin={{ top: 'large' }}>
              <Box direction='row'>
                <Box basis='large' align='start' margin={{ vertical: 'large' }}>
                  <Heading level={1} margin={{ top: 'none', bottom: 'small' }}>
                    <strong>Styled components for Reactjs</strong>
                  </Heading>
                  <Paragraph margin={{ bottom: 'medium' }}>
                    Build apps quickly and easily with one of the most
                    approachable frameworks out there.
                  </Paragraph>
                  <RoutedButton
                    to='https://github.com/grommet/grommet'
                    primary={true}
                    label='GitHub'
                  />
                </Box>
              </Box>
            </Box>
            <Box
              alignSelf='end'
              margin={{ top: 'xlarge' }}
              pad={{ horizontal: 'large' }}
              style={{ overflow: 'hidden' }}
            >
              <Box
                style={{
                  position: 'relative',
                  bottom: '-24px',
                  animationTimingFunction: 'ease-out',
                }}
                animation={[
                  { type: 'fadeIn', delay: 200 },
                  { type: 'slideUp', delay: 300, size: 'xlarge' },
                  { type: 'jiggle', size: 'small', duration: 2000 },
                ]}
              >
                <Image
                  style={{ objectPosition: '50% 100%' }}
                  src='img/Stak.svg'
                  fit='contain'
                />
              </Box>
            </Box>
          </Box>
          <Box pad='large'>
            <Nav />
          </Box>
        </Stack>

        <Box
          direction='row'
          justify='center'
          background='white'
          pad={{ top: 'xlarge' }}
        >
          <Box
            basis='large'
            pad='large'
            border='top'
            direction='row'
            justify='center'
          >
            <Box margin={{ horizontal: 'small' }}>
              <RoutedAnchor label='about' />
            </Box>
            <Box margin={{ horizontal: 'small' }}>
              <RoutedAnchor label='contribute' />
            </Box>
            <Box margin={{ horizontal: 'small' }}>
              <RoutedAnchor label='license' />
            </Box>
            <Box margin={{ horizontal: 'small' }} direction='row'>
              <Text>Made with </Text>
              <Box margin={{ horizontal: 'xsmall' }} animation='pulse'>
                <Favorite color='brand' size='small' />
              </Box>
              <Text> by the gremlins</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

Home.contextTypes = {
  onColorChange: PropTypes.func,
};
