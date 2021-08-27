import React from 'react';
import { Box, Image } from 'grommet';
import Header from '../../components/Header';
import Section from './Section';
import Message from './Message';

const COMPANIES = [
  'HPE',
  'Netflix',
  'GE',
  'Uber',
  'Boeing',
  'GitHub',
  'HP',
  'Samsung',
  'Twilio',
  'DXC',
  'MicroFocus',
  'Sony',
  'IBM',
  'Aruba',
];

export default () => (
  <Section background="light-1" pad={{ top: 'xlarge' }}>
    <Header
      level={2}
      label="don’t take our word for it"
      summary="here's what our community of designers and developers have to say
        about grommet"
    />

    <Box
      direction="row"
      wrap
      justify="center"
      margin={{ top: 'large', bottom: 'xlarge' }}
      pad={{ bottom: 'large' }}
      border="bottom"
    >
      <Message
        imageSrc="/img/avatars/puppet_200x200.jpeg"
        name="@nikmd23"
        summary={
          <span>
            Does Material Design feel too &quot;Googly&quot; for you? Check out
            @grommetux, the OSS UX framework http://bit.ly/1YWH7ea
          </span>
        }
        alt="Man with glasses next to an orange person-like character"
      />

      <Message
        imageSrc="/img/avatars/puppet_200x200.jpeg"
        name="@nikmd23"
        summary={
          <span>
            this accessibility demo is&nbsp;
            <span role="img" aria-label="money">
              💰💰💰
            </span>
            &nbsp; https://vimeo.com/187068246 great work @grommetux!
          </span>
        }
        alt="Man with glasses next to an orange person-like character"
      />

      <Message
        imageSrc="/img/avatars/1nCCU4b3_200x200.jpg"
        name="@tomsthoughtfeed"
        summary={
          <span>
            After two hours of playing with @grommetux, I can confidently say it
            is the best design tool I have ever used
          </span>
        }
        alt="Man with hands in peace signs and cup in mouth at finish line of race"
      />

      <Message
        imageSrc="/img/avatars/06IweXPF_200x200.jpg"
        name="@linghucong"
        summary={
          <span>
            Grommet https://grommet.github.io/ great react - redux boilerplate
            with great user experience
          </span>
        }
        alt="Sketch of black rabbit head with big blue eyes"
      />

      <Message
        imageSrc="/img/avatars/VQlHfV6m_200x200.jpg"
        name="@ravishtiwari"
        summary={
          <span>
            looking for Accessible @reactjs UI components, check out
            https://grommet.github.io @grommetux
          </span>
        }
        alt="Ravish Tiwari"
      />
    </Box>

    <Header
      level={2}
      label="grommet is used by folks at these fine companies"
      summary="if people from these fine establishments are using it, how can it be
        bad?"
    />

    <Box
      direction="row"
      wrap
      justify="center"
      align="center"
      margin={{ top: 'large', bottom: 'xlarge' }}
    >
      {COMPANIES.map(name => (
        <Box
          key={name}
          basis="small"
          direction="row"
          justify="center"
          align="center"
          margin="medium"
        >
          <Image
            alt={`${name} logo`}
            size="small"
            src={`img/logos/${name}-logo.svg`}
          />
        </Box>
      ))}
    </Box>
  </Section>
);
