import { useEffect, useState } from "react";

export const WednesdayModal = ({ visible, wednesdayRecipe, onClose }) => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(wednesdayRecipe?.extendedIngredients);
  }, [wednesdayRecipe]);

  const isVegetarian = () => {
    if(wednesdayRecipe.vegetarian){
      return `Y`
    }
    else{return `N`}
  }
  const isVegan = () => {
    if(wednesdayRecipe.vegan){
      return `Y`
    }
    else{return `N`}
  }
  const isGF = () => {
    if(wednesdayRecipe.glutenFree){
      return `Y`
    }
    else{return `N`}
  }
  const isDF = () => {
    if(wednesdayRecipe.dairyFree){
      return `Y`
    }
    else{return `N`}
  }

  if (!visible) return null;
  return (
    <div className="fixed inset-0 p-3 bg-purple-200 bg-opacity-50 backdrop-blur-sm ">
      <button
        className="glow-on-hover mt-[50px] px-2 py-0 text-sm"
        onClick={onClose}
      >
        close
      </button>
      <div className="grid grid-cols-2 items-center justify-items-center space-y-8">
        <article className="border-4 w-[80%] h-[300px]">
          <img
            className="h-[95%] mx-auto"
            src={wednesdayRecipe?.image}
          ></img>
        </article>
        <div className="border-4 w-[80%] h-[300px]">
          <p className="text-purple-500 font-bold text-lg">{wednesdayRecipe?.title}</p>
          <p className="text-purple-500 font-semibold text-md">Prep Time: {wednesdayRecipe?.readyInMinutes} minutes</p>
          <div className="mt-4">
            <div>Vegetarian {isVegetarian()}</div>
            <div>Vegean {isVegan()}</div>
            <div>Gluten Free {isGF()}</div>
            <div>Dairy Free {isDF()}</div>
          </div>
        </div>

        <article className="flex flex-col border-4 w-[80%] h-[300px] items-stretch ml-5 ">
          <h1 className="text-purple-500 font-bold text-lg">Ingredients:</h1>

          <div className="grid grid-cols-2 text-left">
            {ingredients?.map((ingredient) => {
              return <div className="">{ingredient.original}</div>;
            })}
          </div></article>
          <div className="border-4 w-[80%] h-[300px]">
          <h1 className="text-purple-500 font-bold text-lg">Instructions:</h1>
          <div className="text-sm p-2">{wednesdayRecipe.instructions}</div>
        </div>
      </div>
    </div>
  );
};
