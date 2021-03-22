import { FC, useEffect, useState } from 'react';
import { getRecipes, Recipe } from './getRecipes';
import Link from "next/link";

const Home: FC = () => {

  const [recipes, setRecipe] = useState<Recipe[] | null>(null);
    
  useEffect(() => {
    (async () => {
      const recipes = await getRecipes();
      setRecipe(recipes);
    })();
  }, []);

  if (recipes === null) return <div> Loading </div>

  return (
        <div className="App">
          <header className="App-header"></header>
          <h1>Home test!</h1>

          <ul>
            {recipes.map((recipe) => {
              return <li key={recipe.id}>
                <Link href={'/recipes/' + recipe.id}>{recipe.title}</Link>
              </li>
            })}
          </ul>
    
        </div>
  );
};

export default Home;
