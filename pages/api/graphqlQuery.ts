import { RecipesResponce, Recipe } from "./getRecipes";
import { gql } from '@apollo/client';

const url = 'http://localhost:3000/api/graphql'

const GET_RECIPES = gql`
query {
  recipes {
    recipes {
      id
      title
      description
      image_url
    }
  }
}
`

function makeSearchQuery(id) {
  const SEARCH_RECIPES = gql`
  query {
    recipe(recipeRequest: {id}) {
      id
      title
    }
  }
  `
}

export async function getRecipesQL(option?): Promise<RecipesResponce> {
  if(!option){
    option = 'notOption'
  }
  const url = 'http://localhost:3000/api/graphql'
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query:
    `
    query {
      recipesQuery(recipesRequest: {option: "` + option +`"}) {
        recipes {
          id
          title
          description
          image_url
        }
        links {
          next
          prev
        }
      }
    }
    `
    })
  });
  const responce = await res.json();
  console.log(responce.data.recipesQuery)
  return responce.data.recipesQuery;
}

export async function getRecipeQL(id: string | string[]): Promise<Recipe> {
  const url = 'https://internship-recipe-api.ckpd.co/recipes?id=' + id
  const res = await fetch(url, {
    headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
  });
  const recipe = await res.json();
  console.log(recipe)
  return recipe.recipes[0];
}

export async function searchRecipesQL(option): Promise<RecipesResponce> {
  let url = 'https://internship-recipe-api.ckpd.co/search?' + option
  
  const res = await fetch(url, {
    headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
  });
  const responce = await res.json();
  console.log(responce)
  return responce;
}
