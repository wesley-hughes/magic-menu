import { Outlet, Route, Routes } from "react-router-dom";
import { WeekBuilder } from "../menus/WeekBuilder";
import { RecipeCompiler } from "../menus/RecipeCompiler";
import { WeekDisplay } from "../menus/WeekDisplay";
import { Profile } from "../profiles/Profile";


export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/menu" element={<RecipeCompiler />} />
        <Route path="/recipe" element={<WeekBuilder /> } />
        <Route path="/weeks" element={<WeekDisplay /> } />
        <Route path="/profile" element={<Profile /> } />
      </Route>
    </Routes>
  );
};
