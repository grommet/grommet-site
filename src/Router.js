// NOTE: our routing needs are so simple, we roll our own
// to avoid dependencies on react-router, which doesn't appear to
// be keeping up with React changes.

import React, { Component } from 'react';

const RouterContext = React.createContext({});

export class Router extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.search !== prevState.search) {
      return { search: nextProps.search };
    }
    return null;
  }

  state = {}

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
  }

  onPush = (nextPath) => {
    const { path, search } = this.state;
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, `${nextPath}${search}`);
      this.setState({ path: nextPath });
    }
  }

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

export const Route = ({ component: Comp, path }) => (
  <RouterContext.Consumer>
    {({ path: currentPath }) => (currentPath === path ? <Comp /> : null)}
  </RouterContext.Consumer>
);

export const Clicker = ({ children, path }) => (
  <RouterContext.Consumer>
    {({ push }) => children((event) => {
      event.preventDefault();
      push(path);
    })}
  </RouterContext.Consumer>
);

export const Watcher = ({ children }) => (
  <RouterContext.Consumer>
    {({ path }) => children(path)}
  </RouterContext.Consumer>
);

export default Router;
