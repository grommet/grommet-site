import React, { Component } from 'react';

import {
  Anchor, Box, Button, Heading, Image, Layer, Text,
} from 'grommet';

import { Blank, Close, Trash } from 'grommet-icons';

import Doc from '../components/Doc';
import Selection from '../components/Selection';

const allImages = [
  '/img/photos/image1.jpg',
  '/img/photos/image2.jpg',
  '/img/photos/image3.jpg',
  '/img/photos/image4.jpg',
  '/img/photos/image5.jpg',
  '/img/photos/image6.jpg',
  '/img/photos/image7.jpg',
  '/img/photos/image8.jpg',
  '/img/photos/image9.jpg',
  '/img/photos/image10.jpg',
  '/img/photos/image11.jpg',
  '/img/photos/image12.jpg',
  '/img/photos/image13.jpg',
  '/img/photos/image14.jpg',
  '/img/photos/image15.jpg',
  '/img/photos/image16.jpg',
  '/img/photos/image17.jpg',
  '/img/photos/image18.jpg',
  '/img/photos/image19.jpg',
  '/img/photos/image20.jpg',
  '/img/photos/image21.jpg',
  '/img/photos/image22.jpg',
  '/img/photos/image23.jpg',
  '/img/photos/image24.jpg',
  '/img/photos/image25.jpg',
  '/img/photos/image26.jpg',
  '/img/photos/image27.jpg',
  '/img/photos/image28.jpg',
  '/img/photos/image29.jpg',
  '/img/photos/image30.jpg',
  '/img/photos/image31.jpg',
  '/img/photos/image32.jpg',
  '/img/photos/image33.jpg',
  '/img/photos/image34.jpg',
  '/img/photos/image35.jpg',
  '/img/photos/image36.jpg',
  '/img/photos/image37.jpg',
  '/img/photos/image38.jpg',
  '/img/photos/image39.jpg',
  '/img/photos/image40.jpg',
  '/img/photos/image41.jpg',
  '/img/photos/image42.jpg',
  '/img/photos/image43.jpg',
  '/img/photos/image44.jpg',
  '/img/photos/image45.jpg',
  '/img/photos/image46.jpg',
  '/img/photos/image47.jpg',
  '/img/photos/image48.jpg',
  '/img/photos/image49.jpg',
  '/img/photos/image50.jpg',
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
        name='Photo Browser'
        text='A component that allows selection of its children.'
      >
        <Box>
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
