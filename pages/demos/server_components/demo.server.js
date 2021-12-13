import React from 'react'

import styles from '../../../components/demos/server_components/styles/goBackButton.module.css'

// server components imports
import Recipes from '../../../components/demos/server_components/recipeList.server.js'

// client components imports
import GoBackButton from '../../../components/demos/server_components/goBackButton.client'

const Demo = () => {
  return (
    <div style={{ height: "100%", backgroundColor: "#F8F9FDs", display: "grid", gridTemplateColumn: "auto" }}>
      <GoBackButton />
      <div style={{ padding: "0rem 20rem" }}>
        here is the content
      </div>
      <div style={{ backgroundColor: "#F2F2F2", padding: "0rem 20rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ color: "#16161E", fontSize: "5rem", fontWeight: "700", fontFamily: "Neue Montreal, Helvetica, sans-serif, Arial", padding: "5rem 0rem" }}>Popular recipes</h1>
          <p>hier komt zoek ding</p>
        </div>
        <Recipes />
      </div>
    </div>
  )
}

export default Demo
