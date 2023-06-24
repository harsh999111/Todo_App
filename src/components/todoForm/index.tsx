import { memo } from "react";
import TodoContext from "../../context/todoApp";


const TodoForm = memo(() => {
  console.log("redner TodoForm");
  return (
    <TodoContext.Consumer>
      {({ addTodo, inputRef }) => (
        <form className="flex justify-center" onSubmit={addTodo}>
          <div>
            <label htmlFor="todoText" className="sr-only">
              Todo Text
            </label>
            <input
              ref={inputRef}
              type="text"
              id="todoText"
              className="rounded-l-md"
            />
          </div>
          <button type="submit" className="btn  bg-blue-400 px-2 ml-3 rounded-2xl py-2 hover:bg-green-500">
            Add Todo
          </button>
        </form>
      )}
    </TodoContext.Consumer>
  );
});

export default TodoForm;
