import React from 'react'
import styles from './server_components.module.css'

// clients comonents imports
import ClientTest from '../components/demos/server_components/firstTest'

// server comonents imports
import ServerTest from '../components/demos/server_components/secondTest.server'

const server_components = () => {
  return (
    <div>
      <p>test server components</p>
      <ClientTest />
      <ServerTest />
    </div>
  )
}

export default server_components
