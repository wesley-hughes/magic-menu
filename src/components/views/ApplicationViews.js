import { Outlet, Route, Routes } from "react-router-dom";
import { DayBuilder, DayMenu } from "../menus/DayBuilder";
import { RecipeCompiler } from "../menus/RecipeCompiler";
import { WeekMenu } from "../menus/DayBuilder";
import { Recipe } from "../menus/Recipe";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/menu" element={<RecipeCompiler />} />
        <Route path="/recipe" element={<DayBuilder /> } />
      </Route>
    </Routes>
  );
};
