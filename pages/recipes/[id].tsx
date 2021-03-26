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
    			<div className="bg-gray-300 py-2 text-center relative">
		    		<Link href={'/'}>
    	        <div className="mx-2 font-semibold text-lg absolute left-0 cursor-pointer">トップページへ</div>
            </Link>
            <Link href="/">
              <span className="text-3xl cursor-pointer font-black">レシピ追加</span>
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

  const recipe = await getRecipeQL(id);
  return {
    props: {
      recipe: recipe,
    }
  }
}

export default RecipePage