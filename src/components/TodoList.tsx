import React from "react";
import "./TodoList.css";

interface ToDoListProps {
  items: {
    id: string;
    text: string;
  }[];
  onDelete: (id: string) => void;
}

const TodoList: React.FC<ToDoListProps> = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={props.onDelete.bind(null, item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
