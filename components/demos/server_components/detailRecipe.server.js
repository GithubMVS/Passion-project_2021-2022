import React from 'react'

import { recipes } from '../../../data_server_components/recipes'

const DetailRecipe = ({ selectedId }) => {

  const recipe = recipes[selectedId - 1]

  return (
    <div>
      {
        recipe === undefined
          ?
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <p>Please select a meal</p>
          </div>
          :
          <div style={{ height: '100%', padding: "5rem 20rem", display: 'grid', gridTemplateColumns: "1fr 30%", gridColumnGap: "10rem" }}>
            <div>
              <p>{recipe.recipeType}</p>
              <h1>{recipe.title}</h1>
              <p>{recipe.recipeText}</p>
            </div>
            <div style={{ backgroundColor: "white", height: "52.5rem", borderRadius: "1.5rem", padding: "3rem", fontFamily: "Inter, Helvetica, sans-serif, Arial" }}>
              <h1 style={{ color: "#9055FF", fontSize: "2rem", fontWeight: "700", paddingBottom: "3rem" }}>Ingredients</h1>
              <div>
                {recipe.ingredients.map(ingredient => (
                  <div style={{ paddingBottom: "3rem", display: "flex", justifyContent: "space-between", fontSize: "2rem", fontWeight: "500" }} key={ingredient.id}>
                    <p>{ingredient.ingredient}</p>
                    <p>{ingredient.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default DetailRecipe
