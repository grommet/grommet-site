import React, { Component } from 'react';
import URLSearchParams from 'url-search-params';
import { Grommet, Box } from 'grommet';
import { grommet, hpe, dark } from 'grommet/themes';
import { Router } from './Router';
import Context from './Context';
import Analytics from './components/Analytics';
import Content from './components/Content';

const THEMES = {
  grommet,
  hpe,
  dark,
};

export default class App extends Component {
  state = {
    color: '#FFD6D6',
    themeName: 'grommet',
  };

  componentDidMount() {
    if (window.location.search) {
      const { location: { search } } = window;
      const params = new URLSearchParams(search);
      this.setState({ search, themeName: params.get('theme') }); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this.unlisten = undefined;
    }
  }

  onSetColor = (color) => {
    this.setState({ color });
  }

  render() {
    const { color, search, themeName } = this.state;
    return (
      <Router search={search}>
        <Analytics>
          <Grommet theme={THEMES[themeName || 'grommet']}>
            <Box
              background={color}
              style={{ minHeight: '100vh', transition: 'background 2s' }}
            >
              <Context.Provider value={{ setColor: this.onSetColor }}>
                <Content />
              </Context.Provider>
            </Box>
          </Grommet>
        </Analytics>
      </Router>
    );
  }
}
