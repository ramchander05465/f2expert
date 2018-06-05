import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './containers/home/home'
import About from './containers/about/about'
import Team from './containers/team/team'
import Trainings from './containers/trainings/trainings'
import Testimonials from './containers/testimonials/testimonials'
import Contact from './containers/contact/contact'

const AppRouter = () => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/trainings" component={Trainings} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Redirect from='/*' to='/' />
    </Switch>
)

export default AppRouter