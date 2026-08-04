function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return <p className="empty-state">✨ No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div className="todo-left">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
          </div>
          <button
            className="todo-delete"
            onClick={() => onDelete(todo.id)}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;