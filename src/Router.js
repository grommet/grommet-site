// NOTE: our routing needs are so simple, we roll our own
// to avoid dependencies on react-router, which doesn't appear to
// be keeping up with React changes.

import React, { Children } from 'react';
import PropTypes from 'prop-types';

export const RouterContext = React.createContext({});

export const Router = ({ children, initialPath }) => {
  const [path, setPath] = React.useState(initialPath);
  const [search, setSearch] = React.useState();

  React.useEffect(() => {
    const onPopState = () => {
      const { location } = document;
      setPath(location.pathname);
      setSearch(location.search);
      // Any time the route updates the user will be scrolled to
      // the hash. This is loose and may be problematic.
      if (typeof window !== 'undefined' && location.hash) {
        window.scrollTo(document.getElementById(location.hash));
      }
    };
    window.addEventListener('popstate', onPopState);
    onPopState();
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const go = (nextPath, target) => {
    if (nextPath !== path) {
      if (target) {
        window.open(nextPath, target);
      } else if (nextPath.startsWith('http')) {
        window.location = nextPath;
      } else {
        window.history.pushState(
          undefined,
          undefined,
          `${nextPath}${search || ''}`,
        );
        setPath(nextPath);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <RouterContext.Provider value={{ path, search, go }}>
      {children}
    </RouterContext.Provider>
  );
};

Router.propTypes = {
  children: PropTypes.node.isRequired,
  initialPath: PropTypes.string, // Path passed in from static page renderer.
};

Router.defaultProps = {
  initialPath: undefined,
};

export const Routes = ({ children, notFoundRedirect }) => {
  const { path: currentPath } = React.useContext(RouterContext);
  let found;
  Children.forEach(children, child => {
    if (
      !found &&
      currentPath &&
      currentPath.split('#')[0] === child.props.path
    ) {
      found = child;
    }
  });
  if (currentPath && !found) {
    if (typeof window !== 'undefined') {
      window.location.replace(notFoundRedirect);
    }
  }
  return found || null;
};

Routes.propTypes = {
  children: PropTypes.node.isRequired,
  notFoundRedirect: PropTypes.string.isRequired,
};

export const Route = ({ component: Comp, path, redirect }) => {
  const { path: currentPath } = React.useContext(RouterContext);
  if (currentPath && currentPath.split('#')[0] === path) {
    if (redirect) {
      window.location.replace(redirect);
    } else if (Comp) {
      return <Comp />;
    } else {
      console.error('Route missing component or redirect');
    }
  }
  return null;
};

Route.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired,
  redirect: PropTypes.string,
};

Route.defaultProps = {
  component: undefined,
  redirect: undefined,
};

export default Router;
