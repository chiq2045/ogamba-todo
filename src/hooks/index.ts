import { Key, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { Todo } from 'types';

export const useTodos = () => {
  const [searchValue, setSeachValue] = useState('');
  const [todos, setTodos] = useState(new Map<Key, Todo>());

  const initializeTodos = () => {
    const newTodos = new Map<Key, Todo>();

    setTodos(newTodos);
  };

  const updateTodo = (todo: Todo) => {
    setTodos((v) => {
      const updatedTodos = new Map(v);
      updatedTodos.set(todo.id, todo);

      return updatedTodos;
    });
  };

  const handleUpdateComplete = (todoId: Todo['id']) => {
    setTodos((v) => {
      const todo = v.get(todoId);

      if (!todo) {
        return v;
      }

      const updatedTodos = new Map(v);
      updatedTodos.set(todoId, { ...todo, completed: !todo.completed });

      return updatedTodos;
    });
  };

  const handleUpdateTimeTaken = (todoId: Todo['id'], timeTaken: number) => {
    setTodos((v) => {
      const todo = v.get(todoId);

      if (!todo) {
        return v;
      }

      const updatedTodos = new Map(v);
      if (!todo.working) {
        updatedTodos.set(todoId, { ...todo, working: true });
      }

      updatedTodos.set(todoId, { ...todo, timeTaken });

      return updatedTodos;
    });
  };

  const debouncedSearch = useDebounce(searchValue, 500);

  const handleSearch = (value: string) => {
    setSeachValue(value);
  };

  const filteredTodos = [...todos].filter(
    ([, todo]) =>
      todo.content.includes(debouncedSearch) ||
      todo.title.includes(debouncedSearch)
  );

  useEffect(() => {
    initializeTodos();
  }, []);

  return {
    filteredTodos,
    handleSearch,
    updateTodo,
    handleUpdateComplete,
    handleUpdateTimeTaken,
  };
};
