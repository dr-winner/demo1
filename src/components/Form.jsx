import { useState } from "react";
import styles from './form.module.css';

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("")
    };
    return <div className={styles.todoForm}>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
            <button type="submit">+</button>
        </form>
    </div>
}