import { useEffect, useState } from "react";
import { getDinnerArray } from "../APIManager";
import { DayBuilder } from "./DayBuilder";

export const RecipeCompiler = () => {
  const [dinnerArray, setDinnerArray] = useState([]);
  const [sundayRecipe, setSundayRecipe] = useState({});
  const [mondayRecipe, setMondayRecipe] = useState({});
  const [tuesdayRecipe, setTuesdayRecipe] = useState({});
  const [wednesdayRecipe, setWednesdayRecipe] = useState({});
  const [thursdayRecipe, setThursdayRecipe] = useState({});
  const [fridayRecipe, setFridayRecipe] = useState({});
  const [saturdayRecipe, setSaturdayRecipe] = useState({});

  useEffect(() => {
    getDinnerArray().then((data) => setDinnerArray(data));
  }, []);

  useEffect(() => {
    const recipeObject =
      dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
    setSundayRecipe(recipeObject);
  }, [dinnerArray]);
  useEffect(() => {
    const recipeObject =
      dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
    setMondayRecipe(recipeObject);
  }, [dinnerArray]);
  useEffect(() => {
    const recipeObject =
      dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
    setTuesdayRecipe(recipeObject);
  }, [dinnerArray]);
  useEffect(() => {
    const recipeObject =
      dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
    setWednesdayRecipe(recipeObject);
  }, [dinnerArray]);
  useEffect(() => {
    const recipeObject =
      dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
    setThursdayRecipe(recipeObject);
  }, [dinnerArray]);
  useEffect(() => {
    const recipeObject =
      dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
    setFridayRecipe(recipeObject);
  }, [dinnerArray]);
  useEffect(() => {
    const recipeObject =
      dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
    setSaturdayRecipe(recipeObject);
  }, [dinnerArray]);

const resetSunday = (dinnerArray) => {
  const recipeObject =
  dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
setSundayRecipe(recipeObject)
}
const resetMonday = (dinnerArray) => {
  const recipeObject =
  dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
setMondayRecipe(recipeObject)
}
const resetTuesday = (dinnerArray) => {
  const recipeObject =
  dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
setTuesdayRecipe(recipeObject)
}
const resetWednesday = (dinnerArray) => {
  const recipeObject =
  dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
setWednesdayRecipe(recipeObject)
}
const resetThursday = (dinnerArray) => {
  const recipeObject =
  dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
setThursdayRecipe(recipeObject)
}
const resetFriday = (dinnerArray) => {
  const recipeObject =
  dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
setFridayRecipe(recipeObject)
}
const resetSaturday = (dinnerArray) => {
  const recipeObject =
  dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
setSaturdayRecipe(recipeObject)
}

  return (
    <>
      <DayBuilder
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
        dinnerArray={dinnerArray}
      ></DayBuilder>
      ;
    </>
  );
};
