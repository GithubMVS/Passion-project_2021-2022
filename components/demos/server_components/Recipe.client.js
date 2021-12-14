import styles from '../server_components/styles/recipe.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Recipe = (recipe) => {
  return (
    <div className={styles.full_recipe}>
      <p className={styles.full_recipe_text}>{recipe.title}</p>
      <Link href={`/demos/server_components/${recipe.id}`}>sdf</Link>
    </div >
  )
}

export default Recipe
