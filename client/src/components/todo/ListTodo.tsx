import React from "react";
import { TodoDatas } from "../../pages/todo/Todo";

interface Prop {
  todoDatas: TodoDatas[];
}

const ListTodo = ({ todoDatas }: Prop) => {
  return (
    <div>
      <ul>
        {todoDatas.map((todoData) => (
          <li key={todoData.id}>{todoData.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
