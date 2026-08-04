import { useState } from "react";  // ← Removed useEffect (not needed)

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onAddTodo(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;  