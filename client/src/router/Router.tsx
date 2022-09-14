import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AUTH, TODO } from "./routerPath";

import { getStorage } from "../store/storage";

import Auth from "../pages/auth/Auth";
import NotFoundPage from "../pages/NotFoundPage";
import Todo from "../pages/todo/Todo";
import { useEffect, useState } from "react";

const Router = () => {
  const token = getStorage({ key: "token" });
  console.log(token);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const isUserToken = () => {
    if (token === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  const redirectUser = (isLoggedIn: boolean) => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate(TODO);
    } else {
      navigate(AUTH);
    }
  };

  useEffect(() => {
    isUserToken();
    redirectUser(isLoggedIn);
  }, []);

  return (
    <Routes>
      <Route path={TODO} element={<Todo />} />
      <Route path={AUTH} element={<Auth />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default Router;
