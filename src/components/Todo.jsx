import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";

export default function Todo({ name, age, role }) {
    const [todos, setTodos] = useState([]);
    
    return <>
        <Form/>
        {todos.map((item) => (<div>
            <TodoItem key={item} item={item} />
        </div>))}
    </>
}
