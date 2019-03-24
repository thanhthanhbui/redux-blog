import React from 'react'
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <div>
    <Header as='h2'>Error: 404 - You are going to a dead end!</Header>
    <Link to='/'>
      <Button>Go Home</Button>
    </Link>
  </div>
)

export default NoMatch