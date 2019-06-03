import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap'
import { NavItemComponent, SecurityButtons } from './components'
import './HeaderTemplate.css'

const propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  handleNavbarToggle: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
}

const HeaderTemplate = ({
  isNavbarOpen,
  handleNavbarToggle,
  isAuthenticated,
  onSignIn,
  onSignUp,
  onLogOut,
}) => (
  <header className="header">
    <Container>
      <Navbar dark expand="md" fixed>
        <NavbarBrand>PersonaWebapp</NavbarBrand>
        <NavbarToggler onClick={handleNavbarToggle} />
        <Collapse isOpen={isNavbarOpen} navbar>
          <Nav className="ml-auto align-middle" navbar pills>
            <NavItemComponent description="Persona" link="persona" />
            <NavItemComponent description="Roles" link="Roles" />
            <NavItemComponent description="Apps" link="Apps" />
            <NavItem className="mx-3 my-2 my-md-0" />
            <SecurityButtons
              isAuthenticated={isAuthenticated}
              onSignIn={onSignIn}
              onSignUp={onSignUp}
              onLogOut={onLogOut}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  </header>
)

HeaderTemplate.propTypes = propTypes

export default HeaderTemplate
