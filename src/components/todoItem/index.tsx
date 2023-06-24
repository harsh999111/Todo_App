import clsx from "clsx";
import { memo } from "react";
import TodoContext, { TodoItemType } from "../../context/todoApp";

type Props = {
  todoItem: TodoItemType;
};

const TodoItem = memo(({ todoItem }: Props) => {
  console.log("Todo Item render");
  return (
    <div
      key={todoItem.id}
      className={clsx("flex items-center", {
        "animate-slide-in": !todoItem.isDone,
        "animate-fade-out": todoItem.isDone,
      })}
    >
      <div>
        <label htmlFor="isCompleted" className="sr-only">
          Is Completed
        </label>
        <TodoContext.Consumer>
          {({ updateTodo }) => (
            <input
              type="checkbox"
              name="completed"
              id="isCompleted"
              checked={todoItem.isDone}
              onChange={() => updateTodo(todoItem)}
            />
          )}
        </TodoContext.Consumer>
      </div>
      <p
        className={clsx("flex-1 px-4", {
          "line-through": todoItem.isDone,
        })}
      >
        {todoItem.text}
      </p>
      <TodoContext.Consumer>
        {({ deleteTodo }) => (
          <button
            type="button"
            className={clsx(
              "btn bg-black text-white py-2 px-4 rounded-xl hover:bg-purple-600",
              {
                "animate-bounce": todoItem.isDone,
              }
            )}
            onClick={() => deleteTodo(todoItem)}
          >
            Delete
          </button>
        )}
      </TodoContext.Consumer>
    </div>
  );
});

export default TodoItem;
