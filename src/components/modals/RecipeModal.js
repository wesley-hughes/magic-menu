import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RecipeModal = ({ visible, recipe, onClose }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(recipe?.extendedIngredients);
  }, [recipe]);

  const isVegetarian = () => {
    if(recipe.vegetarian){
      return <img className="h-[80px] mt-2 animate-bounce" src="./images/yes.png" alt="witch"></img>
    }
    else{return <img className="h-[80px] mt-2 " src="./images/no.png" alt="witch"></img>}
  }
  const isVegan = () => {
    if(recipe.vegan){
      return <img className="h-[80px] mt-2 animate-bounce" src="./images/yes.png" alt="witch"></img>
    }
    else{return <img className="h-[80px] mt-2 " src="./images/no.png" alt="witch"></img>}
  }
  const isGF = () => {
    if(recipe.glutenFree){
      return <img className="h-[80px] mt-2 animate-bounce" src="./images/yes.png" alt="witch"></img>
    }
    else{return <img className="h-[80px] mt-2 " src="./images/no.png" alt="witch"></img>}
  }
  const isDF = () => {
    if(recipe.dairyFree){
      return <img className="h-[80px] mt-2 animate-bounce" src="./images/yes.png" alt="witch"></img>
    }
    else{return <img className="h-[80px] mt-2 " src="./images/no.png" alt="witch"></img>}
  }

  if (!visible) return null;
  return (
    <div key={recipe.id} className="fixed inset-y-[80px] sm:inset-y-[160px] sm:mt-10 border border-purple-900 rounded-xl shadow-md drop-shadow-md p-1 bg-gray-50  backdrop-blur-sm overflow-y-auto scroll-smooth">
      <Link
        onClick={onClose}
      >
        <img className="h-8 m-2 hover:animate-spin" src="./images/close.png" alt="close x"></img>
      </Link>
      <div className="flex flex-wrap justify-around items-center ">
        
          <img
            className="border-4 md:w-[25%] sm:w-full mx-2 border-slate-200 shadow-md rounded-xl"
            src={recipe?.image}
           alt="food"></img>
        
        <div className="mx-2 lg:w-[30%] sm:w-auto">
          <p className="text-purple-800 font-bold leading-tight tracking-tight drop-shadow-xl text-3xl">{recipe?.title}</p>
          <div className="text-purple-500 drop-shadow-xl my-2 font-semibold text-xl">
            <img className="h-9 inline" src="./images/hourglass.png" alt="clock"></img>
            <div className="inline leading-tight tracking-tight">Prep Time: {recipe?.readyInMinutes} minutes</div></div>
          <div className="flex flex-row mx-2 my-2">
            <div className="text-purple-700 drop-shadow-md">{isVegetarian()}Vegetarian </div>
            <div className="text-purple-700 drop-shadow-md">{isVegan()}Vegan </div>
            <div className="text-purple-700 drop-shadow-md">{isGF()}Gluten Free </div>
            <div className="text-purple-700 drop-shadow-md">{isDF()}Dairy Free </div>
          </div>
        </div>

        <article className="">
          <h1 className="text-purple-800 font-bold leading-tight tracking-tight text-lg">Ingredients:</h1>

          <div className="">
            {ingredients?.map((ingredient) => {
              return <div key={ingredient.original} className="leading-tight tracking-tight text-sm text-purple-800">{ingredient.original}</div>;
            })}
          </div></article>
          <div className="">
          <h1 className="text-purple-800 font-bold leading-tight tracking-tight text-lg">Instructions:</h1>
          <div className="text-sm text-purple-800 leading-tight tracking-tight">{recipe.instructions}</div>
        </div>
      </div>
    </div>
    

  );
};
