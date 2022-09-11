import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth/Auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
export default Router;