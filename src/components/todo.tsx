import { Todo as TodoType } from 'types';

export const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <li className='u-shadow-md px-2 py-1'>
      <div className='tile'>
        <div className='tile__container'>
          <p className='tile__title'>{todo.title}</p>
          <p className='tile__subtitle'>{todo.content}</p>
        </div>
      </div>
    </li>
  );
};
