import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph, Text } from 'grommet';
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
    const { children, desc, name, example, examples } = this.props;
    return (
      <Box>
        <Box pad={{ horizontal: 'large', top: 'large' }}>
          <Nav top={false} />
          <Box direction='row'>
            <Box margin={{ vertical: 'large' }} basis='large'>
              <Heading level={1}>
                <strong>{name}</strong>
              </Heading>
              {desc ? (
                <Paragraph size='large'>
                  {desc.description}
                </Paragraph>
              ) : null}
              {example}
            </Box>
          </Box>
        </Box>

        {desc ? (
          <Box pad={{ horizontal: 'large', bottom: 'large' }}>
            <Box pad='large' round='large' background='light-1'>
              {(desc.properties || []).map(property => (
                <Box
                  key={property.name}
                  direction='row'
                  responsive={true}
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
              ))}
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
};

Doc.defaultProps = {
  desc: undefined,
  example: null,
  examples: {},
};

Doc.contextTypes = {
  onColorChange: PropTypes.func,
};
