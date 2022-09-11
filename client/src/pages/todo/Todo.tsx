import React from "react";
import { useState, useRef, useEffect } from "react";

const Todo = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  // const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<string>("");

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const onSubmitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.dir(e.currentTarget.title);
    console.dir(e.currentTarget.content);
  };

  return (
    <div>
      {/* createtodo */}
      <h1>새로운 TODO 만들기</h1>
      <form action="submit" onSubmit={onSubmitNewTodo}>
        <label htmlFor="title">TITLE : </label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          placeholder="TODO의 제목을 작성해주세요"
        />
        <label htmlFor="content">CONTENT : </label>
        <input
          type="text"
          id="content"
          ref={contentRef}
          placeholder="TODO의 설명을 작성해주세요"
        />
        <button>NEW TODO👻</button>
      </form>
      {/* list todo */}
      <div>
        <ul>
          <li>list</li>
        </ul>
      </div>

      {/* detailsTodo */}
      <div>
        <h3>todo title</h3>
        <p>content</p>
        <hr />
        <p>createdat or updated at</p>
      </div>
    </div>
  );
};

export default Todo;
