import { Suspense } from 'react'

// importing axios via the new url imports
import axios from 'https://cdn.skypack.dev/axios';

import { fetchPokemonData } from "../../../components/demos/Suspense/PokemonDataApi"
const resource = fetchPokemonData();
console.log(resource)


const Demo = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading pokemon</h1>}>
        <PokemonFetch />
      </Suspense>
    </div>
  )
};



const PokemonFetch = () => {
  const fetchPokemons = resource.pokemon.read();
  const allPokemons = fetchPokemons.results
  console.log(allPokemons)
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {allPokemons.map(person =>
        <li key={person.id}>{person.name}</li>)}
    </div>
  );
};

export default Demo
