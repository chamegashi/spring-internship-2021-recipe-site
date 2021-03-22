import { FC, useEffect, useState } from 'react';
import { getRecipes, Recipe } from './getRecipes';
import 'tailwindcss/tailwind.css'
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
            <h1 className="text-center py-2 bg-gray-300 text-3xl">レシピ検索！</h1>

          <ul>
            {recipes.map((recipe) => {
              return <li className="text-blue-600" key={recipe.id}>
                <Link href={'/recipes/' + recipe.id}>{recipe.title}</Link>
              </li>
            })}
          </ul>
    
        </div>
  );
};

export default Home;
