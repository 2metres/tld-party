import React from 'react';

const Image = ({ src }) => (
  <img src={ src } />
)

Image.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default Image
