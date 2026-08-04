import { useState, useEffect } from "react";

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") return;
    onAddTodo(input);
    setInput("");
  }
 return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
    </form>
  );
}