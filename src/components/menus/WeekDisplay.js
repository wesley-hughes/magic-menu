import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenus, getAllRecipes } from "../APIManager";

export const WeekDisplay = () => {
  const [menus, setMenus] = useState([]);
  const [recipes, setRecipes] = useState([]);


  const navigate = useNavigate()

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);

  const resetMenus = () => {
    getMenus(parseInt(magicUserObject.id)).then((data) => setMenus(data))
  }

  useEffect(() => {
    getAllRecipes().then((data) => setRecipes(data));
    resetMenus()
    ;
  }, []);


const printMenu = (menu) => {
   let Sunday = recipes.find(recipe => recipe.id === menu.sundayRecipe)
   let Monday = recipes.find(recipe => recipe.id === menu.mondayRecipe)
   let Tuesday = recipes.find(recipe => recipe.id === menu.tuesdayRecipe)
   let Wednesday = recipes.find(recipe => recipe.id === menu.wednesdayRecipe)
   let Thursday = recipes.find(recipe => recipe.id === menu.thursdayRecipe)
   let Friday = recipes.find(recipe => recipe.id === menu.fridayRecipe)
   let Saturday = recipes.find(recipe => recipe.id === menu.saturdayRecipe)
   return <>
   <p>{menu.date}</p>
   <p>{Sunday?.title}</p>
   <p>{Monday?.title}</p>
   <p>{Tuesday?.title}</p>
   <p>{Wednesday?.title}</p>
   <p>{Thursday?.title}</p>
   <p>{Friday?.title}</p>
   <p>{Saturday?.title}</p>
   <br></br>
   </>
}


  const deleteButton = (menu) => {

        return <button onClick={() => {
            fetch(`http://localhost:8088/menus/${menu.id}`, {
                method: "DELETE"
            })
                .then(() => {
                    resetMenus()
                })
               
        }} className="">Delete</button>
}

  return <>
  {
    menus.map(menu => {
        return <div key={menu?.id}>
           {printMenu(menu)}
           {deleteButton(menu)}
           <br></br>
           </div>
    }
        )
  }
  </>;
};
