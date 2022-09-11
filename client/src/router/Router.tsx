import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import { AUTH } from "./routerPath";

const Router = () => {
  return (
    <Routes>
      <Route path={AUTH} element={<Auth />} />
    </Routes>
  );
};
export default Router;
