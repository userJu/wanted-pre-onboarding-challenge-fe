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
  updateTodo: (id: string, updateOrNot: boolean) => void;
  showDetailTodo: (selectedTodo: TodoDatas) => void;
}

const ListTodo = ({
  todoDatas,
  deleteTodo,
  updateTodo,
  showDetailTodo,
}: Prop) => {
  const handleDelete = (id: string) => {
    fetchDeleteTodo(id);
    deleteTodo();
  };

  const handleCanUpdate = (id: string) => {
    updateTodo(id, true);
  };

  const handleShowDetailId = (selectedToDo: TodoDatas) => {
    showDetailTodo(selectedToDo);
  };

  return (
    <Ul>
      {todoDatas.map((todoData) => (
        <li
          key={todoData.id}
          onClick={() => {
            handleShowDetailId(todoData);
          }}
        >
          {todoData.title}
          <button onClick={() => handleCanUpdate(todoData.id)}>수정</button>
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
