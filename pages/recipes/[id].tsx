import { useState, useEffect } from 'react';
import Link from "next/link";
import { GetServerSideProps, NextPage } from 'next';

import { Recipe } from '../api/interface';
import { getRecipeQL } from '../api/graphqlQuery'
import db from '../api/db';
import 'tailwindcss/tailwind.css'

type Props = {
  recipe: Recipe;
}

const RecipePage: NextPage<Props> = (props) => {
    const { recipe } = props;
    const [searchText, setSearchText] = useState<string>('');
    const [favorite, setFavorite] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(null);

    useEffect(() => {
      db.table('recipes')
      .where('id')
      .equals(recipe.id)
      .each((recipe) => {
        setFavorite(true);
      })
      const parseDate = Date.parse(recipe?.published_at)
      const formatDate = new Date(parseDate)
      setDate(formatDate)
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
          image_url: recipe.image_url,
          author: recipe.author
        })
        .catch((e) => console.log(e));
      }

      setFavorite(!favorite)
    }

    return (
        <div className="text-gray-700">
    			<div className="bg-gray-300 py-2 text-center relative">
		    		<Link href={'/'}>
    	        <div className="mx-2 font-semibold text-lg absolute left-0 cursor-pointer">トップページへ</div>
            </Link>
            <Link href="/">
              <span className="text-3xl cursor-pointer font-black">レシピ詳細</span>
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


          <img src={recipe?.image_url} className="width-full p-2 rounded-2xl"></img>
          <div className="m-2 text-xl font-black">{recipe?.title}</div>
          <div className="text-gray-600 text-xs">
              <span className="p-3">{recipe?.author.user_name}</span>
              <span className="p-3">{date?.getFullYear() + "/" + (Number(date?.getMonth()) + 1) + "/" + date?.getDate() + "  " + date?.getHours() + ":" + date?.getMinutes()}</span>
          </div>

            {(() => {
              if(favorite) {
                return <button onClick={favoriteToggle} className="bg-red-500 hover:bg-red-700 text-white font-bold m-2 py-1 px-4 rounded-full">お気に入り削除</button>
              } else {
                return <button onClick={favoriteToggle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-1 px-4 rounded-full">お気に入り追加</button>
              }
            })()}


            <div className="mx-3 mb-3 mt-2 text-sm">{recipe?.description}</div>

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

  const recipe = await getRecipeQL(id);
  return {
    props: {
      recipe: recipe,
    }
  }
}

export default RecipePage