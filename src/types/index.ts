// single Todo item
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// the filter can only be one of these values
export type Filter = "all" | "active" | "completed";

// the theme can only be light or dark
export type Theme = "light" | "dark";

// Shape of the value provided by TodoContext
export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  clearCompleted: () => void;
}

// Shape of the value provided by FilterContext
export interface FilterContextType {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

// Shape of the value provided by ThemeContext
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
