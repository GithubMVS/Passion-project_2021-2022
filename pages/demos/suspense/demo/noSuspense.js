import styles from '../demo/suspense.module.css'
import { useState, useEffect } from 'react'

const NoSuspense = () => {

  const [pokemonData, setPokemonData] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=99&limit=99")
      .then((res) => res.json())
      .then((res) => setPokemonData(res.results))
  }, [])

  console.log(pokemonData)
  return (
    <div>
    </div>
  )
}

export default NoSuspense
