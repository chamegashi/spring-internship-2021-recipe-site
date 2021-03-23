import db from './db';

export type favoriteRecipe = {
    id: string,
}

export type favoriteRecipes = [favoriteRecipe]

export function getFavoriteRecipes(): favoriteRecipes {
    db.table('recipes')
        .toArray()
        .then((recipe) => {
            console.log(recipe)
            return recipe
        })
    return 
}

export async function findFavoriteRecipe(recipeId: string) {
    await db.table('recipes')
        .where('id')
        .equals(recipeId)
        .each((getrecipe) => {
            console.log(getrecipe)
            return getrecipe
    })
}

export function addFavoriteRecipe(recipeId: string) {
    db.table('recipes')
        .put({id: recipeId})
        .catch((e) => console.log(e));

        getFavoriteRecipes()
}

export function deleteFavoriteRecipe(recipeId: string) {
    db.table('recipes')
        .delete(recipeId)
        .catch((e) => console.log(e));
    
    getFavoriteRecipes()
}
