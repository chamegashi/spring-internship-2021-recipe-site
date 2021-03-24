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
