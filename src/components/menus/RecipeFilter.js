import { useEffect, useState } from "react";
import { getRecipes, getUser } from "../APIManager";
import { RecipeCompiler } from "./RecipeCompiler";

export const RecipeFilter = () => {
  const [user, setUser] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [filter1, setFiltered1] = useState([])
  const [filter2, setFiltered2] = useState([])
  const [filter3, setFiltered3] = useState([])
  const [filter4, setFiltered4] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([]);

    const localMagicUser = localStorage.getItem("magic_user");
    const magicUserObject = JSON.parse(localMagicUser);
    const userId = parseInt(magicUserObject.id);
  
    useEffect(() => {
      getUser(userId).then((data) => setUser(data[0]));
      getRecipes().then((data) => setRecipes(data));
    }, [userId]);
  
    useEffect(() => {
      let filtered = [...recipes];
      if (user.vegetarian === true) {
        filtered = recipes.filter((recipe) => recipe?.vegetarian);
        setFiltered1(filtered)
      }
      else{setFiltered1(recipes)}
    }, [user, recipes]);
    useEffect(() => {
      let filtered2 = [...filter1];
      if (user.vegan === true) {
        filtered2 = filter1.filter((recipe) => recipe?.vegan);
        setFiltered2(filtered2)
      }
      else{setFiltered2(filter1)}
    }, [user, filter1]);
    useEffect(() => {
      let filtered3 = [...filter2];
      if (user.glutenFree === true) {
        filtered3 = filter2.filter((recipe) => recipe?.glutenFree);
        setFiltered3(filtered3)
      }
      else{setFiltered3(filter2)}
    }, [user, filter2]);
    useEffect(() => {
      let filtered4 = [...filter3];
      if (user.dairyFree === true) {
        filtered4 = filter3.filter((recipe) => recipe?.dairyFree);
        setFiltered4(filtered4)
      }
      else{setFiltered4(filter3)}
    }, [user, filter3]);
    useEffect(() => {
      setFilteredRecipes(filter4)
    },[filter4])

    return <>
    <RecipeCompiler key={parseInt(userId)}
    filtered={filteredRecipes}></RecipeCompiler>
    </>

}