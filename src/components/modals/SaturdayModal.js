import { useEffect, useState } from "react";

export const SaturdayModal = ({ visible, saturdayRecipe, onClose }) => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(saturdayRecipe?.extendedIngredients);
  }, [saturdayRecipe]);

  if (!visible) return null;
  return (
    <div className="fixed inset-0">
      <button onClick={onClose}>x</button>
      <p>
        <img src={saturdayRecipe?.image}></img>
      </p>
      <p>Prep Time: {saturdayRecipe?.readyInMinutes} minutes</p>
      <div>
        {ingredients?.map((ingredient) => {
          return <p>{ingredient.original}</p>;
        })}
      </div>
      <div>{saturdayRecipe.instructions}</div>
      
    </div>
  );
};
