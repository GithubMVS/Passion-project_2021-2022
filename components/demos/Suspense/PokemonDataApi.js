
export const fetchPokemonData = () => {
  const fetchAllPokemons = fetchPokemons();
  return {
    pokemon: wrapPromiseFunction(fetchAllPokemons),
  };
};

const wrapPromiseFunction = (promise) => {
  let status = "pending";
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
      if (status === "pending") {
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
