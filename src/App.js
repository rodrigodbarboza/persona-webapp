import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'reactstrap'

import { FooterPage, HeaderPage, MainRouter } from 'shared/components'

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <HeaderPage />
        <MainRouter />
        <FooterPage />
      </Router>
    </Container>
  )
}

export default App
