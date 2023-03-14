import { useEffect, useState } from "react";

export const MondayModal = ({ visible, mondayRecipe, onClose }) => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(mondayRecipe?.extendedIngredients);
  }, [mondayRecipe]);

  if (!visible) return null;
  return (
    <div className="fixed inset-0">
      <button onClick={onClose}>x</button>
      <p>
        <img src={mondayRecipe?.image}></img>
      </p>
      <p>Prep Time: {mondayRecipe?.readyInMinutes} minutes</p>
      <div>
        {ingredients?.map((ingredient) => {
          return <p>{ingredient.original}</p>;
        })}
      </div>
      <div>{mondayRecipe.instructions}</div>
      
    </div>
  );
};
