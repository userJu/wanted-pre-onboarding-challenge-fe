import axios from "axios";

interface LoginProps {
  email: string;
  password: string;
}

const instance = axios.create({
  baseURL: "http://localhost:8080/users",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout:50000
});

export const fetchLogin = async (props: LoginProps) => {
  try {
    const { data } = await instance.post("login", props);
    return data;
  } catch (err: any) {
    // any로 쓰면 안됨
    console.log("login 에러 내용 : ", err.response.statusText);
  }
};

export const fetchSignUp = async (props: LoginProps) => {
  try {
    const { data } = await axios.post("create", props);
    return data;
  } catch (err) {
    console.log("sign up에러 발생");
  }
};

// export const BASE_URL = "http://localhost:8080/users";

// const responseURL = async (url: string) => {
//   const res = await fetch(url);
//   if (res.ok) {
//     const json = await res.json();
//     return json;
//   }
//   throw new Error("요청 실패");
// };

// // interface LoginProps {
// //   email: string;
// //   password: string;
// // }

// export const fetchSignUp = async (props: LoginProps) => {
//   await fetch(`http://localhost:8080/users/create`, {
//     method: "POST",
//     body: JSON.stringify({
//       email: props.email,
//       password: props.password,
//     }),
//   }).then((res) => console.log(res));
// };

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
