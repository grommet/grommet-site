import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BuilderContext } from './BuilderContext';

export class Builder extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    phases: PropTypes.number.isRequired,
    interval: PropTypes.number.isRequired,
    wrap: PropTypes.bool,
  };

  static defaultProps = {
    wrap: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { interval } = nextProps;
    const { phase } = prevState;
    if (!phase) {
      return {
        build: true,
        phase: 1,
        animationDuration: interval * 0.75,
      };
    }
    return null;
  }

  state = {};

  componentDidMount() {
    const { interval, phases, wrap } = this.props;
    this.timer = setInterval(() => {
      const { build, phase } = this.state;
      const nextBuild =
        wrap || (build && phase < phases) || (!build && phase === 1);
      let nextPhase = nextBuild ? phase + 1 : Math.max(1, phase - 1);
      if (nextPhase > phases) {
        nextPhase = 1;
      }
      this.setState({ build: nextBuild, phase: nextPhase });
    }, interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { children } = this.props;
    return (
      <BuilderContext.Provider value={this.state}>
        {children}
      </BuilderContext.Provider>
    );
  }
}
