import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.modal";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos((preTodos) => [
      ...preTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (id: string) => {
    console.log(id);
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDelete={todoDeleteHandler} />
    </div>
  );
}

export default App;
