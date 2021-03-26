import { FC } from 'react';
import { Recipe } from '../pages/api/interface';
import Link from "next/link";
import 'tailwindcss/tailwind.css';
import { Img } from 'react-image';

type Props = {
    recipe: Recipe;
}

const UnLoad = () => <img src="/no_image.jpg"></img>

const recipeCard: FC<Props> = (props) => {

  return (
    <Link href={'/recipes/' + props.recipe.id}>
      <div className="p-2">
        <Img src={props.recipe.image_url ? props.recipe.image_url : "/no_image.jpg"} className="object-cover object-center rounded-lg shadow-md" unloader={<UnLoad/>}/>
        <div className="relative px-4 -mt-14">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                {props.recipe.author.user_name}
              </span>
            </div>
            
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.recipe.title}</h4>
        
            <div className="mt-1 text-gray-600 text-sm">
              {props.recipe.description}
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default recipeCard;
