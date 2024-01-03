import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.length === 0 && "No To-dos today"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todos}
            completed={todo.completed}
            id={todo.id}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
