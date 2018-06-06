import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import asyncComponent from './hoc/asyncComponent'

const AppRouter = () => (
    <Switch>
      <Route path="/" exact component={asyncComponent(() => {
        return import('./containers/home/home')
      })} />
      <Route path="/home" component={asyncComponent(() => {
        return import('./containers/home/home')
      })} />
      <Route path="/about" component={asyncComponent(() => {
        return import('./containers/about/about')
      })} />
      <Route path="/team" component={asyncComponent(() => {
        return import('./containers/team/team')
      })} />
      <Route path="/trainings" component={asyncComponent(() => {
        return import('./containers/trainings/trainings')
      })} />
      <Route path="/testimonials" component={asyncComponent(() => {
        return import('./containers/testimonials/testimonials')
      })} />
      <Route path="/contact" component={asyncComponent(() => {
        return import('./containers/contact/contact')
      })} />
      <Redirect from='/*' to='/' />
    </Switch>
)

export default AppRouter