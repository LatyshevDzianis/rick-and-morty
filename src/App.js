import React from 'react'
import './App.css'
import Router from './Router'
import Header from './components/blocks/Header'
import {Provider} from 'react-redux'
import {store} from './store'
import Characters from './components/pages/Characters';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header/>
          <Characters/>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
