import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MondayModal = ({ visible, mondayRecipe, onClose }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(mondayRecipe?.extendedIngredients);
  }, [mondayRecipe]);

  const isVegetarian = () => {
    if(mondayRecipe.vegetarian){
      return <img className="h-[80px] mt-2 hover:animate-bounce" src="./images/yes.png"></img>
    }
    else{return <img className="h-[80px] mt-2 hover:animate-bounce" src="./images/no.png"></img>}
  }
  const isVegan = () => {
    if(mondayRecipe.vegan){
      return <img className="h-[80px] mt-2 hover:animate-bounce" src="./images/yes.png"></img>
    }
    else{return <img className="h-[80px] mt-2 hover:animate-bounce" src="./images/no.png"></img>}
  }
  const isGF = () => {
    if(mondayRecipe.glutenFree){
      return <img className="h-[80px] mt-2 hover:animate-bounce" src="./images/yes.png"></img>
    }
    else{return <img className="h-[80px] mt-2 hover:animate-bounce" src="./images/no.png"></img>}
  }
  const isDF = () => {
    if(mondayRecipe.dairyFree){
      return <img className="h-[80px] mt-2 hover:animate-bounce" src="./images/yes.png"></img>
    }
    else{return <img className="h-[80px] mt-2 hover:animate-bounce" src="./images/no.png"></img>}
  }

  if (!visible) return null;
  return (
    <div className="fixed inset-[0px] mt-[70px] bg-gray-50  backdrop-blur-sm overflow-y-auto scroll-smooth">
      <Link
        onClick={onClose}
      >
        <img className="px-2 py-0 ml-5 h-8 hover:animate-spin" src="./images/close.png"></img>
      </Link>
      <div className="grid grid-cols-2 w-[85%] items-center mx-auto justify-items-start">
        
          <img
            className=" p-1 border-4 border-slate-200  my-[50px] object-fill shadow-md rounded-xl"
            src={mondayRecipe?.image}
          ></img>
        
        <div className="w-[80%] h-[300px] flex flex-col justify-between pb-10">
          <p className="text-purple-800 font-bold leading-tight tracking-tight drop-shadow-xl mb-2 text-5xl">{mondayRecipe?.title}</p>
          <div className="text-purple-500 py-2 pl-2 drop-shadow-xl font-semibold text-xl">
            <img className="h-9 inline mr-3" src="./images/hourglass.png"></img>
            <div className="inline leading-tight tracking-tight">Prep Time: {mondayRecipe?.readyInMinutes} minutes</div></div>
          <div className=" flex flex-row text-center justify-around">
            <div className="text-purple-700 drop-shadow-md">{isVegetarian()}Vegetarian </div>
            <div className="text-purple-700 drop-shadow-md">{isVegan()}Vegan </div>
            <div className="text-purple-700 drop-shadow-md">{isGF()}Gluten Free </div>
            <div className="text-purple-700 drop-shadow-md">{isDF()}Dairy Free </div>
          </div>
        </div>

        <article className="flex flex-col m-1 w-[80%] h-[300px] ml-5 ">
          <h1 className="text-purple-800 mb-2 font-bold leading-tight tracking-tight text-lg">Ingredients:</h1>

          <div className="grid grid-cols-2 text-left">
            {ingredients?.map((ingredient) => {
              return <div className="leading-tight tracking-tight text-sm text-purple-800">{ingredient.original}</div>;
            })}
          </div></article>
          <div className="m-1 w-[80%] h-[300px]">
          <h1 className="text-purple-800 font-bold leading-tight tracking-tight text-lg">Instructions:</h1>
          <div className="text-sm text-purple-800 leading-tight tracking-tight p-2">{mondayRecipe.instructions}</div>
        </div>
      </div>
    </div>
    

  );
};
