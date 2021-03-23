import { FC, useState } from 'react';
import { getRecipes, RecipesResponce} from './api/getRecipes';
import Link from "next/link";
import 'tailwindcss/tailwind.css'
import RecipesList from '../components/recipesList';

type Props = {
  RecipesResponce: RecipesResponce;
}

const Home: FC<Props> = (props) => {

  const { RecipesResponce } = props
  const [searchText, setSearchText] = useState<string>('');

  if (RecipesResponce === null) return <div> Loading </div>

  const searchTextChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
        <div className="App text-gray-700">
          <Link href="/">
            <h1 className="text-center py-2 bg-gray-300 text-3xl">レシピ検索！</h1>
          </Link>

          <div className="p-2">
            <div className="bg-white flex items-center rounded-md border border-gray-200">
              <input className="w-full py-1 px-3 text-gray-700 font-semibold leading-tight focus:outline-none" type="text" name="searchText" value={searchText} onChange={searchTextChange} placeholder="レシピの検索"></input>
              <div className="p-2">
                <Link href={'search/keyword=' + searchText}>
                  <button className="bg-gray-200 text-white rounded-full border border-gray-300 p-2 hover:bg-blue-300 focus:outline-none w-8 h-8 flex items-center justify-center">
                    <img src="/search.png"></img>
                  </button>
                </Link>
              </div>
            </div>
          </div>

        <RecipesList recipes={RecipesResponce.recipes}/>

        <div className="h-24 relative">

          {(() => {
              if(RecipesResponce.links.prev) {
                return <Link href={'/' + RecipesResponce.links.prev.split('?')[1]}>
                  <div className="my-7 mx-3 font-semibold absolute left-0">前のページ</div>
                </Link>
              }
            })()}

          {(() => {
            if(RecipesResponce.links.next) {
              return <Link href={'/' + RecipesResponce.links.next.split('?')[1]}>
                <div className="my-7 mx-3 font-semibold absolute right-0">次のページ</div>
              </Link>
            }
            })()}

        </div>
      </div>
  );
};

export const getStaticProps = async () => {
  const RecipesResponce = await getRecipes();
  return {
    props: {
      RecipesResponce: RecipesResponce
    }
  }
}

export default Home;
