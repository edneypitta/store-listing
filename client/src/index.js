import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import CategoriesContext from './categories-context'

const AppBundle = (
  <BrowserRouter>
    <CategoriesContext.Provider value={window.__DATA__}>
      <App />
    </CategoriesContext.Provider>
  </BrowserRouter>
)

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      AppBundle,
      document.getElementById('root')
    )
  })
}