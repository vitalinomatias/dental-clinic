import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'

import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter } from 'react-router-dom'

//Redux
import { appReducer } from './redux/reducer/reducer'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

const store = createStore(appReducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)