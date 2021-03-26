import { FC, useEffect, useState } from 'react';
import Link from "next/link";
import { Recipe } from '../api/interface';

import db from '../api/db'
import 'tailwindcss/tailwind.css'
import RecipesList from '../../components/recipesList';

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

  console.log(favoriteRecipes)

  return (
        <div className="App text-gray-700">
          <div className="bg-gray-300 py-2 text-center relative">
            <Link href={'/'}>
              <div className="mx-2 font-semibold text-lg absolute left-0 cursor-pointer">トップページへ</div>
            </Link>
            <Link href="/">
              <span className="text-3xl cursor-pointer font-black">お気に入り</span>
            </Link>
            <div className="absolute right-12 top-0 my-2 mx-4">
              <Link href="/newRecipe">
                <img className="h-9 cursor-pointer" src="/plus.png"></img>
              </Link>
            </div>
            <div className="absolute right-0 top-0 my-2 mx-4">
              <Link href="/favorite">
                <img className="h-9 cursor-pointer" src="/star.png"></img>
              </Link>
            </div>
          </div>

          <div className="p-2">
            <div className="bg-white flex items-center rounded-md border border-gray-200">
              <input className="w-full py-1 px-3 text-gray-700 font-semibold leading-tight focus:outline-none" type="text" name="searchText" value={searchText} onChange={searchTextChange} placeholder="お気に入りレシピの検索"></input>
              <div className="p-2">
                <Link href={'/favorite/keyword=' + searchText}>
                  <button className="bg-gray-200 text-white rounded-full border border-gray-300 p-2 hover:bg-blue-300 focus:outline-none w-8 h-8 flex items-center justify-center">
                    <img src="/search.png"></img>
                  </button>
                </Link>
              </div>
            </div>
          </div>


          {(() => {
            if(favoriteRecipes.length === 0) {
              return <div className="text-center font-semibold ">まだお気に入りにしたレシピがありません。</div>
            } else {
              return <RecipesList recipes={favoriteRecipes}/>
            }
            })()}

      </div>
  );
};

export default Favorite;
