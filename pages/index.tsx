import { FC, useEffect, useState } from 'react';
import { getRecipes, Recipe } from './getRecipes';
import Link from "next/link";

const Home: FC = () => {

  const [recipe, setRecipe] = useState<Recipe | null>(null);
    
  useEffect(() => {
    (async () => {
      const recipe = await getRecipes();
      setRecipe(recipe);
    })();
  }, []);

  if (recipe === null) return <div> Loading </div>

  return (
        <div className="App">
          <header className="App-header"></header>
          <h1>Home test!</h1>
    
          <h2>{recipe.id}</h2>
        </div>
  );
};

export default Home;
