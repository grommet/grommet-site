import React from 'react';
import PropTypes from 'prop-types';

import { Box, Diagram, Stack } from 'grommet';
import { doc } from 'grommet/components/Diagram/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Diagram).toJSON();

const Node = ({ id, ...rest }) => (
  <Box
    id={id}
    basis="xxsmall"
    margin="small"
    pad="medium"
    round="small"
    background={{ color: 'neutral-3' }}
    {...rest}
  />
);

Node.propTypes = {
  id: PropTypes.string.isRequired,
};

const connection = (fromTarget, toTarget, { color, ...rest } = {}) => ({
  fromTarget,
  toTarget,
  color: color || 'accent-1',
  thickness: 'xsmall',
  round: true,
  type: 'rectilinear',
  ...rest,
});

const Example = () => (
  <Stack guidingChild={1}>
    <Diagram
      connections={[
        connection('1', '2'),
        connection('6', '7'),
        connection('3', '8'),
      ]}
    />
    <Box>
      <Box direction="row">
        {[1, 2, 3].map(id => (
          <Node key={id} id={id} />
        ))}
      </Box>
      <Box direction="row">
        {[4, 5].map(id => (
          <Node key={id} id={id} />
        ))}
      </Box>
      <Box direction="row">
        {[6, 7, 8].map(id => (
          <Node key={id} id={id} />
        ))}
      </Box>
    </Box>
    <Diagram
      connections={[
        connection('3', '5', { color: 'accent-2' }),
        connection('4', '1', { color: 'accent-2' }),
        connection('4', '7', { color: 'accent-2' }),
      ]}
    />
  </Stack>
);

export default () => (
  <Page>
    <Doc
      name="Diagram"
      desc={desc}
      syntaxes={{
        connections: [
          {
            fromTarget: 'my-dom-id-1',
            toTarget: 'my-dom-id-2',
          },
          {
            anchor: 'center',
            color: 'accent-1',
            fromTarget: 'my-dom-id-1',
            label: 'link 5',
            offset: undefined,
            thickness: 'medium',
            toTarget: 'my-dom-id-2',
            type: 'rectilinear',
          },
          {
            VALUES: {
              anchor: ['center', 'vertical', 'horizonta'],
              offset: ['xsmall', 'small', 'medium', 'large', 'any CSS size'],
              thickness: [
                'hair',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'any CSS size',
              ],
              type: ['direct', 'curved', 'rectilinear'],
            },
          },
        ],
      }}
      example={<Example />}
    />
  </Page>
);

const itemProps = {
  color: 'brand',
  thickness: 'xsmall',
  round: true,
};

export const DiagramItem = props => (
  <Item {...props} center>
    <Stack>
      <Box>
        <Box direction="row">
          {[1, 2, 3].map(id => (
            <Box
              key={id}
              id={id}
              basis="xxsmall"
              margin="small"
              pad="medium"
              round="full"
              background={{ color: 'brand', opacity: 'medium' }}
            />
          ))}
        </Box>
        <Box direction="row">
          {[4, 5, 6, 7].map(id => (
            <Box
              key={id}
              id={id}
              basis="xxsmall"
              margin="small"
              pad="medium"
              round="full"
              background={{ color: 'brand', opacity: 'medium' }}
            />
          ))}
        </Box>
      </Box>
      <Diagram
        connections={[
          connection('2', '4', itemProps),
          connection('3', '5', itemProps),
          connection('2', '5', itemProps),
          connection('3', '6', itemProps),
          connection('6', '7', itemProps),
        ]}
      />
    </Stack>
  </Item>
);
