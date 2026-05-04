import { useTodos } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
