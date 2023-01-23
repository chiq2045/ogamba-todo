import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/button';
import { SearchField } from 'src/components/search-field';
import { useTodos } from 'src/hooks';
import { Todo } from './todo';
import { Todos } from './todos';

interface Props {
  filteredTodos: ReturnType<typeof useTodos>['filteredTodos'];
  handleSearch: ReturnType<typeof useTodos>['handleSearch'];
}
export const TodosPage = (props: Props) => {
  const navigate = useNavigate();

  return (
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
            input={{ onChange: props.handleSearch }}
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
        {props.filteredTodos.map(([key, todo]) => (
          <Todo key={key} todo={todo} />
        ))}
      </Todos>
    </div>
  );
};
