import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Keyboard, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import { structure, nameToPath } from '../structure';
import { RouterContext } from '../Router';

const allSuggestions = structure.sections
  .map(section => (section.components || []).concat(section.name))
  .concat(structure.externals.map(e => e.name))
  .reduce((acc, val) => acc.concat(val), [])
  .sort();

const SearchButton = ({ setSearchOpen, searchOpen }) => {
  const { go } = React.useContext(RouterContext);
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState(allSuggestions);
  // const [filtering, setFiltering] = React.useState(false);
  const inputRef = React.createRef();

  React.useEffect(() => {
    if (inputRef.current && searchOpen) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

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

  if (searchOpen) {
    return (
      <Keyboard
        onEsc={() => {
          setSearchOpen(false);
        }}
        onEnter={onEnter}
      >
        <TextInput
          ref={inputRef}
          name="search-components"
          dropHeight="medium"
          placeholder="search..."
          value={value}
          suggestions={suggestions}
          onChange={onChange}
          onSelect={onSelect}
          onSuggestionsOpen={() => {
            setSearchOpen(true);
          }}
          onSuggestionsClose={() => {
            setSearchOpen(false);
          }}
        />
      </Keyboard>
    );
  }

  return (
    <Button
      plain
      onClick={() => {
        setSearchOpen(true);
      }}
    >
      {({ hover }) => (
        <Box
          round="xlarge"
          pad="small"
          background={hover ? 'active' : undefined}
        >
          <Search />
        </Box>
      )}
    </Button>
  );
};

SearchButton.propTypes = {
  searchOpen: PropTypes.bool.isRequired,
  setSearchOpen: PropTypes.func.isRequired,
};

export default SearchButton;
