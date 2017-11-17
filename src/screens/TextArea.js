import React, { Component } from 'react';

import { Box, TextArea } from 'grommet';
import doc from 'grommet/components/TextArea/doc';

import Doc from '../components/Doc';

const desc = doc(TextArea).toJSON();

class TextAreaDoc extends Component {
  render() {
    return (
      <Doc name='TextArea' desc={desc}>
        <Box pad='large'>
          <Box margin='small'>
            <TextArea />
          </Box>
          <Box margin='small'>
            <TextArea placeholder='placeholder' />
          </Box>
          <Box margin='small'>
            <TextArea placeholder='plain' plain={true} />
          </Box>
          <Box margin='small'>
            <TextArea placeholder='plain with focus' plain={true} focusIndicator={true} />
          </Box>
        </Box>
      </Doc>
    );
  }
}

export default TextAreaDoc;
