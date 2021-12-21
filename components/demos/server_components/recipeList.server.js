import React from 'react'

import Image from 'next/image'

// client button import
import Recipe from './Recipe.client'

import { recipes } from '../../../data_server_components/recipes'

const RecipeList = () => {
  return (
    <div className="selectRecipeFull">
      {recipes.map(recipe => (
        <div key={recipe.id} className="selectRecipeFull_color">
          <Recipe {...recipe} />
        </div>
      ))
      }
    </div >
  )
}

export default RecipeList
