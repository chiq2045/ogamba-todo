import { Key, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { Toast, Todo } from 'types';
import { backendUrl } from 'src/utils';

export const useTodos = (addToast: (toast: Omit<Toast, 'id'>) => void) => {
  const [searchValue, setSeachValue] = useState('');
  const [todos, setTodos] = useState(new Map<Key, Todo>());
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  const getTodos = (signal: AbortController['signal']) => {
    startLoading();
    fetch(backendUrl, { signal })
      .then(async (res) => {
        const newTodos = new Map<Key, Todo>();
        const data: { data: Todo[] } = await res.json();
        const { data: todosData } = data;
        todosData.forEach((todo) => {
          newTodos.set(todo.id, todo);
        });
        setTodos(newTodos);
      })
      .catch((e) => {
        addToast({
          title: 'Error',
          moreDetails: e,
          value: 'Could not get todos',
          type: 'danger',
        });
      })
      .finally(stopLoading);
  };

  const getTodo = (id: Todo['id']) => {
    return todos.get(id);
  };

  const addTodo = (newTodo: Pick<Todo, 'title' | 'content' | 'tags'>) => {
    startLoading();
    fetch(backendUrl, {
      method: 'post',
      body: JSON.stringify(newTodo),
    })
      .catch((e) => {
        addToast({
          title: 'Error',
          moreDetails: e,
          value: 'Could not get todos',
          type: 'danger',
        });
      })
      .finally(stopLoading);
  };

  const updateTodo = (updatedTodo: Todo) => {
    startLoading();
    fetch(`${backendUrl}/${updatedTodo.id}`, {
      method: 'put',
      body: JSON.stringify(updatedTodo),
    })
      .catch((e) => {
        addToast({
          title: 'Error',
          moreDetails: e,
          value: 'Could not get todos',
          type: 'danger',
        });
      })
      .finally(stopLoading);
  };

  const deleteTodo = (deletedTodoId: Todo['id']) => {
    startLoading();
    fetch(`${backendUrl}/${deletedTodoId}`, {
      method: 'delete',
    })
      .catch((e) => {
        addToast({
          title: 'Error',
          moreDetails: e,
          value: 'Could not get todos',
          type: 'danger',
        });
      })
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
    getTodos,
    getTodo,
    loading,
    deleteTodo,
  };
};
