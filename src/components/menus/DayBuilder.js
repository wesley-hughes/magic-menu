import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postDay } from "../APIManager";

export const DayBuilder = ({ breakfast, lunch, dinner, snack }) => {
  const [day, build] = useState({
    breakfastRecipe: {},
    lunchRecipe: {},
    dinnerRecipe: {},
    snackRecipe: {},
  });
  const navigate = useNavigate();

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const dayToSendToApi = {
      userId: magicUserObject.id,
      breakfastRecipe: breakfast.recipe.label,
      lunchRecipe: lunch.recipe.label,
      dinnerRecipe: dinner.recipe.label,
      snackRecipe: snack.recipe.label
    };

    postDay(dayToSendToApi).then(() => {
      navigate("/menu")
      ;
    });
    window.alert("Menu Saved!")
  };

  const RecipeObj = (mealtype) => {
    if (mealtype) {
      return `${mealtype?.recipe?.label}`;
    } else {
      return null;
    }
  };

  return (
    <>
      <form className="">
        <h2 className="">New Day Menu</h2>
        <fieldset>
          <div className="">
            <label htmlFor="breakfast">Breakfast:</label>
            <div value={breakfast?.recipe?.label}>
            <a href="/menu" target="_blank">{RecipeObj(breakfast)}</a>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="lunch">Lunch:</label>
            <div value={lunch?.recipe?.label}>{RecipeObj(lunch)}</div>
          </div>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="dinner">Dinner:</label>
            <div value={dinner?.recipe?.label}>{RecipeObj(dinner)}</div>
          </div>
        </fieldset>
        <fieldset>
          <div className="">
            <label htmlFor="snack">Snack:</label>
            <div value={snack?.recipe?.label}>{RecipeObj(snack)}</div>
          </div>
        </fieldset>

        <button
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        
        >
          Save Day
        </button>
        <button onClick={() => navigate("/menu")} className="">
          Refresh
        </button>
      </form>
    </>
  );
};
