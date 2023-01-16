import { useMemo, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { AppBar } from 'src/components/app-bar';
import { SearchField } from 'src/components/search-field';
import { Todo } from 'src/components/todo';
import { Todos } from 'src/components/todos';
import { Todo as TodoType } from 'types';

const todos: TodoType[] = [
  {
    title: 'Grades - add google sheets',
    content:
      'Use the google sheets api so that users can connect students to data',
    dueDate: Date.now(),
    id: 1,
  },
  {
    title: 'Grades - unique student ids',
    content:
      'Each student needs a recreatable unique id that will connect them to the grades',
    dueDate: Date.now(),
    id: 2,
  },
  {
    title: 'Test',
    content: 'This is a test todo',
    dueDate: Date.now(),
    id: 3,
  },
];

const useRoot = () => {
  const [searchValue, setSeachValue] = useState('');

  const debouncedSearch = useDebounce(searchValue, 500);

  const handleSearch = (value: string) => {
    setSeachValue(value);
  };

  const filteredTodos = todos.filter(
    (todo) =>
      todo.content.includes(debouncedSearch) ||
      todo.title.includes(debouncedSearch)
  );
  return {
    filteredTodos,
    handleSearch,
  };
};

export const Root = () => {
  const { handleSearch, filteredTodos } = useRoot();

  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main className='content'>
        <div>
          <SearchField
            label='Search'
            input={{ placeholder: 'Search', onChange: handleSearch }}
          />
        </div>
        <Todos>
          {filteredTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </Todos>
      </main>
    </div>
  );
};
