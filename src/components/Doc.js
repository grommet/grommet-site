import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Paragraph, Text } from 'grommet';
import Nav from '../components/Nav';

export default class Doc extends Component {
  componentWillMount() {
    const { onColorChange } = this.context;
    onColorChange(['#FFF5CC', '#FFEDED']);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      children, desc, name, nav, example, examples, text,
    } = this.props;
    return (
      <Box>
        <Box pad={{ horizontal: 'large', top: 'large' }}>
          {nav ? <Nav top={false} /> : null}
          <Box direction='row-responsiv'>
            <Box margin={{ vertical: 'large' }} basis='2/3' align='start'>
              <Heading level={1}>
                <strong>{name}</strong>
              </Heading>
              {desc ? (
                <Paragraph size='large'>
                  {desc.description}
                </Paragraph>
              ) : null}
              {text ? (
                <Paragraph size='large'>
                  {text}
                </Paragraph>
              ) : null}
              {(desc && desc.availableAt) ? (
                <Button href={desc.availableAt.url} target='_blank' >
                  <img alt='Example badge' src={desc.availableAt.badge} />
                </Button>
              ) : null}
            </Box>
            <Box flex={true} pad={{ vertical: 'large' }}>
              {example}
            </Box>
          </Box>
        </Box>

        {desc ? (
          <Box pad={{ horizontal: 'large', bottom: 'large' }}>
            <Box pad='large' round='large' background='light-1'>
              {desc.properties ?
                desc.properties.map(property => (
                  <Box
                    key={property.name}
                    direction='row-responsive'
                    justify='between'
                    align='start'
                    border='bottom'
                  >
                    <Box basis='1/2' margin={{ right: 'large' }}>
                      <Heading level={3} size='small'>
                        <strong>{property.name}</strong>
                      </Heading>
                      <Paragraph>{property.description}</Paragraph>
                    </Box>
                    <Box flex={true} align='start'>
                      <Text><pre>{property.format}</pre></Text>
                    </Box>
                    {examples[property.name] ? (
                      <Box flex={true} align='end' margin={{ vertical: 'medium' }}>
                        {examples[property.name] || null}
                      </Box>
                    ) : null}
                  </Box>
                )) :
                <Text color='light-5'>No properties</Text>
              }
            </Box>
          </Box>
        ) : null}

        {children}
      </Box>
    );
  }
}

Doc.propTypes = {
  desc: PropTypes.object,
  example: PropTypes.node,
  examples: PropTypes.object,
  name: PropTypes.string.isRequired,
  nav: PropTypes.bool,
  text: PropTypes.string,
};

Doc.defaultProps = {
  desc: undefined,
  example: null,
  examples: {},
  nav: true,
  text: undefined,
};

Doc.contextTypes = {
  onColorChange: PropTypes.func,
};
