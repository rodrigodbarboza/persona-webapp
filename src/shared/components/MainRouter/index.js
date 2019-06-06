import React from 'react'
import { Container } from 'reactstrap'
import { Switch, Route } from 'react-router'
import { Home } from 'shared/components'
import { PersonaPage } from 'Persona'

import './MainRouter.css'

const MainRouter = () => (
  <Container className="main-content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/persona" component={PersonaPage} />
      <Route path="/roles" component={tempRoles} />
      <Route path="/apps" component={tempApps} />
    </Switch>
  </Container>
)

const tempRoles = () => <h2>Roles</h2>
const tempApps = () => <h2>Apps</h2>

export default MainRouter
