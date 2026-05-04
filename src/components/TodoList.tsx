import { useTodos } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos, clearCompleted } = useTodos();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {todos.filter((todo) => todo.completed).length > 0 && (
        <button onClick={clearCompleted}>Clear Completed</button>
      )}
    </div>
  );
}
