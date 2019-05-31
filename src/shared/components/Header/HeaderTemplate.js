import React from 'react'
import { Container, Button } from 'reactstrap'
import './HeaderTemplate.css'

const HeaderTemplate = () => (
  <header className="header">
    <Container>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h1 className="mb-0">PersonaWebapp</h1>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <nav className="menu">
            <ul className="menu-list">
              <li className="menu-item">Persona</li>
              <li className="menu-item">Roles</li>
              <li className="menu-item">Apps</li>
            </ul>
          </nav>

          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </Container>
  </header>
)

export default HeaderTemplate
