import React   from 'react';

import Image   from '../components/Image';
import Counter from '../components/Counter';

const App = ({ imageSrc }) => (
  <div>
    <Counter />
    <Image src={ imageSrc } />
  </div>
)

export default App
