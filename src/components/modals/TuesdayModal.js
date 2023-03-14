import { useEffect, useState } from "react";

export const TuesdayModal = ({ visible, tuesdayRecipe, onClose }) => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(tuesdayRecipe?.extendedIngredients);
  }, [tuesdayRecipe]);

  if (!visible) return null;
  return (
    <div className="fixed inset-0">
      <button onClick={onClose}>x</button>
      <p>
        <img src={tuesdayRecipe?.image}></img>
      </p>
      <p>Prep Time: {tuesdayRecipe?.readyInMinutes} minutes</p>
      <div>
        {ingredients?.map((ingredient) => {
          return <p>{ingredient.original}</p>;
        })}
      </div>
      <div>{tuesdayRecipe.instructions}</div>
      
    </div>
  );
};
