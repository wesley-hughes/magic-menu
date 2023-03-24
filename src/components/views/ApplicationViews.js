import { Outlet, Route, Routes } from "react-router-dom";
import { WeekBuilder } from "../menus/WeekBuilder";
import { RecipeCompiler } from "../menus/RecipeCompiler";
import { WeekDisplay } from "../menus/WeekDisplay";
import { Profile } from "../profiles/Profile";
import { RecipeFilter } from "../menus/RecipeFilter";
import { Home } from "../home/Home";
import { FavoritesSearchContainer } from "../favorites/FavoritesSearchContainer";

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
              alt="clouds"
            ></img>

            <Outlet />
          </>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<RecipeFilter />} />
        <Route path="/recipe" element={<WeekBuilder />} />
        <Route path="/weeks" element={<WeekDisplay />} />
        <Route path="/favorites" element={<FavoritesSearchContainer />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
