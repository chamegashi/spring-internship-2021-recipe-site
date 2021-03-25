import { FC, useState } from 'react';
import Link from "next/link";

import { Ingredients } from './api/interface';
import 'tailwindcss/tailwind.css'

const Home: FC = () => {

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [ingredients, setIngredients] = useState<Ingredients[]>([]);
  const [steps, setSteps] = useState<string[]>([]);

  const changeTitle = (event) => {
    setTitle(event.target.value)
  }

  const changeAuthor = (event) => {
    setAuthor(event.target.value)
  }

  const changedescription = (event) => {
    setDescription(event.target.value)
  }

  const addIngredients = () => {
    const addIngredients:Ingredients = {name: '', quantity: ''};
    let newIngredients = [...ingredients, addIngredients]
    setIngredients(newIngredients);
  }

  const changeIngredientsNameText = (event) => {
    let newIngredients = ingredients.slice()
    newIngredients[Number(event.target.name)].name = event.target.value
    setIngredients(newIngredients);
  }

  const changeIngredientsQuantityText = (event) => {
    let newIngredients = ingredients.slice()
    newIngredients[Number(event.target.name)].quantity = event.target.value
    setIngredients(newIngredients);
  }

  const deleteIngredients = (event) => {
    let newIngredients = ingredients.slice()
    newIngredients = newIngredients.filter((v, index) => Number(event.target.name) !== index)
    setIngredients(newIngredients);
  }

  const addStep = () => {
    let newSteps = [...steps, '']
    setSteps(newSteps);
  }

  const changeStepText = (event) => {
      let newSteps = steps.slice();
      newSteps[Number(event.target.name)] = event.target.value
      setSteps(newSteps)
  }

  const deleteStep = (event) => {
    let newSteps = steps.slice();
    newSteps = newSteps.filter((v, index) => Number(event.target.name) !== index)
    setSteps(newSteps);
  }


  return (
        <div className="App text-gray-700">
          <div className="bg-gray-300 py-2 text-center relative">
            <Link href="/">
              <span className="text-3xl cursor-pointer">レシピ追加！</span>
            </Link>
            <div className="absolute right-0 top-0 my-2 mx-4">
              <Link href="/favorite">
                <img className="h-9 cursor-pointer" src="/star.png"></img>
              </Link>
            </div>
          </div>


            {/* <img src={recipe?.image_url} className="width-full"></img> */}
            <label className="block m-1">
              <span className="m-2 text-xl font-black">料理タイトル</span>
              <input className="m-3 p-2 block border rounded-xl border-gray-300 w-3/4" placeholder="料理タイトル" value={title} onChange={changeTitle}></input>
            </label>
            <label className="block m-1">
              <span className="m-2 text-xl font-black">投稿者名</span>
              <input className="m-3 p-2 block border rounded-xl border-gray-300 w-3/4" placeholder="投稿者名" value={author} onChange={changeAuthor}></input>
            </label>
            <label className="block m-1">
              <span className="m-2 text-xl font-black">詳細説明</span>
              <textarea className="m-3 p-2 block border rounded-xl border-gray-300 w-3/4" placeholder="詳細説明" value={description}  onChange={changedescription}></textarea>
            </label>

            <div className="mt-2 py-1 pl-4 font-semibold bg-gray-300">材料</div>
            {ingredients.map((food, i) => {
              return <div key={i} className="p-1 border-t-2 border-gray-300 flex justiry-center">
                  <input className="m-2 p-1 border rounded-xl border-gray-300 w-5/12" placeholder="材料" name={i.toString()} value={food.name} onChange={changeIngredientsNameText}></input>
                  <div className="w-1/12"></div>
                  <input className="m-2 p-1 border rounded-xl border-gray-300 w-5/12" placeholder="分量" name={i.toString()} value={food.quantity} onChange={changeIngredientsQuantityText}></input>
                  <button onClick={deleteIngredients} name={i.toString()} className="text-center w-1/12 bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white m-2 p-2 border border-gray-500 hover:border-transparent font-black rounded">-</button>
              </div>
            })}
            <button onClick={addIngredients} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white mt-2 py-2 border border-gray-500 hover:border-transparent w-full rounded">
                追加する
            </button>

            <div className="mt-2 py-1 pl-4 font-semibold bg-gray-300">手順</div>
            {steps.map((step, i) => {
              return <div key={i} className="border-t-2 border-gray-300 flex justify-center">
                  <div className="text-center w-1/12 font-semibold p-4">{(i+1 + ".")}</div>
                  <textarea className="w-4/5 my-1 p-2 block border rounded-xl border-gray-300" placeholder="手順" name={i.toString()} value={step} onChange={changeStepText}></textarea>
                  <button onClick={deleteStep} name={i.toString()} className="text-center w-1/12 bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white m-2 p-2 border border-gray-500 hover:border-transparent font-black rounded">-</button>
              </div>
            })}
            <button onClick={addStep} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white mt-2 py-2 border border-gray-500 hover:border-transparent w-full rounded">
                追加する
            </button>


            <div className="m-8"></div>

        </div>
  );
};

export const getStaticProps = async () => {
  let url = 'https://internship-recipe-api.ckpd.co/recipes'
  
  const res = await fetch(url, {
    headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY }
  });
  const responce = await res.json();

  return {
    props: {
      RecipesResponce: responce
    }
  }
}

export default Home;
