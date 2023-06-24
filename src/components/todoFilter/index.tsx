import { memo } from "react";
import TodoContext from "../../context/todoApp";



const TodoFilter = memo(() => {
  return (
    <TodoContext.Consumer>
      {({ loadTodo, btns }) => (
        <section className="flex">
          {btns.map((x) => (
            <button
              key={x.value}
              type="button"
              className="btn flex-1 rounded-none bg-green-400"
              onClick={() => loadTodo(x.value)}
            >
              {x.text}
            </button>
          ))}
        </section>
      )}
    </TodoContext.Consumer>
  );
});

export default TodoFilter;
