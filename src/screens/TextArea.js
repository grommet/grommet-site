import React, { Component } from 'react';

import { TextArea } from 'grommet';
import doc from 'grommet/components/TextArea/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(TextArea).toJSON();

class TextAreaDoc extends Component {
  render() {
    return (
      <Page>
        <Doc
          name='TextArea'
          desc={desc}
          examples={{
            focusIndicator: <TextArea value='A B C' plain={true} focusIndicator={true} />,
            placeholder: <TextArea placeholder='placeholder' />,
            plain: <TextArea plain={true} valuer='A B C' />,
            value: <TextArea value='A B C' />,
          }}
        />
      </Page>
    );
  }
}

export default TextAreaDoc;
