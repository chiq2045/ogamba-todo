import { useCallback, useEffect, useState } from 'react';
import { Todo } from '../../types';
import { apiUrl } from './constants';

export const useTodos = () => {
  const [todos, setTodos] = useState(new Map<string, Todo>());
  const [loading, setLoading] = useState(false);

  const getTodos = useCallback(async () => {
    setLoading(true);
    return fetch(apiUrl)
      .then((res) => res.json())
      .then((data: { todos: Todo[] }) =>
        setTodos(() => {
          const newTodos = new Map<string, Todo>();
          data.todos.map((todo) => newTodos.set(todo.id, todo));
          return newTodos;
        })
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const deleteTodo = async (id: Todo['id']) => {
    setLoading(true);
    return fetch(`${apiUrl}/${id}`, {
      method: 'delete',
    })
      .then(() =>
        setTodos((t) => {
          const newTodos = t;
          newTodos.delete(id);
          return newTodos;
        })
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const addTodo = async (todo: Omit<Todo, 'id'>) => {
    setLoading(true);
    return fetch(apiUrl, {
      method: 'post',
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data: { todo: Todo }) =>
        setTodos((v) => {
          const newTodos = v;
          newTodos.set(data.todo.id, data.todo);
          return newTodos;
        })
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const updateTodo = async (todo: Todo) => {
    setLoading(true);
    return fetch(`${apiUrl}/${todo.id}`, {
      method: 'put',
      body: JSON.stringify(todo),
    })
      .then(() =>
        setTodos((v) => {
          const newTodos = v;
          newTodos.set(todo.id, todo);
          return newTodos;
        })
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return {
    todos,
    loading,
    deleteTodo,
    addTodo,
    updateTodo,
  };
};
