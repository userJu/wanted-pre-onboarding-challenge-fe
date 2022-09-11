import React, { useState, useEffect } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { render } from "react-dom";
import styled from "styled-components";

const AuthContainer = styled.div`
  position: absolute;

  width: 80%;
  height: 80vh;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid black;
`;

const Auth = () => {
  const [loginOrSignin, setLoginOrSignin] = useState("Log In");

  const handleLoginOrSignin = () => {
    setLoginOrSignin((prev) => (prev === "Log In" ? "Sign In" : "Log In"));
  };

  useEffect(() => {}, []);
  return (
    <AuthContainer>
      <h1>{loginOrSignin}</h1>
      <AuthForm loginOrSignin={loginOrSignin}></AuthForm>
      <p onClick={handleLoginOrSignin}>
        {loginOrSignin === "Log In" ? "Sign In" : "Log In"}
      </p>
    </AuthContainer>
  );
};
export default Auth;
