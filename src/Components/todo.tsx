import React, { useState } from "react";
import { TodoItem } from "./types";
import TodoInput from "./componentstodo/TodoInput";
import TodoList from "./componentstodo/TodoList";
const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: completed } : todo
      )
    );
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} markCompleted={markCompleted} />
    </div>
  );
};

export default Todo;
