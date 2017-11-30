import React, { Component } from 'react';

import {
  Anchor, Box, Button, Heading, Image, Layer, Text,
} from 'grommet';

import { Blank, Close, Trash } from 'grommet-icons';

import Doc from '../components/Doc';
import Selection from '../components/Selection';

const allImages = [
  '/img/image1.jpg',
  '/img/image2.jpg',
  '/img/image3.jpg',
  '/img/image4.jpg',
  '/img/image5.jpg',
  '/img/image6.jpg',
  '/img/image7.jpg',
  '/img/image8.jpg',
  '/img/image9.jpg',
  '/img/image10.jpg',
  '/img/image11.jpg',
  '/img/image12.jpg',
  '/img/image13.jpg',
  '/img/image14.jpg',
  '/img/image15.jpg',
  '/img/image16.jpg',
  '/img/image17.jpg',
  '/img/image18.jpg',
  '/img/image19.jpg',
  '/img/image20.jpg',
  '/img/image21.jpg',
  '/img/image22.jpg',
  '/img/image23.jpg',
  '/img/image24.jpg',
  '/img/image25.jpg',
  '/img/image26.jpg',
  '/img/image27.jpg',
  '/img/image28.jpg',
  '/img/image29.jpg',
  '/img/image30.jpg',
  '/img/image31.jpg',
  '/img/image32.jpg',
  '/img/image33.jpg',
  '/img/image34.jpg',
  '/img/image35.jpg',
  '/img/image36.jpg',
  '/img/image37.jpg',
  '/img/image38.jpg',
  '/img/image39.jpg',
  '/img/image40.jpg',
  '/img/image41.jpg',
  '/img/image42.jpg',
  '/img/image43.jpg',
  '/img/image44.jpg',
  '/img/image45.jpg',
  '/img/image46.jpg',
  '/img/image47.jpg',
  '/img/image48.jpg',
  '/img/image49.jpg',
  '/img/image50.jpg',
];

function renderImage(img, index) {
  return (
    <Box key={index >= 0 ? `image_${index}` : undefined} pad='xsmall'>
      <Image
        src={img}
        style={{ width: '192px', height: '192px' }}
      />
    </Box>
  );
}

export default class SelectionDoc extends Component {
  state = {
    images: allImages,
    selectedImages: [],
    image: undefined,
    selectMode: false,
  }
  removeImages = () => {
    const { selectedImages, images } = this.state;
    const newImages = [...images].filter(image => selectedImages.indexOf(image) === -1);
    this.setState({ images: newImages, selectedImages: [], selectMode: false });
  }
  renderImages() {
    const { images } = this.state;
    return (
      images.map(
        (img, index) => (
          <Button key={`image_${index}`} onClick={() => this.setState({ image: img })}>
            {renderImage(img)}
          </Button>
        )
      )
    );
  }
  renderSelection() {
    const { images } = this.state;
    return (
      <Selection
        margin='xsmall'
        onChange={selectedIndexes => this.setState({
          selectedImages: selectedIndexes.map(index => images[index]),
        })}
      >
        {images.map((img, index) => renderImage(img, index))}
      </Selection>
    );
  }
  render() {
    const { images, image, selectMode, selectedImages } = this.state;
    let imageLayer;
    if (image) {
      const closeLayer = () => this.setState({ image: undefined });
      imageLayer = (
        <Layer onEsc={closeLayer} plain={true}>
          <Box full={true} background={{ color: 'black', opacity: 'weak' }}>
            <Box align='end' pad='medium'>
              <Button icon={<Close size='large' color='white' />} onClick={closeLayer} />
            </Box>
            <Box flex={true} align='center' justify='center'>
              <Image src={image} style={{ maxWidth: '50%', maxHeight: '80%', height: 'auto' }} />
            </Box>
          </Box>
        </Layer>
      );
    }
    return (
      <Doc
        name='Selection'
        text='A component that allows selection of its children.'
      >
        <Box full='vertical'>
          <Box
            align='center'
            direction='row'
            tag='header'
            pad={{ horizontal: 'medium' }}
          >
            <Heading level={2}><strong>All photos</strong></Heading>
            <Box margin={{ left: 'small' }}>
              <Anchor
                href='#'
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({ selectMode: !this.state.selectMode, selectedImages: [] });
                }}
              >
                {selectMode ? 'Cancel' : 'Select'}
              </Anchor>
            </Box>
          </Box>
          <Box flex='grow' overflow='scroll'>
            <Box pad={{ horizontal: 'medium' }}>
              <Box direction='row' wrap={true}>
                {selectMode ? this.renderSelection() : this.renderImages()}
              </Box>
            </Box>
          </Box>
          <Box
            align='center'
            direction='row'
            tag='footer'
            border='top'
            justify='between'
            pad='small'
          >
            <Blank size='large' />
            <Text>
              <strong>
                {selectedImages.length ? selectedImages.length : images.length}
              </strong> photos
            </Text>
            {selectedImages.length ? (
              <Button onClick={this.removeImages} icon={<Trash color='brand' />} />
            ) : (
              <Blank size='large' />
            )}
          </Box>
        </Box>
        {imageLayer}
      </Doc>
    );
  }
}
