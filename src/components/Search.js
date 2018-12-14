import React, { Component } from 'react';
import { Box, Keyboard, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import { structure, nameToPath } from '../structure';
import { Pusher } from '../Router';

const allSuggestions = structure.sections
  .map(section => (section.components || []).concat(section.name))
  .flat()
  .sort();

export default class extends Component {
  state = { value: '', suggestions: allSuggestions };

  searchRef = React.createRef();

  componentDidMount() {
    this.setState({ refReady: true });
  }

  onChange = event => {
    const {
      target: { value },
    } = event;
    let suggestions;
    if (value) {
      const regexp = new RegExp(value, 'i');
      suggestions = allSuggestions.filter(c => regexp.test(c));
    } else {
      suggestions = allSuggestions;
    }
    // don't use newer value if nothing matches it
    if (suggestions.length > 0) {
      this.setState({ value, suggestions });
    }
  };

  onEnter = push => () => {
    const { value, suggestions } = this.state;
    if (value) {
      if (suggestions.length === 1) {
        push(nameToPath(suggestions[0]));
      } else {
        const matches = allSuggestions.filter(
          c => c.toLowerCase() === value.toLowerCase(),
        );
        if (matches.length === 1) {
          push(nameToPath(matches[0]));
        }
      }
    }
  };

  onSelect = push => event => {
    push(nameToPath(event.suggestion));
  };

  render() {
    const { focus, value, refReady, suggestions } = this.state;
    return (
      <Pusher>
        {push => (
          <Keyboard onEnter={this.onEnter(push)}>
            <Box
              ref={this.searchRef}
              direction="row"
              align="center"
              border={{ side: 'bottom', color: focus ? 'focus' : 'border' }}
            >
              <Search />
              <TextInput
                plain
                value={value}
                suggestions={suggestions}
                dropTarget={refReady && this.searchRef.current}
                onChange={this.onChange}
                onSelect={this.onSelect(push)}
                onFocus={() => this.setState({ focus: true })}
                onBlur={() => this.setState({ focus: false })}
              />
            </Box>
          </Keyboard>
        )}
      </Pusher>
    );
  }
}
