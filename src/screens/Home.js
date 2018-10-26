import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Anchor, Box, Heading, Image, Paragraph, Button,
  Stack, Text, TextArea,
} from 'grommet';
import {
  Github, FormDown, Next, Share, Slack, Twitter,
} from 'grommet-icons';
import { withContext } from '../Context';
import Nav from '../components/Nav';
import Header from '../components/Header';
import RoutedAnchor from '../components/RoutedAnchor';
import RoutedButton from '../components/RoutedButton';

const Section = ({ children, ...rest }) => (
  <Box
    align='center'
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    {...rest}
  >
    <Box width='xlarge'>
      {children}
    </Box>
  </Box>
);

const COMPANIES = ['HPE', 'Netflix', 'GE', 'IBM', 'MicroFocus', 'GitHub',
  'Samsung', 'Uber', 'Shopify', 'Twilio', 'Sony', 'HP',
  'Boeing'];

const Tile = ({
  children, name, summary, ...rest
}) => (
  <Box basis='medium' align='center' margin='large'>
    <Box height='small' align='center' justify='center' {...rest}>
      {children}
    </Box>
    <Box width='medium' margin={{ top: 'large' }}>
      <Heading level={3} size='xlarge' textAlign='center' margin='none'>
        {name}
      </Heading>
      <Paragraph size='xlarge' textAlign='center'>
        {summary}
      </Paragraph>
    </Box>
  </Box>
);

const Dot = ({ color }) => (
  <svg viewBox='0 0 12 12' width={12} height={12}>
    <circle cx={6} cy={6} r={6} fill={color} />
  </svg>
);

Dot.propTypes = {
  color: PropTypes.string.isRequired,
};

const Message = ({
  image, name, summary, ...rest
}) => (
  <Box basis='medium' align='center'>
    <Box height='xsmall' align='center' justify='center' {...rest}>
      {image}
    </Box>
    <Box width='medium' pad='medium'>
      <Heading level={3} textAlign='center' margin='none'>
        {name}
      </Heading>
      <Paragraph size='large' textAlign='center'>
        {summary}
      </Paragraph>
    </Box>
  </Box>
);

Message.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.node.isRequired,
};

class Home extends Component {
  componentDidMount() {
    document.title = 'Grommet';
  }

  render() {
    return (
      <Box>
        <Section>
          <Nav />

          <Box
            direction='row'
            pad='large'
            elevation='large'
            round='medium'
            margin='xlarge'
          >
            <Box
              basis='1/3'
              background='light-1'
              pad='large'
              margin='small'
              gap='medium'
            >
              <Box background='light-2' pad='medium' />
              <Box background='light-2' pad='medium' />
              <Box background='light-2' pad='medium' />
            </Box>
            <Box
              basis='2/3'
              background='light-1'
              pad='large'
              margin='small'
            />
          </Box>

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

            <Tile
              name='mix, match, and make stuff'
              summary={(
                <span>
                  tailor composite components with grommet. embrace
                  atomic design methods and build a library that fits your
                  needs.
                </span>
              )}
              direction='row'
              wrap
              justify='between'
            >
              <Box elevation='medium'>
                <Box
                  direction='row'
                  align='center'
                  gap='medium'
                  pad={{ vertical: 'small', left: 'medium', right: 'small' }}
                >
                  <Text size='large'>Menu</Text>
                  <FormDown />
                </Box>
                <Box
                  pad={{ vertical: 'small', horizontal: 'medium' }}
                  background='light-2'
                >
                  <Text>first</Text>
                </Box>
                <Box pad={{ vertical: 'small', horizontal: 'medium' }}>
                  <Text>second</Text>
                </Box>
              </Box>
            </Tile>

            <Tile
              name='accessible is being inclusive'
              summary={(
                <span>
                  keyboard navigation, screen reader tags, and more. grommet
                  provides support for
                  W3c’s
                  {' '}
                  <Anchor href='https://www.w3.org/TR/WCAG21/'>
                    WCAG 2.1 spec
                  </Anchor>
                  {' '}
                  out of the box.
                </span>
              )}
            >
              <Stack anchor='center'>
                <Box direction='row' gap='medium'>
                  <Box background='accent-1' round='full' pad='large' />
                  <Box background='accent-2' round='full' pad='large' />
                </Box>
                <Box direction='row' justify='center'>
                  <Box
                    background={{ color: 'neutral-1', opacity: 'strong' }}
                    round='full'
                    pad='large'
                  >
                    <Text size='xxlarge' weight='bold'>Aa</Text>
                  </Box>
                </Box>
              </Stack>
            </Tile>

          </Box>

          <Box direction='row-responsive' justify='center'>

            <Tile
              name='powerful theming tools'
              summary={(
                <span>
                  tailor the component library to align with your
                  Color, Type, Layout needs. You can even control
                  component interaction.
                </span>
              )}
              gap='medium'
            >
              <Button label='Log in' />
              <Button label='GET STARTED' />
              <Button label='click me' />
            </Tile>

            <Tile
              name='layouts can be more flexible'
              summary={(
                <span>
                  Support all the devices! use
                  {' '}
                  <RoutedAnchor path='/box'>
                    Flexbox
                  </RoutedAnchor>
                  {' '}
                  and
                  {' '}
                  <RoutedAnchor path='/grid'>
                    CSS Grid
                  </RoutedAnchor>
                  {' '}
                  to provide layouts for all those new phones
                  and widescreen displays.
                </span>
              )}
              direction='row'
              gap='small'
            >
              <Box justify='center'>
                <Box
                  basis='1/2'
                  pad={{ horizontal: 'medium', vertical: 'large' }}
                  background='accent-1'
                  round='small'
                />
              </Box>
              <Box gap='small'>
                <Box
                  basis='2/3'
                  pad='large'
                  background='neutral-1'
                  round='small'
                />
                <Box
                  basis='1/3'
                  pad='medium'
                  background='neutral-2'
                  round='small'
                />
              </Box>
              <Box gap='small' align='start'>
                <Box
                  pad={{ horizontal: 'large', vertical: 'medium' }}
                  background='status-ok'
                  round='small'
                />
                <Box pad='medium' background='status-warning' round='small' />
                <Box pad='medium' background='status-critical' round='small' />
              </Box>
            </Tile>

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

export default withContext(Home);
