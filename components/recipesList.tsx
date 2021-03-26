import { FC } from 'react';
import { Recipe } from '../pages/api/interface';
import RecipeCard from './card'
import 'tailwindcss/tailwind.css'

type Props = {
    recipes: Recipe[];
}

const recipesList: FC<Props> = (props) => {

  return (
        <div className="text-gray-700 cursor-pointer mb-2 flex flex-wrap content-center justify-center">

        { props.recipes.map((recipe, i) => {
          return <div key={i} className="max-w-md h-md">
                   <RecipeCard recipe={recipe}/>
                 </div>
        })}

      </div>
  );
};

export default recipesList;
