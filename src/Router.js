import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'

function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
      </Switch>
      {props.children}
    </BrowserRouter>
  )
}

export default Router