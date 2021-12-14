import React from 'react'

import Image from 'next/image'

// client button import
import Recipe from './Recipe.client'

import { recipes } from '../../../data_server_components/recipes'

const RecipeList = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridColumnGap: '5rem', gridRowGap: "3rem", paddingBottom: "10rem" }}>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '.5rem' }}>
          <Recipe {...recipe} />
        </div>
      ))}
    </div >
  )
}

export default RecipeList
