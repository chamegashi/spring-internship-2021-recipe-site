import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from "next/link";

import { RecipesResponce } from './api/interface';
import { getRecipesQL } from './api/graphqlQuery'
import RecipesList from '../components/recipesList';
import 'tailwindcss/tailwind.css'

const Pagenatoin: FC = () => {
  const router = useRouter();

  const [RecipesResponce, setRecipe] = useState<RecipesResponce | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    (async () => {
      const RecipesResponce = await getRecipesQL(router.query.option);
      setRecipe(RecipesResponce);
    })();
  }, [router.query.option]);

  if (RecipesResponce === null) return <div> Loading </div>

  const searchTextChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
        <div className="App text-gray-700">
          <div className="bg-gray-300 py-2 text-center relative">
            <Link href={'/'}>
              <div className="mx-2 font-semibold text-lg absolute left-0 cursor-pointer">トップページへ</div>
            </Link>
            <Link href="/">
              <span className="text-3xl cursor-pointer font-black">レシピ検索</span>
            </Link>
            <div className="absolute right-12 top-0 my-2 mx-4">
              <Link href="/newRecipe">
                <img className="h-9 cursor-pointer" src="/plus.png"></img>
              </Link>
            </div>
              <div className="absolute right-0 top-0 my-2 mx-4">
              <Link href="/favorite">
                <img className="h-9 cursor-pointer" src="/star.png"></img>
              </Link>
            </div>
          </div>

          <div className="p-2">
            <div className="bg-white flex items-center rounded-md border border-gray-200">
              <input className="w-full py-1 px-3 text-gray-700 font-semibold leading-tight focus:outline-none" type="text" name="searchText" value={searchText} onChange={searchTextChange} placeholder="レシピの検索"></input>
              <div className="p-2">
                <Link href={'/search/keyword=' + searchText}>
                  <button className="bg-gray-200 text-white rounded-full border border-gray-300 p-2 hover:bg-blue-300 focus:outline-none w-8 h-8 flex items-center justify-center">
                    <img src="/search.png"></img>
                  </button>
                </Link>
              </div>
            </div>
          </div>

        <RecipesList recipes={RecipesResponce.recipes}/>

        <div className="h-24 relative border-t-2 border-gray-300">

          {(() => {
              if(RecipesResponce.links?.prev) {
                return <Link href={'/' + RecipesResponce.links.prev.split('?')[1]}>
                  <div className="my-7 mx-3 text-lg font-semibold absolute left-0 cursor-pointer">前のページ</div>
                </Link>
              }
            })()}

          {(() => {
            if(RecipesResponce.links?.next) {
              return <Link href={'/' + RecipesResponce.links.next.split('?')[1]}>
                <div className="my-7 mx-3 text-lg font-semibold absolute right-0 cursor-pointer">次のページ</div>
              </Link>
            }
            })()}

        </div>
      </div>
  );
};

export default Pagenatoin;
