import { Route, Routes } from "react-router-dom";
import { Authorized } from "./auth/Authorized";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ApplicationViews } from "./views/ApplicationViews";

export const MagicMenu = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <Authorized>
            <>
              <ApplicationViews />
            </>
            </Authorized>
          }
        />
      </Routes>
    </>
  );
};
