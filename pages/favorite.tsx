import { FC, useEffect, useState } from 'react';
import Link from "next/link";
import { Recipe } from './api/interface';

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

  console.log(favoriteRecipes)

  return (
        <div className="App text-gray-700">
          <div className="bg-gray-300 py-2 text-center relative">
            <Link href={'/'}>
              <div className="mx-2 font-semibold text-lg absolute left-0 cursor-pointer">トップページへ</div>
            </Link>
            <Link href="/">
              <span className="text-3xl cursor-pointer font-black">レシピ検索</span>
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
