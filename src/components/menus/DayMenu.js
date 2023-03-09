import { useEffect, useState } from "react";
import { getBreakfastArray, getDinnerArray, getLunchArray, getSnackArray } from "../APIManager";

export const DayMenu = () => {
  const [breakfastArray, setBreakfastArray] = useState([]);
  const [breakfastRecipe, setBreakfastRecipe] = useState({});
  const [lunchArray, setLunchArray] = useState([])
  const [lunchRecipe, setLunchRecipe] = useState({});
  const [dinnerArray, setDinnerArray] = useState([])
  const [dinnerRecipe, setDinnerRecipe] = useState({});
  const [snackArray, setSnackArray] = useState([])
  const [snackRecipe, setSnackRecipe] = useState({});

  useEffect(() => {
    getBreakfastArray().then((data) => setBreakfastArray(data.hits));
    getLunchArray().then((data) => setLunchArray(data.hits))
    getDinnerArray().then((data) => setDinnerArray(data.hits))
    getSnackArray().then((data) => setSnackArray(data.hits))
  }, []);

  useEffect(() => {
      const breakfastObject =
        breakfastArray[Math.floor(Math.random() * breakfastArray.length)];
      setBreakfastRecipe(breakfastObject);
  },[breakfastArray]
  )
  useEffect(() => {
      const lunchObject =
        lunchArray[Math.floor(Math.random() * lunchArray.length)];
      setLunchRecipe(lunchObject);
  },[lunchArray]
  )
  useEffect(() => {
      const dinnerObject =
        dinnerArray[Math.floor(Math.random() * dinnerArray.length)];
      setDinnerRecipe(dinnerObject);
  },[dinnerArray]
  )
  useEffect(() => {
      const snackObject =
        snackArray[Math.floor(Math.random() * snackArray.length)];
      setSnackRecipe(snackObject);
  },[snackArray]
  )

  return (
    <>
      <div>{breakfastRecipe?.recipe?.label}</div>
      <div>{lunchRecipe?.recipe?.label}</div>
      <div>{dinnerRecipe?.recipe?.label}</div>
      <div>{snackRecipe?.recipe?.label}</div>
    </>
  );
};
