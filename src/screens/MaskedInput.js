import React, { Component } from 'react';

import { Box, MaskedInput } from 'grommet';
import { doc } from 'grommet/components/MaskedInput/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(MaskedInput).toJSON();

class MaskedInputDoc extends Component {
  state = {
    value: '',
  };

  render() {
    const { value } = this.state;
    return (
      <Page>
        <Doc
          name="MaskedInput"
          desc={desc}
          example={
            <Box align="center">
              <MaskedInput
                mask={[
                  {
                    length: [1, 2],
                    options: [
                      '1',
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      '10',
                      '11',
                      '12',
                    ],
                    regexp: /^1[1-2]$|^[0-9]$/,
                    placeholder: 'hh',
                  },
                  { fixed: ':' },
                  {
                    length: 2,
                    options: ['00', '15', '30', '45'],
                    regexp: /^[0-5][0-9]$|^[0-9]$/,
                    placeholder: 'mm',
                  },
                  { fixed: ' ' },
                  {
                    length: 2,
                    options: ['am', 'pm'],
                    regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                    placeholder: 'ap',
                  },
                ]}
                value={value}
                onChange={event => this.setState({ value: event.target.value })}
              />
            </Box>
          }
          syntaxes={{
            mask: `[
  {
    length: [1, 2],
    regexp: /^1[1-2]$|^[0-9]$/,
    placeholder: 'hh',
  },
  {
    fixed: ':',
  },
  ...
]`,
          }}
        />
      </Page>
    );
  }
}

export default MaskedInputDoc;
