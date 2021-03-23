import { FC, useEffect, useState } from 'react';
import Link from "next/link";
import { Recipe} from './api/getRecipes';

import db from './api/db'
import 'tailwindcss/tailwind.css'
import RecipesList from '../components/recipesList';

const Favorite: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[] | null>(null);

  useEffect(() => {
    db.table('recipes')
        .toArray()
        .then((recipes) => {
            setFavoriteRecipes(recipes);
        })
  }, []);

  if (favoriteRecipes === null) return <div> Loading </div>

  const searchTextChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
        <div className="App text-gray-700">
          <Link href="/">
            <h1 className="text-center py-2 bg-gray-300 text-3xl cursor-pointer">レシピ検索！</h1>
          </Link>

          <div className="p-2">
            <div className="bg-white flex items-center rounded-md border border-gray-200">
              <input className="w-full py-1 px-3 text-gray-700 font-semibold leading-tight focus:outline-none" type="text" name="searchText" value={searchText} onChange={searchTextChange} placeholder="レシピの検索"></input>
              <div className="p-2">
                <Link href={'/search/keyword=' + searchText}>
                  <button className="bg-gray-200 text-white rounded-full border border-gray-300 p-2 hover:bg-blue-300 focus:outline-none w-8 h-8 flex items-center justify-center">
                    <img src="/search.png"></img>
                  </button>
                </Link>
              </div>
            </div>
          </div>

        <RecipesList recipes={favoriteRecipes}/>

      </div>
  );
};

export default Favorite;
