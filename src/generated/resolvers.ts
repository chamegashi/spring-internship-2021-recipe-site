import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  RecipesRequest: RecipesRequest;
  String: ResolverTypeWrapper<Scalars['String']>;
  RecipeRequest: RecipeRequest;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  SearchRequest: SearchRequest;
  AddRecipeRequest: AddRecipeRequest;
  InputIngredients: InputIngredients;
  RecipesResponce: ResolverTypeWrapper<RecipesResponce>;
  Links: ResolverTypeWrapper<Links>;
  Recipe: ResolverTypeWrapper<Recipe>;
  Author: ResolverTypeWrapper<Author>;
  Ingredients: ResolverTypeWrapper<Ingredients>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  RecipesRequest: RecipesRequest;
  String: Scalars['String'];
  RecipeRequest: RecipeRequest;
  ID: Scalars['ID'];
  SearchRequest: SearchRequest;
  AddRecipeRequest: AddRecipeRequest;
  InputIngredients: InputIngredients;
  RecipesResponce: RecipesResponce;
  Links: Links;
  Recipe: Recipe;
  Author: Author;
  Ingredients: Ingredients;
  Upload: Scalars['Upload'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  recipesQuery?: Resolver<Maybe<ResolversTypes['RecipesResponce']>, ParentType, ContextType, RequireFields<QueryRecipesQueryArgs, never>>;
  recipeQuery?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<QueryRecipeQueryArgs, never>>;
  searchQuery?: Resolver<Maybe<ResolversTypes['RecipesResponce']>, ParentType, ContextType, RequireFields<QuerySearchQueryArgs, never>>;
  addRecipeQuery?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<QueryAddRecipeQueryArgs, never>>;
};

export type RecipesResponceResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipesResponce'] = ResolversParentTypes['RecipesResponce']> = {
  recipes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['Links']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Links'] = ResolversParentTypes['Links']> = {
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  steps?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ingredients?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ingredients']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  user_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IngredientsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ingredients'] = ResolversParentTypes['Ingredients']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  RecipesResponce?: RecipesResponceResolvers<ContextType>;
  Links?: LinksResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Ingredients?: IngredientsResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;