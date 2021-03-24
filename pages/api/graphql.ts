import { ApolloServer, gql } from "apollo-server-micro";
import { getRecipe, searchRecipes } from "./getRecipes"

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
    id: ID!
  }

  input SearchRequest {
    option: String!
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
    ingredients: Ingredients
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
        url = 'https://internship-recipe-api.ckpd.co/recipes?' + args.recipesRequest.option
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
      const resRecipe = await getRecipe(args.recipeRequest.id)

      let recipe = resRecipe
      return recipe;
    },
    searchQuery: async (parent, args, context, info) => {
      const resRecipes = await searchRecipes(args.searchRequest.id)

      let recipes = {
        recipes: resRecipes.recipes,
        links: resRecipes.links
      }
      return recipes;
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