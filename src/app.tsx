import { useState } from 'react';
import { Todo } from '~types';
import { Button } from './components/button';
import { CheckBox } from './components/checkbox';
import { Content } from './components/content';
import { Flex } from './components/flex';
import { Tile, TileButtons, TileContainer, TileTitle } from './components/tile';

const todoData: Todo[] = [
  {
    id: '1',
    title: 'Test Incomplete',
    completed: false,
  },
  {
    id: '2',
    title: 'Test Completed',
    completed: true,
  },
  {
    id: '3',
    title: 'Test 3',
    completed: false,
  },
];

const TodoTile: typeof Tile = (props) => (
  <Tile
    {...props}
    className='p-2 mb-1 u-shadow-md w-100p u-round-lg bg-blue-200'
  />
);

export const App = () => {
  const [todos, setTodos] = useState(
    new Map(todoData.map((todo) => [todo.id, todo]))
  );
  const [addingTodo, setAddingTodo] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const handleToggleTodoCompleted = (id: string) => {
    setTodos((currentTodos) => {
      const todo = currentTodos.get(id);
      if (todo) {
        return new Map(currentTodos).set(id, {
          ...todo,
          completed: !todo.completed,
        });
      }
      return currentTodos;
    });
  };

  const startAddTodo = () => {
    if (addingTodo) {
      return;
    }
    setAddingTodo(true);
  };

  const handleNewTodo = (value: string) => setNewTodo(value);

  const handleAddTodo = () => {
    setTodos((currentTodos) => {
      const newTodos = new Map(currentTodos);
      const id = (currentTodos.size + 1).toString();
      newTodos.set(id, { id, completed: false, title: newTodo });
      setAddingTodo(false);
      setNewTodo('');
      return newTodos;
    });
  };

  return (
    <main>
      <Content>
        <Flex direction='column'>
          <h1>Todo List</h1>
          <Button onClick={startAddTodo}>Add Todo</Button>
          {addingTodo ? (
            <TodoTile>
              <TileContainer>
                <Flex alignItems='center'>
                  <div className='u-flex-grow-0 pr-2'>
                    <label>New Todo Title</label>
                  </div>
                  <div className='u-flex-grow-1 pr-4'>
                    <input
                      type='text'
                      value={newTodo}
                      onChange={(e) => handleNewTodo(e.target.value)}
                    />
                  </div>
                  <div className='u-flex-grow-0'>
                    <Button
                      className='m-0 bg-blue-700 text-white'
                      onClick={handleAddTodo}
                    >
                      Submit
                    </Button>
                  </div>
                </Flex>
              </TileContainer>
            </TodoTile>
          ) : null}
          <ul className='no-bullets m-0 p-0'>
            {[...todos].map(([id, todo]) => (
              <li key={id}>
                <TodoTile>
                  <TileContainer>
                    <TileTitle>{todo.title}</TileTitle>
                  </TileContainer>
                  <TileButtons>
                    <CheckBox
                      inputProps={{
                        onChange: () => handleToggleTodoCompleted(id),
                        defaultChecked: todo.completed,
                      }}
                      labelProps={{}}
                    />
                    <span className='sr-only'>
                      {todo.completed
                        ? 'Uncheck to make todo incomplete'
                        : 'Check to complete todo'}
                    </span>
                  </TileButtons>
                </TodoTile>
              </li>
            ))}
          </ul>
        </Flex>
      </Content>
    </main>
  );
};
