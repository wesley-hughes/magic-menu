import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getMenus,
  getAllRecipes,
  postFavorite,
  getUserFavorites,
} from "../APIManager";
import { RecipeModal } from "../modals/RecipeModal";

export const WeekDisplay = () => {
  const [menus, setMenus] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [userFaves, setUserFaves] = useState([]);
  const [modal, setModal] = useState(false);
  const [Day, setDay] = useState([]);

 
  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);
  const userId = parseInt(magicUserObject.id);
  
  const resetMenus = () => {
    getMenus(parseInt(magicUserObject.id)).then((data) => setMenus(data));
  };
  
  useEffect(() => {
    getAllRecipes().then((data) => setRecipes(data));
    resetMenus();
  }, [resetMenus]);
  
  useEffect(() => {
    getUserFavorites(userId).then((data) => setUserFaves(data));
  }, [userId]);
  const handleFavoriteButtonClick = (day) => {
    let matchedFave = userFaves.find(
      (userFave) => userFave.recipeId === day.id
      );
      if (matchedFave) {
        return fetch(`https://mm-app-ej7qy.ondigitalocean.app/favorites/${matchedFave.id}`, {
          method: "DELETE",
        }).then(() => {
          getUserFavorites(userId).then((data) => setUserFaves(data));
        });
      } else {
        const newFavorite = {
          userId: userId,
          recipeId: day.id,
        };
        
        postFavorite(newFavorite).then(() => {
          getUserFavorites(userId).then((data) => setUserFaves(data));
        });
      }
    };
    
    const handleClose = () => setModal(false);
    const printMenu = (menu) => {
      let Sunday = recipes.find((recipe) => recipe.id === menu?.sundayRecipe);
      let Monday = recipes.find((recipe) => recipe.id === menu?.mondayRecipe);
      let Tuesday = recipes.find((recipe) => recipe.id === menu?.tuesdayRecipe);
      let Wednesday = recipes.find(
        (recipe) => recipe.id === menu?.wednesdayRecipe
        );
        let Thursday = recipes.find((recipe) => recipe.id === menu?.thursdayRecipe);
        let Friday = recipes.find((recipe) => recipe.id === menu?.fridayRecipe);
        let Saturday = recipes.find((recipe) => recipe.id === menu?.saturdayRecipe);
        const printDay = (day) => {
      const handleRecipeClick = (event, day) => {
        event.preventDefault();
        setDay(day);
        setModal(true);
      };
      let matchedFave = userFaves.find(
        (userFave) => userFave.recipeId === day?.id
      );
      return (
        <>
          <div className="text-purple-800 opacity-80 ml-2 text-sm">
            <div className="flex flex-row justify-between ">
              <Link
                onClick={() => {
                  handleFavoriteButtonClick(day);
                }}
                className="w-8"
              >
                {matchedFave ? (
                  <img className="h-9" src="./images/fave.png" />
                ) : (
                  <img className="h-9" src="./images/unfave.png" />
                )}
              </Link>
              <Link
                onClick={(event) => {
                  handleRecipeClick(event, day);
                }}
                className="w-[80%] text-blue-600 underline leading-tight "
              >
                {day?.title}
              </Link>
            </div>
          </div>
          <div className="ml-2 w-[95%]">
            <img className="w-full rounded-2xl" src={day?.image} alt="food"></img>
          </div>
          
        </>
      );
    };

    return (
      <>
        <div className=" ">
          <div className="px-2 mt-5 mx-5 border-2 shadow-md drop-shadow-md rounded-xl bg-white bg-opacity-70 border-purple-300">
            <div className="text-purple-500 drop-shadow-md font-bold text-4xl my-3">
              {menu?.date}
            </div>
            <div className="flex flex-wrap w-[90%] justify-center mx-auto">
              <div className="text-purple-600 flex flex-col justify-between h-[250px] font-semibold card bg-purple-300 border-1 border-purple-400 bg-opacity-50 m-2 p-3 shadow-md drop-shadow-md w-64 ">
                Sunday:
                {printDay(Sunday)}
              </div>
              <div className="text-purple-600 flex flex-col justify-between h-[250px] font-semibold card bg-purple-300 border-1 border-purple-400 bg-opacity-50 m-2 p-3 shadow-md drop-shadow-md w-64 ">
                Monday:
                {printDay(Monday)}
              </div>
              <div className="text-purple-600 flex flex-col justify-between h-[250px] font-semibold card bg-purple-300 border-1 border-purple-400 bg-opacity-50 m-2 p-3 shadow-md drop-shadow-md w-64 ">
                Tuesday:
                {printDay(Tuesday)}
              </div>
              <div className="text-purple-600 flex flex-col justify-between h-[250px] font-semibold card bg-purple-300 border-1 border-purple-400 bg-opacity-50 m-2 p-3 shadow-md drop-shadow-md w-64 ">
                Wednesday:
                {printDay(Wednesday)}
              </div>
              <div className="text-purple-600 flex flex-col justify-between h-[250px] font-semibold card bg-purple-300 border-1 border-purple-400 bg-opacity-50 m-2 p-3 shadow-md drop-shadow-md w-64 ">
                Thursday:
                {printDay(Thursday)}
              </div>
              <div className="text-purple-600 flex flex-col justify-between h-[250px] font-semibold card bg-purple-300 border-1 border-purple-400 bg-opacity-50 m-2 p-3 shadow-md drop-shadow-md w-64 ">
                Friday:
                {printDay(Friday)}
              </div>
              <div className="text-purple-600 flex flex-col justify-between h-[250px] font-semibold card bg-purple-300 border-1 border-purple-400 bg-opacity-50 m-2 p-3 shadow-md drop-shadow-md w-64 ">
                Saturday:
                {printDay(Saturday)}
              </div>
             
            </div>
            <div className="card-actions justify-start p-1">
              {deleteButton(menu)}
            </div>
          </div>
        </div>
        <br></br>
      </>
    );
  };

  const deleteButton = (menu) => {
    return (
      <Link
        onClick={() => {
          fetch(`https://mm-app-ej7qy.ondigitalocean.app/menus/${menu?.id}`, {
            method: "DELETE",
          }).then(() => {
            resetMenus();
          });
        }}
        className="pt-1 hover:animate-bounce"
      >
        <img
          className="h-[80px] ml-[55px] mb-[5px]"
          src="./images/trash.png"
          alt="trash can"
        ></img>
      </Link>
    );
  };

  return (
    <>
      <div className="carousel carousel-center rounded-box lg:mt-0 sm:mt-[90px]">
        {menus.map((menu) => {
          return (
            <div key={menu?.id} className="p-2 carousel-item lg:w-[85%] sm:w-full">
              {printMenu(menu)}
            </div>
            
          );
        })}
         <RecipeModal
            recipe={Day}
            onClose={handleClose}
            visible={modal}
          ></RecipeModal>
      </div>
    </>
  );
};
