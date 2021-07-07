import {TodoItem} from "../common/types";
import styles from './TodoList.module.css';


interface IProps {
  todos: TodoItem[];
}

const TodoList: React.FunctionComponent<IProps> = ({ todos }) => {
  if (!todos.length) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.todoList}>
      {todos.map(todoItem => (
        <div key={todoItem.id}>
          <h3>{todoItem.title}</h3>
          <input readOnly type="checkbox" checked={todoItem.completed} />
        </div>
      ))}
    </div>
  );
};


export default TodoList;
