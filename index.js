import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

// This token gets interpolated by the node server
// It looks like: { tld: 'some-tld', image: '/some/image/path.jpg' }
const serverData = $SERVER_DATA

console.log(["tld_data:", [serverData.tld, serverData.image]])

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
