import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Anchor, Box, Heading, Image, Paragraph, Button,
  Text, TextArea,
} from 'grommet';
import {
  Github, Next, Share, Slack, Twitter,
} from 'grommet-icons';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import RoutedAnchor from '../../components/RoutedAnchor';
import RoutedButton from '../../components/RoutedButton';
import Section from './Section';
import Message from './Message';
import Hero from './Hero';
import Composable from './Composable';
import Accessible from './Accessible';
import Themable from './Themable';
import Layouts from './Layouts';

const COMPANIES = ['HPE', 'Netflix', 'GE', 'IBM', 'MicroFocus', 'GitHub',
  'Samsung', 'Uber', 'Shopify', 'Twilio', 'Sony', 'HP',
  'Boeing'];

const Dot = ({ color }) => (
  <svg viewBox='0 0 12 12' width={12} height={12}>
    <circle cx={6} cy={6} r={6} fill={color} />
  </svg>
);

Dot.propTypes = {
  color: PropTypes.string.isRequired,
};

export default class Home extends Component {
  componentDidMount() {
    document.title = 'Grommet';
  }

  render() {
    return (
      <Box>
        <Section>
          <Nav />

          <Hero />

          <Header
            label='streamline the way you develop apps'
            summary={(
              <span>
                build responsive and accessible mobile-first projects for
                the web with an easy to use component library
              </span>
            )}
          />

          <Box
            direction='row-responsive'
            gap='large'
            justify='center'
            margin={{ vertical: 'xlarge' }}
          >
            <Anchor
              a11yTitle='Follow us on Twitter'
              href='https://twitter.com/grommetux'
              icon={<Twitter color='brand' size='large' />}
              label={<Text size='large'>Follow us on Twitter</Text>}
            />
            <Anchor
              a11yTitle='Share feedback on Github'
              href='https://github.com/grommet/grommet/tree/NEXT'
              icon={<Github color='brand' size='large' />}
              label={<Text size='large'>Share feedback on GitHub</Text>}
            />
            <Anchor
              a11yTitle='Chat with us on Slack'
              href='https://slackin.grommet.io/'
              icon={<Slack color='brand' size='large' />}
              label={<Text size='large'>Chat with us on Slack</Text>}
            />
          </Box>
        </Section>

        <Section background='light-1' pad={{ top: 'xlarge' }}>
          <Header
            level={2}
            label='part design system, part framework, and all awesome'
            summary={(
              <span>
                grommet is a
                {' '}
                <Anchor href='https://reactjs.org'>
                  react
                </Anchor>
                -based framework that provides accessibility,
                modularity, responsiveness, and theming in a tidy package
              </span>
            )}
          />

          <Box direction='row-responsive' justify='center'>
            <Composable />
            <Accessible />
          </Box>

          <Box direction='row-responsive' justify='center'>
            <Themable />
            <Layouts />
          </Box>
        </Section>

        <Section pad={{ top: 'xlarge' }}>
          <Header
            level={2}
            label='start coding'
            summary={(
              <span>
                already working on a project, starting fresh, or just want to
                poke around and see how all this junk works?
              </span>
            )}
          />

          <Box
            direction='row-responsive'
            justify='center'
            gap='large'
            margin='large'
          >
            <RoutedAnchor
              path='/start'
              label={<Text size='large'>Start New App</Text>}
              icon={<Next />}
              reverse
            />
            <RoutedAnchor
              path='/start'
              label={<Text size='large'>I have an Exisiting Codebase</Text>}
              icon={<Next />}
              reverse
            />
          </Box>

          <Box alignSelf='center' width='large' margin={{ top: 'medium' }}>
            <Box
              border
              round={{ corner: 'top' }}
              direction='row'
              justify='between'
              align='center'
              pad={{ left: 'medium', vertical: 'small', right: 'small' }}
            >
              <Text color='brand'>grommet playground</Text>
              <Button icon={<Share />} />
            </Box>
            <Box border={{ side: 'vertical' }}>
              <TextArea plain rows={15} />
            </Box>
          </Box>
        </Section>

        <Section background='neutral-1' pad='none'>
          <Box
            alignSelf='center'
            background={{ color: 'brand', opacity: 'medium' }}
            width='large'
            elevation='small'
            round={{ corner: 'bottom' }}
            margin={{ bottom: 'xlarge' }}
          >
            <Box height='small' />
          </Box>

          <Header
            level={2}
            label='and start designing'
            summary={(
              <span>
                sticker sheets, design patterns, app templates,
                and icons galore.
              </span>
            )}
          />

          <Box
            direction='row-responsive'
            justify='center'
            gap='large'
            margin='medium'
          >
            <Anchor
              href='//github.com/grommet/grommet-design'
              label={<Text size='large'>Grommet Design Kit</Text>}
              icon={<Next />}
              color='accent-2'
              reverse
            />
            <Anchor
              href='//grommet.io/grommet-icons'
              label={<Text size='large'>Grommet Icons</Text>}
              icon={<Next />}
              color='accent-2'
              reverse
            />
          </Box>

          <Box
            alignSelf='center'
            width='large'
            height='small'
            round={{ corner: 'top' }}
            background={{ color: '#2C176D' }}
            margin={{ top: 'xlarge' }}
          >
            <Box
              alignSelf='start'
              direction='row'
              margin='medium'
              gap='small'
            >
              <Dot color='#ff0000' />
              <Dot color='#ffff00' />
              <Dot color='#00ff00' />
            </Box>
            <Heading level={1} color='neutral-1' margin='large'>
              Hello World!
            </Heading>
          </Box>
        </Section>

        <Section background='light-1' pad={{ top: 'xlarge' }}>
          <Header
            level={2}
            label='don’t take our word for it'
            summary={(
              <span>
                here&#39;s what our community of designers and developers have to
                say about grommet
              </span>
            )}
          />

          <Box
            direction='row'
            wrap
            justify='center'
            margin={{ vertical: 'xlarge' }}
            pad={{ bottom: 'large' }}
            border='bottom'
          >
            <Message
              image={<Box pad='large' round='full' background='light-5' />}
              name='@nikmd23'
              summary={(
                <span>
                  Does Material Design feel too &quot;Googly&quot; for you?
                  Check out @grommetux, the OSS UX framework
                  http://bit.ly/1YWH7ea
                </span>
              )}
            />

            <Message
              image={<Box pad='large' round='full' background='light-5' />}
              name='@nikmd23'
              summary={(
                <span>
                  this accessibility demo is
                  {' '}
                  <span role='img' aria-label='money'>💰💰💰</span>
                  {' '}
                  https://vimeo.com/187068246
                  great work @grommetux!
                </span>
              )}
            />

            <Message
              image={<Box pad='large' round='full' background='light-5' />}
              name='@tomsthoughtfeed'
              summary={(
                <span>
                  After two hours of playing with @grommetux, I can confidently
                  say it is the best design tool I have ever used
                </span>
              )}
            />

            <Message
              image={<Box pad='large' round='full' background='light-5' />}
              name='@linghucong'
              summary={(
                <span>
                  Grommet https://grommet.github.io/  great react - redux
                  boilerplate with great user experience
                </span>
              )}
            />

            <Message
              image={<Box pad='large' round='full' background='light-5' />}
              name='@ravishtiwari'
              summary={(
                <span>
                  looking for Accessible @reactjs UI components, check out
                  https://grommet.github.io  @grommetux
                </span>
              )}
            />
          </Box>

          <Header
            level={2}
            label='grommet is used by folks at these fine companies'
            summary={(
              <span>
                if people from these fine establishments are using it,
                how can it be bad?
              </span>
            )}
          />

          <Box
            direction='row'
            wrap
            gap='large'
            justify='center'
            align='center'
            margin={{ vertical: 'xlarge' }}
          >
            {COMPANIES.map(name => (
              <Box
                key={name}
                basis='small'
                direction='row'
                justify='center'
                margin={{ bottom: 'large' }}
              >
                <Image
                  alt={`${name} logo`}
                  size='small'
                  src={`img/logos/${name}-logo.svg`}
                />
              </Box>
            ))}
          </Box>
        </Section>

        <Section pad='xlarge'>
          <Header
            level={2}
            label='try grommet'
            summary={(
              <span>
                we want to make grommet the best ui framework
                on react. so, come for the code and stay for the peeps.
              </span>
            )}
          />

          <RoutedButton
            alignSelf='center'
            path='/components'
            plain
          >
            <Box
              pad={{ vertical: 'small', horizontal: 'medium' }}
              round='xlarge'
              background='accent-2'
            >
              <Text size='large'>components</Text>
            </Box>
          </RoutedButton>

          <Box direction='row-responsive' justify='between' align='end' margin={{ top: 'xlarge' }}>
            <Box>
              <Box direction='row' gap='small'>
                <Anchor
                  a11yTitle='Follow us on Twitter'
                  href='https://twitter.com/grommetux'
                  icon={<Twitter color='brand' size='large' />}
                />
                <Anchor
                  a11yTitle='Share feedback on Github'
                  href='https://github.com/grommet/grommet/tree/NEXT'
                  icon={<Github color='brand' size='large' />}
                />
                <Anchor
                  a11yTitle='Chat with us on Slack'
                  href='https://slackin.grommet.io/'
                  icon={<Slack color='brand' size='large' />}
                />
              </Box>
              <Paragraph>
                Maintained by the core team and the help of our contributors.
                you can always kick it old school with Grommet v1.
              </Paragraph>
            </Box>
          </Box>
        </Section>
      </Box>
    );
  }
}
