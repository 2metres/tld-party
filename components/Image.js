import React, { Component, PropTypes } from 'react';

class Image extends Component {
  render() {
    return (
      <img src={this.props.imageSrc} />
    )
  }
}

Image.propType = {
  imageSrc: PropTypes.func.isRequired
}

export default Image
