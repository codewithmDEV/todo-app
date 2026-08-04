import {useState} from "react";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import "./index.css"

function App(){
    const [Todos, setTodos] = useState([])

    const addTodo = (text) => {
        const newTodo = {
            id:Date.now(),
            text,
            completed: false};
        
        setTodos([...Todos, newTodo]);
    };

    const deleteTodo = (id)=>{
        setTodos(Todos.filter(todo=> todo.id !== id));

    };
    
    const toggleTodo = (id) =>{
        setTodos(Todos.map(todo =>
            todo.id === id ?{...todo, completed: !todo.completed}:todo
        ));
    };

    return (
        <div className="app-container">
            <h1 className="app-title"> Todo List</h1>
            <TodoForm onAddTodo={addTodo}/>
            <Todolist Todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
            <div className="todo-footer">{todos.length} items</div>
        </div>
    );
}
export default App;