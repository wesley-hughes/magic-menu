import { useEffect, useState } from "react";
import { WeekBuilder } from "./WeekBuilder";

export const RecipeCompiler = ({filteredRecipes}) => {
  const [sundayRecipe, setSundayRecipe] = useState({});
  const [mondayRecipe, setMondayRecipe] = useState({});
  const [tuesdayRecipe, setTuesdayRecipe] = useState({});
  const [wednesdayRecipe, setWednesdayRecipe] = useState({});
  const [thursdayRecipe, setThursdayRecipe] = useState({});
  const [fridayRecipe, setFridayRecipe] = useState({});
  const [saturdayRecipe, setSaturdayRecipe] = useState({});

  const getRecipeObject = (filteredRecipes) => {
    let recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    return recipeObject;
  };

  useEffect(() => {
    setSundayRecipe(getRecipeObject(filteredRecipes));
    setMondayRecipe(getRecipeObject(filteredRecipes));
    setTuesdayRecipe(getRecipeObject(filteredRecipes));
    setWednesdayRecipe(getRecipeObject(filteredRecipes));
    setThursdayRecipe(getRecipeObject(filteredRecipes));
    setFridayRecipe(getRecipeObject(filteredRecipes));
    setSaturdayRecipe(getRecipeObject(filteredRecipes));
  }, [filteredRecipes]);

  const resetSunday = (filteredRecipes) => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setSundayRecipe(recipeObject);
  };
  const resetMonday = (filteredRecipes) => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setMondayRecipe(recipeObject);
  };
  const resetTuesday = (filteredRecipes) => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setTuesdayRecipe(recipeObject);
  };
  const resetWednesday = (filteredRecipes) => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setWednesdayRecipe(recipeObject);
  };
  const resetThursday = (filteredRecipes) => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setThursdayRecipe(recipeObject);
  };
  const resetFriday = (filteredRecipes) => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setFridayRecipe(recipeObject);
  };
  const resetSaturday = (filteredRecipes) => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setSaturdayRecipe(recipeObject);
  };

  return (
    <>
      <WeekBuilder
        key={`menu`}
        sundayRecipe={sundayRecipe}
        mondayRecipe={mondayRecipe}
        tuesdayRecipe={tuesdayRecipe}
        wednesdayRecipe={wednesdayRecipe}
        thursdayRecipe={thursdayRecipe}
        fridayRecipe={fridayRecipe}
        saturdayRecipe={saturdayRecipe}
        resetSunday={resetSunday}
        resetMonday={resetMonday}
        resetTuesday={resetTuesday}
        resetWednesday={resetWednesday}
        resetThursday={resetThursday}
        resetFriday={resetFriday}
        resetSaturday={resetSaturday}
        recipes={filteredRecipes}
      ></WeekBuilder>
      {/* <Reset key={`reset`} */};
    </>
  );
};
