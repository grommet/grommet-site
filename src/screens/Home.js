import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Anchor, Box, Grid, Heading, Image, Paragraph, RoutedButton, Button,
  Stack, Text,
} from 'grommet';
import { Favorite, Medium, Slack, Twitter } from 'grommet-icons';
import Nav from '../components/Nav';
import Stak from '../components/Stak';

const Section = ({ children, ...rest }) => (
  <Box
    direction='row'
    justify='center'
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    {...rest}
  >
    <Box basis='xlarge'>
      {children}
    </Box>
  </Box>
);

const COMPANIES = ['HPE', 'Netflix', 'GE', 'IBM', 'MicroFocus', 'GitHub',
  'Samsung', 'Uber', 'Shopify', 'Twilio', 'Sony', 'HP',
  'Boeing'];

export default class Home extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange('#FFD6D6');
  }

  render() {
    return (
      <Box>
        <Stack guidingChild='last'>
          <Box justify='end' align='end' background='#FFD6D6'>
            <Image alt='' src='img/circles.svg' />
          </Box>
          <Section pad={{ horizontal: 'xlarge', top: 'large' }}>
            <Nav />

            <Box direction='row-responsive' align='start'>
              <Box basis='1/2'>
                <Heading level={1} margin={{ top: 'none', bottom: 'small' }}>
                  Styled components for Reactjs
                </Heading>
                <Paragraph size='large'>
                  Build apps quickly and easily with one of the most
                  approachable frameworks out there.
                </Paragraph>
                <Box direction='row-responsive' align='center' gap='medium' margin={{ vertical: 'medium' }}>
                  <RoutedButton
                    aria-label='Try it now'
                    path='theme'
                    primary={true}
                    label='try it now'
                  />
                  <Button
                    aria-label='Go to Github'
                    href='https://github.com/grommet/grommet'
                    label='GitHub'
                  />
                </Box>
                <Box direction='row' align='center' gap='small' margin={{ vertical: 'large' }}>
                  <RoutedButton
                    aria-label='Join the conversations on Slack'
                    href='https://slackin.grommet.io/'
                    icon={<Slack color='brand' size='large' />}
                  />
                  <RoutedButton
                    aria-label='Follow updates on Twitter'
                    href='https://twitter.com/grommetux'
                    icon={<Twitter color='brand' size='large' />}
                  />
                  <RoutedButton
                    aria-label='Keep up with stories on Medium'
                    href=''
                    icon={<Medium color='brand' size='large' />}
                  />
                </Box>
              </Box>
              <Box basis='1/2' alignSelf='end' overflow='hidden' pad={{ top: 'large' }}>
                <Stak />
              </Box>
            </Box>
          </Section>
        </Stack>

        <Section background='#FFF5CC' pad={{ top: 'xlarge' }}>
          <Box align='center' overflow='hidden' pad={{ horizontal: 'xlarge' }}>
            <Heading level={2} size='large' margin='none'>
              Do all the things!
            </Heading>
            <Paragraph size='large' textAlign='center'>
              Grommet was created to make your design and development
              process easier. Built for the responsive web, inclusiveness
              through accessiblity, a flexible toolset, and an active
              community; We’re ticking all the boxes for you and your team
              to conquer any project.
            </Paragraph>
            <RoutedButton
              aria-label='Start reading about components'
              path='components'
              primary={true}
              label='start reading'
            />
            <Image
              alt='Do all things graphic'
              src='img/do-all-things.svg'
              fit='contain'
              width='100%'
            />
          </Box>
        </Section>

        <Stack guidingChild='last'>
          <Box background='#DDE6FF'>
            <Image alt='' src='img/shapes.svg' />
          </Box>
          <Section pad='xlarge'>
            <Box align='center'>
              <Heading level={2} size='large' margin='none'>
                Used by folks at these fine companies
              </Heading>
              <Paragraph size='large' textAlign='center'>
                See more folks using grommet.
              </Paragraph>
              <Box alignSelf='stretch'>
                {Grid.available ? (
                  <Grid columns='small' gap='large' align='center' justify='center'>
                    {COMPANIES.map(name => (
                      <Image
                        key={name}
                        alt={`${name} logo`}
                        size='small'
                        src={`img/logos/${name}-logo.svg`}
                      />
                    ))}
                  </Grid>
                ) : (
                  <Box direction='row' wrap={true} gap='large' align='center'>
                    {COMPANIES.map(name => (
                      <Box
                        basis='small'
                        direction='row'
                        justify='center'
                        margin={{ bottom: 'large' }}
                      >
                        <Image
                          key={name}
                          alt={`${name} logo`}
                          size='small'
                          src={`img/logos/${name}-logo.svg`}
                        />
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Section>
        </Stack>

        <Stack guidingChild='last'>
          <Box align='center' background='#D8FDE6'>
            <Image alt='' src='img/double-grommet.svg' />
          </Box>
          <Section pad='xlarge'>
            <Box align='center'>
              <Heading level={2} size='large' margin='none'>
                {'Let\'s hang out'}
              </Heading>
              <Paragraph size='large' textAlign='center'>
                We’re cool, your cool—It just makes sense. Come check out
                our code and all the folks that make grommet great. We want
                to make grommet the best UI framework on React, so come
                say hi!
              </Paragraph>
              <RoutedButton
                aria-label='Use it now'
                path='start'
                primary={true}
                label='use it now'
              />

              <Box
                direction='row'
                align='center'
                justify='center'
                wrap={true}
                margin={{ vertical: 'xlarge' }}
              >
                <Image alt='Community member avatars' src='img/community-left.png' />
                <Image alt='Stak being friendly' src='img/stak-full.svg' />
                <Image alt='Community member avatars' src='img/community-right.png' />
              </Box>

              <Box direction='row' gap='xsmall'>
                <Text>Made with </Text>
                <Box animation='pulse'>
                  <Favorite color='brand' size='small' />
                </Box>
                <Text> by the gremlins</Text>
              </Box>

              <Paragraph margin={{ top: 'large' }} textAlign='center'>
                If you&#39;ve been using grommet for a while but aren&#39;t
                ready for version 2, you might be looking
                for <Anchor href='https://grommet.io'>Grommet version 1</Anchor>.
              </Paragraph>
            </Box>
          </Section>
        </Stack>
      </Box>
    );
  }
}

Home.contextTypes = {
  onColorChange: PropTypes.func,
};
