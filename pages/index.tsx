import { FC, useEffect, useState } from 'react';
import { getRecipes, RecipesResponce} from './getRecipes';
import 'tailwindcss/tailwind.css'
import Link from "next/link";

const Home: FC = (props?) => {

  const [RecipesResponce, setRecipe] = useState<RecipesResponce | null>(null);
    
  useEffect(() => {
    (async () => {
      const RecipesResponce = await getRecipes();
      setRecipe(RecipesResponce);
    })();
  }, []);

  if (RecipesResponce === null) return <div> Loading </div>

  return (
        <div className="App text-gray-700">
          <h1 className="text-center py-2 bg-gray-300 text-3xl">レシピ検索！</h1>

          <div className="p-2">
            <div className="bg-white flex items-center rounded-md border border-gray-200">
              <input className="w-full py-1 px-3 text-gray-700 font-semibold leading-tight focus:outline-none" type="text" placeholder="レシピの検索"></input>
              <div className="p-2">
                <button className="bg-gray-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center">
                  <img ></img>
                </button>
              </div>
            </div>
          </div>

          {RecipesResponce.recipes.map((recipe) => {
            return <Link href={'/recipes/' + recipe.id}>
                <div className="border border-b-2 border-bg-300 h-28 flex justify-center">
                  <img src={recipe.image_url} className="w-1/3 h-3/5 mx-2 my-5"></img>
                  <div className="w-2/3">
                    <h1 className="text-center p-1 font-bold text-sm">{recipe.title}</h1>
                    <h1 className="text-center p-1 text-xs">{recipe.description}</h1>
                  </div>
                </div>
              </Link>
          })}

        <div className="h-24">

        </div>
          
        </div>
  );
};

export default Home;
