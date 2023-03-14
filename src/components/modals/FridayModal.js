import { useEffect, useState } from "react";

export const FridayModal = ({ visible, fridayRecipe, onClose }) => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(fridayRecipe?.extendedIngredients);
  }, [fridayRecipe]);

  if (!visible) return null;
  return (
    <div className="fixed inset-0">
      <button onClick={onClose}>x</button>
      <p>
        <img src={fridayRecipe?.image}></img>
      </p>
      <p>Prep Time: {fridayRecipe?.readyInMinutes} minutes</p>
      <div>
        {ingredients?.map((ingredient) => {
          return <p>{ingredient.original}</p>;
        })}
      </div>
      <div>{fridayRecipe.instructions}</div>
      
    </div>
  );
};
