import { promises } from "node:fs";

export type Recipe = {
    id: string;
    title: string;
    description: string;
    image_url: string | null;
    author: {
      user_name: string;
    };
    steps: string[];
    ingredients: {
      name: string;
      quantity: string;
    }[];
};
  
export async function getRecipes(): Promise<Recipe> {
  const res = await fetch('https://internship-recipe-api.ckpd.co/recipes', {
   headers: { 'X-Api-Key': 'test' }
  });
  const recipes = await res.json();
  return recipes.recipes;
}

export async function getRecipe(): Promise<Recipe> {
  const res = await fetch('https://internship-recipe-api.ckpd.co/recipes', {
   headers: { 'X-Api-Key': 'test' }
  });
  const recipes = await res.json();
  return recipes.recipes;
}
