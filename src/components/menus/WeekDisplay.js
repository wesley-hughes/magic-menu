import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getMenus,
  getAllRecipes,
  postFavorite,
  getUserFavorites,
} from "../APIManager";

export const WeekDisplay = () => {
  const [menus, setMenus] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [userFaves, setUserFaves] = useState([]);

  const navigate = useNavigate();
  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);
  const userId = parseInt(magicUserObject.id);

  const resetMenus = () => {
    getMenus(parseInt(magicUserObject.id)).then((data) => setMenus(data));
  };

  useEffect(() => {
    getAllRecipes().then((data) => setRecipes(data));
    resetMenus();
  }, []);

  useEffect(() => {
    getUserFavorites(userId).then((data) => setUserFaves(data));
  }, [userId]);

  const handleFavoriteButtonClick = (day) => {
    let matchedFave = userFaves.find(
      (userFave) => userFave.recipeId === day.id
    )
    if(matchedFave){
      return fetch(`http://localhost:8088/favorites/${matchedFave.id}`, {
            method: "DELETE",
          }).then(() => {
            getUserFavorites(userId).then((data) => setUserFaves(data))
            })}
    else{
    const newFavorite = {
      userId: userId,
      recipeId: day.id,
    };

    postFavorite(newFavorite).then(() => {
      getUserFavorites(userId).then((data) => setUserFaves(data))
    })}

  };

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
    const printDay = (day) => {
      let matchedFave = userFaves.find(
        (userFave) => userFave.recipeId === day.id
      );
      return (
        <>
          <div className="flex flex-row justify-between">
            <div className="text-slate-600 ml-2">{day?.title}</div>
            <button
              type="button"
              onClick={() => {
                handleFavoriteButtonClick(day);
              }}
              className="ml-3"
            >
              {matchedFave ? (
                <img className="h-5" src="./images/fave.svg" />
              ) : (
                <img className="h-5" src="./images/unfave.svg" />
              )}
            </button>
          </div>{" "}
        </>
      );
    };

    return (
      <>
        <div className="flex border-2 border-purple-300 rounded-2xl p-3 w-[650px] h-[500px]">
          <div className="flex flex-col pr-3 justify-between  w-[180px] border-r">
            <p className="text-purple-700 font-bold text-lg">
              Menu Date:<br></br>
              {menu.date}
            </p>
            <div className="glow-on-hover text-center">
              {deleteButton(menu)}
            </div>
          </div>
          <div className="flex flex-col ml-5">
            <p className="text-slate-700 font-semibold text-lg">Sunday:</p>
            {printDay(Sunday)}
            <p className="text-slate-700 font-semibold text-lg">Monday:</p>
            {printDay(Monday)}
            <p className="text-slate-700 font-semibold text-lg">Tuesday:</p>
            {printDay(Tuesday)}
            <p className="text-slate-700 font-semibold text-lg">Wednesday: </p>
            {printDay(Wednesday)}
            <p className="text-slate-700 font-semibold text-lg">Thursday:</p>
            {printDay(Thursday)}
            <p className="text-slate-700 font-semibold text-lg">Friday:</p>
            {printDay(Friday)}
            <p className="text-slate-700 font-semibold text-lg">Saturday:</p>
            {printDay(Saturday)}
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
      <div className="flex">
        {menus.map((menu) => {
          return (
            <div key={menu?.id} className="p-2">
              {printMenu(menu)}

              <br></br>
            </div>
          );
        })}
      </div>
    </>
  );
};
