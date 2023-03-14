import { useEffect, useState } from "react";

export const WednesdayModal = ({ visible, wednesdayRecipe, onClose }) => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(wednesdayRecipe?.extendedIngredients);
  }, [wednesdayRecipe]);

  if (!visible) return null;
  return (
    <div className="fixed inset-0">
      <button onClick={onClose}>x</button>
      <p>
        <img src={wednesdayRecipe?.image}></img>
      </p>
      <p>Prep Time: {wednesdayRecipe?.readyInMinutes} minutes</p>
      <div>
        {ingredients?.map((ingredient) => {
          return <p>{ingredient.original}</p>;
        })}
      </div>
      <div>{wednesdayRecipe.instructions}</div>
      
    </div>
  );
};
