import React, { Component } from 'react';

import { Box, RangeSelector, Stack, Text } from 'grommet';
import { doc } from 'grommet/components/RangeSelector/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(RangeSelector).toJSON();

class RangeSelectorDoc extends Component {
  state = {
    values: [3, 7],
  };

  render() {
    const { values } = this.state;
    return (
      <Page>
        <Doc
          name="RangeSelector"
          desc={desc}
          example={
            <Stack>
              <Box direction="row" justify="between">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
                  <Box key={value} pad="small" border={false}>
                    <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
                  </Box>
                ))}
              </Box>
              <RangeSelector
                direction="horizontal"
                invert={false}
                min={0}
                max={9}
                size="full"
                round="small"
                values={values}
                onChange={nextValues => this.setState({ values: nextValues })}
              />
            </Stack>
          }
        />
      </Page>
    );
  }
}

export default RangeSelectorDoc;

export const RangeSelectorItem = props => (
  <Item {...props} center>
    <Stack>
      <Box direction="row" gap="small">
        {[1, 2, 3, 4, 5].map(n => (
          <Box
            key={n * 100}
            width="xxsmall"
            height="xxsmall"
            align="center"
            justify="center"
          >
            <Text>{n}</Text>
          </Box>
        ))}
      </Box>
      <RangeSelector
        direction="horizontal"
        min={1}
        max={5}
        size="full"
        round="small"
        values={[2, 4]}
      />
    </Stack>
  </Item>
);
