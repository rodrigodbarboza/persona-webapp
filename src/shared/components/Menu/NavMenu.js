import React from 'react'
import MenuItem from './MenuItem'

const NavMenu = () => (
  <React.Fragment>
    <MenuItem route="/persona">Persona</MenuItem>
    <MenuItem route="/roles">Roles</MenuItem>
    <MenuItem route="/apps">Apps</MenuItem>
  </React.Fragment>
)

export default NavMenu
