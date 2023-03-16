import { useEffect, useState } from "react";
import { getRecipes, getUser } from "../APIManager";
import { WeekBuilder } from "./WeekBuilder";

export const RecipeCompiler = () => {
  const [user, setUser] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [sundayRecipe, setSundayRecipe] = useState({});
  const [mondayRecipe, setMondayRecipe] = useState({});
  const [tuesdayRecipe, setTuesdayRecipe] = useState({});
  const [wednesdayRecipe, setWednesdayRecipe] = useState({});
  const [thursdayRecipe, setThursdayRecipe] = useState({});
  const [fridayRecipe, setFridayRecipe] = useState({});
  const [saturdayRecipe, setSaturdayRecipe] = useState({});

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);
  const userId = parseInt(magicUserObject.userId);

  useEffect(() => {
    getUser(userId).then((data) => setUser(data[0]));
    getRecipes().then((data) => setRecipes(data));
  }, []);

  useEffect(() => {
    let filtered = [...recipes];
    if (user.vegetarian) {
      filtered = recipes.filter((recipe) => recipe.vegetarian);
    }
    if (user.glutenFree) {
      filtered = filtered.filter((recipe) => recipe.glutenFree);
    }
    if (user.vegan) {
      filtered = filtered.filter((recipe) => recipe.vegan);
    }
    if (user.dairyFree) {
      filtered = filtered.filter((recipe) => recipe.dairyFree);
    }
    setFilteredRecipes(filtered);
  }, [user, recipes]);

  // useEffect(() => {
  // }, [user, recipes]);
  // useEffect(() => {
  //   if (user.glutenFree) {
  //     setFilteredRecipes(recipes.filter((recipe) => recipe.glutenFree));
  //   }
  // }, [user, recipes]);
  // useEffect(() => {
  //   if (user.dairyFree) {
  //     setFilteredRecipes(recipes.filter((recipe) => recipe.dairyFree));
  //   }
  // }, [user, recipes]);

  const getRecipeObject = (filteredRecipes) => {
    let recipeObject = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    return recipeObject
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

  // useEffect(() => {
  //   const recipeObject =
  //     filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  //   setSundayRecipe(recipeObject);
  // }, [filteredRecipes]);
  // useEffect(() => {
  //   const recipeObject =
  //     filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  //   setMondayRecipe(recipeObject);
  // }, [filteredRecipes]);
  // useEffect(() => {
  //   const recipeObject =
  //     filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  //   setTuesdayRecipe(recipeObject);
  // }, [filteredRecipes]);
  // useEffect(() => {
  //   const recipeObject =
  //     filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  //   setWednesdayRecipe(recipeObject);
  // }, [filteredRecipes]);
  // useEffect(() => {
  //   const recipeObject =
  //     filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  //   setThursdayRecipe(recipeObject);
  // }, [filteredRecipes]);
  // useEffect(() => {
  //   const recipeObject =
  //     filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  //   setFridayRecipe(recipeObject);
  // }, [filteredRecipes]);
  // useEffect(() => {
  //   const recipeObject =
  //     filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  //   setSaturdayRecipe(recipeObject);
  // }, [filteredRecipes]);


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
