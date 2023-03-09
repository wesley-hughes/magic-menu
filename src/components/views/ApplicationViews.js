import { Outlet, Route, Routes } from "react-router-dom";
import { DayMenu } from "../menus/DayMenu";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/dayMenu" element={<DayMenu />} />
      </Route>
    </Routes>
  );
};
