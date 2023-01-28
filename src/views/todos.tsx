import { Button } from 'src/components/button';
import { SearchField } from 'src/components/inputs/search-field';
import { useTodos } from 'src/hooks';

type TodoTypes = ReturnType<typeof useTodos>;
interface Props {
  todos: TodoTypes['filteredTodos'];
  handleSearch: TodoTypes['handleSearch'];
}
export const Todos = (props: Props) => {
  const { handleSearch } = props;

  return (
    <div className='u-flex u-flex-column'>
      <div className='u-flex u-gap-4 u-round-xs u-items-flex-end'>
        <div className='u-flex-grow-0'>
          <Button
            className='tooltip'
            data-tooltip='Add Todo'
            onClick={() => undefined}
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
    </div>
  );
};
