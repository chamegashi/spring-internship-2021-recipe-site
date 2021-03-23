import { useState, useEffect } from 'react';
import Link from "next/link";
import { getRecipe, Recipe } from '../api/getRecipes';
import { GetServerSideProps, NextPage } from 'next';

import db from '../api/db';
import 'tailwindcss/tailwind.css'

type Props = {
  recipe: Recipe;
}

const RecipePage: NextPage<Props> = (props) => {
    const { recipe } = props;
    const [searchText, setSearchText] = useState<string>('');
    const [favorite, setFavorite] = useState<boolean>(false);
  
    if (recipe === null) return <div> Loading </div>

    useEffect(() => {
      db.table('recipes')
      .where('id')
      .equals(recipe.id)
      .each((recipe) => {
        setFavorite(true);
      })
    }, []);

    const searchTextChange = (event) => {
      setSearchText(event.target.value);
    }

    const favoriteToggle = () => {
      if (favorite) {
        db.table('recipes')
        .delete(recipe.id)
        .catch((e) => console.log(e));
      } else {
        db.table('recipes')
        .put({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          image_url: recipe.image_url
        })
        .catch((e) => console.log(e));
      }

      setFavorite(!favorite)
    }

    return (
        <div className="text-gray-700">
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

            <img src={recipe?.image_url} className="width-full"></img>
            <div className="m-2 text-xl font-black">{recipe?.title}</div>
            <div className="text-gray-600 text-xs">
                <span className="p-3">{recipe?.author.user_name}</span>
                <span className="p-3">{recipe?.published_at}</span>
            </div>

            {(() => {
              if(favorite) {
                return <button onClick={favoriteToggle} className="bg-red-500 hover:bg-red-700 text-white font-bold m-1 py-1 px-4 rounded-full">お気に入り削除</button>
              } else {
                return <button onClick={favoriteToggle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-1 px-4 rounded-full">お気に入り追加</button>
              }
            })()}


            <div className="m-3 text-sm">{recipe?.description}</div>

            <div className="mt-2 py-1 pl-4 font-semibold bg-gray-300">材料</div>
            {recipe?.ingredients.map((food, i) => {
              return <div key={i} className="relative border-t-2 border-gray-300 h-14">
                  <span className="m-3.5 font-semibold absolute left-0">{food.name}</span>
                  <span className="m-3.5 font-semibold absolute right-0">{food.quantity}</span>
              </div>
            })}

            <div className="mt-2 py-1 pl-4 font-semibold bg-gray-300">手順</div>
            {recipe?.steps.map((step, i) => {
              return <div key={i} className="border-t-2 border-gray-300">
                  <p className="p-4 font-semibold">{(i+1) + ". " + step}</p>
              </div>
            })}

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if(Number(id) === 0 || isNaN(Number(id))){
    return {
      notFound: true,
    }
  }

  const recipe = await getRecipe(id);
  return {
    props: {
      recipe: recipe,
    }
  }
}

export default RecipePage