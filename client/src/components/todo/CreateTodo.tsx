import React, { useRef, useEffect } from "react";
import useInput from "../../hooks/useInput";
import { fetchCreateTodo } from "../../services/api/todoAPI";
interface Props {
  onCreateNewTodo: () => void;
}

const CreateTodo = ({ onCreateNewTodo }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const inputTitle = useInput("");
  const inputContent = useInput("");

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const isValidInput = () => {
    if (!inputTitle.value) {
      titleRef.current?.focus();
      return false;
    } else if (!inputContent.value) {
      contentRef.current?.focus();
      return false;
    }
    return true;
  };

  const onSubmitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidInput()) {
      fetchCreateTodo({ title: inputTitle.value, content: inputContent.value });
      onCreateNewTodo();
    }
  };

  return (
    <div>
      <h1>새로운 TODO 만들기</h1>
      <form action="submit" onSubmit={onSubmitNewTodo}>
        <label htmlFor="title">TITLE : </label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          {...inputTitle}
          placeholder="TODO의 제목을 작성해주세요"
        />
        <label htmlFor="content">CONTENT : </label>
        <input
          type="text"
          id="content"
          ref={contentRef}
          {...inputContent}
          placeholder="TODO의 설명을 작성해주세요"
        />
        <button>TODO 추가 👻</button>
      </form>
    </div>
  );
};

export default CreateTodo;
