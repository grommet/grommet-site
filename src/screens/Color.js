import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';
import { ThemeContext } from 'grommet/contexts';

import Page from '../components/Page';
import { ComponentDoc } from '../components/Doc';

const SETS = {
  brand: /^brand/,
  background: /^background/,
  text: /^text/,
  state: /control|focus|border|placeholder|icon/,
  active: /active/,
  selected: /selected/,
  status: /^status-/,
  graph: /^graph-/,
  accent: /^accent-/,
  neutral: /^neutral-/,
  light: /^light-/,
  dark: /^dark-/,
};

const Cell = ({ name, value }) => (
  <Box basis="small" margin={{ bottom: 'medium' }}>
    <Box pad="medium" background={name} round="small" />
    <Text>
      <strong>{name}</strong>
    </Text>
    {typeof value === 'object' ? (
      <Box>
        <Text>{value.light}</Text>
        <Text>{value.dark}</Text>
      </Box>
    ) : (
      <Text>{value}</Text>
    )}
  </Box>
);

Cell.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
    .isRequired,
};

const Set = ({ names }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <Box direction="row" wrap gap="medium">
        {names.map((name) => (
          <Cell key={name} name={name} value={theme.global.colors[name]} />
        ))}
      </Box>
    )}
  </ThemeContext.Consumer>
);

Set.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Color = () => (
  <Page>
    <ComponentDoc name="Color" description="The color palette">
      <ThemeContext.Consumer>
        {(theme) => {
          const all = Object.keys(theme.global.colors).filter(
            (name) => theme.global.colors[name],
          );
          // map expression to color names
          const sets = {};
          Object.keys(SETS).forEach((set) => {
            const names = all.filter((name) => SETS[set].test(name));
            if (names.length) sets[set] = names;
          });
          const core = Object.values(sets).flat();
          // find other colors not in sets
          const other = all.filter((name) => !core.includes(name));

          return (
            <Box gap="large" margin={{ vertical: 'large' }}>
              {Object.values(sets).map(
                (names) => names[0] && <Set key={names[0]} names={names} />,
              )}
              <Set names={other} />
            </Box>
          );
        }}
      </ThemeContext.Consumer>
    </ComponentDoc>
  </Page>
);

export default Color;
