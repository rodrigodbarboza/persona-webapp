import React from 'react'

import { Container } from 'reactstrap'

import { FooterPage, HeaderPage } from 'shared/components'

function App() {
  return (
    <Container fluid className="p-0">
      <HeaderPage />
      <main>Main not yet Component</main>
      <FooterPage />
    </Container>
  )
}

export default App
