import React from "react";
import { TodoDatas } from "../../pages/todo/Todo";

interface Props {
  selectedTodo: TodoDatas | undefined;
}

const DetailTodo = ({ selectedTodo }: Props) => {
  return (
    <div>
      <h3>{selectedTodo?.title}</h3>
      <hr />
      <p>{selectedTodo?.content}</p>
      <p>{selectedTodo?.createdAt}</p>
    </div>
  );
};

export default DetailTodo;
