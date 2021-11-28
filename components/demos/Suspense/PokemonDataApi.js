
export const fetchPokemonData = () => {
  const fetchAllPokemons = fetchPokemons();
  return {
    pokemon: thePromiseFunction(fetchAllPokemons),
  };
};

const thePromiseFunction = (promise) => {
  let status = "hanging";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "hanging") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const fetchPokemons = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/?offset=151&limit=151")
    .then((res) => res.json())
    .then((res) => res)
};
