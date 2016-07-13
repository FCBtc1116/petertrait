import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

class Social extends Component {
  render() {
    const active = { borderBottom: '1px solid' }
    return (
      <nav style={styles.nav}>
        <a style={styles.link} href='mailto:contact@petertait.com'>Email</a>
        <a style={styles.link} href='http://github.com/petertait'>Github</a>
        <a style={styles.link} href='http://twitter.com/peter_tait'>Twitter</a>
      </nav>
    )
  }
}

var styles = {
  nav: {
    justifyContent: 'flex-end'
  },
  link: {
    marginLeft: '30px',
    borderBottom: 'none'
  }
}

module.exports = Radium(Social);