import { useState } from 'react';
import { Todo } from '../../types';

interface Props {
  todo: Todo;
  lastTodo: boolean;
}
export const TodoTile = (props: Props) => {
  const [buttonHover, setButtonHover] = useState(false);

  const handleButtonHover = () => {
    setButtonHover((hover) => !hover);
  };

  const handleDelete = () => {
    fetch(`/api/todos/${props.todo.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className='tile u-items-center mb-3'>
        <div className='tile__icon'>
          <input className='' type='checkbox' />
        </div>
        <div className='tile__container'>
          <p className='tile__title m-0 u-text-no-wrap'>{props.todo.title}</p>
          {/*
          <p className='tile__subtitle m-0 u-text-no-wrap'>
            {props.todo.moreInfo}
          </p>
          */}
        </div>
        <div className='tile__buttons'>
          <button
            className='btn-transparent p-0'
            aria-label='Delete todo'
            onClick={handleDelete}
          >
            <span className='icon'>
              <i className='fa fa-wrapper fa-trash' aria-hidden='true'></i>
            </span>
          </button>
        </div>
      </div>
      {props.lastTodo ? null : <div className='divider' />}
    </>
  );
};
