import { useEffect, useState } from 'react';
import Link from "next/link";
import { getRecipe, Recipe } from '../api/getRecipes';
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'

function RecipePage() {
    const router = useRouter();

    const [recipe, setRecipe] = useState<Recipe | null>(null);
    
    useEffect(() => {
      (async () => {
        const recipe = await getRecipe(router.query.id);
        setRecipe(recipe);
      })();
    }, []);
  
    if (recipe === null) return <div> Loading </div>
  

    return (
        <div className="text-gray-700">
            <Link href="/">
              <h1 className="text-center py-2 bg-gray-300 text-3xl">レシピ検索！</h1>
            </Link>
            <img src={recipe.image_url} className="width-full"></img>
            <div className="m-2 text-xl font-black">{recipe.title}</div>
            <div className="text-gray-600 text-xs">
                <span className="p-3">{recipe.author.user_name}</span>
                <span className="p-3">{recipe.published_at}</span>
            </div>
            <div className="m-3 text-sm">{recipe.description}</div>

            <div className="mt-2 py-1 pl-4 font-semibold bg-gray-300">材料</div>
            {recipe.ingredients.map((food, i) => {
              return <div key={i} className="relative border-t-2 border-gray-300 h-14">
                  <span className="m-3.5 font-semibold absolute left-0">{food.name}</span>
                  <span className="m-3.5 font-semibold absolute right-0">{food.quantity}</span>
              </div>
            })}

            <div className="mt-2 py-1 pl-4 font-semibold bg-gray-300">手順</div>
            {recipe.steps.map((step, i) => {
              return <div key={i} className="border-t-2 border-gray-300">
                  <p className="p-4 font-semibold">{(i+1) + ". " + step}</p>
              </div>
            })}

        </div>
    )
}

export default RecipePage