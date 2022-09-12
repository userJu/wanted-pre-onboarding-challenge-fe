import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Todo from "../pages/todo/Todo";
import { AUTH, TODO } from "./routerPath";

const Router = () => {
  return (
    <Routes>
      <Route path={AUTH} element={<Auth />} />
      <Route path={TODO} element={<Todo />} />
    </Routes>
  );
};
export default Router;
