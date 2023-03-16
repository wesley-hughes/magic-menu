import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenus, getAllRecipes } from "../APIManager";

export const WeekDisplay = () => {
  const [menus, setMenus] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);

  const resetMenus = () => {
    getMenus(parseInt(magicUserObject.id)).then((data) => setMenus(data));
  };

  useEffect(() => {
    getAllRecipes().then((data) => setRecipes(data));
    resetMenus();
  }, []);

  const printMenu = (menu) => {
    let Sunday = recipes.find((recipe) => recipe.id === menu.sundayRecipe);
    let Monday = recipes.find((recipe) => recipe.id === menu.mondayRecipe);
    let Tuesday = recipes.find((recipe) => recipe.id === menu.tuesdayRecipe);
    let Wednesday = recipes.find(
      (recipe) => recipe.id === menu.wednesdayRecipe
    );
    let Thursday = recipes.find((recipe) => recipe.id === menu.thursdayRecipe);
    let Friday = recipes.find((recipe) => recipe.id === menu.fridayRecipe);
    let Saturday = recipes.find((recipe) => recipe.id === menu.saturdayRecipe);
    return (
      <>
        <div className="flex border-2 border-purple-300 rounded-2xl p-3 w-[650px] h-[500px]">
          <div className="flex flex-col pr-3 justify-between  w-[180px] border-r">
            <p className="text-purple-700 font-bold text-lg">Menu Date:<br></br>{menu.date}</p>
            <div className="glow-on-hover text-center">{deleteButton(menu)}</div>
          </div>
          <div className="flex flex-col ml-5">
            <p className="text-slate-700 font-semibold text-lg">Sunday:</p>    <p className="text-slate-600 ml-2">{Sunday?.title}</p>
            <p className="text-slate-700 font-semibold text-lg">Monday: </p>   <p className="text-slate-600 ml-2">{Monday?.title}</p>
            <p className="text-slate-700 font-semibold text-lg">Tuesday: </p>  <p className="text-slate-600 ml-2">{Tuesday?.title}</p>
            <p className="text-slate-700 font-semibold text-lg">Wednesday: </p><p className="text-slate-600 ml-2">{Wednesday?.title}</p>
            <p className="text-slate-700 font-semibold text-lg">Thursday: </p> <p className="text-slate-600 ml-2">{Thursday?.title}</p>
            <p className="text-slate-700 font-semibold text-lg">Friday: </p>   <p className="text-slate-600 ml-2">{Friday?.title}</p>
            <p className="text-slate-700 font-semibold text-lg">Saturday: </p> <p className="text-slate-600 ml-2">{Saturday?.title}</p>
          </div>
        </div>
        <br></br>
      </>
    );
  };

  const deleteButton = (menu) => {
    return (
      <button
        onClick={() => {
          fetch(`http://localhost:8088/menus/${menu.id}`, {
            method: "DELETE",
          }).then(() => {
            resetMenus();
          });
        }}
        className=""
      >
        Delete
      </button>
    );
  };

  return (
    <>
    <div className="flex flex-wrap]">
      {menus.map((menu) => {
        return (
          <div key={menu?.id} className="p-2">
            {printMenu(menu)}

            <br></br>
          </div>
        );
      })}</div>
    </>
  );
};
