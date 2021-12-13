import React from 'react'

import Image from 'next/image'

// client button import
import Button from './buttonRecipe.client'

const recipes = [

  {
    id: 1,
    title: 'Chicken with meatballs',
    image: 'test',
    recipeText: 'Step 1: Combine the broth, water, and rice in a large soup pot, and bring to a boil. Reduce heat, and cover. Simmer for 35 to 40 minutes, until rice is tender. Step 2: Saute onions in butter or margarine in a medium saucepan, over low heat. Stir in flour, salt, poultry seasoning, and pepper. Cook, stirring constantly, until mixture is bubbly and thick. Stir in cream. Cook for 6 minutes, or until mixture thickens slightly, stirring constantly. Stir into broth. Step 3: Add cubed chicken and pimientos. Heat through.',
    recipeType: 'Dinner',
    ingredients: [
      {
        "id": 1,
        "quantity": "500g",
        "ingredient": "Meatballs"
      },
      {
        "id": 2,
        "quantity": "1L",
        "ingredient": "Water"
      },
      {
        "id": 3,
        "quantity": "200g",
        "ingredient": "Chicken"
      },
      {
        "id": 4,
        "quantity": "5x",
        "ingredient": "Carrots"
      }
    ],
  },

  {
    id: 2,
    title: 'Good sereal ',
    image: 'test',
    recipeText: 'Step 1: get a bowl, step 2: get your cereal and put it in the bowl, step 3: add the sugar, step 4: mix very long (at least 2 minutes [very important], step 5: add the milk, step 6 enjoy!)',
    recipeType: 'Dinner',
    ingredients: [
      {
        "id": 1,
        "quantity": "1500g",
        "ingredient": "cereal of choice"
      },
      {
        "id": 2,
        "quantity": "1L",
        "ingredient": "Milk"
      },
      {
        "id": 3,
        "quantity": "50g",
        "ingredient": "suggar"
      }
    ],
  }
]

const RecipeList = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '2rem', }}>
      {recipes.map(recipe => (
        <div key={recipe.id} >
          <p>{recipe.title}</p>
          <Button id={recipe.id} />
        </div>
      ))}
    </div >
  )
}

export default RecipeList
