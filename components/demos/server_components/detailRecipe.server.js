import React from 'react'

import { recipes } from '../../../data_server_components/recipes'

const DetailRecipe = ({ selectedId }) => {

  const recipe = recipes[selectedId - 1]

  console.log(recipe)
  console.log("test")

  return (
    <div>
      <p>{recipe.title}</p>
    </div>
  )
}

export default DetailRecipe
