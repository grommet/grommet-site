import React, { Component } from 'react';
import { Box } from 'grommet';
import Nav from './Nav';

export default class Page extends Component {
  componentDidMount() {
    this.scrollToSection();
  }

  componentDidUpdate() {
    this.scrollToSection();
  }

  scrollToSection = () => {
    const name = window.location.hash.split('#')[1];
    if (name) {
      document.getElementById(name).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  render() {
    const { background, children } = this.props;
    return (
      <Box pad="large" background={background}>
        <Box>
          <Nav />
          <Box margin={{ top: 'large' }}>{children}</Box>
        </Box>
      </Box>
    );
  }
}

Page.propTypes = Box.propTypes;
