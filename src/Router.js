// NOTE: our routing needs are so simple, we roll our own
// to avoid dependencies on react-router, which doesn't appear to
// be keeping up with React changes.

import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';

const RouterContext = React.createContext({});

export class Router extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.search !== prevState.search) {
      return { search: nextProps.search };
    }
    return null;
  }

  state = {};

  componentDidMount() {
    window.addEventListener('popstate', this.onPopState);
    this.onPopState();
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.onPopState);
  }

  onPopState = () => {
    const { location } = document;
    this.setState({ path: location.pathname, search: location.search });
  };

  onPush = nextPath => {
    const { path, search } = this.state;
    if (nextPath !== path) {
      if (nextPath.startsWith('http')) {
        window.location = nextPath;
      } else {
        window.history.pushState(
          undefined,
          undefined,
          `${nextPath}${search || ''}`,
        );
        this.setState({ path: nextPath });
        window.scrollTo(0, 0);
      }
    }
  };

  render() {
    const { children } = this.props;
    const { path, search } = this.state;
    return (
      <RouterContext.Provider value={{ path, search, push: this.onPush }}>
        {children}
      </RouterContext.Provider>
    );
  }
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Routes = ({ children, notFoundRedirect }) => (
  <RouterContext.Consumer>
    {({ path: currentPath }) => {
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
        window.location.replace(notFoundRedirect);
      }
      return found;
    }}
  </RouterContext.Consumer>
);

Routes.propTypes = {
  children: PropTypes.node.isRequired,
  notFoundRedirect: PropTypes.string.isRequired,
};

export const Route = ({ component: Comp, path, redirect }) => (
  <RouterContext.Consumer>
    {({ path: currentPath }) => {
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
    }}
  </RouterContext.Consumer>
);

Route.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired,
  redirect: PropTypes.string,
};

Route.defaultProps = {
  component: undefined,
  redirect: undefined,
};

export const Clicker = ({ children, path }) => (
  <RouterContext.Consumer>
    {({ push }) =>
      children(event => {
        event.preventDefault();
        push(path);
      })
    }
  </RouterContext.Consumer>
);

Clicker.propTypes = {
  children: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export const Watcher = ({ children }) => (
  <RouterContext.Consumer>
    {({ path }) => children(path)}
  </RouterContext.Consumer>
);

Watcher.propTypes = {
  children: PropTypes.func.isRequired,
};

export const Pusher = ({ children }) => (
  <RouterContext.Consumer>
    {({ push }) => children(push)}
  </RouterContext.Consumer>
);

Pusher.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Router;
