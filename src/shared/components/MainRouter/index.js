import React from 'react'
import { Container } from 'reactstrap'
import { Switch, Route } from 'react-router'
import { Home } from 'shared/components'

const MainRouter = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/persona" component={Home} />
      <Route path="/roles" component={Home} />
      <Route path="/apps" component={Home} />
    </Switch>
  </Container>
)

export default MainRouter
