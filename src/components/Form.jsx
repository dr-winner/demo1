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
        <div className={styles.inputContainer}>
            <input className={styles.modernInput} onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="Type here..."/>
            <button className={styles.modernBtn} type="submit">+</button>
            </div>
        </form>
    </div>
}