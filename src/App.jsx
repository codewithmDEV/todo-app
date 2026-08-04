import { useState } from "react";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import "./index.css";

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    settodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    settodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
      <div className="todo-footer">
        {todos.length} item{todos.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
}

export default App;
