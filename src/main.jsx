import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import collaboratorReducer from "./features/collaborators"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    collaboratorReducer
  },
  
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode> 
)
