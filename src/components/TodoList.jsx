import styles from './todoList.module.css'
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
    return <div className={styles.listContainer}>
        {todos.map((item) => (
            <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
        ))}
    </div>;
}