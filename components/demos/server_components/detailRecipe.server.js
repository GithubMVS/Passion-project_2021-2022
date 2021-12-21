import React from 'react'

// npm imports
import moment from 'moment'
import Stars from 'simple-rating-stars';

// data
import { recipes } from '../../../data_server_components/recipes'

const DetailRecipe = ({ selectedId }) => {

  const recipe = recipes[selectedId - 1]

  return (
    <div className="full">
      {
        recipe === undefined
          ?
          <div className="detailRecipeWhatIf_full">
            <p className="selectRecipe_title">Please select a recipe</p>
            <p className="selectRecipe_text">This is the server components demo, the cool part about this demo is that it works both on the client and the server. And the components are carefully selected to render some parts (most of them actually) on the server and some on the client based on what`s best for the user. </p>
          </div>
          :
          <div className="detailRecipe">
            <div className="recipeStepsFull">

              <p className="recipeSteps_type">{recipe.recipeType}</p>
              <h1 className="recipeSteps_title">{recipe.title}</h1>
              <div className="recipeSteps_stars"><Stars stars={4} outOf={5} full={'#ffcd3c'} empty={'#D3D3D3'} stroke={'#D3D3D3'} /></div>
              <p className="recipeSteps_text">{recipe.recipeText}</p>
              <p className="recipeSteps_date">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div className="ingredients_full">
              <h1 className="ingredients_title">Ingredients:</h1>
              <div>
                {recipe.ingredients.map(ingredient => (
                  <div className="ingredients" key={ingredient.id}>
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
