import React from 'react'
import { EditToggle } from 'shared/components'

class PersonaDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasChanged: false,
    }
  }

  handleEditToggling = () => {
    this.setState(prev => ({ hasChanged: !prev.hasChanged }))
  }

  render() {
    const { hasChanged } = this.state

    return (
      <React.Fragment>
        {hasChanged ? (
          <h2>Persona Detail Edit Mode</h2>
        ) : (
          <h2>Persona Detail Read Mode</h2>
        )}
        <EditToggle onClick={this.handleEditToggling} />
      </React.Fragment>
    )
  }
}

export default PersonaDetail
