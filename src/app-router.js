import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Home from './containers/home/home'

const AppRouter = (props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter