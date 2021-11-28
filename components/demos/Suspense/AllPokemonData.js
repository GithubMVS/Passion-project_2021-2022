import React from 'react'
import styles from '../Suspense/allPokemonData.module.css'

import { fetchPokemonData } from "../../../components/demos/Suspense/PokemonDataApi"
const resource = fetchPokemonData();
console.log(resource)

const AllPokemonData = () => {
  const fetchPokemons = resource.pokemon.read();
  const allPokemons = fetchPokemons.results
  return (
    <div>
      {allPokemons.map(person =>
        <li key={person.id}>{person.name}</li>)}
    </div>
  );
}

export default AllPokemonData
