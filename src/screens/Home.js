import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Image, Paragraph, RoutedAnchor, RoutedButton, Stack, Text,
} from 'grommet';
import { Favorite, User } from 'grommet-icons';
import Nav from '../components/Nav';

const Blank = () => (
  <svg viewBox='0 0 24 24' height={24} width={24} />
);

export default class Home extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange(['#FCC', '#FFF9ED']);
  }

  render() {
    return (
      <Box>
        <Stack guidingChild='last'>
          <Box>
            <Image src='img/circles.svg' fit='cover' />
          </Box>
          <Box>
            <Image src='img/graffiti.svg' fit='cover' />
          </Box>
          <Box>
            <Image src='img/geometric.svg' fit='cover' />
          </Box>
          <Box>
            <Box pad='large'>
              <Nav />
              <Box direction='row' justify='center'>
                <Box basis='medium' align='center' margin={{ vertical: 'large' }}>
                  <Heading level={1} textAlign='center' margin={{ bottom: 'small' }}>
                    <strong>Styled components for Reactjs</strong>
                  </Heading>
                  <Paragraph textAlign='center' margin={{ bottom: 'medium' }}>
                    Build apps quickly and easily with one of the most
                    approachable frameworks out there.
                  </Paragraph>
                  <RoutedButton to='https://github.com/grommet/grommet' primary={true} label='GitHub' />
                </Box>
              </Box>
            </Box>
            <Box
              style={{ height: '400px' }}
              animation={{ type: 'fadeIn', delay: 2000 }}
            >
              <Image src='img/Stak-quote.svg' fit='contain' />
            </Box>
          </Box>
        </Stack>

        <Box margin='xlarge' align='center'>
          <Box direction='row' justify='center'>
            <Box margin={{ horizontal: 'medium' }}>
              <RoutedButton label='principles' />
            </Box>
            <Box margin={{ horizontal: 'medium' }}>
              <RoutedButton label='design patterns' />
            </Box>
            <Box margin={{ horizontal: 'medium' }}>
              <RoutedButton label='primer' />
            </Box>
          </Box>
        </Box>

        <Box direction='row' justify='center'>
          <Box basis='medium' margin='large' align='center'>
            <Box direction='row' wrap={true}>
              <Blank /><User /><Blank /><User /><Blank /><User />
              <Blank /><User /><Blank /><User /><Blank /><User />
              <Blank /><User /><Blank /><User /><Blank /><User />
              <Blank /><User /><Blank /><User /><Blank /><User />
              <Blank /><User /><Blank /><User /><Blank /><User />
            </Box>
            <Heading level={2} size='small'>
              <strong>What makes us unique?</strong>
            </Heading>
            <Paragraph textAlign='center'>
              You! We want to make creating websites and apps easy for the developer
              and the designer (Psst...That’s why we made it for ourselves). The one
              thing we’ve learned you don’t need our help. We provide the tools and
              you make the art.
            </Paragraph>
            <Box margin={{ horizontal: 'medium' }}>
              <RoutedButton label='start' />
            </Box>
          </Box>
        </Box>

        <Box direction='row' justify='center'>
          <Box basis='large' pad='large' border='top' direction='row' justify='center'>
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
              <Box margin={{ horizontal: 'xsmall' }}>
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
