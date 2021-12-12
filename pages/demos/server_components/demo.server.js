import React from 'react'



// server components import
import Recipes from '../../../components/demos/server_components/recipeList.client.js'

const Demo = () => {
  return (
    <div>
      <div>
        See other demos
      </div>
      <div>
        here is content
      </div>
      <div>
        <div>
          <h1>Popular recipes</h1>
          <p>hier komt zoek ding</p>
        </div>
        <div>
          <Recipes />
        </div>
      </div>
    </div>
  )
}

export default Demo
