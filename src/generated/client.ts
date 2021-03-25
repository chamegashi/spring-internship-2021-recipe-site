import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Query = {
  __typename?: 'Query';
  recipesQuery?: Maybe<RecipesResponce>;
  recipeQuery?: Maybe<Recipe>;
  searchQuery?: Maybe<RecipesResponce>;
  addRecipeQuery?: Maybe<Recipe>;
};


export type QueryRecipesQueryArgs = {
  recipesRequest?: Maybe<RecipesRequest>;
};


export type QueryRecipeQueryArgs = {
  recipeRequest?: Maybe<RecipeRequest>;
};


export type QuerySearchQueryArgs = {
  searchRequest?: Maybe<SearchRequest>;
};


export type QueryAddRecipeQueryArgs = {
  addRecipeRequest?: Maybe<AddRecipeRequest>;
};

export type RecipesRequest = {
  option?: Maybe<Scalars['String']>;
};

export type RecipeRequest = {
  id?: Maybe<Scalars['ID']>;
};

export type SearchRequest = {
  option?: Maybe<Scalars['String']>;
};

export type AddRecipeRequest = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  steps?: Maybe<Array<Maybe<Scalars['String']>>>;
  ingredients?: Maybe<Array<Maybe<InputIngredients>>>;
};

export type InputIngredients = {
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
};

export type RecipesResponce = {
  __typename?: 'RecipesResponce';
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  links?: Maybe<Links>;
};

export type Links = {
  __typename?: 'Links';
  next?: Maybe<Scalars['String']>;
  prev?: Maybe<Scalars['String']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  steps?: Maybe<Array<Maybe<Scalars['String']>>>;
  published_at?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Ingredients>>>;
};

export type Author = {
  __typename?: 'Author';
  user_name?: Maybe<Scalars['String']>;
};

export type Ingredients = {
  __typename?: 'Ingredients';
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}




export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;