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

export type RecipesResponce = {
  recipes: Recipe[];

  links: {
    next?: string;
    prev?: string;
  };
}

export async function getRecipes(option?): Promise<RecipesResponce> {
  let url = 'https://internship-recipe-api.ckpd.co/recipes'
  if(option){
    url = 'https://internship-recipe-api.ckpd.co/recipes?' + option
  }
  
  const res = await fetch(url, {
   headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
  });
  const responce = await res.json();
  console.log(responce)
  return responce;
}

export async function getRecipe(id: string | string[]): Promise<Recipe> {
  const url = 'https://internship-recipe-api.ckpd.co/recipes?id=' + id
  const res = await fetch(url, {
   headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
  });
  const recipe = await res.json();
  console.log(recipe)
  return recipe.recipes[0];
}

export async function searchRecipes(option): Promise<RecipesResponce> {
  let url = 'https://internship-recipe-api.ckpd.co/search?' + option
  
  const res = await fetch(url, {
   headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
  });
  const responce = await res.json();
  console.log(responce)
  return responce;
}
