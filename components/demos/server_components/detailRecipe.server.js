import React from 'react'

// npm imports
import moment from 'moment'
import Stars from 'simple-rating-stars';

// data
import { recipes } from '../../../data_server_components/recipes'

const DetailRecipe = ({ selectedId }) => {

  const recipe = recipes[selectedId - 1]

  return (
    <div style={{ height: "100%" }}>
      {
        recipe === undefined
          ?
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
            <p style={{ color: '#16161E', lineHeight: '6.0rem', fontWeight: '900', fontSize: '5rem', fontFamily: 'Inter, Helvetica, sans-serif, Arial', margin: "0", marginBottom: '3rem' }}>Please select a recipe</p>
            <p style={{ color: '#9A9A9A', lineHeight: '4.5rem', fontWeight: '300', fontSize: '2.5rem', fontFamily: 'Inter, Helvetica, sans-serif, Arial', width: '50%', textAlign: 'center' }}>This is the serer components demo, the cool part about this demo is that it works both on the client and the server. And the components are carefully selected to render some parts (most of them actually) on the server and some on the client based on what`s best for the user. </p>
          </div>
          :
          <div style={{ height: '100%', padding: "0rem 20rem 5rem 20rem", display: 'grid', gridTemplateColumns: "1fr 30%", gridColumnGap: "10rem" }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

              <p style={{ textTransform: 'uppercase', color: '#9055FF', padding: "1rem 1.5rem", backgroundColor: 'white', fontWeight: '700', fontSize: '1.5rem', fontFamily: 'Inter, Helvetica, sans-serif, Arial', width: 'max-content', borderRadius: '5rem', marginBottom: '3rem' }}>{recipe.recipeType}</p>
              <h1 style={{ color: '#16161E', lineHeight: '6.0rem', fontWeight: '900', fontSize: '5rem', fontFamily: 'Inter, Helvetica, sans-serif, Arial', width: '50%', marginBottom: '3rem' }}>{recipe.title}</h1>
              <div style={{ paddingBottom: "3rem" }}><Stars stars={4} outOf={5} full={'#ffcd3c'} empty={'#D3D3D3'} stroke={'#D3D3D3'} /></div>
              <p style={{ color: '#9A9A9A', lineHeight: '3rem', fontWeight: '400', fontSize: '2rem', fontFamily: 'Inter, Helvetica, sans-serif, Arial', width: '75%', marginBottom: '3rem' }}>{recipe.recipeText}</p>
              <p style={{ color: "#bababa", fontSize: '1.5rem', fontFamily: 'Inter, Helvetica, sans-serif, Arial' }}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div style={{ backgroundColor: "white", height: "52.5rem", borderRadius: "1.5rem", padding: "3rem", fontFamily: "Inter, Helvetica, sans-serif, Arial" }}>
              <h1 style={{ color: "#9055FF", fontSize: "3.5rem", fontWeight: "700", paddingBottom: "3rem" }}>Ingredients:</h1>
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
