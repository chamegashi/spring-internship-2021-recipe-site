import { RecipesResponce, Recipe } from "./getRecipes";
import { gql } from '@apollo/client';

export async function getRecipesQL(option?): Promise<RecipesResponce> {
  if(!option){
    option = 'notOption'
  }
  const url = 'https://tanaka-mas-spring-internship-2021-recipe-site.vercel.app/api/graphql'
  // const url = 'http://localhost:3000/api/graphql'
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
  return responce.data.recipesQuery;
}

export async function getRecipeQL(id: string | string[]): Promise<Recipe> {
  if(!id){
    id = 'notId'
  }
  const url = 'https://tanaka-mas-spring-internship-2021-recipe-site.vercel.app/api/graphql'
  // const url = 'http://localhost:3000/api/graphql'
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query:
    `
    query {
      recipeQuery(recipeRequest: {id: "` + id + `"}) {
          id
          title
          description
          image_url
          author {
            user_name
          }
          steps
          published_at
          ingredients {
				    name
    				quantity
          }
        }
    }
    `
    })
  });
  const responce = await res.json();
  return responce.data.recipeQuery;
}

export async function searchRecipesQL(option): Promise<RecipesResponce> {
  const url = 'https://tanaka-mas-spring-internship-2021-recipe-site.vercel.app/api/graphql'
  // const url = 'http://localhost:3000/api/graphql'
  
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query:
    `
    query {
      searchQuery(searchRequest: {option: "` + option + `"}) {
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
  return responce.data.searchQuery;
}
