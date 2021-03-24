import { ApolloServer, gql } from "apollo-server-micro";
import { searchRecipes } from "./getRecipes"

const typeDefs = gql`
  type Query {
    recipesQuery(recipesRequest: RecipesRequest): RecipesResponce
    recipeQuery(recipeRequest: RecipeRequest): Recipe
    searchQuery(searchRequest: SearchRequest): RecipesResponce
  }

  input RecipesRequest {
    option: String
  }

  input RecipeRequest {
    id: ID
  }

  input SearchRequest {
    option: String
  }

  type RecipesResponce {
    recipes: [Recipe]
    links: Links
  }

  type Links {
    next: String
    prev: String
  }

  type Recipe {
    id: ID!
    title: String!
    description: String!
    image_url: String
    author: Author
    steps: [String]
    published_at: String
    ingredients: [Ingredients]
  }

  type Author {
    user_name: String
  }

  type Ingredients {
    name: String
    quantity: String
  }

`;

const resolvers = {
  Query: {
    recipesQuery: async (parent, args, context, info) => {
      let url = 'https://internship-recipe-api.ckpd.co/recipes'

      if(args.recipesRequest.option){
        url = 'https://internship-recipe-api.ckpd.co/recipes?' + encodeURI(args.recipesRequest.option)
      }
          
      const res = await fetch(url, {
        headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
      });
      const responce = await res.json();

      let recipes = {
        recipes: responce.recipes,
        links: responce.links
      }
      return recipes;
    },

    recipeQuery: async (parent, args, context, info) => {
      let url = 'https://internship-recipe-api.ckpd.co/recipes?id='

      if(args.recipeRequest.id){
        url = 'https://internship-recipe-api.ckpd.co/recipes?id=' + args.recipeRequest.id
      }

      const res = await fetch(url, {
        headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
      });
      const responce = await res.json()
      return responce.recipes[0];    
    },

    searchQuery: async (parent, args, context, info) => {
      console.log(args.searchRequest.option)

      let url = 'https://internship-recipe-api.ckpd.co/search?' + encodeURI(args.searchRequest.option)

      console.log(args.searchRequest.option)

      const res = await fetch(url, {
        headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
      });

      const responce = await res.json();
      console.log(responce)
      return responce;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql"
});