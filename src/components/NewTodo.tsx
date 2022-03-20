import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAddTodo(enteredText);
    inputRef.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
