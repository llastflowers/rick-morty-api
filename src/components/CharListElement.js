import React, { Component } from 'react';

class CharListElement extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </>
    );
  }
}

export default CharListElement;
