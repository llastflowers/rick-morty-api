import React, { Component } from 'react';

class CharListElement extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <p>{title} <span>{description}</span></p>
      </>
    );
  }
}

export default CharListElement;
