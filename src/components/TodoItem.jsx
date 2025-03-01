import React from "react";
import styles from "./todoitem.module.css";

function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item)
    )
  }
  return (<div className={styles.itemName}>
    <div className={styles.item}>{item} <span>
      <button onClick={() => handleDelete(item)} className={styles.xBtn}>x</button>
    </span>
    </div>

    <hr className={styles.line} />
  </div>);
};

export default TodoItem;
