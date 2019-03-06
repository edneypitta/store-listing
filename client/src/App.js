import React from 'react'
import Loadable from 'react-loadable'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'
import CategoriesPage from './pages/categories'

const AsyncStoresPage = Loadable({
  loader: () => import(/* webpackChunkName: "storesPage" */ './pages/stores'),
  loading: () => <div>Loading...</div>,
  modules: ['storesPage']
})

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <img src="./logo.svg" alt="logo" />
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={CategoriesPage} />
          <Route path="/stores" component={AsyncStoresPage} />
        </Switch>
      </main>
      <footer>
        Made with ♥ by Edney Pitta
      </footer>
    </div>
  )
}

export default App