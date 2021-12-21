// server components imports
import Recipes from '../../../components/demos/server_components/recipeList.server.js'
import RecipeDetails from '../../../components/demos/server_components/detailRecipe.server'

// client components imports
import GoBackButton from '../../../components/demos/server_components/goBackButton.client'

const Demo = () => {
  return (
    <>
      <div className="fullPageLayout">
        <GoBackButton />
        <div>
          <RecipeDetails />
        </div>
        <div className="layoutSelect">
          <div>
            <h1 className="selectRecipe_title">Popular recipes</h1>
          </div>
          <Recipes />
        </div>
      </div>
    </>
  )
}

export default Demo
