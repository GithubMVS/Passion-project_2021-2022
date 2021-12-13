import { IdContext } from "./IdContext.client"

const ButtonRecipe = (idRecipe) => {
  console.log(idRecipe)
  return (
    <>
      <IdContext.Provider value="idValue">
        <button>See this recipe</button>
      </IdContext.Provider>
    </>
  )
}

export default ButtonRecipe
