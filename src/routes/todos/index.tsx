import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/button';
import { SearchField } from 'src/components/search-field';
import { useTodos } from 'src/hooks';
import { Todo } from './todo';
import { Todos } from './todos';

export const TodosPage = () => {
  const { filteredTodos, handleSearch } = useTodos();
  const navigate = useNavigate();

  return (
    <div className='u-flex u-flex-column'>
      <div className='u-flex u-gap-4 u-round-xs u-items-flex-end'>
        <div className='u-flex-grow-0'>
          <Button
            className='tooltip'
            data-tooltip='Add Todo'
            onClick={() => navigate('/todos/add')}
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
      </div>
      <Todos>
        {filteredTodos.map(([key, todo]) => (
          <Todo key={key} todo={todo} />
        ))}
      </Todos>
    </div>
  );
};
