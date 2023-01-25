import { Key, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import axios from 'axios';
import { Todo } from 'types';
import { backendUrl } from 'src/utils/indext';

export const useTodos = () => {
  const [searchValue, setSeachValue] = useState('');
  const [todos, setTodos] = useState(new Map<Key, Todo>());
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  const getTodos = () => {
    startLoading();
    axios
      .get<Todo[]>(backendUrl, { signal: controller.signal })
      .then((res) => {
        const newTodos = new Map<Key, Todo>();
        res.data.forEach((todo) => {
          newTodos.set(todo.id, todo);
        });
        setTodos(newTodos);
      })
      .catch((e) => console.error(e))
      .finally(stopLoading);
  };

  const cancelRequest = () => {
    controller.abort();
  };

  const addTodo = (newTodo: Pick<Todo, 'title' | 'content' | 'tags'>) => {
    startLoading();
    axios
      .post(backendUrl, newTodo)
      .catch((e) => console.error(e))
      .finally(stopLoading);
  };

  const updateTodo = (updatedTodo: Todo) => {
    startLoading();
    axios
      .put(`${backendUrl}/${updatedTodo.id}`, updatedTodo)
      .catch((e) => console.error(e))
      .finally(stopLoading);
  };

  const deleteTodo = (deletedTodoId: Todo['id']) => {
    startLoading();
    axios
      .delete(`${backendUrl}/${deletedTodoId}`)
      .catch((e) => console.error(e))
      .finally(stopLoading);
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

  return {
    filteredTodos,
    handleSearch,
    updateTodo,
    addTodo,
    cancelRequest,
    getTodos,
    loading,
    deleteTodo,
  };
};
