import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoProvider } from "./contexts/TodoContext";
function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App (Context API)</h1>
        <TodoInput />
      </div>
    </TodoProvider>
  );
}

export default App;
