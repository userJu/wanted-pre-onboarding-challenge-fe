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
export const fetchUpdateTodo = async ({
  id,
  props,
}: {
  id: string;
  props: TodoInputProps;
}) => {
  return await instance.put(id, props);
};

export const fetchDeleteTodo = async (id: string) => {
  console.log(id);
  return await instance.delete(id);
};

export const fetchGetTodo = async () => {
  return await instance.get("");
};

export const fetchGetTodoById = (id: string) => {
  return instance.get(id);
};

// CreateTodo
// URL
// POST /todos
// Parameter
// title: string
// content: string
// Headers
// Authorization: login token
