import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoProvider } from "./contexts/TodoContext";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App (Context API)</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
