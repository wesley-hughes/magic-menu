import { useEffect, useState } from "react";
import { getRecipes, getUser } from "../APIManager";
import { WeekBuilder } from "./WeekBuilder";

export const RecipeCompiler = () => {
  const [recipes, setRecipes] = useState([]);
  const [sundayRecipe, setSundayRecipe] = useState({});
  const [mondayRecipe, setMondayRecipe] = useState({});
  const [tuesdayRecipe, setTuesdayRecipe] = useState({});
  const [wednesdayRecipe, setWednesdayRecipe] = useState({});
  const [thursdayRecipe, setThursdayRecipe] = useState({});
  const [fridayRecipe, setFridayRecipe] = useState({});
  const [saturdayRecipe, setSaturdayRecipe] = useState({});
  const [user, setUser] = useState({})
  const [filteredRecipes, setFilteredRecipes] = useState([])
  

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);
  const userId = magicUserObject.userId
  
  useEffect(() => {
    getUser(userId).then((data) => setUser(data[0]))
    .then(getRecipes(user).then((data) => setFilteredRecipes(data)))
  }, []);

  // useEffect(() => {
  //   // let filteredRecipes= recipes
  //   // if(user.vegetarian){
  //   //   filteredRecipes = recipes.filter(recipe => recipe.vegetarian === true)
  //   // }
  //   // else{setFilteredRecipes(filteredRecipes)};
  //   // if(user.vegan){
  //   // setFilteredRecipes(recipes.filter(recipe => recipe.vegan === true))}
  //   // if(user.glutenFree){
  //   // setFilteredRecipes(recipes.filter(recipe => recipe.glutenFree === true))}
  //   // if(user.dairyFree){
  //   // setFilteredRecipes(recipes.filter(recipe => recipe.dairyFree === true))}
  
  // }
  // , [user, recipes])



  useEffect(() => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setSundayRecipe(recipeObject);
  }, [filteredRecipes]);
  useEffect(() => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setMondayRecipe(recipeObject);
  }, [filteredRecipes]);
  useEffect(() => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setTuesdayRecipe(recipeObject);
  }, [filteredRecipes]);
  useEffect(() => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setWednesdayRecipe(recipeObject);
  }, [filteredRecipes]);
  useEffect(() => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setThursdayRecipe(recipeObject);
  }, [filteredRecipes]);
  useEffect(() => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setFridayRecipe(recipeObject);
  }, [filteredRecipes]);
  useEffect(() => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setSaturdayRecipe(recipeObject);
  }, [filteredRecipes]);

const resetSunday = (filteredRecipes) => {
  const recipeObject =
  filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
setSundayRecipe(recipeObject)
}
const resetMonday = (filteredRecipes) => {
  const recipeObject =
  filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
setMondayRecipe(recipeObject)
}
const resetTuesday = (filteredRecipes) => {
  const recipeObject =
  filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
setTuesdayRecipe(recipeObject)
}
const resetWednesday = (filteredRecipes) => {
  const recipeObject =
  filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
setWednesdayRecipe(recipeObject)
}
const resetThursday = (filteredRecipes) => {
  const recipeObject =
  filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
setThursdayRecipe(recipeObject)
}
const resetFriday = (filteredRecipes) => {
  const recipeObject =
  filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
setFridayRecipe(recipeObject)
}
const resetSaturday = (filteredRecipes) => {
  const recipeObject =
  filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
setSaturdayRecipe(recipeObject)
}

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
      ;
    </>
  );
};
