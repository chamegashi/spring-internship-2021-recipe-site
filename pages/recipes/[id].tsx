import { FC, useState } from 'react';
import Link from "next/link";
import { getRecipe, Recipe } from '../api/getRecipes';
import { GetServerSideProps, NextPage } from 'next';
import 'tailwindcss/tailwind.css'

type Props = {
  recipe: Recipe;
}

const RecipePage: NextPage<Props> = (props) => {
    const { recipe } = props;
    const [searchText, setSearchText] = useState<string>('');
  
    if (recipe === null) return <div> Loading </div>
  
    const searchTextChange = (event) => {
      setSearchText(event.target.value);
    }

    return (
        <div className="text-gray-700">
            <Link href="/">
              <h1 className="text-center py-2 bg-gray-300 text-3xl">レシピ検索！</h1>
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