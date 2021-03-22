export type Recipe = {
    id: string;
    title: string;
    description: string;
    image_url: string | null;
    author: {
      user_name: string;
    };
    steps: string[];
    published_at: string;
    ingredients: {
      name: string;
      quantity: string;
    }[];
};
  
export async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch('https://internship-recipe-api.ckpd.co/recipes', {
   headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
  });
  const recipes = await res.json();
  return recipes.recipes;
}

export async function getRecipe(id): Promise<Recipe> {
  const url = 'https://internship-recipe-api.ckpd.co/recipes?id=' + id
  const res = await fetch(url, {
   headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
  });
  const recipe = await res.json();
  console.log(recipe)
  return recipe.recipes[0];
}
