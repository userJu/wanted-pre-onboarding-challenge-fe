import React from "react";
import styled from "styled-components";
import { TodoDatas } from "../../pages/todo/Todo";
import { fetchDeleteTodo } from "../../services/api/todoAPI";

const Ul = styled.ul`
  list-style: none;
  padding: 10px;
  li {
    margin-top: 0.5rem;
    cursor: pointer;
  }
`;

interface Prop {
  todoDatas: TodoDatas[];
  deleteTodo: () => void;
}

const ListTodo = ({ todoDatas, deleteTodo }: Prop) => {
  const handleDelete = (id: string) => {
    fetchDeleteTodo(id);
    deleteTodo();
  };
  return (
    <Ul>
      {todoDatas.map((todoData) => (
        <li key={todoData.id}>
          {todoData.title}
          <button>수정</button>
          <button
            onClick={() => {
              handleDelete(todoData.id);
            }}
          >
            삭제
          </button>
        </li>
      ))}
    </Ul>
  );
};

export default ListTodo;
