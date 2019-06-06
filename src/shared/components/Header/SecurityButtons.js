import React from 'react'
import PropTypes from 'prop-types'
import { NavItem, NavLink } from 'reactstrap'

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
}

const SecurityButtons = ({ isAuthenticated, onSignIn, onSignUp, onLogOut }) =>
  isAuthenticated ? (
    <NavItem className="mx-md-2 my-1 my-md-0">
      <NavLink onClick={onLogOut} className="text-center" active>
        Log Out
      </NavLink>
    </NavItem>
  ) : (
    <React.Fragment>
      <NavItem className="mx-md-2 my-1 my-md-0">
        <NavLink onClick={onSignIn} className="text-center">
          Sign In
        </NavLink>
      </NavItem>
      <NavItem className="mx-md-2 my-1 my-md-0">
        <NavLink onClick={onSignUp} className="text-center" active>
          Sign Up
        </NavLink>
      </NavItem>
    </React.Fragment>
  )

SecurityButtons.propTypes = propTypes

export default SecurityButtons
