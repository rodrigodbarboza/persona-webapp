import React from 'react'
import HeaderTemplate from './HeaderTemplate'

class HeaderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbarOpen: false,
      isAuthenticated: false,
    }
  }

  toggleNavbar = () => {
    this.setState(prev => ({ isNavbarOpen: !prev.isNavbarOpen }))
  }

  handleLogOut = () => {
    console.log('Loged out')
    this.setState(prev => ({ isAuthenticated: false }))
  }

  handleSignIn = () => {
    console.log('Signed in')
    this.setState(prev => ({ isAuthenticated: true }))
  }
  handleSignUp = () => {
    console.log('Signed up')
    this.setState(prev => ({ isAuthenticated: true }))
  }

  render() {
    const { isNavbarOpen, isAuthenticated } = this.state
    return (
      <HeaderTemplate
        isNavbarOpen={isNavbarOpen}
        handleNavbarToggle={this.toggleNavbar}
        isAuthenticated={isAuthenticated}
        onLogOut={this.handleLogOut}
        onSignIn={this.handleSignIn}
        onSignUp={this.handleSignUp}
      />
    )
  }
}

export default HeaderPage
