import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoFilter from "./components/todoFilter";

const App = () => {
  return (
    <main className="flex flex-col h-screen">
      <h1 className="text-3xl font-sans text-center m-10">Todo App</h1>
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </main>
  );
};

export default App;
