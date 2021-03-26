import { RecipesResponce, Recipe, PutImageUrls } from "./interface";

export async function getRecipesQL(option?): Promise<RecipesResponce> {
  if(!option){
    option = 'notOption'
  }
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL
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
          author {
            user_name
          }
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
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL
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
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL
  
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
          author {
            user_name
          }
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

export async function addRecipesQL(request): Promise<Recipe> {
  let url = 'https://internship-recipe-api.ckpd.co/recipes'

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY, "Content-Type": 'application/json' },
    body: JSON.stringify(request)
  });
  const responce = await res.json();
  return responce;
}

export async function getPresignedUrlQL(): Promise<PutImageUrls> {
  let url = 'https://internship-recipe-api.ckpd.co/image_urls'

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY, "Content-Type": 'application/json' },
  });

  const responce = await res.json();
  return responce;
}

export async function putImageOfRecipe(url: string, file: File){

  const res = await fetch(url, {
    method: 'PUT',
    body: file,
  });

  const responce = await res.json()
  console.log(responce)
  return responce
}
