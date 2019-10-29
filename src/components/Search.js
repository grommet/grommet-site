import React from 'react';
import { Box, DropButton, Keyboard, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import { structure, nameToPath } from '../structure';
import { RouterContext } from '../Router';

const allSuggestions = structure.sections
  .map(section => (section.components || []).concat(section.name))
  .concat(structure.externals.map(e => e.name))
  .reduce((acc, val) => acc.concat(val), [])
  .sort();

export default () => {
  const { go } = React.useContext(RouterContext);
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState(allSuggestions);
  const inputRef = React.createRef();

  const onChange = event => {
    const {
      target: { value: nextValue },
    } = event;
    let nextSuggestions;
    if (nextValue) {
      const regexp = new RegExp(nextValue, 'i');
      nextSuggestions = allSuggestions.filter(c => regexp.test(c));
    } else {
      nextSuggestions = allSuggestions;
    }
    // don't use newer value if nothing matches it
    if (nextSuggestions.length > 0) {
      setValue(nextValue);
      setSuggestions(nextSuggestions);
    }
  };

  const onEnter = () => {
    if (value) {
      if (suggestions.length === 1) {
        go(nameToPath(suggestions[0]));
      } else {
        const matches = allSuggestions.filter(
          c => c.toLowerCase() === value.toLowerCase(),
        );
        if (matches.length === 1) {
          go(nameToPath(matches[0]));
        }
      }
    }
  };

  const onSelect = event => {
    go(nameToPath(event.suggestion));
  };

  return (
    <DropButton
      plain
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={
        <Keyboard onEnter={onEnter}>
          <TextInput
            ref={inputRef}
            placeholder="search ..."
            value={value}
            suggestions={suggestions}
            dropHeight="medium"
            onChange={onChange}
            onSelect={onSelect}
          />
        </Keyboard>
      }
      onOpen={() => inputRef.current.focus()}
    >
      {({ hover }) => (
        <Box
          pad="small"
          round="xlarge"
          background={hover ? 'active' : undefined}
        >
          <Search />
        </Box>
      )}
    </DropButton>
  );
};
