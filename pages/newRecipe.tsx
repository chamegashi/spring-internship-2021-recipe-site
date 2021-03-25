import { FC, useState } from 'react';
import Link from "next/link";

import { Ingredients, Validations } from './api/interface';
import 'tailwindcss/tailwind.css'

const Home: FC = () => {

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [ingredients, setIngredients] = useState<Ingredients[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [validations, setvalidations] = useState<Validations>({
		title: false,
		author: false,
		description: false,
		ingredients: false,
		steps: false,
		error: false,
	});

  const addIngredients = () => {
    const addIngredients:Ingredients = {name: '', quantity: ''};
    let newIngredients = [...ingredients, addIngredients]
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

  const deleteStep = (event) => {
    let newSteps = steps.slice();
    newSteps = newSteps.filter((v, index) => Number(event.target.name) !== index)
    setSteps(newSteps);
  }

	const sendRecipe = (event) => {
		let validation: Validations = initValidation()
		if ( !title || !author || !description || ingredients.length === 0 || steps.length === 0) {
			if ( !title ) validation.title = true
			if ( !author ) validation.author = true
			if ( !description ) validation.description = true
			if ( ingredients.length === 0 ) validation.ingredients = true
			if ( steps.length === 0 ) validation.steps = true

			validation.error = true
			setvalidations(validation)
			console.log("input error")
			return
		}

		validation = initValidation()

		setvalidations(validation)
		console.log("done")
	}

	const initValidation = () => {
		return {
			title: false,
			author: false,
			description: false,
			ingredients: false,
			steps: false,
			error: false,
		}
	}

  const changeText = (event) => {
		switch (event.target.id) {
          case 'title':
            setTitle(event.target.value)
						break
          case 'author':
						setAuthor(event.target.value)
						break
					case 'description':
						setDescription(event.target.value)
						break
					case 'ingredientsName':
						let newIngredientsOfName = ingredients.slice()
						newIngredientsOfName[Number(event.target.name)].name = event.target.value
						setIngredients(newIngredientsOfName);
						break
					case 'ingredientsQuantity':
						let newIngredientsOfQuan = ingredients.slice()
						newIngredientsOfQuan[Number(event.target.name)].quantity = event.target.value
						setIngredients(newIngredientsOfQuan);
						break
					case 'step':
						let newSteps = steps.slice();
						newSteps[Number(event.target.name)] = event.target.value
						setSteps(newSteps)			
			}
  }

  return (
        <div className="App text-gray-700">
          <div className="bg-gray-300 py-2 text-center relative">
            <Link href="/">
              <span className="text-3xl cursor-pointer">レシピ追加！</span>
            </Link>
          </div>

            {/* <img src={recipe?.image_url} className="width-full"></img> */}

						{/* title */}

            <label className="block m-1">
              <span className="m-2 text-xl font-black">料理タイトル</span>
							<input id="title" onChange={changeText} value={title} 
								className={validations.title?
								"m-3 p-2 block border-4 rounded-xl border-red-400 w-3/4" 
								:
								"m-3 p-2 block border rounded-xl border-gray-300 w-3/4"
								} placeholder="料理タイトル"></input>
            </label>

						{/* author */}

            <label className="block m-1">
              <span className="m-2 text-xl font-black">投稿者名</span>
							<input id="author" onChange={changeText} value={author} 
								className={validations.author?
								"m-3 p-2 block border-4 rounded-xl border-red-400 w-3/4" 
								:
								"m-3 p-2 block border rounded-xl border-gray-300 w-3/4"
								} placeholder="投稿者名"></input>
            </label>

						{/* description */}

            <label className="block m-1">
              <span className="m-2 text-xl font-black">詳細説明</span>
							<textarea id="description" onChange={changeText} value={description} 
								className={validations.description?
								"m-3 p-2 block border-4 rounded-xl border-red-400 w-3/4" 
								:
								"m-3 p-2 block border rounded-xl border-gray-300 w-3/4"
								} placeholder="詳細説明"></textarea>
            </label>

						{/* ingredients */}

            <div className="mt-2 py-1 pl-4 font-semibold bg-gray-300">材料</div>
            {ingredients.map((food, i) => {
              return <div key={i} className="p-1 border-t-2 border-gray-300 flex justiry-center">
                  <input id="ingredientsName" onChange={changeText} value={food.name} name={i.toString()} className="m-2 p-1 border rounded-xl border-gray-300 w-5/12" placeholder="材料"></input>
                  <div className="w-1/12"></div>
                  <input id="ingredientsQuantity" onChange={changeText} value={food.quantity} name={i.toString()} className="m-2 p-1 border rounded-xl border-gray-300 w-5/12" placeholder="分量"></input>
                  <button onClick={deleteIngredients} name={i.toString()} className="text-center w-1/12 bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white m-2 p-2 border border-gray-500 hover:border-transparent font-black rounded">-</button>
              </div>
            })}
            <button onClick={addIngredients}
						className={validations.ingredients?
						"bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white mt-2 py-2 border-4 border-red-400 hover:border-transparent w-full rounded"
						:
						"bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white mt-2 py-2 border border-gray-500 hover:border-transparent w-full rounded"
						}>
                追加する
            </button>

						{/* steps */}

            <div className="mt-2 py-1 pl-4 font-semibold bg-gray-300">手順</div>
            {steps.map((step, i) => {
              return <div key={i} className="border-t-2 border-gray-300 flex justify-center">
                  <div className="text-center w-1/12 font-semibold p-4">{(i+1 + ".")}</div>
                  <textarea id="step" onChange={changeText} value={step} name={i.toString()} className="w-4/5 my-1 p-2 block border rounded-xl border-gray-300" placeholder="手順"></textarea>
                  <button onClick={deleteStep} name={i.toString()} className="text-center w-1/12 bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white m-2 p-2 border border-gray-500 hover:border-transparent font-black rounded">-</button>
              </div>
            })}
            <button onClick={addStep}
						className={validations.steps?
						"bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white mt-2 py-2 border-4 border-red-400 hover:border-transparent w-full rounded"
						:
						"bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white mt-2 py-2 border border-gray-500 hover:border-transparent w-full rounded"
						}>
                追加する
            </button>

            <div className="m-8">
							{(() => {
  	          if(validations.error) {
    	          return <span className="text-red-500 font-black">赤い枠は必須項目です！</span>
      	      }
        	    })()}

    	        <button onClick={sendRecipe} className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white mt-2 py-2 border border-yellow-500 hover:border-transparent w-full rounded">
  	              レシピを追加する
	            </button>
						</div>
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
