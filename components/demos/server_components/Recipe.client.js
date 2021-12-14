import Link from 'next/link'

const Recipe = (recipe) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
      <p style={{ fontSize: "2rem", fontWeight: "700", fontFamily: "Neue Montreal, Helvetica, sans-serif, Arial", lineHeight: "2.42rem" }}>{recipe.title}</p>
      <Link href={`/demos/server_components/${recipe.id}`}><a style={{ width: "revert", padding: "2rem", borderRadius: ".5rem", backgroundColor: "#9055FF", color: "white", border: "none", fontSize: "2rem", fontWeight: "700", fontFamily: "Neue Montreal, Helvetica, sans-serif, Arial", marginTop: "3rem", textDecoration: "none", display: "flex", justifyContent: "center" }} >See Recipe</a></Link>
    </div >
  )
}

export default Recipe
