import React from 'react'

import { recipes } from '../../../data_server_components/recipes'

const DetailRecipe = ({ selectedId }) => {

  const recipe = recipes[selectedId - 1]
  console.log(recipe)

  return (
    <div>

      {recipe === undefined ? <div><p>Please add something</p></div> : <div><p>{recipe.title}</p></div>}
    </div>
  )
}

export default DetailRecipe
