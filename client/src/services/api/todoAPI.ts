import axios from "axios";
import { getStorage } from "../../store/storage";

const instance = axios.create({
  baseURL: "http://localhost:8080/todos",
});

interface TodoInputProps {
  title: string;
  content: string;
}

instance.interceptors.request.use(
  (res) => {
    const token = getStorage({ key: "token" });
    if (!token) {
      throw Error("no token");
    }
    return { ...res, headers: { Authorization: token } };
  },
  (error) => {
    return Promise.reject(error); //이게뭔말
  }
);

export const fetchCreateTodo = async (props: TodoInputProps) => {
  return await instance.post("", props);
};
export const fetchUpdateTodo = () => {};
export const fetchDeleteTodo = () => {};
export const fetchGetTodo = () => {};
export const fetchGetTodoById = () => {};
