import React, { useRef, useState } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [invalidInput, setInvalidInput] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;

    if (!enteredText) {
      setInvalidInput(true);
      return;
    }

    props.onAddTodo(enteredText);
    inputRef.current!.value = "";
    setInvalidInput(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">Add Todo</button>
      {invalidInput && <span className="invalid">To do cannot be null</span>}
    </form>
  );
};

export default NewTodo;
