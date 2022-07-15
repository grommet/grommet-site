import React from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import Helmet from 'react-helmet';
import { Grommet } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { hpe } from 'grommet-theme-hpe';
import { aruba } from 'grommet-theme-aruba';
import { hp } from 'grommet-theme-hp';
import { dxc } from 'grommet-theme-dxc';
import { Router } from './Router';
import Analytics from './components/Analytics';
import Content from './components/Content';
import { ThemeSwitchContext } from './components/ThemeSwitchContext';

const THEMES = {
  grommet,
  dark,
  hpe,
  aruba,
  hp,
  dxc,
};

const App = ({ initialPath }) => {
  const [themeName, setThemeName] = React.useState(() => {
    // Get stored value from local storage, 'grommet' as default
    if (typeof window !== 'undefined') {
      const storedTheme = JSON.parse(window.localStorage.getItem('theme-name'));
      return storedTheme;
    }
    return 'grommet';
  });
  const [search, setSearch] = React.useState();

  React.useEffect(() => {
    if (window.location.search) {
      const {
        location: { search: nextSearch },
      } = window;
      const params = new URLSearchParams(nextSearch);
      setSearch(nextSearch);
      const paramsTheme = params.get('theme');
      // Note: URL and retrieve theme behavior still TBD
      if (paramsTheme) {
        setThemeName(paramsTheme);
      } else {
        setThemeName(themeName);
      }
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme-name', JSON.stringify(themeName));
    }
  }, [themeName]);

  const themeSwitchContextValue = React.useMemo(() => {
    const nextValue = { themeName, setThemeName };
    return nextValue;
  }, [themeName]);

  return (
    <Router initialPath={initialPath} search={search}>
      <Helmet titleTemplate="%s - Grommet" defaultTitle="Grommet">
        <meta name="description" content="Grommet documentation" />
        <meta
          name="keywords"
          content="React, UI Kit, Grommet, Grommet Design, UI/UX Framework"
        />
      </Helmet>
      <Analytics>
        <ThemeSwitchContext.Provider value={themeSwitchContextValue}>
          <Grommet theme={THEMES[themeName || 'grommet']}>
            <Content />
          </Grommet>
        </ThemeSwitchContext.Provider>
      </Analytics>
    </Router>
  );
};

App.propTypes = {
  initialPath: PropTypes.string, // Path passed in from static page renderer.
};

App.defaultProps = {
  initialPath: undefined,
};

export default App;
