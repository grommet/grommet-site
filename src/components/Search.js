import React from 'react';
import PropTypes from 'prop-types';
import { Button, Keyboard, TextInput } from 'grommet';
import { Search as SearchIcon } from 'grommet-icons';
import { structure, nameToPath } from '../structure';
import { RouterContext } from '../Router';

const allSuggestions = structure.sections
  .map((section) => (section.components || []).concat(section.name))
  .concat(structure.externals.map((e) => e.name))
  .reduce((acc, val) => acc.concat(val), [])
  .filter((val, index, array) => array.indexOf(val) === index)
  .sort();

const Search = ({ open, setOpen }) => {
  const { go } = React.useContext(RouterContext);
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState(allSuggestions);
  const inputRef = React.createRef();

  React.useEffect(() => {
    if (inputRef.current && open) {
      inputRef.current.focus();
    }
  }, [open]);

  const onChange = (event) => {
    const {
      target: { value: nextValue },
    } = event;
    let nextSuggestions;
    if (nextValue) {
      const regexp = new RegExp(nextValue, 'i');
      nextSuggestions = allSuggestions.filter((c) => regexp.test(c));
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
          (c) => c.toLowerCase() === value.toLowerCase(),
        );
        if (matches.length === 1) {
          go(nameToPath(matches[0]));
        }
      }
    }
  };

  const onSelect = (event) => {
    go(nameToPath(event.suggestion));
  };

  if (open) {
    return (
      <Keyboard
        onEsc={() => {
          setOpen(false);
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
            setOpen(true);
          }}
          onSuggestionsClose={() => {
            setOpen(false);
          }}
        />
      </Keyboard>
    );
  }

  return (
    <Button
      a11yTitle="Search"
      icon={<SearchIcon />}
      hoverIndicator
      onClick={() => {
        setOpen(true);
      }}
    />
  );
};

Search.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Search;
