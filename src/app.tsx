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
            <Tile
              p={{ p: 2 }}
              m={{ mb: 1 }}
              shadow='md'
              className='w-100p u-round-lg bg-blue-200'
            >
              <TileContainer>
                <div className='input-control row level'>
                  <div className='col-xs-3 level-item'>
                    <label>New Todo Title</label>
                  </div>
                  <div className='lcol-xs-9 evel-item'>
                    <input
                      type='text'
                      value={newTodo}
                      onChange={(e) => handleNewTodo(e.target.value)}
                    />
                  </div>
                </div>
              </TileContainer>
              <TileButtons>
                <Button onClick={handleAddTodo}>Submit</Button>
              </TileButtons>
            </Tile>
          ) : null}
          <ul className='no-bullets m-0 p-0'>
            {[...todos].map(([id, todo]) => (
              <li key={id}>
                <Tile
                  p={{ p: 2 }}
                  m={{ mb: 1 }}
                  shadow='md'
                  className='w-100p u-round-lg bg-blue-200'
                >
                  <TileContainer>
                    <TileTitle>{todo.title}</TileTitle>
                  </TileContainer>
                  <TileButtons>
                    <CheckBox
                      color='primary'
                      labelText={todo.completed ? 'Completed' : 'Incomplete'}
                      onChange={() => handleToggleTodoCompleted(id)}
                      defaultChecked={todo.completed}
                    />
                    <span className='sr-only'>
                      {todo.completed
                        ? 'Uncheck to make todo incomplete'
                        : 'Check to complete todo'}
                    </span>
                  </TileButtons>
                </Tile>
              </li>
            ))}
          </ul>
        </Flex>
      </Content>
    </main>
  );
};
