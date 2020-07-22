import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Characters from './components/pages/Characters';
import CharacterDetails from './components/pages/CharacterDetails';

function Router(props) {
  return (
    <BrowserRouter>
      {props.children}
      <Switch>
        <Route path='/' exact render={() => <h1>This is the main page</h1>}/>
        <Route path='/characters' component={Characters}/>
        <Route path='/characters/:id' component={CharacterDetails}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router