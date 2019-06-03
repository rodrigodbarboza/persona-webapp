import React from 'react'
import PropTypes from 'prop-types'
import { NavItem, NavLink } from 'reactstrap'

const propTypes = {
  description: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
}

const NavItemComponent = ({ link, description }) => (
  <NavItem>
    <NavLink link={link}>{description}</NavLink>
  </NavItem>
)

NavItemComponent.propTypes = propTypes

export default NavItemComponent
