import { Outlet, Route, Routes } from "react-router-dom";
import { WeekBuilder } from "../menus/WeekBuilder";
import { RecipeCompiler } from "../menus/RecipeCompiler";
import { WeekDisplay } from "../menus/WeekDisplay";
import { Profile } from "../profiles/Profile";
import { RecipeFilter } from "../menus/RecipeFilter";
import { FavoritesDisplay } from "../favorites/FavoritesDisplay";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <img
              className="w-[1000px] -z-20 opacity-30 fixed -bottom-20 right-0"
              src="./images/purple-clouds.png"
            ></img>
            {/* <button className="my-20 ml-20 glow-on-hover">PUSH</button> */}

            <Outlet />
          </>
        }
      >
        <Route path="/menu" element={<RecipeFilter />} />
        <Route path="/recipe" element={<WeekBuilder />} />
        <Route path="/weeks" element={<WeekDisplay />} />
        <Route path="/favorites" element={<FavoritesDisplay />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
