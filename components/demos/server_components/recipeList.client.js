import React from 'react'
import axios from 'https://cdn.skypack.dev/axios';



// client button import
import Button from './buttonRecipe.client'


/* 
const dataFetch = async () => {
  await fetch('https://cdn.contentful.com/spaces/o563rvka7ufh/environments/master/entries?access_token=hhq_6AYzE49LWxXC1h7cVhPgx7u9DC_3GG2YX_gUfKk')
    .then(res => res.json())
    .then(data => RecipeList(data.items))
}
dataFetch();

axios.get('https://cdn.contentful.com/spaces/o563rvka7ufh/environments/master/entries?access_token=hhq_6AYzE49LWxXC1h7cVhPgx7u9DC_3GG2YX_gUfKk')
  .then(res => res.data.items)
  .then(res => RecipeList(res))
*/

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function getArticle() {

  const url = `https://fakestoreapi.com/products`;

  await timeout(3000);
  const response = await fetch(url);
  const data = await response.json();

  return data;
}



/*
const RecipeList = (data) => {

  console.log(data)

  return (
    <div>
      <p>begin</p>
      {
      {recipes.map(recipe => {
        <ul>
          <li>{recipe.fields.title}</li>
        </ul>

      })}

      <p>{recipes.map(test => { console.log(test.fields.title) })}</p>
      {data.length === 0 ? <p>er zit niets in de array</p> :
        <p>er zit iets in de array</p>}

      }

      {data.map(recipe => (
        <div key={recipe.id}>
          <p></p>
        </div>
      ))}

      <p>end</p>
    </div >
  )
}

export default RecipeList
*/