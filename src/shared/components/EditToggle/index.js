import React from 'react'
import { Button } from 'reactstrap'

const EditToggle = ({ onClick }) => (
  <Button color="warning" onClick={onClick}>
    Toggle Edit
  </Button>
)

export default EditToggle
