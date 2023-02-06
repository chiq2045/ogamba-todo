import { useEffect, useReducer } from 'react';
import { Toast } from 'types';
import { AppBar } from './components/app-bar';
import { Loader } from './components/loader';
import { Toasts } from './components/toasts';
import { useTodos } from './hooks';
import {
  initialToasts,
  ToastsContext,
  ToastsDispatchContext,
  toastsReducer,
} from './hooks/use-toasts';
import { Todos } from './views/todos';

export const App = () => {
  const [toasts, toastsDispatch] = useReducer(toastsReducer, initialToasts);
  const addToast = (toast: Toast) => {
    toastsDispatch({ toast, type: 'add' });
  };

  const {
    filteredTodos: todos,
    handleSearch,
    loading,
    getTodos,
  } = useTodos(addToast);

  useEffect(() => {
    const controller = new AbortController();
    getTodos(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ToastsContext.Provider value={toasts}>
      <ToastsDispatchContext.Provider value={toastsDispatch}>
        <header>
          <AppBar />
        </header>
        <main className='content'>
          {loading ? <Loader /> : <Todos {...{ todos, handleSearch }} />}
          <Toasts />
        </main>
      </ToastsDispatchContext.Provider>
    </ToastsContext.Provider>
  );
};
