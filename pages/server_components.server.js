import React from 'react'
import styles from './server_components.module.css'

// clients comonents imports
import ClientTest from '../components/demos/server_components/FirstTest.client'

// server comonents imports
import ServerTest from '../components/demos/server_components/SecondTest'
import SecondServerTest from '../components/demos/server_components/ThirdTest'

const server_components = () => {
  return (
    <div>
      <ClientTest />
      <ServerTest />
      <SecondServerTest />
    </div>
  )
}

export default server_components
