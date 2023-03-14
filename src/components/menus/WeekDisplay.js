import { useEffect, useState } from "react";
import { getMenus, getRecipes } from "../APIManager";

export const WeekDisplay = () => {
  const [menus, setMenus] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [SundayMenu, setSundayMenu] = ([])

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);

  useEffect(() => {
    getMenus(magicUserObject.id).then((data) => setMenus(data));
    getRecipes().then((data) => setRecipes(data));
}, []);



const foundSunday = recipes.filter((recipe) =>
menus.find((menu) => menu.sundayRecipe === recipe.id)
)



  // DOESNOT WORK NEED TO FIX FILTER

  return <>{foundSunday}</>;
};
