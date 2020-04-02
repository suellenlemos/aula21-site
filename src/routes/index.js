import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Contato from '../pages/contato'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contato} />
    </Switch>
  )
}

export default Routes