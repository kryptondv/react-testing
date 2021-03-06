import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {

  render() {
    const { header, desc } = this.props;

    if(!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="title">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string
}