import React from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import Helmet from 'react-helmet';
import { Grommet } from 'grommet';
import { grommet, dark, hacktoberfest2022 } from 'grommet/themes';
import { hpe } from 'grommet-theme-hpe';
import { aruba } from 'grommet-theme-aruba';
import { hp } from 'grommet-theme-hp';
import { dxc } from 'grommet-theme-dxc';
import { Router } from './Router';
import Analytics from './components/Analytics';
import Content from './components/Content';

const THEMES = {
  grommet,
  hacktoberfest2022,
  dark,
  hpe,
  aruba,
  hp,
  dxc,
};

const App = ({ initialPath }) => {
  const [themeName, setThemeName] = React.useState('grommet');
  const [search, setSearch] = React.useState();

  React.useEffect(() => {
    if (window.location.search) {
      const {
        location: { search: nextSearch },
      } = window;
      const params = new URLSearchParams(nextSearch);
      setSearch(nextSearch);
      setThemeName(params.get('theme'));
    }
  }, []);

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
        <Grommet theme={THEMES[themeName || 'grommet'] || grommet}>
          <Content />
        </Grommet>
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
