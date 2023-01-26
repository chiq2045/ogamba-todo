import { Key, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { useDebounce } from 'usehooks-ts';
import { Button } from 'src/components/button';
import { SearchField } from 'src/components/search-field';
import { backendUrl } from 'src/utils';
import { Todo as TodoType } from 'types';
import { Todo } from './todo';
import { Todos } from './todos';
import { Loader } from 'src/components/loader';

export const todosLoader = async () => {
  const todos = new Map<Key, TodoType>();
  const response = await fetch(backendUrl);
  const responseData = await response.json();
  (responseData.data as TodoType[]).forEach((todo) => {
    todos.set(todo.id, todo);
  });
  return todos;
};

export const TodosPage = () => {
  const [searchValue, setSeachValue] = useState('');
  const todos = useLoaderData() as unknown as Map<Key, TodoType>;

  const navigate = useNavigate();
  const navigation = useNavigation();

  const debouncedSearch = useDebounce(searchValue, 500);

  const handleSearch = (value: string) => {
    setSeachValue(value);
  };

  const filteredTodos = [...todos].filter(
    ([, todo]) =>
      todo.content.includes(debouncedSearch) ||
      todo.title.includes(debouncedSearch)
  );

  return navigation.state === 'loading' ? (
    <Loader />
  ) : (
    <div className='u-flex u-flex-column'>
      <div className='u-flex u-gap-4 u-round-xs u-items-flex-end'>
        <div className='u-flex-grow-0'>
          <Button
            className='tooltip'
            data-tooltip='Add Todo'
            onClick={() => navigate('/add')}
            aria-label='add todo'
          >
            <i className='fa fa-wrapper fa-solid fa-plus' />
          </Button>
        </div>
        <div className='u-flex-grow-1'>
          <SearchField
            label='Search Todos'
            input={{ onChange: handleSearch }}
          />
        </div>
        <div className='u-flex-grow-0'>
          <div className='u-flex u-gap-1'>
            <Button
              className='tooltip'
              data-tooltip='Filter Todos'
              onClick={() => alert('filter WIP')}
              aria-label='filter todos'
            >
              <i className='fa fa-wrapper fa-solid fa-filter' />
            </Button>
            <Button
              className='tooltip'
              data-tooltip='Sort Todos'
              onClick={() => alert('sort WIP')}
              aria-label='sort todos'
            >
              <i className='fa fa-wrapper fa-solid fa-sort' />
            </Button>
          </div>
        </div>
      </div>
      <Todos>
        {filteredTodos.map(([key, todo]) => (
          <Todo key={key} todo={todo} />
        ))}
      </Todos>
    </div>
  );
};
