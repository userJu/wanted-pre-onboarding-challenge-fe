import {
  fetchGetTodo,
  fetchGetTodoById,
  fetchUpdateTodo,
} from "../../services/api/todoAPI";
import { useState, useEffect } from "react";

import CreateTodo from "../../components/todo/CreateTodo";
import ListTodo from "../../components/todo/ListTodo";
import DetailTodo from "../../components/todo/DetailTodo";
import styled from "styled-components";
import UpdateTodo from "../../components/todo/UpdateTodo";

const TodoListAndDetailBox = styled.div`
  border: 1px solid gray;
  display: flex;
`;

export interface TodoDatas {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const Todo = () => {
  const [todoDatas, setTodoDatas] = useState<TodoDatas[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoDatas | undefined>();
  const [isUpdateState, setIsUpdateState] = useState<boolean>(false);

  useEffect(() => {
    getTodo();
  }, [isUpdateState]);

  const onCreateNewTodo = () => {
    // 새로운 todo가 들어오면
    getTodo();
    // 할때마다 처음부터 그려줘서 비효율적
    // react-query같은걸 사용해서 효율적으로 처리하거나
    // 마지막으로 저장한것만 받아와서 todoDatas에 추가해주는게 좋을 것 같다
  };

  const getTodo = async () => {
    const { data } = await fetchGetTodo();
    setTodoDatas((prev) => [...data.data]);
  };

  const showDetailTodo = (selectedToDo: TodoDatas) => {
    setSelectedTodo((prev) => selectedToDo);
  };

  const deleteTodo = () => {
    getTodo();
  };

  const isUpdateTodo = (updateOrNot: boolean) => {
    setIsUpdateState(updateOrNot);
  };

  const updateTodo = async (id: string) => {
    const { data } = await fetchGetTodoById(id);

    showDetailTodo(data.data);
  };

  return (
    <div>
      <CreateTodo onCreateNewTodo={onCreateNewTodo} />
      <TodoListAndDetailBox>
        <ListTodo
          todoDatas={todoDatas}
          deleteTodo={deleteTodo}
          isUpdateTodo={isUpdateTodo}
          showDetailTodo={showDetailTodo}
        />
        <hr />
        {isUpdateState ? (
          <UpdateTodo
            selectedTodo={selectedTodo}
            isUpdateTodo={isUpdateTodo}
            updateTodo={updateTodo}
          />
        ) : (
          <DetailTodo selectedTodo={selectedTodo} />
        )}
      </TodoListAndDetailBox>
    </div>
  );
};

export default Todo;
