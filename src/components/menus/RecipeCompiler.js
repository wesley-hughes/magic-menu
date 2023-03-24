import { useEffect, useState } from "react";
import { WeekBuilder } from "./WeekBuilder";

export const RecipeCompiler = ({ filtered }) => {
  const [sundayRecipe, setSundayRecipe] = useState({});
  const [mondayRecipe, setMondayRecipe] = useState({});
  const [tuesdayRecipe, setTuesdayRecipe] = useState({});
  const [wednesdayRecipe, setWednesdayRecipe] = useState({});
  const [thursdayRecipe, setThursdayRecipe] = useState({});
  const [fridayRecipe, setFridayRecipe] = useState({});
  const [saturdayRecipe, setSaturdayRecipe] = useState({});
  const [typeFilter, setTypeFilter] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [MonFiltered, setMonFiltered] = useState([]);
  const [TueFiltered, setTueFiltered] = useState([]);
  const [WedFiltered, setWedFiltered] = useState([]);
  const [ThuFiltered, setThuFiltered] = useState([]);
  const [FriFiltered, setFriFiltered] = useState([]);
  const [SatFiltered, setSatFiltered] = useState([]);

  const getRecipeObject = (filteredRecipes) => {
    let recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    return recipeObject;
  };

  useEffect(() => {
    if (filteredRecipes.length > 0) {
      setSundayRecipe(getRecipeObject(filteredRecipes));
      // setTueFiltered(
      //   MonFiltered.filter((recipe) => recipe.id !== mondayRecipe.id)
      // );
      // setTuesdayRecipe(getRecipeObject(TueFiltered));
      // setWedFiltered(TueFiltered.filter(
      //   (recipe) => recipe.id !== tuesdayRecipe.id
      // ))
      // setWednesdayRecipe(getRecipeObject(WedFiltered));
      // setThuFiltered(WedFiltered.filter(
      //   (recipe) => recipe.id !== wednesdayRecipe.id
      // ))
      // setThursdayRecipe(getRecipeObject(ThuFiltered));
      // setFriFiltered(ThuFiltered.filter(
      //   (recipe) => recipe.id !== thursdayRecipe.id
      // ));
      // setFridayRecipe(getRecipeObject(FriFiltered));
      // setSatFiltered(FriFiltered.filter(
      //   (recipe) => recipe.id !== fridayRecipe.id
      // ));
      // setSaturdayRecipe(getRecipeObject(SatFiltered));
    }
  }, [filteredRecipes]);

  useEffect(() => {
    if (sundayRecipe !== {}) {
      setMonFiltered(
        filteredRecipes.filter((recipe) => recipe.id !== sundayRecipe.id)
      );
    }
    setMondayRecipe(getRecipeObject(MonFiltered));
  }, [sundayRecipe, filteredRecipes]);

  useEffect(() => {
    if (mondayRecipe !== {}) {
      setTueFiltered(
        MonFiltered.filter((recipe) => recipe.id !== mondayRecipe?.id)
      );
    }
    setTuesdayRecipe(getRecipeObject(TueFiltered));
  }, [mondayRecipe, MonFiltered]);

  useEffect(() => {
    if (tuesdayRecipe !== {}) {
      setWedFiltered(
        TueFiltered.filter((recipe) => recipe.id !== tuesdayRecipe?.id)
      );
    }
    setWednesdayRecipe(getRecipeObject(WedFiltered));
  }, [tuesdayRecipe, TueFiltered]);

  useEffect(() => {
    if (wednesdayRecipe !== {}) {
      setThuFiltered(
        WedFiltered.filter((recipe) => recipe.id !== wednesdayRecipe?.id)
      );
    }
    setThursdayRecipe(getRecipeObject(ThuFiltered));
  }, [wednesdayRecipe, WedFiltered]);

  useEffect(() => {
    if (thursdayRecipe !== {}) {
      setFriFiltered(
        ThuFiltered.filter((recipe) => recipe.id !== thursdayRecipe?.id)
      );
    }
    setFridayRecipe(getRecipeObject(FriFiltered));
  }, [thursdayRecipe, ThuFiltered]);

  useEffect(() => {
    if (fridayRecipe !== {}) {
      setSatFiltered(
        FriFiltered.filter((recipe) => recipe.id !== fridayRecipe?.id)
      );
    }
    setSaturdayRecipe(getRecipeObject(SatFiltered));
  }, [fridayRecipe, FriFiltered]);

  const resetSunday = (filteredRecipes) => {
    const recipeObject =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setSundayRecipe(recipeObject);
  };
  const resetMonday = (monFiltered) => {
    const recipeObject =
      monFiltered[Math.floor(Math.random() * monFiltered.length)];
    setMondayRecipe(recipeObject);
  };
  const resetTuesday = (tueFiltered) => {
    const recipeObject =
      tueFiltered[Math.floor(Math.random() * tueFiltered.length)];
    setTuesdayRecipe(recipeObject);
  };
  const resetWednesday = (wedFiltered) => {
    const recipeObject =
      wedFiltered[Math.floor(Math.random() * wedFiltered.length)];
    setWednesdayRecipe(recipeObject);
  };
  const resetThursday = (thuFiltered) => {
    const recipeObject =
      thuFiltered[Math.floor(Math.random() * thuFiltered.length)];
    setThursdayRecipe(recipeObject);
  };
  const resetFriday = (friFiltered) => {
    const recipeObject =
      friFiltered[Math.floor(Math.random() * friFiltered.length)];
    setFridayRecipe(recipeObject);
  };
  const resetSaturday = (satFiltered) => {
    const recipeObject =
      satFiltered[Math.floor(Math.random() * satFiltered.length)];
    setSaturdayRecipe(recipeObject);
  };

  useEffect(() => {
    if (typeFilter) {
      let filteredRecipes1 = filtered.filter((recipe) =>
        recipe.dishTypes.includes(typeFilter)
      );
      setFilteredRecipes(filteredRecipes1);
    } else {
      setFilteredRecipes(filtered);
    }
  }, [typeFilter, filtered]);

  return (
    <>
      <select
        onChange={(event) => {
          setTypeFilter(event.target.value);
        }}
        className="mt-[100px]"
      >
        <option value="0">Choose Option</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
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
