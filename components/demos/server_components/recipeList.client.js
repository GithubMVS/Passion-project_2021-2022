import React from 'react'
import axios from 'https://cdn.skypack.dev/axios';

// client button import
import Button from './buttonRecipe.client'



const dataFetch = async () => {
  await fetch('https://cdn.contentful.com/spaces/o563rvka7ufh/environments/master/entries?access_token=hhq_6AYzE49LWxXC1h7cVhPgx7u9DC_3GG2YX_gUfKk')
    .then(res => res.json())
    .then(data => RecipeList(data.items))
}
dataFetch();
/* 
axios.get('https://cdn.contentful.com/spaces/o563rvka7ufh/environments/master/entries?access_token=hhq_6AYzE49LWxXC1h7cVhPgx7u9DC_3GG2YX_gUfKk')
  .then(res => res.data.items)
  .then(res => RecipeList(res))
*/



const RecipeList = (data) => {

  /* 
    console.log(data)
  
    let recipes = []
    console.log(Array.isArray(data))
    if (data.length >= 0) {
      recipes = data;
    }
  
    console.log(recipes)
 
    */
  return (
    <div>
      <p>begin</p>
      {/* 
      {recipes.map(recipe => {
        <ul>
          <li>{recipe.fields.title}</li>
        </ul>

      })}

      <p>{recipes.map(test => { console.log(test.fields.title) })}</p>
      {data.length === 0 ? <p>er zit niets in de array</p> :
        <p>er zit iets in de array</p>}
        */
      }

      <p>end</p>
    </div >
  )
}

export default RecipeList
