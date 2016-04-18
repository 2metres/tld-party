import React, { Component, PropTypes } from 'react';
import Image                  from '../components/Image';
import Counter                from '../components/Counter';

class App extends Component {
  render() {
    return(
      <div>
        <Counter />
        <Image imageSrc={this.props.imageSrc} />
      </div>
    )
  }
}

export default App
