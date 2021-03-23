import Dexie from 'dexie';

const db = new Dexie('favoriteRecipes');

db.version(1).stores({ recipes: 'id, title, description, image_url', });
export default db;