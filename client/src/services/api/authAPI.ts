// import axios from "axios";

// export const BASE_URL = "http://localhost:8080/users";

// const responseURL = async (url: string) => {
//   const res = await fetch(url);
//   if (res.ok) {
//     const json = await res.json();
//     return json;
//   }
//   throw new Error("요청 실패");
// };

// interface LoginProps {
//   email: string;
//   password: string;
// }

// // export const fetchLogin = async (props: LoginProps) => {
// //   await fetch(`http://localhost:8080/users/login`, {
// //     method: "POST",
// //     body: JSON.stringify({
// //       email: props.email,
// //       password: props.password,
// //     }),
// //   });
// // };

// const instance = axios.create({
//   baseURL: "http://localhost:8080/users",
//   // timeout:50000
// });

// // export const fetchLogin = async (props: LoginProps) => {
// //   const { data } = await instance.post("/login", props);
// //   return data;
// // };

// // export const fetchLogin = async (props: LoginProps) => {
// //   await instance.post(`/login`, props);
// // };
// export async function fetchLogin(props: LoginProps) {
//   try {
//     const response = await axios.post(`${BASE_URL}/login`, props);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/users",
});

interface LoginProps {
  email: string;
  password: string;
}

// instance.interceptors.response.use(
//   (res) => {
//     const { token } = res.data;
//     storage.set({ key: "token", value: token });
//     return res;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const fetchLogin = (props: LoginProps) => {
  return instance.post("/login", props);
};

const fetchSignUp = (props: LoginProps) => {
  return instance.post("/create", props);
};

export { fetchLogin, fetchSignUp };
