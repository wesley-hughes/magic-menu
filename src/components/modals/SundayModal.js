import { useEffect, useState } from "react";

export const SundayModal = ({ visible, sundayRecipe, onClose }) => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(sundayRecipe?.extendedIngredients);
  }, [sundayRecipe]);

  if (!visible) return null;
  return (
    <div className="fixed inset-0">
      <button onClick={onClose}>x</button>
      <p>
        <img src={sundayRecipe?.image}></img>
      </p>
      <p>Prep Time: {sundayRecipe?.readyInMinutes} minutes</p>
      <div>
        {ingredients?.map((ingredient) => {
          return <p>{ingredient.original}</p>;
        })}
      </div>
      <div>{sundayRecipe.instructions}</div>
      
    </div>
  );
};
