import React, { Component } from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Grommet } from 'grommet';
import { hpe } from 'grommet/themes';

import Anchor from './screens/Anchor';
import Box from './screens/Box';
import Button from './screens/Button';
import Chart from './screens/Chart';
import CheckBox from './screens/CheckBox';
import DropButton from './screens/DropButton';
import Form from './screens/Form';
import Grid from './screens/Grid';
import Heading from './screens/Heading';
import Home from './screens/Home';
import Image from './screens/Image';
import Layer from './screens/Layer';
import Markdown from './screens/Markdown';
import Menu from './screens/Menu';
import Meter from './screens/Meter';
import Paragraph from './screens/Paragraph';
import RadioButton from './screens/RadioButton';
import Select from './screens/Select';
import Stack from './screens/Stack';
import Text from './screens/Text';
import TextInput from './screens/TextInput';
import Video from './screens/Video';

const history = createBrowserHistory();

const THEMES = {
  grommet: undefined,
  hpe,
};

export default class App extends Component {
  static childContextTypes = {
    currentTheme: PropTypes.string,
    onThemeChange: PropTypes.func,
  };

  state = {
    theme: undefined,
  };

  getChildContext() {
    return {
      currentTheme: this.state.theme,
      onThemeChange: (...args) => this.onThemeChange(...args),
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

  render() {
    const { theme } = this.state;
    return (
      <Router history={history}>
        <Grommet theme={theme ? THEMES[theme] : undefined}>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/anchor' component={Anchor} />
            <Route exact={true} path='/box' component={Box} />
            <Route exact={true} path='/button' component={Button} />
            <Route exact={true} path='/chart' component={Chart} />
            <Route exact={true} path='/check-box' component={CheckBox} />
            <Route exact={true} path='/drop-button' component={DropButton} />
            <Route exact={true} path='/form' component={Form} />
            <Route exact={true} path='/grid' component={Grid} />
            <Route exact={true} path='/heading' component={Heading} />
            <Route exact={true} path='/image' component={Image} />
            <Route exact={true} path='/layer' component={Layer} />
            <Route exact={true} path='/markdown' component={Markdown} />
            <Route exact={true} path='/menu' component={Menu} />
            <Route exact={true} path='/meter' component={Meter} />
            <Route exact={true} path='/radio-button' component={RadioButton} />
            <Route exact={true} path='/paragraph' component={Paragraph} />
            <Route exact={true} path='/select' component={Select} />
            <Route exact={true} path='/stack' component={Stack} />
            <Route exact={true} path='/text' component={Text} />
            <Route exact={true} path='/text-input' component={TextInput} />
            <Route exact={true} path='/video' component={Video} />
          </Switch>
        </Grommet>
      </Router>
    );
  }
}
