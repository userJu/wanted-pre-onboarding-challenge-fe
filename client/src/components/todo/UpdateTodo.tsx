import React from "react";
import { TodoDatas } from "../../pages/todo/Todo";
import useInput from "../../hooks/useInput";
import { fetchUpdateTodo } from "../../services/api/todoAPI";

interface Props {
  selectedTodo: TodoDatas | undefined;
  updateTodo: (id: string, updateOrNot: boolean) => void;
}

const UpdateTodo = ({ selectedTodo, updateTodo }: Props) => {
  const titleInput = useInput(selectedTodo?.title || "");
  const contentInput = useInput(selectedTodo?.content || "");

  const handleUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUpdateTodo({
      id: selectedTodo?.id || "",
      props: {
        title: titleInput.value,
        content: contentInput.value,
      },
    });
  };

  const handelDoNotUpdate = (id: string) => {
    updateTodo(id, false);
  };

  return (
    <form action="submit" onSubmit={handleUpdateSubmit}>
      <label htmlFor="title">
        <h3>Title : </h3>
      </label>
      <input
        id="title"
        value={titleInput.value}
        onChange={titleInput.onChange}
      />
      <hr />
      <label htmlFor="content">content</label>
      <input
        id="content"
        {...contentInput}
        value={contentInput.value}
        onChange={contentInput.onChange}
      />
      <button>수정 완료</button>
      <button onClick={() => handelDoNotUpdate(selectedTodo?.id || "")}>
        취소하기
      </button>
    </form>
  );
};

export default UpdateTodo;
