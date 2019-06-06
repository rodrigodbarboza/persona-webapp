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
import { Link } from 'react-router-dom'
import SecurityButtons from './SecurityButtons'
import { NavMenu } from 'shared/components/Menu'
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
      <Navbar dark expand="md">
        <NavbarBrand>
          <Link to="/">PersonaWebapp</Link>
        </NavbarBrand>

        <NavbarToggler onClick={handleNavbarToggle} />
        <Collapse isOpen={isNavbarOpen} navbar>
          <Nav className="ml-auto align-middle" navbar pills>
            <NavMenu />
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
