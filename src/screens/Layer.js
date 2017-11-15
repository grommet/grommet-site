import React, { Component } from 'react';

import { Box, Button, Heading, Layer, Text, TextInput } from 'grommet';
import doc from 'grommet/components/Layer/doc';

import { Close } from 'grommet-icons';

import Doc from '../components/Doc';

const desc = doc(Layer).toJSON();

export default class LayerDoc extends Component {
  state = {
    position: undefined,
    showConfirmLayer: false,
    showFormLayer: false,
  }
  render() {
    const {
      position,
      showConfirmLayer,
      showFormLayer,
    } = this.state;
    let layerNode;
    if (showConfirmLayer) {
      const close = () => this.setState({ showConfirmLayer: false });
      layerNode = (
        <Layer position={position} onEsc={close}>
          <Box pad={{ horizontal: 'medium' }}>
            <Heading level={2} margin='medium'>Confirm</Heading>
            <Text>
              Are you sure you want to close this layer?
            </Text>
            <Box align='start' margin={{ vertical: 'medium' }}>
              <Button primary={true} label='Sure, close it' onClick={close} />
            </Box>
          </Box>
        </Layer>
      );
    } else if (showFormLayer) {
      const close = () => this.setState({ showFormLayer: false, position: undefined });
      layerNode = (
        <Layer position={position} onEsc={close} size='medium'>
          <Box align='end'>
            <Button icon={<Close />} onClick={close} />
          </Box>
          <Box pad='medium'>
            <Heading level={3} margin='none'>
              <strong>Form</strong>
            </Heading>
            <Box pad={{ vertical: 'medium' }}>
              <TextInput />
            </Box>
          </Box>
        </Layer>
      );
    }
    return (
      <Doc name='Layer' desc={desc}>
        <Box pad='large' align='start'>
          <Box margin='small'>
            <Button
              label='Confirm center'
              onClick={() => this.setState({ showConfirmLayer: true, position: undefined })}
              primary={true}
            />
          </Box>
          <Box margin='small'>
            <Button
              label='Confirm top'
              onClick={() => this.setState({ showConfirmLayer: true, position: 'top' })}
              primary={true}
            />
          </Box>
          <Box margin='small'>
            <Button
              label='Form left'
              onClick={() => this.setState({ showFormLayer: true, position: 'left' })}
            />
          </Box>
          <Box margin='small'>
            <Button
              label='Form right'
              onClick={() => this.setState({ showFormLayer: true, position: 'right' })}
            />
          </Box>
        </Box>
        {layerNode}
      </Doc>
    );
  }
}
