import { FC } from 'react';
import { Recipe } from '../pages/api/getRecipes';
import Link from "next/link";
import 'tailwindcss/tailwind.css'

type Props = {
    recipes: Recipe[];
}

const recipesList: FC<Props> = (props) => {

  return (
        <div className="App text-gray-700">

          {props.recipes.map((recipe, i) => {
            return <Link key={i} href={'/recipes/' + recipe.id}>
                <div className="border border-b-2 border-bg-300 h-28 flex justify-center">
                  <img src={recipe.image_url} className="w-1/3 h-3/5 mx-2 my-5"></img>
                  <div className="w-2/3">
                    <h1 className="text-center p-1 font-bold text-sm">{recipe.title}</h1>
                    <h1 className="text-center p-1 text-xs">{recipe.description}</h1>
                  </div>
                </div>
              </Link>
          })}
      </div>
  );
};

export default recipesList;
