import React, { Component } from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grommet, Box, Stack } from 'grommet';
import { hpe } from 'grommet/themes';
import Content from './components/Content';
import Gradient from './components/Gradient';

const history = createBrowserHistory();

const THEMES = {
  grommet: undefined,
  hpe,
};

export default class App extends Component {
  static childContextTypes = {
    currentTheme: PropTypes.string,
    onThemeChange: PropTypes.func,
    onColorChange: PropTypes.func,
  };

  state = {
    colors: ['#FFF9ED', '#FCC'],
    theme: undefined,
  };

  getChildContext() {
    return {
      currentTheme: this.state.theme,
      onThemeChange: (...args) => this.onThemeChange(...args),
      onColorChange: (...args) => this.onColorChange(...args),
    };
  }

  componentDidMount() {
    if (!this.unlisten) {
      this.unlisten = history.listen((location) => {
        const { theme } = this.state;
        if (!location.search && theme && theme !== 'grommet') {
          // this is to support routes without the theme as a url search param
          history.replace(`${window.location.pathname}?theme=${theme}`);
        }
      });
    }
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search);
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ theme: params.get('theme') });
      /* eslint-enable react/no-did-mount-set-state */
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this.unlisten = undefined;
    }
  }

  onThemeChange(theme) {
    let loc = window.location.pathname;
    if (theme !== 'grommet') {
      loc += `?theme=${theme}`;
      this.setState({ theme }, () => history.replace(loc));
    } else {
      this.setState({ theme: undefined }, () => history.replace(loc));
    }
  }

  onColorChange(colors) {
    this.setState({ colors });
  }

  render() {
    const { colors, theme } = this.state;
    return (
      <Router history={history}>
        <Grommet theme={theme ? THEMES[theme] : undefined}>
          <Stack guidingChild='last' style={{ minHeight: '100vh' }}>
            <Gradient colors={colors} />
            <Box>
              <Content />
            </Box>
          </Stack>
        </Grommet>
      </Router>
    );
  }
}
