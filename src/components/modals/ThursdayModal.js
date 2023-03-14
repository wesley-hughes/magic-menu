import { useEffect, useState } from "react";

export const ThursdayModal = ({ visible, thursdayRecipe, onClose }) => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(thursdayRecipe?.extendedIngredients);
  }, [thursdayRecipe]);

  if (!visible) return null;
  return (
    <div className="fixed inset-0">
      <button onClick={onClose}>x</button>
      <p>
        <img src={thursdayRecipe?.image}></img>
      </p>
      <p>Prep Time: {thursdayRecipe?.readyInMinutes} minutes</p>
      <div>
        {ingredients?.map((ingredient) => {
          return <p>{ingredient.original}</p>;
        })}
      </div>
      <div>{thursdayRecipe.instructions}</div>
      
    </div>
  );
};
